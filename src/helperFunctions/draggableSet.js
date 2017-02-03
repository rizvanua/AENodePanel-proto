import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import moveEffecs  from "./moveEffects.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';

//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it

Raphael.st.draggableSet = function (setObj,type) {

  var thisSet = this;

  let bbox=this.getBBox();
  //this.curenLineLocal;
  var moveFnc = function (dx, dy) {
    var _this = this;
    if (this.node.nodeName!= 'circle')
    {

    this.fx = this.ox + dx;
    this.fy = this.oy + dy;


    thisSet.forEach(function (item, i) {
      if(type=="effects"){
        EffectMove(item, i, _this, dx, dy);
      }
      else if(type=="commonControls"){
        CommonControlsMove(item, i, _this, dx, dy);
      }

    });
  }
  else {
      thisSet.forEach(function (item, i) {
        if(item!=undefined&&item.node!=null&&item.node.nodeName=="path"){
          new drawLineFromTo().moveLine(_this,dx,dy);
        }
        else if(item!=undefined&&item.node==null){
          thisSet.splice(i,1);

        }
      });
  };
  },
  startFnc = function startFnc() {

    let bBoxCoordSet=R.set();
    thisSet.forEach(function(item,i){
      //console.log(item);
      if(item!=undefined&&item.node!=null&&item.node.nodeName!="path"){
        bBoxCoordSet.push(item);
      }
      else if(item!=undefined&&item.node==null){
        //console.log(i);
        thisSet.splice(i,1);
      }
    })

    if (this.node.nodeName!= 'circle')
    {//console.log(thisSet)
      let setCoord=bBoxCoordSet.getBBox();
      this.ox = setCoord.x;
      this.oy = setCoord.y;
    }
    else {
      new drawLineFromTo().startdrawLineFromTo(this,thisSet);
    };



  }, endFnc = function endFnc() {
    // save a reference to the core implementation

      if(type=="effects")
      {
        /*console.log(thisSet[1].node.effectName);*/
              moveEffecs (thisSet);
              console.log("move");
      }

    //console.log(GlobalStorage.historyOfObjects);
    new drawLineFromTo().endDrawLine(this,thisSet);

  };

  this.drag(moveFnc, startFnc, endFnc);
};
/**/

function EffectMove (item, i, _this, dx, dy){
/*console.log(_this);*/
    if (item.node.nodeName == 'circle') {
      item.attr({ cx: _this.ox + dx+1, cy: _this.oy + dy+16 });
    }
    else if (item.node.nodeName == 'rect'){
      item.attr({ x: _this.ox + dx, y: _this.oy + dy });
    }
    else if (item.node.nodeName == 'text') {
      item.attr({ x: _this.ox + dx+60, y: _this.oy + dy+15 });
    }
    else if (item.node.nodeName == 'path') {
      let MX=item.attr().path[0][1];
      let MY=item.attr().path[0][2];
      item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${_this.oy+ dy+15}`);

    }



}

function CommonControlsMove(item, i, _this, dx, dy){

  if (item.node.nodeName == 'circle') {
       if(item.node.circleName=="circleLeft"){

         item.attr({ cx: _this.ox + dx+1, cy: _this.oy + dy+16 });
       }
       else if(item.node.circleName=="circleRight"){

         item.attr({ cx: _this.ox + dx+80, cy: _this.oy + dy+16 });
       }
     }
     else if (item.node.nodeName == 'rect'){
       item.attr({ x: _this.ox + dx, y: _this.oy + dy });
     }
     else if (item.node.nodeName == 'text') {
       item.attr({ x: _this.ox + dx+40, y: _this.oy + dy+15 });
     }
     else if (item.node.nodeName == 'path') {
       if(item.node.lineFromCyrcle=="circleRight")
       {
         let LX=item.attr().path[1][1];
         let LY=item.attr().path[1][2];
         item.attr("path",`M${_this.ox+ dx+80} ${_this.oy+ dy+16}L${LX} ${LY}`);
       }


     }


}
