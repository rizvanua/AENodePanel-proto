import R from "../raphaelContainer.js";
import csInterface from "../csInterface.js";
import draggableSet from "../helperFunctions/draggableSet.js";
import drawLineFromTo  from "../helperFunctions/drawLineFromTo.js";
/*import deleteFunctions from "../helperFunctions/deleteFunctions.js"*/
//import deleteInOneClick from "../helperFunctions/deleteInOneClick.js"
import activeBlockFunctionsClass from '../helperFunctions/activeBlockFunction';
import GlobalStorage from '../storage';

// This class works with mainBlocks (Effects, commonControls, Distributor) and add eventListebers (click,mouseover etc) to them

class mainBlock{
  constructor(){

  }
  createBlockEffects(x,y,item,blockEffectName){

    let workBlockSet=R.set();
    let typeNode="effects";
    workBlockSet.setEffectName=blockEffectName;
    workBlockSet.baseEffect=item.name;
    workBlockSet.poi=item.poi;
    workBlockSet.fov=item.fov;
    workBlockSet.strength=item.strength;
    workBlockSet.waves=item.waves;
    let dummy=R.rect(x,y, 120, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });
            dummy.node.effectName=blockEffectName;
            workBlockSet.push(dummy);

          GlobalStorage.lastEffectBlock.y=y+32;
    let workBlock=R.rect(x,y, 120, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              stroke: "none",
              cursor: "move",
              class:''
          });
          let title= R.text(x+60, y+15, blockEffectName)
          .attr({
            cursor: "move",
            "font-size": 15
          });

                title.node.effectName=blockEffectName;
                workBlockSet.push(title);

          workBlock.node.effectName=blockEffectName;
          workBlockSet.push(workBlock);
          dummy.toFront();


    /*let circleLeft=R.circle(x+1, y+15, 6);// If you need left circle for this block uncomment it
          circleLeft.node.effectName=item.name;
          circleLeft.node.circleName="circleLeft";
          workBlockSet.push(circleLeft);*/

          let toType = function(obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
          };




    GlobalStorage.historyOfObjects[blockEffectName]=workBlockSet;
    workBlockSet.draggableSet(workBlockSet,typeNode);
    workBlockSet.click(()=>{new activeBlockFunctionsClass().activeEffectBlock(workBlockSet,blockEffectName);});



    workBlockSet.mouseover(function(){
      GlobalStorage.toDelete=workBlockSet;
      console.log(GlobalStorage.currentLine);
      //console.log("OVER");
      //console.log(workBlockSet);
      //console.log(this);
        //workBlockSet.deleteInOneClick(workBlockSet);
    if (GlobalStorage.currentLine){
      let typeOfControll=GlobalStorage.currentLine.node.shortControlName;


          if(GlobalStorage.currentLine&&workBlockSet[typeOfControll]===false){

            workBlockSet.attr({cursor: "no-drop"});
          }
          else{
            workBlockSet.attr({cursor: "move"});
          }
        }

      GlobalStorage.overMouseSet=workBlockSet;//Push this set into temporary object for compere reasone
    });
    workBlockSet.mouseout(function(){
      //console.log("OUT");
        GlobalStorage.toDelete=undefined;
        workBlockSet.attr({cursor: "move"})
        GlobalStorage.overMouseSet=null;//Clear interim object if mouse get out
    });
    return workBlockSet;
  }

  createBlockCommonControls(x,y,item,distributor,res){

    let thisItemName=item.name;
    if(res){
      let index=res.length-1;

      let number=res.charAt(index)*1;
      if (number){
      thisItemName=`${item.name} ${number}`;
      }
    }


    let workBlockSet=R.set();
    let typeNode="commonControls";
    let dummy=R.rect(x,y, 80, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              "fill-opacity":0,
              stroke: "none",
              opacity: 1,
              cursor: "pointer"
          });
          workBlockSet.push(dummy);
          dummy.node.effectName=item.effectName;

          let workBlock=R.rect(x,y, 80, 32,5)
          .attr({   fill: "rgb(64, 64, 64)",
                    stroke: "none",
                    cursor: "move",
                    class:''
                });
                workBlock.node.effectName=item.effectName;

    let title= R.text(x+40, y+15, thisItemName)
    .attr({
      cursor: "move",
      "font-size": 15
    });

          title.node.effectName=item.effectName;


          //console.log(item);
          workBlockSet.shortName=item.effectName.toLowerCase();
          workBlockSet.currentName=thisItemName;
          workBlockSet.push(workBlock);
          workBlockSet.push(title);


          dummy.toFront();

    /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
          circleLeft.node.effectName=item.name;
          workBlockSet.push(circleLeft);
          circleLeft.node.circleName="circleLeft";*/

        if(distributor==false){
          let circleRight=R.circle(x+80, y+15, 6);
                circleRight.node.effectName=item.name;
                workBlockSet.push(circleRight);
                circleRight.node.circleName="circleRight";
        }


    workBlockSet.fullCommonContrlName=item.fullname;
    workBlockSet.thisCommonContrlName=res;
    workBlockSet.click(()=>{new activeBlockFunctionsClass().activeNotEffectBlock(workBlockSet);});
    workBlockSet.draggableSet(workBlockSet,typeNode);
    workBlockSet.mouseover(function(){
      GlobalStorage.toDelete=workBlockSet;
    });
      workBlockSet.mouseout(function(){
        GlobalStorage.toDelete=undefined;
      });
    return workBlockSet;

  }
  start(){


    this.ox = this.attr("x");
    this.oy = this.attr("y");
    this.attr({opacity: 1});
  }
  move(dx,dy){

    this.fx=this.ox + dx;
    this.fy=this.oy + dy;
    this.attr({x: this.ox + dx, y: this.oy + dy});
  }
  end(){
    /*let context=this.context

    arrButton.forEach((item,i)=>{
      if(this.node.id==item)
      createNewBlock(context.fx,context.fy,context,context.node.id);

    });

    context.attr({x: context.ox, y: context.oy});*/

  }

}

 export  default mainBlock;
