import R from "../raphaelContainer.js";
import csInterface from "../csInterface.js";
import draggableSet from "../helperFunctions/draggableSet.js";
import drawLineFromTo  from "../helperFunctions/drawLineFromTo.js";
/*import deleteFunctions from "../helperFunctions/deleteFunction.js"*/
import activeBlockFunction from '../helperFunctions/activeBlockFunction';
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
    let title= R.text(x+60, y+15, blockEffectName)
    .attr({
      cursor: "move",
      "font-size": 15
    });

          title.node.effectName=blockEffectName;
          workBlockSet.push(title);
          GlobalStorage.lastEffectBlock.y=y+32;
    let workBlock=R.rect(x,y, 120, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              stroke: "none",
              cursor: "move",
              class:''
          });
          workBlock.node.effectName=blockEffectName;
          workBlockSet.push(workBlock);
          title.toFront();


    /*let circleLeft=R.circle(x+1, y+15, 6);// If you need left circle for this block uncomment it
          circleLeft.node.effectName=item.name;
          circleLeft.node.circleName="circleLeft";
          workBlockSet.push(circleLeft);*/

          let toType = function(obj) {
            return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
          };




    GlobalStorage.historyOfObjects[blockEffectName]=workBlockSet;
    workBlockSet.draggableSet(workBlockSet,typeNode);
    workBlockSet.click(()=>{activeBlockFunction(workBlockSet);});
    workBlockSet.mouseover(function(){
      //console.log("OVER");
      GlobalStorage.overMouseSet=workBlockSet;//Push this set into temporary object for compere reasone
    });
    workBlockSet.mouseout(function(){
      //console.log("OUT");
        GlobalStorage.overMouseSet=null;//Clear interim object if mouse get out
    });
  }

  createBlockCommonControls(x,y,item){
    let workBlockSet=R.set();
    let typeNode="commonControls";
    let title= R.text(x+40, y+15, item.name)
    .attr({
      cursor: "move",
      "font-size": 15
    });

          title.node.effectName=item.name;
          workBlockSet.push(title);

    let workBlock=R.rect(x,y, 80, 32,5)
    .attr({   fill: "rgb(64, 64, 64)",
              stroke: "none",
              cursor: "move",
              class:''
          });
          workBlock.node.effectName=item.name;
          workBlockSet.push(workBlock);
          title.toFront();

    /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
          circleLeft.node.effectName=item.name;
          workBlockSet.push(circleLeft);
          circleLeft.node.circleName="circleLeft";*/


    let circleRight=R.circle(x+80, y+15, 6);
          circleRight.node.effectName=item.name;
          workBlockSet.push(circleRight);
          circleRight.node.circleName="circleRight";

    workBlockSet.fullCommonContrlName=item.fullname;
    workBlockSet.click(()=>{activeBlockFunction(workBlockSet);});
    /*workBlockSet.drag(this.move,this.start,this.up);*/
    workBlockSet.draggableSet(workBlockSet,typeNode);
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
