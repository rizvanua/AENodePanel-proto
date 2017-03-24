import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';

// Class which DRAWS CONNECTIONS line from/to blocks. We use this in files: "draggableSet.js

class drawLineFromTo{

  constructor(){
  }

  startdrawLineFromTo(_this,thisSet){
    //console.log(thisSet);
    _this.ox=thisSet[0].getBBox().x+120;
    _this.oy=thisSet[0].getBBox().y+15;

    /*let connectPath = R.path( ["M", _this.ox, _this.oy, "L", _this.ox, _this.oy ] )*/
    let connectPath = R.path(`M${_this.ox} ${_this.oy}L${_this.ox} ${_this.oy}`).attr({stroke:"blue"});
    connectPath.node.lineFromCyrcle=_this.node.circleName;//Here we asign from which one circle go the Line (Right cyrcle or LeftCyrcle)
    connectPath.node.shortControlName=thisSet.shortName;
    connectPath.node.nameOfControl=thisSet.fullCommonContrlName//name of current commonControls
    GlobalStorage.currentLine=connectPath;//Send just created Line into GlobalStorage object currentLine
    //console.log(GlobalStorage.currentLine);
    thisSet.push(GlobalStorage.currentLine);

  }

  moveLine(_this,dx,dy,thisSet){
    //console.log(GlobalStorage.controlProp);
    //console.log(GlobalStorage.overMouseSet);
//console.log(GlobalStorage.currentLine.node.shortControlName);
//console.log(event.target);
//console.log(`M${_this.ox} ${_this.oy}L${(_this.ox*1+dx)-5} ${(_this.oy*1+dy)-5}`);
//console.log(_this.ox);
//console.log(_this.oy);
//console.log(dx);
//console.log(dy);

_this.ox=thisSet[0].getBBox().x+120;
_this.oy=thisSet[0].getBBox().y+15;
  GlobalStorage.currentLine.attr({d:`M${_this.ox} ${_this.oy}L${(_this.ox*1+dx)-5} ${(_this.oy*1+dy)-5}`});
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
    //console.log(GlobalStorage.overMouseSet);


    if(GlobalStorage.currentLine){
      let typeOfControll=GlobalStorage.currentLine.node.shortControlName;
      //console.log(typeOfControll);

      //console.log(GlobalStorage.currentLine);
      //console.log(GlobalStorage.overMouseSet[typeOfControll]);


    if (GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null&&GlobalStorage.controlProp.type==GlobalStorage.currentLine.node.shortControlName){// in this case the current Line has connection to a destination block

      GlobalStorage.controlProp.circle.classList.remove('false');
      GlobalStorage.controlProp.circle.classList.add('true');

      GlobalStorage.currentLine.attr({stroke:"black"});//add black color for already successfully connected line
      let overMouseSet=GlobalStorage.overMouseSet;
      let effectNameLocal=overMouseSet.setEffectName;
      let controlPropName=GlobalStorage.controlProp.name;
      //console.log(GlobalStorage.currentLine.attr("path"));
      //adjust coords of path to draw line into center of block
      let PathString=Snap.parsePathString(GlobalStorage.currentLine);
      let MX=PathString[0][1];//get coords X of the linked CommonControlBlock
      let MY=PathString[0][2];//get coords Y of the linked CommonControlBlock
      let LX=overMouseSet[0].getBBox().x;//get coords X of the linked EffectBlock
      let LY=overMouseSet[0].getBBox().y;//get coords Y of the linked EffectBlock
      
      GlobalStorage.currentLine.attr("path",`M${MX} ${MY}L${LX} ${LY+16+(GlobalStorage.controlProp.coordDif*1)}`);// apply new coords
      //
      GlobalStorage.currentLine.LineFrom=_this.node.effectName;//add which effect has been connected with this line
      GlobalStorage.currentLine.LineTo=effectNameLocal;
      GlobalStorage.currentLine.coordDif=GlobalStorage.controlProp.coordDif;
      GlobalStorage.currentLine.baseEffect=overMouseSet.baseEffect;// base name of an effect
      GlobalStorage.currentLine.propertyOfEffect=controlPropName;//name of property (for example "Point of Interest", "FOV" etc)
      //console.log(GlobalStorage.currentLine);
      //console.log(GlobalStorage.overMouseSet);
      let propName=thisSet.fullCommonContrlName;
      let thisPropName=thisSet.thisCommonContrlName;
      let promise= new Promise((resolve)=>{
              //resolve(overMouseSet.push(GlobalStorage.currentLine).toBack());//Push curent Line into destination set
              resolve(GlobalStorage.overMouseSet.push(GlobalStorage.currentLine));//Push curent Line into destination set
            }).then((resolve)=>{
              return GlobalStorage.overMouseSet=null;//clear objects in global storage
            }).then((res)=>{
              GlobalStorage.currentLine=null;//clear objects in global storage
              //Call to ExtScript
//console.log(effectNameLocal);
//console.log(thisPropName);
let type=thisSet.shortName;
//console.log(GlobalStorage.controlProp.type);
//console.log(GlobalStorage.controlProp.name);

//console.log(overMouseSet[0].getBBox());
                  switch (thisSet.shortName) {
                    case "point":
                    /*let pointArr=[];
                    for(let key in overMouseSet.point){
                       pointArr.push(key);
                    }*/
                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}")`);
                      break;
                    case "angle":
                    /*let angleArr=[];
                    for(let key in overMouseSet.angle){
                       angleArr.push(key);
                    }*/
                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}")`);
                      break;
                    case "slider":
                    /*let sliderArr=[];
                    for(let key in overMouseSet.slider){
                       sliderArr.push(key);
                    }*/
                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${controlPropName}","${thisPropName}","${type}")`);
                      break;
                    case "Strength":
                      csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","Strength","${thisPropName}")`);
                      break;
                    default:
                    GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
                    thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
                    GlobalStorage.currentLine=null;//clear objects in global storage
                  }

              //
            });

    }
    else if (GlobalStorage.currentLine&&GlobalStorage.overDistributorMouse){
      let genId=GlobalStorage.overDistributorMouse;
      //console.log(GlobalStorage.distribitorObjectsStorage[genId]);
      if(GlobalStorage.distribitorObjectsStorage[genId].countTypeOfEffects>0){
        let distribitorObject = GlobalStorage.distribitorObjectsStorage[genId];
        let DistributorEffects=[];

        function contains(){
          let flag=false;
          Object.keys(distribitorObject).forEach((Object)=>{
            if(Object!="countTypeOfEffects"&&Object!="rootBlockSet"&&!distribitorObject[Object].shortName&&distribitorObject[Object][thisSet.shortName]===true){
              //if(distribitorObject[Object][thisSet.shortName]===true){
                flag=true;
              //}
              DistributorEffects.push(Object);
              //console.log(Object);
                //console.log(thisSet.currentName);
                let effectNameLocal=distribitorObject[Object].setEffectName;
                let propName= thisSet.fullCommonContrlName;
                let thisPropName=thisSet.thisCommonContrlName;
                //console.log(thisSet.shortName);
                switch (thisSet.shortName) {
                  case 'fov':
                    csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${propName}","${thisPropName}")`);
                    break;
                  case 'strength':
                  //console.log('strength');
                    csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","Strength","${thisPropName}")`);
                    break;
                  //default:

                }
            }
          });
          return flag;
        }
        let checkDistrEffects=contains();
        if(checkDistrEffects===true){

          GlobalStorage.currentLine.DistributorEffects=DistributorEffects;
          GlobalStorage.currentLine.attr({stroke:"black"});//add black color for already successfully connected line
          //overMouseSet.push(GlobalStorage.currentLine).toBack()
          GlobalStorage.currentLine.toBack();
          GlobalStorage.distribitorObjectsStorage[genId].rootBlockSet.push(GlobalStorage.currentLine);
          GlobalStorage.currentLine=null;
          GlobalStorage.overDistributorMouse=null

        }
        else{
          GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
          thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
          GlobalStorage.currentLine=null;
          //GlobalStorage.overDistributorMouse=null;
        }

      }
      else{
        GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
        thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
        GlobalStorage.currentLine=null;
      }
      //console.log(GlobalStorage.distribitorObjectsStorage[genId].countTypeOfEffects);
    }
    else if(GlobalStorage.overMouseSet===null&&GlobalStorage.currentLine!==null){//in this case the current Line dosen't has a destination block
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage

    }
    else if(GlobalStorage.overMouseSet!==null&&GlobalStorage.currentLine!==null){
      GlobalStorage.currentLine.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      GlobalStorage.currentLine=null;//clear objects in global storage
    }

      }

  }

}
export default drawLineFromTo;
