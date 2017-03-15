import R from "../raphaelContainer.js";
import GlobalStorage from '../storage';
import csInterface from "../csInterface.js";
import mainBlock from "../mainBlock/mainBlock.js";
import arrSecondButton from "../startArrays/arrSecondButton.js";
import moveEffects  from "../helperFunctions/moveEffects.js";
import deleteBlockEvent from "../customEvents/deleteEventListener.js";

class checkBackEnd{
  constructor(){
    this.status=false;
    this.AnimationFrame;
    this.AnimationFrameStart;
    this.effectCheckArr=[];
    this.startCheck();
    this.mouseEnterEvent();
    this.mouseLeaveEvent();
  };

  startCheck() {
    //function startCheckFunction(){
      if(this.status!='true'){//check status if status is not true this means that no one layer is active and we restart function startCheck();
        this.AnimationFrameStart=setTimeout(()=> {

          csInterface.evalScript(`$._ext. initialProjectTest()`, (res)=>{
            //console.log('START FUNCTION');
//console.log(res);
            this.status=res;//get value for status from ExtendScript ('true' or 'false')

          });

                this.startCheck();
//console.log('firstEvent');
            }, 1000);

      }
      else// in this case status is true and we can start to build Panel
      {
            document.getElementById("glass").style.display="none";

            this.createBlock();// get gata about stage from backEnd and create block on Panel
            this.functionCheckAE();

      }
    //};
    //startCheckFunction();


  }



  mouseEnterEvent(){

    document.addEventListener('mouseenter',(e)=>{
      //console.log(e);
        //console.log("mouseEnterEvent");
        //console.log(this);
        clearTimeout(this.AnimationFrame);


    });

  }

  functionCheckAE(){
    this.AnimationFrame=setTimeout(()=> {

      csInterface.evalScript(`$._ext.checkChangesGlobal()`, (res)=>{
          console.log(res);
          //console.log(res===undefined);
          if(res&&res==0){//CHECK if we use went on new Layer
            let promise = new Promise(
                        (resolve) => {
                          R.clear();
                          GlobalStorage.historyOfObjects={
                            itemArray:[]
                          }
                          GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
                          GlobalStorage.undermostCommonControlBlock.y=10;
                          resolve(R);
                        }
                      );
                      promise.then (
                        (resolve)=>{
                          //console.log('NEW LAYER');
                          this.createBlock();
                        }

                      );
          }
          else if(res=='false'|| res===false){
            this.status=false;
            clearTimeout(this.AnimationFrame);
            R.clear();
            GlobalStorage.historyOfObjects={
              itemArray:[]
            }
            GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
            GlobalStorage.undermostCommonControlBlock.y=10;
            this.startCheck();

          }
          else if(res&res==100||res=='100'){// No one layer is selected
            console.log('SILENCE IS GOLD');
            GlobalStorage.historyOfObjects={
              itemArray:[]
            }
            //GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
            //GlobalStorage.undermostCommonControlBlock.y=10;
          }
          else if(res&&res!="undefined"){
            this.effectCheckArr=res.split(',');
            if(res=="empty"){
              this.effectCheckArr=[];
            }
            //console.log(this.effectCheckArr);
            if(GlobalStorage.effectCheckArr.length>this.effectCheckArr.length){
              //console.log(GlobalStorage.effectCheckArr);
              //console.log(this.effectCheckArr);
              let promise = new Promise(
                        (resolve) => {
                          let blockToRemove=_.difference(GlobalStorage.effectCheckArr, this.effectCheckArr);
                          GlobalStorage.effectCheckArr=this.effectCheckArr;
                          GlobalStorage.blockToRemove=blockToRemove;
                          //console.log(GlobalStorage.blockToRemove);
                          resolve(blockToRemove);
                        }
                      );
                      promise.then (
                        (resolve)=>{
                          document.dispatchEvent(deleteBlockEvent);
                          //console.log(effectToRemove[0]);
                        }

                      );


            }
            else if(GlobalStorage.effectCheckArr.length<this.effectCheckArr.length){
//console.log("Create");
            let cordX;
            let blockToCreate=_.difference(this.effectCheckArr, GlobalStorage.effectCheckArr);
            blockToCreate.forEach((i)=>{
              //console.log(i);
              csInterface.evalScript(`$._ext.findEffect("${i}")`, (res)=>{
                //console.log(res);
                let startObject=JSON.parse(res);
                this.functionCreateBlocks(startObject,cordX);
              });

            });

//console.log(GlobalStorage.effectCheckArr);
//console.log(this.effectCheckArr);
              GlobalStorage.effectCheckArr=this.effectCheckArr;
              //console.log(res);
              //this.createBlock(res);

            }
            else {
              console.log('RENAME');
              //console.log(GlobalStorage.historyOfObjects);
              //console.log(res);
              //console.log(GlobalStorage.effectCheckArr);
              //console.log(this.effectCheckArr);
              this.functionRename(this.effectCheckArr,GlobalStorage.effectCheckArr);
              GlobalStorage.effectCheckArr=this.effectCheckArr;
              //console.log('Equality')
            }
          }



        //console.log(res);

      });
        //console.log("I'm working");
            this.functionCheckAE();

        }, 1000);
  }
  mouseLeaveEvent(){

    document.addEventListener('mouseleave',(e)=>{
      //console.log("PreLeave");
        //console.log(e.toElement);
      if(e.toElement===null&&this.status=='true'){
        //console.log(this.AnimationFrame);
        //console.log("mouseLeaveEvent");
      this.functionCheckAE();
    }
    });
  }
  createBlock(){
    let cordX;

    csInterface.evalScript(`$._ext.getData()`, (res)=>{

      //console.log('WORK');
      //console.log(JSON.parse(res));
      let startObject=JSON.parse(res);
      if(startObject.hasVR===true){
        this.functionCreateBlocks(startObject,cordX);
      }

    });

  }

