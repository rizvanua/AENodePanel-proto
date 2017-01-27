import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import GlobalStorage from '../storage';

Raphael.st.draggableSet = function (setObj,type) {

  var thisSet = this;
  console.log();
  let bbox=this.getBBox();
  let curenLineLocal;
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
        if(item.node.nodeName=="path"){

          curenLineLocal.attr("path",`M${_this.ox} ${_this.oy}L${_this.ox+dx} ${_this.oy+dy}`);

        }
      });
      /*curenLineLocal.attr("path",`M${_this.ox} ${_this.oy}L${_this.ox+dx} ${_this.oy+dy}`);*/

  };
  },
  startFnc = function startFnc() {
    let bBoxCoordSet=R.set();
    thisSet.forEach(function(item,i){
      if(item.node.nodeName!="path"){
        bBoxCoordSet.push(item);
      }
    })

    if (this.node.nodeName!= 'circle')
    {
      let setCoord=bBoxCoordSet.getBBox();
      this.ox = setCoord.x;
      this.oy = setCoord.y;
    }
    else {
      this.ox=this.attr("cx");
      this.oy=this.attr("cy");
      var connectPath = R.path( ["M", this.ox, this.oy, "L", this.ox, this.oy ] );
      curenLineLocal=connectPath;
                  /*thisSet.push(curenLineLocal);*/
                  thisSet.push(curenLineLocal);
                  GlobalStorage.currentLine.push(connectPath);//Send just created Line into GlobalStorage object currentLine
                  console.log(GlobalStorage.currentLine);
                  console.log(GlobalStorage.overMouseSet);


    };


    /*test call to ExtScript*/
/*var csInterface = new CSInterface();

  							csInterface.evalScript('$._ext.sendText("Circular Waves")');*/

    /**/
  }, endFnc = function endFnc() {

    if (GlobalStorage.overMouseSet.length>0&&curenLineLocal!=undefined){
      /*console.log(GlobalStorage.overMouseSet[0].push(curenLineLocal));*/
      /*let DestSetBBoxCoords=GlobalStorage.overMouseSet[0].getBBox();
      console.log(DestSetBBoxCoords);
      let DestX=DestSetBBoxCoords.x;
      let DestY=DestSetBBoxCoords.y;
      console.log(curenLineLocal);
      curenLineLocal.attr("path",`M${this.ox} ${this.oy}L${DestX} ${DestY+15}`)*/

      GlobalStorage.overMouseSet[0].push(curenLineLocal);//Push curent Line into destination set
      GlobalStorage.currentLine.length=0;
      /*console.log(curenLineLocal);*/
    }
    /*else if (GlobalStorage.overMouseSet.length=0&&curenLineLocal!=undefined)
    {
      curenLineLocal.remove();
    }*/

    /*ox = lx;
    oy = ly;*/
  };

  this.drag(moveFnc, startFnc, endFnc);
};
/**/

function EffectMove (item, i, _this, dx, dy){

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
       let LX=item.attr().path[1][1];
       let LY=item.attr().path[1][2];
       item.attr("path",`M${_this.ox+ dx} ${_this.oy+ dy}L${LX} ${LY}`);

     }


}

function startdrawLineFromTo(ox, oy){
  var connectPath = R.path( ["M", ox, oy, "L", ox, oy ] );
}

function moveLine(){
  console.log(this);
}
function endDrawLine(){

}
