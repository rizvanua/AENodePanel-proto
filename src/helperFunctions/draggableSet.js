import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import moveEffects  from "./moveEffects.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';

//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it
Snap.plugin((Snap, Element, Paper, global)=>{
  Snap.Set.prototype.draggableSet = function (setObj,type) {
    let  thisSet = this;
   this.origTransform;
  //let bbox=this.getBBox();
  //this.curenLineLocal;
  var moveFnc = function (dx, dy) {
    var _this = this;
    if (this.node.nodeName!= 'circle')
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
  /*else {
      thisSet.forEach(function (item, i) {
        if(item!==undefined&&item.node!==null&&item.node.nodeName=="path"){
          new drawLineFromTo().moveLine(_this,dx,dy);
        }
        else if(item!==undefined&&item.node===null){
          thisSet.splice(i,1);

        }
      });
  }*/
  },
  lineMoveFnc=function lineMoveFnc(dx, dy){//MOVE function for "elem.drag(lineMoveFnc, lineStartFnc, lineEndFnc)"
      new drawLineFromTo().moveLine(this,dx,dy);
  /*  thisSet.forEach((item, i)=>{
      if(item!==undefined&&item.node!==null&&item.node.nodeName=="path"){

      }
      else if(item!==undefined&&item.node===null){
        thisSet.splice(i,1);

      }
    });*/
  },
  startFnc = function startFnc() {
  let thisGroupCoord;
    //let bBoxCoordSet=R.set();
    if(thisSet.thisCommonContrlName){
      thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Common Control group
    }
  else{
    thisGroupCoord=thisSet[0].getBBox();//get object with central points of this Effect group
  }
console.log('START');
    /*thisSet.forEach(function(item,i){
      //console.log(item);
      if(item!==undefined&&item.node!==null&&item.node.nodeName!="path"){
        bBoxCoordSet.push(item);
      }
      else if(item!==undefined&&item.node===null){
        //console.log(i);
        thisSet.splice(i,1);
      }
    });*/

    if (this.node.nodeName!= 'circle')
    {
      this.ox = thisGroupCoord.x;// get central point of this group (X coord)
        this.oy = thisGroupCoord.y;// get central point of this group (Y coord)
    }
    else {

      new drawLineFromTo().startdrawLineFromTo(this,thisSet);
    }



  },
  lineStartFnc=function lineStartFnc(){//START function for "elem.drag(lineMoveFnc, lineStartFnc, lineEndFnc)"
    let thisGroupCoord=thisSet[0].getBBox();//get points of group
    new drawLineFromTo().startdrawLineFromTo(this,thisSet);
  },
  endFnc = function endFnc() {
    //console.log(GlobalStorage.historyOfObjects);
    // save a reference to the core implementation
//console.log(thisSet);
      //if(type=="effects")
      //{
        /*console.log(thisSet[1].node.effectName);*/
        //console.log(this);
        this.origTransform=this.transform().local;
              moveEffects (thisSet);

      //}

    //console.log(GlobalStorage.historyOfObjects);


  },
  lineEndFnc=function lineEndFnc(){//END function for "elem.drag(lineMoveFnc, lineStartFnc, lineEndFnc)"
    new drawLineFromTo().endDrawLine(this,thisSet);
  }
this.forEach((elem)=>{

  if(elem.node.nodeName=='g'){// if group we drag block
    elem.drag(moveFnc, startFnc, endFnc);
  }
  else if(elem.node.nodeName=='circle'){// if circle we drag we run function to create line
    elem.drag(lineMoveFnc, lineStartFnc, lineEndFnc);

  }
  })
};
/**/

function EffectMove (thisSet, item, i, _this, dx, dy){
//console.log(item);
  /*thisSet.forEachInGroup((elem)=>{//sort out elements in group
    if (elem.node.nodeName == 'circle') {
      elem.attr({ cx: _this.ox + dx+1, cy: _this.oy + dy+16 });
    }
    else if (elem.node.nodeName == 'rect'){
      console.log('THISrect');
      elem.attr({ x: _this.ox + dx, y: _this.oy + dy });
    }
    else if (elem.node.nodeName == 'text') {
      elem.attr({ x: _this.ox + dx+60, y: _this.oy + dy+15 });
    }
    else if(elem.node.nodeName == 'g')
    {
      console.log('HEYYYYYYYYYYYYYY');
      console.log(elem.transform());
    }

  })*/


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

  /*  if (item.node.nodeName == 'circle') {
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

    }*/
}

function CommonControlsMove(thisSet, item, i, _this, dx, dy){
//console.log(item);
  thisSet.forEachInGroup((elem)=>{//sort out elements in group

       if (elem.node.nodeName == 'rect'){
         elem.attr({ x: _this.ox + dx, y: _this.oy + dy });
       }
       else if (elem.node.nodeName == 'text') {
         elem.attr({ x: _this.ox + dx+60, y: _this.oy + dy+15 });
       }

  });

  if (item.node.nodeName == 'circle') {
       if(item.node.circleName=="circleLeft"){

         item.attr({ cx: _this.ox + dx+1, cy: _this.oy + dy+16 });
       }
       else if(item.node.circleName=="circleRight"){

         item.attr({ cx: _this.ox + dx+120, cy: _this.oy + dy+16 });
       }
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
