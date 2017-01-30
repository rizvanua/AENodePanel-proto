import R from "../raphaelContainer.js";
import drawLineFromTo  from "./drawLineFromTo.js";
import GlobalStorage from '../storage';
import csInterface from '../csInterface';

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
      var connectPath = R.path( ["M", this.ox, this.oy, "L", this.ox, this.oy ] )
      .attr({stroke:"blue"});
      curenLineLocal=connectPath;

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

    if (GlobalStorage.overMouseSet.length>0&&curenLineLocal!=undefined){// in this case the current Line has connection to a destination block
      GlobalStorage.overMouseSet[0].push(curenLineLocal);//Push curent Line into destination set
      curenLineLocal.attr({stroke:"black"});
      GlobalStorage.currentLine.length=0;
      /*console.log(GlobalStorage.overMouseSet[0][1].node.effectName);*/
      let effectNameLocal=GlobalStorage.overMouseSet[0][1].node.effectName;
      let propName="Point of Interest";
      let promise= new Promise((resolve)=>{
              resolve(GlobalStorage.overMouseSet[0].push(curenLineLocal));
            }).then((resolve)=>{
      				return GlobalStorage.overMouseSet.length=0;
      			}).then((res)=>{
              curenLineLocal=undefined;
              /*test call to ExtScript*/

                          csInterface.evalScript(`$._ext.addCommonControls("${effectNameLocal}","${propName}")`);

              /**/
            });

    }
    else if(GlobalStorage.overMouseSet.length===0&&curenLineLocal!=undefined){//in this case the current Line dosen't has a destination block
      curenLineLocal.remove();//Remove Line when it dosen't has connection with other block
      thisSet.splice(thisSet.length-1, 1);//Remove last element (path from set)
      curenLineLocal=undefined;

    }

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
