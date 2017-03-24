import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";

function deletePropertyInEffectBlock(propertyBlock, workBlockSet){
  propertyBlock.node.oncontextmenu=function(e){// handle click of a mouse right button
    e.preventDefault();
    let effectName=workBlockSet.setEffectName;
    let propertyName=GlobalStorage.controlProp.name;

    csInterface.evalScript(`$._ext.deletePropExpression("${effectName}","${propertyName}")`,(res)=>{//Remove property expression from  EffectBlock
      workBlockSet.forEach((item)=>{
        if(item.node.nodeName=="path"&&item.LineTo==effectName&&item.propertyOfEffect==propertyName){
          console.log(GlobalStorage.historyOfObjects[item.LineFrom]);

          item.remove();
          GlobalStorage.controlProp.circle.classList.remove('true');
          GlobalStorage.controlProp.circle.classList.add('false');
        }
      })
    });

  }
}

export default deletePropertyInEffectBlock;
