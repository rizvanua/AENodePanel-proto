import R from "../raphaelContainer.js";
import mainBlock from "./mainBlock.js";
import hoverInBounds from "../helperFunctions/hoverInBounds.js";
import activeBlockFunctionsClass from '../helperFunctions/activeBlockFunction';
import generatorId from '../helperFunctions/generatorId';
import GlobalStorage from '../storage';


// Here we create Distributor blocks
class distributorBlocks{
    constructor(x,y,item){
      this.genId=generatorId();
      this.rootBlockSet=R.set();
      this.LineFromCoordsX=0;
      this.LineFromCoordsY=0;

      var promise = new Promise(
        (resolve) => {
          resolve(this.createRootBlock(x,y,item));
        }
      );
      promise.then ((resolve)=>{this.createPoiBlocks(item);});
    }
    createRootBlock(x,y,item){
      let genId=this.genId;
        this.rootBlockSet.genId=this.genId;
        GlobalStorage.distribitorObjectsStorage[this.genId]={};//create an object in storage with unic ID
        //console.log(GlobalStorage.distribitorObjectsStorage);
        let typeNode="distributor";
        let title= R.text(x+80, y+32, item.name)
        .attr({
          cursor: "move",
          "font-size": 15
        });
        title.node.distributorName=item.name;
        this.rootBlockSet.push(title);
        this.rootBlockSet.distributorType=item.name.toLowerCase();
        let distributorType=this.rootBlockSet.distributorType;
        let workBlock=R.rect(x,y, 160, 64,5)
        .attr({   fill: "rgb(64, 64, 64)",
                  stroke: "none",
                  cursor: "move",
                  class:''
              });
        workBlock.node.distributorName=item.name;
        this.rootBlockSet.push(workBlock);
        title.toFront();
        this.LineFromCoordsX=workBlock.attr("x");
        this.LineFromCoordsY=workBlock.attr("y");
        this.rootBlockSet.draggableSet(this.rootBlockSet,typeNode);
        this.rootBlockSet.mouseover(function(){
          workBlock.attr({
            stroke: "red",
          });
        });
        this.rootBlockSet.mouseout(function(){
          workBlock.attr({
            stroke: "none",
          });
        });
        this.rootBlockSet.hoverInBounds(hoverIn,hoverOut);
        GlobalStorage.distribitorObjectsStorage[this.genId].rootBlockSet=this.rootBlockSet;
        this.rootBlockSet.click(()=>{new activeBlockFunctionsClass().activeNotEffectBlock(this.rootBlockSet);});

      

        // Hover in function
          function hoverIn() {
          //console.log("IN");
            /*this.animate({
              r: 70
            }, 500);*/
            console.log(GlobalStorage.effectCreateDrag);
            if(GlobalStorage.effectCreateDrag.active!==false){
              GlobalStorage.effectCreateDrag.distribitorMouseOver=genId;
              //GlobalStorage.effectCreateDrag.distributorType=distributorType;
              //console.log(this);
               this.attr({opacity: .1});
               //console.log(GlobalStorage.effectCreateDrag);
            }
            if(GlobalStorage.effectCreateDrag.poi===false){
              this.attr({cursor: "no-drop"});
            }

          }

          // Hover out function
          function hoverOut() {
            console.log("OUT");
            //console.log(GlobalStorage.effectCreateDrag);
            GlobalStorage.effectCreateDrag.distribitorMouseOver=null;
            this.attr({cursor: "move"});
            //GlobalStorage.effectCreateDrag.active=false

          //console.log("OUT");
            /*this.animate({
              r: 50
            }, 500);*/
            this.attr({opacity: 1});
          }
        /*this.rootBlockSet.mousedown(function(){
          console.log(this);
        })*/
    }
    createPoiBlocks(item){
      //console.log(item);
      let control={
        name:"POI",
        fullname:"Point of Interest",
        effectName:"POI"
      };

      function forEachPOI(x,_this){
      	for(let i=x+1; --i;){
          let connectPath = R.path( ["M", _this.LineFromCoordsX+160,_this.LineFromCoordsY+32, "L", _this.LineFromCoordsX+260, (((_this.LineFromCoordsY-130)+(i*50))+15) ] );
          connectPath.node.lineFromCyrcle="noCircleDistributor";
              _this.rootBlockSet.push(connectPath);
      		let CommonControls= new mainBlock().createBlockCommonControls(_this.LineFromCoordsX+260,((_this.LineFromCoordsY-130)+(i*50)),control,true);
          CommonControls.poiName=`poiOrder${i}`;
          CommonControls.parentId=_this.genId;
          CommonControls.push(connectPath);
          GlobalStorage.distribitorObjectsStorage[_this.genId][`poiOrder${i}`]=CommonControls;
          //console.log(GlobalStorage.distribitorObjectsStorage);
      	}

      }

      switch (item.name) {
        case "Cube":
           forEachPOI(6,this);
          break;
        case "Sphere":
          forEachPOI(10,this);
          break;
        case "Random":
          forEachPOI(5,this);
          break;
        default:
          alert( 'Unknown Distributor' );
      }
    }
}
export default distributorBlocks;
