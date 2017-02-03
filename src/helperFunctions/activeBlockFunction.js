import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";

function activeBlockFunction (workBlockSet){
  
GlobalStorage.toDelete=workBlockSet;
  if(GlobalStorage.prevActive!=undefined&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){

    GlobalStorage.prevActive[1].attr(
      {stroke: "none"}
    );
  }
  GlobalStorage.prevActive=workBlockSet;
  GlobalStorage.toDelete[1].attr(
  {stroke: "red"}
  )
}

export default activeBlockFunction;
