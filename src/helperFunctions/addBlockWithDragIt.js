import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import mainBlock from "../mainBlock/mainBlock.js";
import distributorBlocks from "../mainBlock/disributorBlocks";
import csInterface from '../csInterface';
import moveEffects  from "./moveEffects.js";
// Here we handle drag of blocks from secondMenu and add blocks on the main workspace
Raphael.st.simpleDraggable = function(storageName,item) {
  let itemH = item;
  let me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc = function() {
        console.log(me[1].node.StaticGroupTipe);
        if(me[1].node.StaticGroupTipe=='effects'){
          GlobalStorage.effectCreateDrag.active=true;
          console.log(me[2].node.poi);
          GlobalStorage.effectCreateDrag.effectType=me[2].node.id;
            GlobalStorage.effectCreateDrag.poi=me[2].node.poi;
        }


      },
      endFnc = function() {
        console.log(me.getBBox().x);
        if(me.getBBox().x>210){
//console.log(itemH);
        if(GlobalStorage.effectCreateDrag.active===true&&GlobalStorage.effectCreateDrag.distribitorMouseOver!==null){//ADD effects blocks into DISTRIBITOR
console.log(GlobalStorage.effectCreateDrag.distribitorMouseOver);
          let cordX;
          let cordY;
          let connectPath;
          let workBlock;
          let item=itemH;

          let genId=GlobalStorage.effectCreateDrag.distribitorMouseOver;//get an Unic Id of Distributor over which one mouse being
          let distribitorObject=GlobalStorage.distribitorObjectsStorage[genId];//get object with this key
          let distributorType=distribitorObject.rootBlockSet.distributorType;
          Object.keys(distribitorObject).map((objectKey, index)=> {
            if(distribitorObject[objectKey].poiName){//filter object priperty to get object with poiName only
                let poiSet=distribitorObject[objectKey];//get set with this key
                console.log(index);
              csInterface.evalScript(`$._ext.applyEffectDistributor("${item.name}","${distributorType}",${index})`,(res)=>{// send data to extendScript

                let promise = new Promise(
                        (resolve) => {
                          let value = distribitorObject[objectKey].poiName;// get name of object
                          cordX=distribitorObject[objectKey][1].attr("x");// get coordinates of correspond POI block
                          cordY=distribitorObject[objectKey][1].attr("y");// get coordinates of correspond POI block
                          workBlock=new mainBlock().createBlockEffects((cordX+130),cordY,item,res);// create effect block

                          resolve(workBlock);
                        }
                      );
                      promise.then (
                        (resolve)=>{
                          moveEffects(workBlock);
                          connectPath = R.path( ["M", cordX+80,cordY+16, "L", (cordX+130),(cordY+16) ] );//create line between POI and effect blocks
                          connectPath.node.lineFromCyrcle="circleRight";//asign name of the line for POI blocks
                          resolve.push(connectPath);
                          poiSet.push(connectPath);
                          GlobalStorage.distribitorObjectsStorage[genId][resolve.setEffectName]=resolve;
                          GlobalStorage.effectCreateDrag.active=false;//put effectCreateDrag.active in false. This means that an effect was successfully added to the dispatcher.
                        }

                      );




              });


              //workBlock=new mainBlock().createBlockEffects((cordX+130),cordY,item,res);//only for test in browser
            }

});


        }

        GlobalStorage.effectCreateDrag.effectType=null;
        let cordY=me.getBBox().y;
        let cordX=me.getBBox().x;
        let item=itemH;

//console.log(me);

      if(this.node.StaticGroupTipe=='effects'&&GlobalStorage.effectCreateDrag.distribitorMouseOver===null){// check if this block is effect and distribitorMouseOver is null if this is true that means we want add ordinar effect not assign effect to dispacther.

                  csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{//push data into extend script
                    let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,res);
                    moveEffects(workBlock);
                    GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
                });


        //-let res=item.name;//only for test in browser
              //-let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,res);//only for test in browser
      }
      else if(this.node.StaticGroupTipe=='commonControls'){

        if (item.name=="POI"){

            csInterface.evalScript(`$._ext.createControlPoint()`,(res)=>{//push data into extend script

              let index=res.length-1;

              let number=res.charAt(index)*1;
              if (number){
              item.name=`${item.name} ${number}`;
              }

              let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
            });
        }
        else if (item.name=="FOV"){
          console.log("FOV");
          csInterface.evalScript(`$._ext.createControlFOV()`,(res)=>{//push data into extend script

            let index=res.length-1;

            let number=res.charAt(index)*1;
            if (number){
            item.name=`${item.name} ${number}`;
            }

            let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
          });
        }
        else{
          let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false);
        }

      }
      else if(this.node.StaticGroupTipe=='distributor'){
        new distributorBlocks(cordX,cordY,item);


        //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
      }
        }
        else{
          alert("Please drag the node by mouse")
        }
      GlobalStorage.storageOfSecondMenuSets[storageName].hide();//hide the menu panel
        me.transform('t' + 0 + ',' + 0);//return a block from secondMenu to an enitial place
      };


  this.drag(moveFnc, startFnc, endFnc);
};
