import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import moveEffects  from "./moveEffects.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';

//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it
Snap.plugin((Snap, Element, Paper, global)=>{
  Snap.Set.prototype.draggableSet = function (setObj,type) {
    let  thisSet = this;
    let thisElem;
   this.origTransform;
  //let bbox=this.getBBox();
  //this.curenLineLocal;
  var moveFnc = function (dx, dy) {
    
    var _this = this;
    if(thisElem){// if circle we drag we run function to create line
        new drawLineFromTo().moveLine(thisElem,dx,dy,thisSet);
    }
    else if (this.node.nodeName!= 'circle')
    {

    //this.fx = this.ox + dx;
    //this.fy = this.oy + dy;


    thisSet.forEach((item, i)=> {
      if(type=="effects"){
//console.log(thisSet);
        EffectMove(thisSet, item, i, _this, dx, dy);
      }
      else if(type=="commonControls"){

        CommonControlsMove(thisSet, item, i, _this, dx, dy);
      }
      if(type=="distributor"){
      //console.log(item);
        //console.log(i);
        //console.log(_this);
          DistributorRootMove(item, i, _this, dx, dy);
      }

    });
  }

  },

  startFnc = function startFnc(poin1,point2,event) {
  let thisGroupCoord;
  GlobalStorage.input.css({display:'none'});
    //let bBoxCoordSet=R.set();
    if(thisSet.thisCommonContrlName){
      thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Common Control group
    }
  else{
    thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Effect group
  }
console.log('START');

    if (event.target.nodeName!='circle'&&!event.target.circleName)
    {
      thisElem=undefined;
      this.ox = thisGroupCoord.x;// get central point of this group (X coord)
        this.oy = thisGroupCoord.y;// get central point of this group (Y coord)
    }
    else {// if circle we drag we run function to create line
      thisElem=thisSet[0][3];
      //console.log(thisSet[0][3]);
      //let coord=thisSet[0].getBBox();
      new drawLineFromTo().startdrawLineFromTo(thisElem,thisSet);
    }



  },

  endFnc = function endFnc() {


        if(thisElem){

          new drawLineFromTo().endDrawLine(thisElem,thisSet);
          thisElem=undefined;
        }
        else{// if circle we drag we run function to create line
          this.origTransform=this.transform().local;
                moveEffects (thisSet);
        }


      //}

    //console.log(GlobalStorage.historyOfObjects);


  }
this.forEach((elem)=>{

  if(elem.node.nodeName=='g'){// if group we drag block
    elem.drag(moveFnc, startFnc, endFnc);
  }

  })
};
/**/

function EffectMove (thisSet, item, i, _this, dx, dy){


  if (item.node.nodeName == 'path') {
    let PathString=Snap.parsePathString(item);
    let MX=PathString[0][1];
    let MY=PathString[0][2];
    if(thisSet[0].attr('clip-path')!='none'){
      item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${_this.oy+ dy+15}`);
    }
    else if(thisSet[0].attr('clip-path')=='none'){
      let offset=item.coordDif*1;
      item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${(_this.oy+ dy+15)+offset}`);
    }



  }
  else if(item.node.nodeName == 'g'){
    if(!_this.origTransform){
      _this.origTransform=item.transform().local;
    }
     let groupy=item.attr({transform:_this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy]})
  }


}

function CommonControlsMove(thisSet, item, i, _this, dx, dy){
 if(item.node.nodeName == 'g'){
       if(!_this.origTransform){
         _this.origTransform=item.transform().local;
       }
        let groupy=item.attr({transform:_this.origTransform + (_this.origTransform ? "T" : "t") + [dx, dy]})
     }
     else if (item.node.nodeName == 'path') {
       if(item.node.lineFromCyrcle=="circleRight")//moving line from right circle of common control  to Effect Block
       {
         //console.log(item.attr().d);
         let PathString=Snap.parsePathString(item);
         let LX=PathString[1][1];//get coords X of the linked EffectBlock
         let LY=PathString[1][2];//get coords X of the linked EffectBlock
         item.attr("path",`M${_this.ox+ dx+120} ${_this.oy+ dy+16}L${LX} ${LY}`);// move path synchronously with commonControl block
       }
       else if(item.node.lineFromCyrcle=="noCircleDistributor")//moving line from RootDistributorBlock  to common control
       {
         let MX=item.attr().path[0][1];
         let MY=item.attr().path[0][2];
         item.attr("path",`M${MX} ${MY}L${_this.ox+ dx} ${_this.oy+ dy+15}`);
       }

     }


}

/*function DistributorRootMove (item, i, _this, dx, dy){

    if (item.node.nodeName == 'circle') {
      item.attr({ cx: _this.ox + dx+1, cy: _this.oy + dy+16 });
    }
    else if (item.node.nodeName == 'rect'){
      item.attr({ x: _this.ox + dx, y: _this.oy + dy });
    }
    else if (item.node.nodeName == 'text') {
      item.attr({ x: _this.ox + dx+80, y: _this.oy + dy+32 });
    }
    else if (item.node.nodeName == 'path'&&!item.DistributorEffects) {//moving line from this RootDistributorBlock  to common control
      let LX=item.attr().path[1][1];
      let LY=item.attr().path[1][2];
      item.attr("path",`M${_this.ox+ dx+160} ${_this.oy+ dy+32}L${LX} ${LY}`);


    }
    else if(item.node.nodeName == 'path'&&item.DistributorEffects){
      let MX=item.attr().path[0][1];
      let MY=item.attr().path[0][2];
      item.attr("path",`M${MX} ${MY}L${_this.ox+ dx+160} ${_this.oy+ dy+32}`);

    }
  }*/

});
