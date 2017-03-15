//import csInterface from '../csInterface';
import GlobalStorage from '../storage';

let deleteBlockEvent = new Event('deleteBlockEvent');
document.addEventListener('deleteBlockEvent', function (e) {
/*console.log(GlobalStorage.blockToRemove);
console.log(GlobalStorage.effectCheckArr);
console.log(this.effectCheckArr);*/
GlobalStorage.undermostEffectBlock.y=10;
GlobalStorage.blockToRemove.forEach((i, num)=>{
  console.log(GlobalStorage.blockToRemove[num]);
  console.log(GlobalStorage.historyOfObjects);
  GlobalStorage.historyOfObjects[GlobalStorage.blockToRemove[num]].remove();
  delete GlobalStorage.historyOfObjects[GlobalStorage.blockToRemove[num]];
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
