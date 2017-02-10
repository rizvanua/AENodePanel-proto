import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";


class activeBlockFunctionsClass{

  constructor(){}

  activeEffectBlock(workBlockSet,effectName){
    GlobalStorage.toDelete=workBlockSet;
      if(GlobalStorage.prevActive&&GlobalStorage.prevActive[1].node&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){

        GlobalStorage.prevActive[0].attr(
          {stroke: "none"}
        );
      }


        csInterface.evalScript(`$._ext.selectEffect("${effectName}")`,(res)=>{//Selet effects in  After Effects native panel
          //let remove=GlobalStorage.toDelete.remove()
          //resolve(remove);
        });
        GlobalStorage.prevActive=workBlockSet;

        GlobalStorage.toDelete[0].attr(
        {stroke: "red"}
        )

  }

  activeNotEffectBlock(workBlockSet){

    GlobalStorage.toDelete=workBlockSet;
      if(GlobalStorage.prevActive&&GlobalStorage.prevActive[1].node&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){

        GlobalStorage.prevActive[1].attr(
          {stroke: "none"}
        );
      }


        GlobalStorage.prevActive=workBlockSet;

        GlobalStorage.toDelete[1].attr(
        {stroke: "red"}
        )


  }

}






export default activeBlockFunctionsClass;
