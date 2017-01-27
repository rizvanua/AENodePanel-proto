import SideBar from "./sideBar/sideBar.js";
import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";


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
