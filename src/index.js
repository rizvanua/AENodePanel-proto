import SideBar from "./sideBar/sideBar.js";
import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";
import csInterface from './csInterface';
import R from "./raphaelContainer.js";
import deleteFunctions from "./helperFunctions/deleteFunctions";
import GlobalStorage from './storage';


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
console.log(document.getElementsByTagName('svg')[0]);

document.getElementsByTagName('svg')[0].addEventListener('click',(e)=>{
  console.log(e);
  console.log(e.target.nodeName==='svg');
  if(e.target.nodeName==='svg'){

    if(GlobalStorage.toDelete!=undefined){
      GlobalStorage.toDelete[1].attr(
        {stroke: "none"}
      );
    }

    if(GlobalStorage.toDelete&&GlobalStorage.prevActive!=undefined&&GlobalStorage.toDelete[1].node.effectName!=GlobalStorage.prevActive[1].node.effectName){
      console.log("YES");
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
