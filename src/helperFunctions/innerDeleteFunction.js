import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";

//We use this function in files "customEvents/customEventListeners.js" and "helperFunctions/deleteFunctions.js"

function innerDeleteFunction(nameOfBlock){
  let promise= new Promise((resolve)=>{
    GlobalStorage.overMouseSet=null;
    //let effectName=GlobalStorage.toDelete.setEffectName;
    if(GlobalStorage.toDelete&&GlobalStorage.toDelete.setEffectName&&GlobalStorage.historyOfObjects[nameOfBlock]){//Remove ordinar effects (not chained with Distributor)
      let effectName=GlobalStorage.toDelete.setEffectName;
      delete GlobalStorage.historyOfObjects[effectName];

      //Call to ExtScript

                  csInterface.evalScript(`$._ext.deleteEffect("${effectName}")`,(res)=>{//Remove effects from After Effects
                    let remove=GlobalStorage.toDelete.remove()
                    resolve(remove);
                  });

      //

    }
    else if(GlobalStorage.toDelete&&GlobalStorage.toDelete.thisCommonContrlName&&GlobalStorage.historyOfObjects[nameOfBlock]){//Remove CommonControls
      let CommonContrlName= GlobalStorage.toDelete.fullCommonContrlName;
      let thisCommonContrlName=GlobalStorage.toDelete.thisCommonContrlName;
      let itemsArray=GlobalStorage.toDelete.items;

      let arrayOfLinkedEffects=_.filter(itemsArray,(i)=>{//filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
      if(i.node.nodeName=="path"){
        console.log(i.LineTo);
        if(GlobalStorage.historyOfObjects[i.LineTo]){
          let elemObj=GlobalStorage.historyOfObjects[i.LineTo][0][0];
          for (let key in elemObj){
            if(elemObj[key].type=='rect'&&elemObj[key].attr('propDataName')==i.propertyOfEffect){
              elemObj[key].node.previousElementSibling.classList.remove('true');
              elemObj[key].node.previousElementSibling.classList.add('false');
            }
          }
          return i.LineTo;
        }

      }



      });


      //let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
      //    if(i.DistributorEffects){
      //      return i.DistributorEffects.join(';')
      //    }
      //    return i.LineTo;
     //
      //});
      let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects

            let jsonObject;
              jsonObject='{"Lineto":"'+i.LineTo+'","propertyOfEffect":"'+i.propertyOfEffect+'"}';
          return jsonObject;

        });

let arrayOfLinkedEffectsString=arrayOfLinkedEffectsFiltered.join(';');//transform array to string to pass in into "ext.deleteCommonControl" function
        //Call to ExtScript
//console.log(arrayOfLinkedEffectsString);
                    //console.log(GlobalStorage.toDelete.thisCommonContrlName);


console.log(CommonContrlName);

console.log(thisCommonContrlName);

csInterface.evalScript(`$._ext.deleteCommonControl('${arrayOfLinkedEffectsString}',"${thisCommonContrlName}")`,(res)=>{

  let remove=GlobalStorage.toDelete.remove()
  delete GlobalStorage.historyOfObjects[nameOfBlock];
resolve(remove);

});



        //

    }
    //resolve ()
    })
    .then((resolve)=>{

    resolve=undefined;
    GlobalStorage.toDelete=undefined;
    GlobalStorage.prevActive=undefined;

    });

}

export default innerDeleteFunction;
