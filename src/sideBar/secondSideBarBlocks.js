import R from "../raphaelContainer.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import mainBlock from "../mainBlock/mainBlock.js";
import SideBar from "./sideBar.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';


class secondSideBarBlocks {
  constructor(){

  }
  createStaticFunction(id,objName,storageName){
    let sidebar_inner=5;
    let Coords=document.getElementById(id);
    let CoordX=(Coords.getAttribute('x')*1);
    let CoordY=(Coords.getAttribute('y')*1);
    arrSecondButton[objName].forEach((item,i)=>{
      if(i>0){
        sidebar_inner=sidebar_inner+34;
      }



      let x=R.rect(58,sidebar_inner, 120, 32,5)
      .attr({   fill: "rgb(64, 64, 64)",
                stroke: "none",
                opacity: 1,
                cursor: "pointer"
            });
              x.node.StaticGroupTipe=objName;
              x.node.id=item.name;
      let title= R.text(117, (sidebar_inner+15), item.name)
      .attr({
        "font-size": 15,
        cursor: "pointer"
      });
            title.node.StaticGroupTipe=objName;
            //GlobalStorage.mainMenuSet[objName].push(x);
            let secondBlockMenuMiniSet=R.set();
            secondBlockMenuMiniSet.push(title);
            secondBlockMenuMiniSet.push(x);

            GlobalStorage.storageOfSets[storageName].push(secondBlockMenuMiniSet);
            /*GlobalStorage.storageOfSets[storageName].push(x);*/

            /*let line = R.path( ["M", 75, (sidebar_inner+16), "L", 35, (CoordY+12) ] );

            GlobalStorage.storageOfSets[storageName].push(line);*/
            secondBlockMenuMiniSet.mousedown(function(){
              let cordY=x.attr("y");
console.log(this.node.StaticGroupTipe);
          if(this.node.StaticGroupTipe=='effects'){
            /*test call to ExtScript*/


                        csInterface.evalScript(`$._ext.applyEffect("${item.name}")`);

            /**/
            let workBlock=new mainBlock().createBlockEffects(500,cordY,item);
          }
          else if(this.node.StaticGroupTipe=='commonControls'){
            let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
          }

            });
GlobalStorage.storageOfSets[storageName].hide();
    });
  }
  createStaticEffects(){
    this.createStaticFunction("Effects","effects","effects");
  }
  createStaticCommonControls(){
    this.createStaticFunction("Common Controls","commonControls","commonControls");
  }
  createStaticDistributorControls(){
    this.createStaticFunction("Distributor","distributor","distributor");
  }


}

export default secondSideBarBlocks;
