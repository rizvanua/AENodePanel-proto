import SideBar from "./sideBar/sideBar.js";
import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";
import csInterface from './csInterface';
import R from "./raphaelContainer.js";
import deleteFunctions from "./helperFunctions/deleteFunctions";
import GlobalStorage from './storage';

let myReq;
let status=false;

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
}));*/


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

    GlobalStorage.toDelete=undefined;


  }

});


/*csInterface.addEventListener("hover",
  function (event)     {
    console.log("type=" + event.type + ", data=" + event.data);
  } ); // Anonymous function is the second parameter*/