  functionCreateBlocks(startObject,cordX){
//let cordY=GlobalStorage.undermostEffectBlock.y;

    //console.log(startObject.hasVR);
    // chesk if layer has Mantra VR Effect (this effect is )

//console.log(startObject);
    //console.log(startObject);
    startObject.effectsObj.forEach((i, num)=>{// Create EffectBlock
      let itemArr=arrSecondButton.effects.filter((obj)=>{
        //console.log(i);
        return obj.name==i.baseEffect;
      });
      cordX=250;
      let item=itemArr[0];
      let res=i;
      //cordY+=50;
      let workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=50,item,res);
      moveEffects(workBlock);
      //console.log(workBlock);
      GlobalStorage.effectCheckArr.push(res);
    });

    //console.log(startObject.commonControlObj);
    startObject.commonControlObj.forEach((i, num)=>{//Create commonControlBlock
      //console.log('Create commonControlBlock');
      let itemArr=arrSecondButton.commonControls.filter((obj)=>{
        return obj.fullname==i.baseEffect;
      });
      cordX=100;
      //console.log(i);
      let item=itemArr[0];
      //console.log(item);
      let res=i.realName;
      //cordY+=50;
      //console.log('CREATE');
      //console.log(res);
      let workBlock;
      if(res!='Master')
      {
        workBlock=new mainBlock().createBlockCommonControls(cordX,GlobalStorage.undermostCommonControlBlock.y+=50,item,false, res);
        moveEffects(workBlock);
      }
      else{
        //console.log('CREATE MASTER');
        cordX=100;
        //cordY=5;
        workBlock=new mainBlock().createBlockMaster(cordX,5,item,false, res);
        moveEffects(workBlock);
      }


      //console.log(workBlock);
      GlobalStorage.effectCheckArr.push(res);
    });
    startObject.linesObj.forEach((i, num)=>{//Create lines beetween commonControl Block and Effect Block
      //console.log(i);
      //console.log(GlobalStorage.historyOfObjects[i.LineFrom]);
      //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("x"));
      let LineFromX= GlobalStorage.historyOfObjects[i.LineFrom][0].attr("x")
      //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("y"));
      let LineFromY= GlobalStorage.historyOfObjects[i.LineFrom][0].attr("y")
      GlobalStorage.historyOfObjects[i.LineTo];
      //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("x"));
      let LineToX=GlobalStorage.historyOfObjects[i.LineTo][0].attr("x");
      //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("y"));
      let LineToY=GlobalStorage.historyOfObjects[i.LineTo][0].attr("y");
      let connectPath = R.path( ["M", LineFromX+120, LineFromY+16, "L", LineToX, LineToY+15 ] );
      connectPath.LineFrom=i.LineFrom;
      connectPath.LineTo=i.LineTo;
      connectPath.propertyOfEffect=i.propertyOfEffect;
      console.log(connectPath.propertyOfEffect);
      connectPath.node.lineFromCyrcle="circleRight";
      GlobalStorage.historyOfObjects[i.LineFrom].push(connectPath);
      GlobalStorage.historyOfObjects[i.LineTo].push(connectPath);
      let itemArr=arrSecondButton.commonControls.filter((obj)=>{
        return obj.fullname==i.baseEffect;
      });
      //cordX=300;
      //console.log(i);
      //let item=itemArr[0];
      //console.log(item);
      //let res=i.realName;
      //cordY+=50;
      //let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
      //moveEffects(workBlock);
      //console.log(workBlock);
      //console.log(res);
      //GlobalStorage.effectCheckArr.push(res);
    });


  }

  functionRename(array,others){
    let newNameArr=_.difference(array,others);
    let oldNameArr=_.difference(others,array);
    let newName=newNameArr[0];
    let oldName=oldNameArr[0];

    //console.log(newName);
    //console.log(oldName);
    //console.log(GlobalStorage.historyOfObjects[oldName]);
    if(GlobalStorage.historyOfObjects[oldName]){//Rename EffectBlock
      GlobalStorage.historyOfObjects[oldName][1].attr({text:newName});
      if(GlobalStorage.historyOfObjects[oldName].setEffectName){
      GlobalStorage.historyOfObjects[oldName].setEffectName=newName;
      GlobalStorage.historyOfObjects[newName]=GlobalStorage.historyOfObjects[oldName];
      delete GlobalStorage.historyOfObjects[oldName];
      console.log(GlobalStorage.historyOfObjects[newName]);
      GlobalStorage.historyOfObjects[newName].forEach((i)=>{
        if(i.node.nodeName=='path'){
          i.LineTo=newName;
        }
      });

    }
    else if(GlobalStorage.historyOfObjects[oldName].thisCommonContrlName){//Rename CreateBlock
      GlobalStorage.historyOfObjects[oldName].thisCommonContrlName=newName;
      //let thisNewName=newName.replace(" Control", "");
      let thisNewName=newName;
      //console.log(GlobalStorage.historyOfObjects[oldName][2]);
      GlobalStorage.historyOfObjects[oldName][2].attr({text:thisNewName})
      GlobalStorage.historyOfObjects[oldName].currentName=thisNewName;
      GlobalStorage.historyOfObjects[thisNewName]=GlobalStorage.historyOfObjects[oldName];
      delete GlobalStorage.historyOfObjects[oldName];
      console.log(GlobalStorage.historyOfObjects[thisNewName]);
      GlobalStorage.historyOfObjects[thisNewName].forEach((i)=>{
        if(i.node.nodeName=='path'){
          i.LineFrom=thisNewName;
        }
      });
    }
    }


  }
}
export default checkBackEnd;
