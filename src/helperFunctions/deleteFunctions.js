import R from "../raphaelContainer.js";
import csInterface from '../csInterface';
import GlobalStorage from '../storage';


//Function which handgle all process with Deleting Blocks

let deleteFunctions = window.addEventListener("contextmenu",function(event){
    event.preventDefault();
  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
  //csInterface.registerKeyEventsInterest(keyEventsInterest);
  /*event.preventDefault();*/

if(GlobalStorage.toDelete!=undefined/*&&event.keyCode==46*/)
  {


    let promise= new Promise((resolve)=>{
      GlobalStorage.overMouseSet=null;

      if(GlobalStorage.toDelete.setEffectName){
        let effectName=GlobalStorage.toDelete.setEffectName;
        delete GlobalStorage.historyOfObjects[effectName];

        //Call to ExtScript

                    csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{
                      let remove=GlobalStorage.toDelete.remove()
                      resolve(remove);
                    });

        //

      }
      else if(GlobalStorage.toDelete.fullCommonContrlName){
        let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
        let itemsArray=GlobalStorage.toDelete.items;
        let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{
          if(i.node.nodeName=="path"){

            return i.LineTo;
          }

        });

        let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{
            return i.LineTo;

        });        
let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');
          //Call to ExtScript



                      csInterface.evalScript(`$._ext.deleteCommonControl("${CommonContrlName}","${arrayOfLinkedEffectsString}")`,(res)=>{

                      let remove=GlobalStorage.toDelete.remove()
                      resolve(remove);

                    });

          //

      }
      //resolve ()
      })
      .then((resolve)=>{

      resolve=undefined;
      GlobalStorage.prevActive=undefined;

      });
}
  /*workBlockSet.remove()*/

});

function deleteEffects(){

}

export default deleteFunctions;
