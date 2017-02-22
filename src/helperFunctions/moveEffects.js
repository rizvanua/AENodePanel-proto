import csInterface from '../csInterface';
import GlobalStorage from '../storage';

// Function to check an order of Effects' blocks (by X coordinate)


 function moveEffects (thisSet){
//console.log(thisSet)
console.log(GlobalStorage.arrOfPresetsEffects);
  GlobalStorage.historyOfObjects.itemArray.length=0;
    let storageName=thisSet[1].node.effectName;
    //GlobalStorage.historyOfObjects[storageName]=thisSet;
    for (let key in GlobalStorage.historyOfObjects) {
      if(key!="itemArray"){
        GlobalStorage.historyOfObjects.itemArray.push(GlobalStorage.historyOfObjects[key]);
      }
        }




        let promise= new Promise((resolve)=>{
          //console.log(GlobalStorage.historyOfObjects);
          let test=_.sortBy(GlobalStorage.historyOfObjects.itemArray, function(i){

              return i[1].attr("y");// Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
          });

            GlobalStorage.undermostEffectBlock.y=test[test.length-1][1].attr("y");//this is the y coordinate of the lowermost blockEffect

                resolve(test);
              }).then((resolve)=>{
                //console.log(resolve);
                let mymap=_.map(resolve,function(i,num){
                      return i[1].node.effectName;// create map of the array and get array of effects' names

                })
                ;
                  return mymap;
              }).then((mymap)=>{
                //console.log(mymap)
                let myIndex=_.indexOf(mymap,storageName);//get index of the curent effect in array. This Index is  the place of effect in order
                myIndex+=1;
                //console.log(myIndex);
                  //console.log(storageName);
                csInterface.evalScript(`$._ext.moveEffectIndex("${storageName}","${myIndex}")`,(res)=>{});
              });

}
export default  moveEffects;
