//import csInterface from '../csInterface';
import GlobalStorage from '../storage';

let deleteBlockEvent = new Event('deleteBlockEvent');
document.addEventListener('deleteBlockEvent', function (e) {
/*console.log(GlobalStorage.blockToRemove);
console.log(GlobalStorage.effectCheckArr);
console.log(this.effectCheckArr);*/
let nameOfBlock
GlobalStorage.undermostEffectBlock.y=10;
GlobalStorage.blockToRemove.forEach((i, num)=>{
  console.log(GlobalStorage.blockToRemove[num]);
  console.log(GlobalStorage.historyOfObjects);
  nameOfBlock=GlobalStorage.blockToRemove[num];
  GlobalStorage.historyOfObjects[nameOfBlock].remove();
if(GlobalStorage.historyOfObjects[nameOfBlock].setEffectName){

}
else if(GlobalStorage.historyOfObjects[nameOfBlock].thisCommonContrlName){

}
  delete GlobalStorage.historyOfObjects[nameOfBlock];
});


  /*if(GlobalStorage.historyOfObjects[objectKey]){// check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
    delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
    //Call to ExtScript

                csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects

                  let remove=GlobalStorage.effectCheckArr.remove()
                  resolve(remove);
                });

    //
  }*/

}, false);

export  default deleteBlockEvent;
