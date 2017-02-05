import R from "../raphaelContainer.js";
import mainBlock from "./mainBlock.js";

class distributorBlocks{
    constructor(x,y,item){
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

        let typeNode="distributor";
        let title= R.text(x+80, y+32, item.name)
        .attr({
          cursor: "move",
          "font-size": 15
        });
        title.node.distributorName=item.name;
        this.rootBlockSet.push(title);


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
    }
    createPoiBlocks(item){
      let control={
        name:"POI"
      };

      function forEachPOI(x,_this){
      	for(let i=x+1; --i;){
          let connectPath = R.path( ["M", _this.LineFromCoordsX+160,_this.LineFromCoordsY+32, "L", 500, ((50*(i+1))+15) ] );
          connectPath.node.lineFromCyrcle="noCircleDistributor";
              _this.rootBlockSet.push(connectPath);
      		let CommonControls= new mainBlock().createBlockCommonControls(500,(50*(i+1)),control);
          CommonControls.push(connectPath);
          console.log(CommonControls);
      	}

      }

      switch (item.name) {
        case "Cube":
           forEachPOI(6,this);
          break;
        case "Sphere":
          forEachPOI(5,this);
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
