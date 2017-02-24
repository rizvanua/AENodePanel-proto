import R from "../raphaelContainer.js";
import mainBlock from "./mainBlock.js";
import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import moveEffects  from "../helperFunctions/moveEffects.js";



class presetsBlocks{

  createPresetsBlocks(cordX,lowestCoordY,presetsType){
    console.log(presetsType);
      this.createPresetsEffects(cordX,lowestCoordY,presetsType);
  }


  createPresetsEffects(cordX,lowestCoordY,presetsType){

    //console.log(GlobalStorage.arrOfPresetsEffects[presetsType.name]);
  //  GlobalStorage.arrOfPresetsEffects[presetsType.name].forEach((itemName)=>{
  let effectBlocks=GlobalStorage.arrOfPresetsEffects[presetsType.name].propsArray;
  //console.log(effectBlocks);
  effectBlocks.forEach((obj, num)=>{
//console.log(obj);
    //console.log(this.innerForEach(obj));
    let itemArr=arrSecondButton.effects.filter((a, index)=>{
      let keyName=Object.keys(obj)[0].replace (/(^")|("$)/g, '')
      return arrSecondButton.effects[index].name==keyName;
      //return arrSecondButton.effects[index].name==keyName.slice(0, -1);
    });

    let item=itemArr[0];
    let propertyOfEffectString =this.innerForEach(obj);
    console.log(propertyOfEffectString);
    csInterface.evalScript(`$._ext.applyEffectPresets("${item.name}",${propertyOfEffectString})`,(res)=>{//push data into extend script
    lowestCoordY+=40
      let workBlock=new mainBlock().createBlockEffects(cordX,lowestCoordY,item,res);
      console.log(workBlock);
      moveEffects(workBlock);
      GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
  });

  });
    for (var key in effectBlocks) {



      //let propertyOfEffectString=JSON.stringify(effectBlocks[key]);

      //console.log(propertyOfEffectString);
      /*csInterface.evalScript(`$._ext.applyEffectPresets("${item.name}",${propertyOfEffectString})`,(res)=>{//push data into extend script
      lowestCoordY+=40
        let workBlock=new mainBlock().createBlockEffects(cordX,lowestCoordY,item,res);
        console.log(workBlock);
        moveEffects(workBlock);
        GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
    });*/

    }

      let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name];
      /*console.log(propertyOfEffect);
      function stringProp (obj){
        let ObjOfString={};
      for (var key in obj) {

                   ObjOfString[`"${key}"`]=`${obj[key]}`;
        }
        return ObjOfString;
      }*/
      //let testData=stringProp(propertyOfEffect);
      //let propertyOfEffectString=JSON.stringify(stringProp(propertyOfEffect));

      /*let testX=JSON.stringify(testData);
      let objParsed=JSON.parse(testX);
      console.log(objParsed["Mobius Zoom"].split(';'))*/
      //let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name][itemName].join(';');
      /*console.log(propertyOfEffect.forEach((i)=>{
        console.log(i);
      }));*/


    //});
  }
  innerForEach (obj){
    let objToStringlify={};
    let objName=Object.keys(obj)[0];
    obj[objName].forEach((innerObj, innerNum)=>{
      let innerObjName=Object.keys(innerObj)[0];
      objToStringlify[innerObjName]=innerObj[innerObjName];
      //console.log(innerObjName);
      //console.log(innerObj[innerObjName]);
    })
    return JSON.stringify(objToStringlify);
  }

};

export default presetsBlocks;
