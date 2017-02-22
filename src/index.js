import SideBar from "./sideBar/sideBar.js";
import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";
import arrSecondButton from "./startArrays/arrSecondButton.js";
import csInterface from './csInterface';
import R from "./raphaelContainer.js";
import deleteFunctions from "./helperFunctions/deleteFunctions";
import GlobalStorage from './storage';

let myReq;
let status=false;
/**/

//let path = "./test.js";
//console.log();
let systemPathOS=csInterface.getSystemPath(SystemPath.EXTENSION);
let path = csInterface.getSystemPath(SystemPath.EXTENSION)+"/presets/";
//console.log(path);
let readDir = window.cep.fs.readdir(path);
if(readDir.err === 0)
{
  let arrFiles=readDir.data;
  arrFiles.forEach((file)=>{
    //console.log(file);
    let filePath=path+file
    let result = window.cep.fs.readFile(filePath);
    if(result.err === 0)
    {
      //console.log(JSON.parse(result.data));
      let filePresetObject=JSON.parse(result.data);
      arrSecondButton.presets.push({name:filePresetObject.name})
      //GlobalStorage.arrOfPresetsEffects[filePresetObject.name]=filePresetObject.name;
      //console.log(filePresetObject);
      GlobalStorage.arrOfPresetsEffects[filePresetObject.name]={};
      //console.log(GlobalStorage.arrOfPresetsEffects);
      filePresetObject.arrOfPresetsEffects.forEach((index,i)=>{

//console.log(index);
        //let arrIndex=[];
//console.log(filePresetObject.arrOfPresetsEffects[i]);
        for (var key in index) {
          //filePresetObject.arrOfPresetsEffects[i][key]=index[key];
          //console.log(JSON.stringify(filePresetObject.arrOfPresetsEffects[i][key]));
        //arrIndex.push(`{"${key}":${JSON.stringify(index[key])}}`);
        //console.log(key);
        GlobalStorage.arrOfPresetsEffects[filePresetObject.name][`"${key}${i}"`]=index[key];

        //GlobalStorage.arrOfPresetsEffects[filePresetObject.name][index][key]=`${JSON.stringify(index[key])}`;
        //console.log(`"${key}":${i[key]}`);
        }
          /*filePresetObject[index].forEach((i)=>{
            console.log(key);


          })*/

//console.log(arrIndex);
//console.log(GlobalStorage.arrOfPresetsEffects[filePresetObject.name]);
/*if(GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propEffect){
  GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propEffect[`${index}`]=arrIndex.join(";");
}*/


      });

    }
    else
    {
//console.log("BAD");
    }
  });

     //console.log(readDir.data);
     //let readDir = window.cep.fs.readFile(path);
} else
{
       //console.log('FUCK')
}

/**/

/*var event = new CSEvent("dispatchEvent", "APPLICATION", function (e) {
console.log(e);
}); event.data = "This is a test!";
csInterface.dispatchEvent(event);
csInterface.addEventListener("applicationBeforeQuit", closePanel);
function closePanel(evt) {
    console.dir(evt);
}*/
/*var appName = csInterface.hostEnvironment.appName;
setTimeout(()=>{console.log(csInterface.getExtensionID())}, 10000)
let event = new CSEvent("com.adobe.csxs.events.AppOffline", "APPLICATION");
event.appId=csInterface.getApplicationID();
event.extensionId=csInterface.getExtensionID();*/

//csInterface.dispatchEvent(event);
//console.log(appName);
//console.log(appID);
//var eventObj = new CSXSEvent();  eventObj.type="documentCreated";  eventObj.data="blahblah";

     /*window.addEventListener("contextmenu",function(e){
        e.preventDefault();
       console.log(e);
       alert("keydown detected");
});*/
/*csInterface.prototype.registerKeyEventsInterest = function Prevent (){

};*/
/*let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 46,     "ctrlKey": true  }];
csInterface.registerKeyEventsInterest(keyEventsInterest);
console.log(csInterface.addEventListener('mouseover',function(e){
       alert("keydown detected");
}));*


/*csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT,function(e){
       alert("keydown detected");
});*/

/*function start(){
  console.log('start');
  csInterface.evalScript(`$._ext. initialProjectTest()`, (res)=>{
  console.log(res=='false');
    if(res=='false'){
      myReq =window.requestAnimationFrame(start);
    }
    else{
      document.getElementById("glass").style.display="none";
        window.cancelAnimationFrame(myReq);
    }

  });
}
myReq = window.requestAnimationFrame(start);*/

/**/
function startCheck() {

  if(status!='true'){
    setTimeout(function() {

      csInterface.evalScript(`$._ext. initialProjectTest()`, (res)=>{

        status=res;

      });
            requestAnimationFrame(startCheck);

        }, 1000);

  }
  else{

  document.getElementById("glass").style.display="none";
  }

}
startCheck();
/**/

let sideBarFraime= new SideBar().createBar();
/*let promise= new Promise((resolve)=>{
	let sideBarInnerBlocks= new SideBar().createInnerBlocks();
        resolve(sideBarInnerBlocks);
      }).then((resolve)=>{
				let secondBarInnerBlocks= new secondSideBarBlocks().createStaticEffects();
			});*/

let sideBarInnerBlocks= new SideBar().createInnerBlocks();
let secondBarInnerBlocksEffects= new secondSideBarBlocks().createStaticEffects();
let secondBarInnerBlocksControls= new secondSideBarBlocks().createStaticCommonControls();
let secondBarInnerBlocksDistributor= new secondSideBarBlocks().createStaticDistributorControls();
let secondBarInnerBlocksPresets= new secondSideBarBlocks().createStaticPresets();


document.getElementsByTagName('svg')[0].addEventListener('click',(e)=>{

  if(e.target.nodeName==='svg'){

    if(GlobalStorage.toDelete!=undefined){
      GlobalStorage.toDelete[1].attr(
        {stroke: "none"}
      );
    }

    if(GlobalStorage.toDelete&&GlobalStorage.prevActive&&GlobalStorage.toDelete[1].node&&GlobalStorage.prevActive[1].node&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){

      GlobalStorage.prevActive[1].attr(
        {stroke: "none"}
      );
    }

    //GlobalStorage.toDelete=undefined;


  }

});


/*csInterface.addEventListener("hover",
  function (event)     {
    console.log("type=" + event.type + ", data=" + event.data);
  } ); // Anonymous function is the second parameter*/
