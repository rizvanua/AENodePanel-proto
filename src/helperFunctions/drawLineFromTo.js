import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';

// Class which DRAWS CONNECTIONS line from/to blocks

class drawLineFromTo{

  constructor(){
  }

  startdrawLineFromTo(_this,thisSet){
    console.log(thisSet);
    _this.ox=_this.attr("cx");
    _this.oy=_this.attr("cy");
    var connectPath = R.path( ["M", _this.ox, _this.oy, "L", _this.ox, _this.oy ] )
    .attr({stroke:"blue"});
    connectPath.node.lineFromCyrcle=_this.node.circleName;//Here we asign from which one circle go the Line (Right cyrcle or LeftCyrcle)
    connectPath.node.shortControlName=thisSet.shortName;
    connectPath.node.nameOfControl=thisSet.fullCommonContrlName//name of current commonControls
    GlobalStorage.currentLine=connectPath;//Send just created Line into GlobalStorage object currentLine
    //console.log(GlobalStorage.currentLine);
    thisSet.push(GlobalStorage.currentLine);

  }

  moveLine(_this,dx,dy){

  GlobalStorage.currentLine.attr("path",`M${_this.ox} ${_this.oy}L${(_this.ox+dx)-5} ${(_this.oy+dy)-5}`);
  /*var typeOfControll=GlobalStorage.currentLine.node.shortControlName;

    if(GlobalStorage.overMouseSet&&GlobalStorage.currentLine&&GlobalStorage.overMouseSet[typeOfControll]===true){
      console.log(GlobalStorage.overMouseSet[typeOfControll]);
      GlobalStorage.currentLine.attr({cursor: "no-drop"});
    }
    else{
      GlobalStorage.currentLine.attr({cursor: "default"});
    }*/

  }

  endDrawLine(_this,thisSet){
    if(GlobalStorage.currentLine){
      let typeOfControll=GlobalStorage.currentLine.node.shortControlName;


//console.log(GlobalStorage.overMouseSet);
    if (GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null&&GlobalStorage.overMouseSet[typeOfControll]===true){// in this case the current Line has connection to a destination block
      GlobalStorage.currentLine.attr({stroke:"black"});//add black color for already successfully connected line
      let overMouseSet=GlobalStorage.overMouseSet;
      let effectNameLocal=overMouseSet.setEffectName;
      GlobalStorage.currentLine.LineFrom=_this.node.effectName;//add which effect has been connected with this line
      GlobalStorage.currentLine.LineTo=effectNameLocal;
      GlobalStorage.currentLine.baseEffect=overMouseSet.baseEffect;// base name of an effect


      let propName=thisSet.fullCommonContrlName;
      let thisPropName=thisSet.thisCommonContrlName;
      let promise= new Promise((resolve)=>{
              resolve(overMouseSet.push(GlobalStorage.currentLine).toBack());//Push curent Line into destination set
            }).then((resolve)=>{
              return GlobalStorage.overMouseSet=null;//clear objects in global storage
            }).then((res)=>{
              GlobalStorage.currentLine=null;//clear objects in global storage
              //Call to ExtScript

                          csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${propName}","${thisPropName}")`);

              //
            });

    }
    else if(GlobalStorage.overMouseSet===null&&GlobalStorage.currentLine!==null){//in this case the current Line dosen't has a destination block
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage

    }
    else if(GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null&&GlobalStorage.overMouseSet[typeOfControll]===false){
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage
    }

      }

  }

}
export default drawLineFromTo;
