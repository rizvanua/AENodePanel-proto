import GlobalStorage from '../storage';
import mainBlock from "../mainBlock/mainBlock.js";
import distributorBlocks from "../mainBlock/disributorBlocks";

Raphael.st.simpleDraggable = function(storageName) {
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

      },
      endFnc = function() {
        console.log(storageName);
        console.log(me[1].node.id);
        console.log(me.getBBox());
        let cordY=me.getBBox().y;
        let cordX=me.getBBox().x;
        let item={
          name:me[1].node.id
        }


console.log(cordX);
      if(this.node.StaticGroupTipe=='effects'){

        //if(GlobalStorage.lastEffectBlock.y===0){
          //cordY=5;
      //  }
       //else{
          //cordY=GlobalStorage.lastEffectBlock.y+5;
      //  }


                  //--csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{
                    //--let workBlock=new mainBlock().createBlockEffects(800,cordY,item,res);

                  //--});


        let res=item.name;//only for test in browser
              let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,res);//only for test in browser
      }
      else if(this.node.StaticGroupTipe=='commonControls'){
        let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item);
      }
      else if(this.node.StaticGroupTipe=='distributor'){
        new distributorBlocks(cordX,cordY,item);


        //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
      }
      GlobalStorage.storageOfSecondMenuSets[storageName].hide();//hide the menu panel
        me.transform('t' + 0 + ',' + 0);//return a block from secondMenu to an enitial place
      };

  this.drag(moveFnc, startFnc, endFnc);
};
