import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';

// Class which DRAWS CONNECTIONS line from/to blocks

class drawLineFromTo{

  constructor(){
  }

  startdrawLineFromTo(_this,thisSet){
    _this.ox=_this.attr("cx");
    _this.oy=_this.attr("cy");
    var connectPath = R.path( ["M", _this.ox, _this.oy, "L", _this.ox, _this.oy ] )
    .attr({stroke:"blue"});
    connectPath.node.lineFromCyrcle=_this.node.circleName;//Here we asign from which one circle go the Line (Right cyrcle or LeftCyrcle)
    GlobalStorage.currentLine=connectPath;//Send just created Line into GlobalStorage object currentLine
    thisSet.push(GlobalStorage.currentLine);

  }

  moveLine(_this,dx,dy){
  GlobalStorage.currentLine.attr("path",`M${_this.ox} ${_this.oy}L${_this.ox+dx} ${_this.oy+dy}`);
  }

  endDrawLine(_this,thisSet){

    if (GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null){// in this case the current Line has connection to a destination block
      GlobalStorage.currentLine.attr({stroke:"black"});
      let overMouseSet=GlobalStorage.overMouseSet;
      let effectNameLocal=overMouseSet.setEffectName;
      GlobalStorage.currentLine.LineFrom=_this.node.effectName;
      GlobalStorage.currentLine.LineTo=effectNameLocal;
      GlobalStorage.currentLine.baseEffect=overMouseSet.baseEffect;


      let propName=thisSet.fullCommonContrlName;
      let promise= new Promise((resolve)=>{
              resolve(overMouseSet.push(GlobalStorage.currentLine).toBack());//Push curent Line into destination set
            }).then((resolve)=>{
              return GlobalStorage.overMouseSet=null;
            }).then((res)=>{
              GlobalStorage.currentLine=null;
              //Call to ExtScript

                          csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${propName}")`);

              //
            });

    }
    else if(GlobalStorage.overMouseSet===null&&GlobalStorage.currentLine!==null){//in this case the current Line dosen't has a destination block
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;

    }

  }

}
export default drawLineFromTo;
