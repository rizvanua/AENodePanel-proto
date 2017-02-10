/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _sideBarSideBarJs = __webpack_require__(1);

	var _sideBarSideBarJs2 = _interopRequireDefault(_sideBarSideBarJs);

	var _sideBarSecondSideBarBlocksJs = __webpack_require__(5);

	var _sideBarSecondSideBarBlocksJs2 = _interopRequireDefault(_sideBarSecondSideBarBlocksJs);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _helperFunctionsDeleteFunctions = __webpack_require__(18);

	var _helperFunctionsDeleteFunctions2 = _interopRequireDefault(_helperFunctionsDeleteFunctions);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var myReq = undefined;
	var status = false;

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

	  if (status != 'true') {
	    setTimeout(function () {

	      _csInterface2["default"].evalScript("$._ext. initialProjectTest()", function (res) {

	        status = res;
	      });
	      requestAnimationFrame(startCheck);
	    }, 1000);
	  } else {

	    document.getElementById("glass").style.display = "none";
	  }
	}
	startCheck();
	/**/

	var sideBarFraime = new _sideBarSideBarJs2["default"]().createBar();
	/*let promise= new Promise((resolve)=>{
		let sideBarInnerBlocks= new SideBar().createInnerBlocks();
	        resolve(sideBarInnerBlocks);
	      }).then((resolve)=>{
					let secondBarInnerBlocks= new secondSideBarBlocks().createStaticEffects();
				});*/

	var sideBarInnerBlocks = new _sideBarSideBarJs2["default"]().createInnerBlocks();
	var secondBarInnerBlocksEffects = new _sideBarSecondSideBarBlocksJs2["default"]().createStaticEffects();
	var secondBarInnerBlocksControls = new _sideBarSecondSideBarBlocksJs2["default"]().createStaticCommonControls();
	var secondBarInnerBlocksDistributor = new _sideBarSecondSideBarBlocksJs2["default"]().createStaticDistributorControls();

	document.getElementsByTagName('svg')[0].addEventListener('click', function (e) {

	  if (e.target.nodeName === 'svg') {

	    if (_storage2["default"].toDelete != undefined) {
	      _storage2["default"].toDelete[1].attr({ stroke: "none" });
	    }

	    if (_storage2["default"].toDelete && _storage2["default"].prevActive && _storage2["default"].toDelete[1].node && _storage2["default"].prevActive[1].node && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {

	      _storage2["default"].prevActive[1].attr({ stroke: "none" });
	    }

	    _storage2["default"].toDelete = undefined;
	  }
	});

	/*csInterface.addEventListener("hover",
	  function (event)     {
	    console.log("type=" + event.type + ", data=" + event.data);
	  } ); // Anonymous function is the second parameter*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _startArraysArrButtonmainJs = __webpack_require__(3);

	var _startArraysArrButtonmainJs2 = _interopRequireDefault(_startArraysArrButtonmainJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(4);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _secondSideBarBlocksJs = __webpack_require__(5);

	var _secondSideBarBlocksJs2 = _interopRequireDefault(_secondSideBarBlocksJs);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var SideBar = (function () {
	  function SideBar() {
	    _classCallCheck(this, SideBar);
	  }

	  _createClass(SideBar, [{
	    key: "createBar",
	    value: function createBar() {
	      this.sidebar = _raphaelContainerJs2["default"].rect(0, 0, 42, '100%');
	    }
	  }, {
	    key: "createInnerBlocks",
	    value: function createInnerBlocks() {
	      var sidebar_inner = 5;
	      var self = this;
	      _startArraysArrButtonmainJs2["default"].forEach(function (item, i) {
	        if (i > 0) {
	          sidebar_inner = sidebar_inner + 34;
	        }

	        var firstLetter = item.name.charAt(0);
	        var dummy = _raphaelContainerJs2["default"].rect(5, sidebar_inner, 32, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	          "fill-opacity": 0,
	          stroke: "none",
	          opacity: 1,
	          cursor: "pointer"
	        });

	        var x = _raphaelContainerJs2["default"].rect(5, sidebar_inner, 32, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	          stroke: "none",
	          opacity: 1,
	          cursor: "pointer"
	        });
	        var title = _raphaelContainerJs2["default"].text(22, sidebar_inner + 15, firstLetter).attr({
	          "font-size": 15
	        });

	        _storage2["default"].mainMenuSet[item.systName].push(title);
	        var menuWrapperHeight = _startArraysArrSecondButtonJs2["default"][item.systName].length * 32 + 5 * _startArraysArrSecondButtonJs2["default"][item.systName].length;
	        /*console.log(menuWrapperHeight);*/
	        var menuWrapper = _raphaelContainerJs2["default"].rect(38, 0, 180, menuWrapperHeight, 5).attr({ fill: "hsb(360, 100, 100)",
	          stroke: "none",
	          opacity: 0,
	          cursor: "pointer"
	        });
	        menuWrapper.node.blockName = item.name;
	        menuWrapper.hide();
	        _storage2["default"].mainMenuSet[item.systName].push(menuWrapper);
	        _storage2["default"].mainMenuSet[item.systName].push(dummy).toFront();
	        _storage2["default"].mainMenuSet[item.systName].push(x);

	        dummy.node.id = item.name;

	        //Hover function
	        _storage2["default"].mainMenuSet[item.systName].hover(function () {
	          //
	          //Hover In function
	          _storage2["default"].storageOfSecondMenuSets[item.systName].show();
	          _storage2["default"].mainMenuSet[item.systName][1].show();
	        }, function (e) {
	          //Hover Out function
	          var objectWrap = _storage2["default"].mainMenuSet[item.systName][1];
	          var x = e.offsetX || e.clientX,
	              y = e.offsetY || e.clientY;

	          if (this.isPointInside(x, y) === false) {
	            _storage2["default"].storageOfSecondMenuSets[item.systName].hide();
	            objectWrap.hide();
	          }
	        });
	      });
	    }
	  }]);

	  return SideBar;
	})();

	exports["default"] = SideBar;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var R = Raphael("container", '100%', 850);

	exports["default"] = R;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var arrButton = [{ name: 'Effects', systName: 'effects' }, { name: 'Common Controls', systName: 'commonControls' }, { name: 'Distributor', systName: 'distributor' }]; //Array with buttons

	exports['default'] = arrButton;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SecondButton = {
	  effects: [{ name: "Stretcher", poi: false, fov: false, waves: false }, { name: "Repeater", poi: false, fov: false, waves: false }, { name: "Spiraler", poi: true, fov: false, waves: false }, { name: "Circular Waves", poi: true, fov: false, waves: true }, { name: "Meridian Waves", poi: true, fov: false, waves: true }, { name: "Flat Mirror", poi: true, fov: true, waves: false }, { name: "Curved Mirror", poi: true, fov: true, waves: false }, { name: "Magnifying Glass", poi: true, fov: true, waves: false }, { name: "Mobius Raw", poi: false, fov: false, waves: false }, { name: "Mobius Rotate", poi: false, fov: false, waves: false }, { name: "Mobius Zoom", poi: false, fov: false, waves: false }, { name: "Escher Droste", poi: true, fov: false, waves: false }, { name: "Rotator", poi: false, fov: false, waves: false }],
	  commonControls: [{ name: "POI", effectName: "POI", fullname: "Point of Interest" }, { name: "FOV", effectName: "FOV", fullname: "FOV" }, { name: "Waves", effectName: "Waves", fullname: "Waves" }],
	  distributor: [{ name: "Cube" }, { name: "Sphere" }, { name: "Random" }]
	};

	exports["default"] = SecondButton;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(4);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _mainBlockMainBlockJs = __webpack_require__(6);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	var _mainBlockDisributorBlocks = __webpack_require__(13);

	var _mainBlockDisributorBlocks2 = _interopRequireDefault(_mainBlockDisributorBlocks);

	var _sideBarJs = __webpack_require__(1);

	var _sideBarJs2 = _interopRequireDefault(_sideBarJs);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _helperFunctionsAddBlockWithDragIt = __webpack_require__(16);

	var _helperFunctionsAddBlockWithDragIt2 = _interopRequireDefault(_helperFunctionsAddBlockWithDragIt);

	var _helperFunctionsCheckCommonControlsTypeAbilitys = __webpack_require__(17);

	var _helperFunctionsCheckCommonControlsTypeAbilitys2 = _interopRequireDefault(_helperFunctionsCheckCommonControlsTypeAbilitys);

	var secondSideBarBlocks = (function () {
	  function secondSideBarBlocks() {
	    _classCallCheck(this, secondSideBarBlocks);
	  }

	  _createClass(secondSideBarBlocks, [{
	    key: "createStaticFunction",
	    value: function createStaticFunction(id, objName, storageName) {
	      var sidebar_inner = 5;
	      var Coords = document.getElementById(id);
	      var CoordX = Coords.getAttribute('x') * 1;
	      var CoordY = Coords.getAttribute('y') * 1;
	      _startArraysArrSecondButtonJs2["default"][objName].forEach(function (item, i) {
	        (0, _helperFunctionsCheckCommonControlsTypeAbilitys2["default"])(item);
	        if (i > 0) {
	          sidebar_inner = sidebar_inner + 34;
	        }

	        var dummy = _raphaelContainerJs2["default"].rect(58, sidebar_inner, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	          "fill-opacity": 0,
	          stroke: "none",
	          opacity: 1,
	          cursor: "pointer"
	        });
	        dummy.node.StaticGroupTipe = objName;
	        dummy.node.poi = item.poi;
	        dummy.node.fov = item.fov;
	        dummy.node.waves = item.waves;
	        dummy.node.id = item.name;

	        var x = _raphaelContainerJs2["default"].rect(58, sidebar_inner, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	          stroke: "none",
	          opacity: 1,
	          cursor: "pointer"
	        });

	        var title = _raphaelContainerJs2["default"].text(117, sidebar_inner + 15, item.name).attr({
	          "font-size": 15,
	          cursor: "pointer"
	        });
	        title.node.StaticGroupTipe = objName;

	        var secondBlockMenuMiniSet = _raphaelContainerJs2["default"].set();

	        secondBlockMenuMiniSet.push(x);
	        secondBlockMenuMiniSet.push(title);
	        secondBlockMenuMiniSet.push(dummy).toFront();
	        secondBlockMenuMiniSet.poi = item.poi;
	        secondBlockMenuMiniSet.fov = item.fov;
	        secondBlockMenuMiniSet.waves = item.waves;
	        _storage2["default"].storageOfSecondMenuSets[storageName].push(secondBlockMenuMiniSet);

	        secondBlockMenuMiniSet.simpleDraggable(storageName, item);
	        secondBlockMenuMiniSet.mousedown(function () {
	          //console.log(item);
	        });
	        /*secondBlockMenuMiniSet.mousedown(function(){
	          let cordY=x.attr("y");
	        if(this.node.StaticGroupTipe=='effects'){
	          if(GlobalStorage.lastEffectBlock.y===0){
	          cordY=5;
	        }
	        else{
	          cordY=GlobalStorage.lastEffectBlock.y+5;
	        }
	                      //--csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{
	                    //--let workBlock=new mainBlock().createBlockEffects(800,cordY,item,res);
	                    //--});
	            let res=item.name;//only for test in browser
	              let workBlock=new mainBlock().createBlockEffects(500,cordY,item,res);//only for test in browser
	        }
	        else if(this.node.StaticGroupTipe=='commonControls'){
	        let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
	        }
	        else if(this.node.StaticGroupTipe=='distributor'){
	        new distributorBlocks(300,cordY+150,item);
	            //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
	        }
	        });*/
	        _storage2["default"].storageOfSecondMenuSets[storageName].hide();
	      });
	    }
	  }, {
	    key: "createStaticEffects",
	    value: function createStaticEffects() {
	      this.createStaticFunction("Effects", "effects", "effects");
	    }
	  }, {
	    key: "createStaticCommonControls",
	    value: function createStaticCommonControls() {
	      this.createStaticFunction("Common Controls", "commonControls", "commonControls");
	    }
	  }, {
	    key: "createStaticDistributorControls",
	    value: function createStaticDistributorControls() {
	      this.createStaticFunction("Distributor", "distributor", "distributor");
	    }
	  }]);

	  return secondSideBarBlocks;
	})();

	exports["default"] = secondSideBarBlocks;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterfaceJs = __webpack_require__(7);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _helperFunctionsDraggableSetJs = __webpack_require__(8);

	var _helperFunctionsDraggableSetJs2 = _interopRequireDefault(_helperFunctionsDraggableSetJs);

	var _helperFunctionsDrawLineFromToJs = __webpack_require__(9);

	var _helperFunctionsDrawLineFromToJs2 = _interopRequireDefault(_helperFunctionsDrawLineFromToJs);

	//import deleteFunctions from "../helperFunctions/deleteFunction.js"*/

	var _helperFunctionsActiveBlockFunction = __webpack_require__(12);

	var _helperFunctionsActiveBlockFunction2 = _interopRequireDefault(_helperFunctionsActiveBlockFunction);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	// This class works with mainBlocks (Effects, commonControls, Distributor) and add eventListebers (click,mouseover etc) to them

	var mainBlock = (function () {
	  function mainBlock() {
	    _classCallCheck(this, mainBlock);
	  }

	  _createClass(mainBlock, [{
	    key: "createBlockEffects",
	    value: function createBlockEffects(x, y, item, blockEffectName) {

	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "effects";
	      workBlockSet.setEffectName = blockEffectName;
	      workBlockSet.baseEffect = item.name;
	      workBlockSet.poi = item.poi;
	      workBlockSet.fov = item.fov;
	      workBlockSet.waves = item.waves;
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      dummy.node.effectName = blockEffectName;
	      workBlockSet.push(dummy);

	      _storage2["default"].lastEffectBlock.y = y + 32;
	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, blockEffectName).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      title.node.effectName = blockEffectName;
	      workBlockSet.push(title);

	      workBlock.node.effectName = blockEffectName;
	      workBlockSet.push(workBlock);
	      dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// If you need left circle for this block uncomment it
	            circleLeft.node.effectName=item.name;
	            circleLeft.node.circleName="circleLeft";
	            workBlockSet.push(circleLeft);*/

	      var toType = function toType(obj) {
	        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	      };

	      _storage2["default"].historyOfObjects[blockEffectName] = workBlockSet;
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      workBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeEffectBlock(workBlockSet, blockEffectName);
	      });

	      workBlockSet.mouseover(function () {
	        //console.log("OVER");
	        //console.log(workBlockSet);
	        //console.log(this);
	        if (_storage2["default"].currentLine) {
	          var typeOfControll = _storage2["default"].currentLine.node.shortControlName;

	          if (_storage2["default"].currentLine && workBlockSet[typeOfControll] === false) {

	            workBlockSet.attr({ cursor: "no-drop" });
	          } else {
	            workBlockSet.attr({ cursor: "move" });
	          }
	        }

	        _storage2["default"].overMouseSet = workBlockSet; //Push this set into temporary object for compere reasone
	      });
	      workBlockSet.mouseout(function () {
	        //console.log("OUT");
	        workBlockSet.attr({ cursor: "move" });
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });
	      return workBlockSet;
	    }
	  }, {
	    key: "createBlockCommonControls",
	    value: function createBlockCommonControls(x, y, item, distributor, res) {

	      var thisItemName = item.name;
	      if (res) {
	        var index = res.length - 1;

	        var number = res.charAt(index) * 1;
	        if (number) {
	          thisItemName = item.name + " " + number;
	        }
	      }

	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "commonControls";
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 80, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      workBlockSet.push(dummy);
	      dummy.node.effectName = item.effectName;

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 80, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      workBlock.node.effectName = item.effectName;

	      var title = _raphaelContainerJs2["default"].text(x + 40, y + 15, thisItemName).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      title.node.effectName = item.effectName;

	      //console.log(item);
	      workBlockSet.shortName = item.effectName.toLowerCase();
	      workBlockSet.push(workBlock);
	      workBlockSet.push(title);

	      dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
	            circleLeft.node.effectName=item.name;
	            workBlockSet.push(circleLeft);
	            circleLeft.node.circleName="circleLeft";*/

	      if (distributor == false) {
	        var circleRight = _raphaelContainerJs2["default"].circle(x + 80, y + 15, 6);
	        circleRight.node.effectName = item.name;
	        workBlockSet.push(circleRight);
	        circleRight.node.circleName = "circleRight";
	      }

	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.thisCommonContrlName = res;
	      workBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      return workBlockSet;
	    }
	  }, {
	    key: "start",
	    value: function start() {

	      this.ox = this.attr("x");
	      this.oy = this.attr("y");
	      this.attr({ opacity: 1 });
	    }
	  }, {
	    key: "move",
	    value: function move(dx, dy) {

	      this.fx = this.ox + dx;
	      this.fy = this.oy + dy;
	      this.attr({ x: this.ox + dx, y: this.oy + dy });
	    }
	  }, {
	    key: "end",
	    value: function end() {
	      /*let context=this.context
	        arrButton.forEach((item,i)=>{
	        if(this.node.id==item)
	        createNewBlock(context.fx,context.fy,context,context.node.id);
	        });
	        context.attr({x: context.ox, y: context.oy});*/

	    }
	  }]);

	  return mainBlock;
	})();

	exports["default"] = mainBlock;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var csInterface = new CSInterface();

	exports["default"] = csInterface;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _drawLineFromToJs = __webpack_require__(9);

	var _drawLineFromToJs2 = _interopRequireDefault(_drawLineFromToJs);

	var _moveEffectsJs = __webpack_require__(11);

	var _moveEffectsJs2 = _interopRequireDefault(_moveEffectsJs);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	//Custom Raphael function which one properly handles dragging of Sets and handle all processes have binded with it

	Raphael.st.draggableSet = function (setObj, type) {

	  var thisSet = this;

	  var bbox = this.getBBox();
	  //this.curenLineLocal;
	  var moveFnc = function moveFnc(dx, dy) {
	    var _this = this;
	    if (this.node.nodeName != 'circle') {

	      this.fx = this.ox + dx;
	      this.fy = this.oy + dy;

	      thisSet.forEach(function (item, i) {
	        if (type == "effects") {

	          EffectMove(item, i, _this, dx, dy);
	        } else if (type == "commonControls") {

	          CommonControlsMove(item, i, _this, dx, dy);
	        }
	        if (type == "distributor") {
	          //console.log(item);
	          //console.log(i);
	          //console.log(_this);
	          DistributorRootMove(item, i, _this, dx, dy);
	        }
	      });
	    } else {
	      thisSet.forEach(function (item, i) {
	        if (item !== undefined && item.node !== null && item.node.nodeName == "path") {
	          new _drawLineFromToJs2["default"]().moveLine(_this, dx, dy);
	        } else if (item !== undefined && item.node === null) {
	          thisSet.splice(i, 1);
	        }
	      });
	    }
	  },
	      startFnc = function startFnc() {

	    var bBoxCoordSet = _raphaelContainerJs2["default"].set();

	    thisSet.forEach(function (item, i) {
	      //console.log(item);
	      if (item !== undefined && item.node !== null && item.node.nodeName != "path") {
	        bBoxCoordSet.push(item);
	      } else if (item !== undefined && item.node === null) {
	        //console.log(i);
	        thisSet.splice(i, 1);
	      }
	    });

	    if (this.node.nodeName != 'circle') {
	      //console.log(thisSet)
	      var setCoord = bBoxCoordSet.getBBox();
	      this.ox = setCoord.x;
	      this.oy = setCoord.y;
	    } else {
	      new _drawLineFromToJs2["default"]().startdrawLineFromTo(this, thisSet);
	    }
	  },
	      endFnc = function endFnc() {
	    // save a reference to the core implementation

	    if (type == "effects") {
	      /*console.log(thisSet[1].node.effectName);*/
	      (0, _moveEffectsJs2["default"])(thisSet);
	    }

	    //console.log(GlobalStorage.historyOfObjects);
	    new _drawLineFromToJs2["default"]().endDrawLine(this, thisSet);
	  };

	  this.drag(moveFnc, startFnc, endFnc);
	};
	/**/

	function EffectMove(item, i, _this, dx, dy) {
	  //console.log(item);
	  /*console.log(_this);*/
	  if (item.node.nodeName == 'circle') {
	    item.attr({ cx: _this.ox + dx + 1, cy: _this.oy + dy + 16 });
	  } else if (item.node.nodeName == 'rect') {
	    item.attr({ x: _this.ox + dx, y: _this.oy + dy });
	  } else if (item.node.nodeName == 'text') {
	    item.attr({ x: _this.ox + dx + 60, y: _this.oy + dy + 15 });
	  } else if (item.node.nodeName == 'path') {

	    var MX = item.attr().path[0][1];
	    var MY = item.attr().path[0][2];
	    item.attr("path", "M" + MX + " " + MY + "L" + (_this.ox + dx) + " " + (_this.oy + dy + 15));
	  }
	}

	function CommonControlsMove(item, i, _this, dx, dy) {
	  //console.log(item);
	  if (item.node.nodeName == 'circle') {
	    if (item.node.circleName == "circleLeft") {

	      item.attr({ cx: _this.ox + dx + 1, cy: _this.oy + dy + 16 });
	    } else if (item.node.circleName == "circleRight") {

	      item.attr({ cx: _this.ox + dx + 80, cy: _this.oy + dy + 16 });
	    }
	  } else if (item.node.nodeName == 'rect') {
	    item.attr({ x: _this.ox + dx, y: _this.oy + dy });
	  } else if (item.node.nodeName == 'text') {
	    item.attr({ x: _this.ox + dx + 40, y: _this.oy + dy + 15 });
	  } else if (item.node.nodeName == 'path') {
	    if (item.node.lineFromCyrcle == "circleRight") //moving line from right circle of common control  to Effect Block
	      {
	        var LX = item.attr().path[1][1];
	        var LY = item.attr().path[1][2];
	        item.attr("path", "M" + (_this.ox + dx + 80) + " " + (_this.oy + dy + 16) + "L" + LX + " " + LY);
	      } else if (item.node.lineFromCyrcle == "noCircleDistributor") //moving line from RootDistributorBlock  to common control
	      {
	        var MX = item.attr().path[0][1];
	        var MY = item.attr().path[0][2];
	        item.attr("path", "M" + MX + " " + MY + "L" + (_this.ox + dx) + " " + (_this.oy + dy + 15));
	      }
	  }
	}

	function DistributorRootMove(item, i, _this, dx, dy) {
	  /*console.log(_this);*/
	  if (item.node.nodeName == 'circle') {
	    item.attr({ cx: _this.ox + dx + 1, cy: _this.oy + dy + 16 });
	  } else if (item.node.nodeName == 'rect') {
	    item.attr({ x: _this.ox + dx, y: _this.oy + dy });
	  } else if (item.node.nodeName == 'text') {
	    item.attr({ x: _this.ox + dx + 80, y: _this.oy + dy + 32 });
	  } else if (item.node.nodeName == 'path') {
	    //moving line from this RootDistributorBlock  to common control
	    var LX = item.attr().path[1][1];
	    var LY = item.attr().path[1][2];
	    item.attr("path", "M" + (_this.ox + dx + 160) + " " + (_this.oy + dy + 32) + "L" + LX + " " + LY);
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	// Class which DRAWS CONNECTIONS line from/to blocks

	var drawLineFromTo = (function () {
	  function drawLineFromTo() {
	    _classCallCheck(this, drawLineFromTo);
	  }

	  _createClass(drawLineFromTo, [{
	    key: 'startdrawLineFromTo',
	    value: function startdrawLineFromTo(_this, thisSet) {
	      console.log(thisSet);
	      _this.ox = _this.attr("cx");
	      _this.oy = _this.attr("cy");
	      var connectPath = _raphaelContainerJs2['default'].path(["M", _this.ox, _this.oy, "L", _this.ox, _this.oy]).attr({ stroke: "blue" });
	      connectPath.node.lineFromCyrcle = _this.node.circleName; //Here we asign from which one circle go the Line (Right cyrcle or LeftCyrcle)
	      connectPath.node.shortControlName = thisSet.shortName;
	      connectPath.node.nameOfControl = thisSet.fullCommonContrlName; //name of current commonControls
	      _storage2['default'].currentLine = connectPath; //Send just created Line into GlobalStorage object currentLine
	      //console.log(GlobalStorage.currentLine);
	      thisSet.push(_storage2['default'].currentLine);
	    }
	  }, {
	    key: 'moveLine',
	    value: function moveLine(_this, dx, dy) {

	      _storage2['default'].currentLine.attr("path", 'M' + _this.ox + ' ' + _this.oy + 'L' + (_this.ox + dx - 5) + ' ' + (_this.oy + dy - 5));
	      /*var typeOfControll=GlobalStorage.currentLine.node.shortControlName;
	          if(GlobalStorage.overMouseSet&&GlobalStorage.currentLine&&GlobalStorage.overMouseSet[typeOfControll]===true){
	          console.log(GlobalStorage.overMouseSet[typeOfControll]);
	          GlobalStorage.currentLine.attr({cursor: "no-drop"});
	        }
	        else{
	          GlobalStorage.currentLine.attr({cursor: "default"});
	        }*/
	    }
	  }, {
	    key: 'endDrawLine',
	    value: function endDrawLine(_this, thisSet) {
	      if (_storage2['default'].currentLine) {
	        var typeOfControll = _storage2['default'].currentLine.node.shortControlName;

	        //console.log(GlobalStorage.overMouseSet);
	        if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null && _storage2['default'].overMouseSet[typeOfControll] === true) {
	          (function () {
	            // in this case the current Line has connection to a destination block
	            _storage2['default'].currentLine.attr({ stroke: "black" }); //add black color for already successfully connected line
	            var overMouseSet = _storage2['default'].overMouseSet;
	            var effectNameLocal = overMouseSet.setEffectName;
	            _storage2['default'].currentLine.LineFrom = _this.node.effectName; //add which effect has been connected with this line
	            _storage2['default'].currentLine.LineTo = effectNameLocal;
	            _storage2['default'].currentLine.baseEffect = overMouseSet.baseEffect; // base name of an effect

	            var propName = thisSet.fullCommonContrlName;
	            var thisPropName = thisSet.thisCommonContrlName;
	            var promise = new Promise(function (resolve) {
	              resolve(overMouseSet.push(_storage2['default'].currentLine).toBack()); //Push curent Line into destination set
	            }).then(function (resolve) {
	              return _storage2['default'].overMouseSet = null; //clear objects in global storage
	            }).then(function (res) {
	              _storage2['default'].currentLine = null; //clear objects in global storage
	              //Call to ExtScript

	              _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + propName + '","' + thisPropName + '")');

	              //
	            });
	          })();
	        } else if (_storage2['default'].overMouseSet === null && _storage2['default'].currentLine !== null) {
	            //in this case the current Line dosen't has a destination block
	            _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	            thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	            _storage2['default'].currentLine = null; //clear objects in global storage
	          } else if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null && _storage2['default'].overMouseSet[typeOfControll] === false) {
	              _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	              thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	              _storage2['default'].currentLine = null; //clear objects in global storage
	            }
	      }
	    }
	  }]);

	  return drawLineFromTo;
	})();

	exports['default'] = drawLineFromTo;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	// Global storage for ever functions. It uses to keep objects and variables which use as global.

	var GlobalStorage = {
	  initial: false,
	  storageOfSecondMenuSets: { //storage secondMenu items
	    effects: _raphaelContainerJs2["default"].set(),
	    commonControls: _raphaelContainerJs2["default"].set(),
	    distributor: _raphaelContainerJs2["default"].set()
	  },
	  Flags: {
	    effects: true,
	    commonControls: true,
	    distributor: true
	  },
	  mainMenuSet: {
	    effects: _raphaelContainerJs2["default"].set(),
	    commonControls: _raphaelContainerJs2["default"].set(),
	    distributor: _raphaelContainerJs2["default"].set()
	  },
	  lastEffectBlock: {
	    y: 0
	  },
	  prevActive: undefined,
	  historyOfObjects: {
	    itemArray: []
	  },
	  effectCreateDrag: {
	    active: false,
	    effectType: null,
	    distribitorMouseOver: null
	  },
	  distribitorObjectsStorage: {}, // Here we hold all Distributors sets
	  toDelete: undefined, //Temporary object which one contents object for deleting by pressing key "DELETE"
	  currentLine: null, //Temporary object with just created Line
	  overMouseSet: null //Temporary object what contents Set over which fire event mouseover
	};

	exports["default"] = GlobalStorage;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	// Function to check an order of Effects' blocks (by X coordinate)

	function moveEffects(thisSet) {
	  console.log(thisSet);
	  _storage2['default'].historyOfObjects.itemArray.length = 0;
	  var storageName = thisSet[1].node.effectName;
	  //GlobalStorage.historyOfObjects[storageName]=thisSet;
	  for (var key in _storage2['default'].historyOfObjects) {
	    if (key != "itemArray") {
	      _storage2['default'].historyOfObjects.itemArray.push(_storage2['default'].historyOfObjects[key]);
	    }
	  }

	  var promise = new Promise(function (resolve) {
	    //console.log(GlobalStorage.historyOfObjects);
	    var test = _.sortBy(_storage2['default'].historyOfObjects.itemArray, function (i) {
	      return i[1].attr("y"); // Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
	    });

	    resolve(test);
	  }).then(function (resolve) {
	    //console.log(resolve);
	    var mymap = _.map(resolve, function (i, num) {
	      return i[1].node.effectName; // create map of the array and get array of effects' names
	    });
	    return mymap;
	  }).then(function (mymap) {
	    //console.log(mymap)
	    var myIndex = _.indexOf(mymap, storageName); //get index of the curent effect in array. This Index is  the place of effect in order
	    myIndex += 1;
	    //console.log(myIndex);
	    //console.log(storageName);
	    _csInterface2['default'].evalScript('$._ext.moveEffectIndex("' + storageName + '","' + myIndex + '")', function (res) {});
	  });
	}
	exports['default'] = moveEffects;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(7);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var activeBlockFunctionsClass = (function () {
	  function activeBlockFunctionsClass() {
	    _classCallCheck(this, activeBlockFunctionsClass);
	  }

	  _createClass(activeBlockFunctionsClass, [{
	    key: "activeEffectBlock",
	    value: function activeEffectBlock(workBlockSet, effectName) {
	      _storage2["default"].toDelete = workBlockSet;
	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[1].node && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {

	        _storage2["default"].prevActive[0].attr({ stroke: "none" });
	      }

	      _csInterfaceJs2["default"].evalScript("$._ext.selectEffect(\"" + effectName + "\")", function (res) {//Selet effects in  After Effects native panel
	        //let remove=GlobalStorage.toDelete.remove()
	        //resolve(remove);
	      });
	      _storage2["default"].prevActive = workBlockSet;

	      _storage2["default"].toDelete[0].attr({ stroke: "red" });
	    }
	  }, {
	    key: "activeNotEffectBlock",
	    value: function activeNotEffectBlock(workBlockSet) {

	      _storage2["default"].toDelete = workBlockSet;
	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[1].node && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {

	        _storage2["default"].prevActive[1].attr({ stroke: "none" });
	      }

	      _storage2["default"].prevActive = workBlockSet;

	      _storage2["default"].toDelete[1].attr({ stroke: "red" });
	    }
	  }]);

	  return activeBlockFunctionsClass;
	})();

	exports["default"] = activeBlockFunctionsClass;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _mainBlockJs = __webpack_require__(6);

	var _mainBlockJs2 = _interopRequireDefault(_mainBlockJs);

	var _helperFunctionsHoverInBoundsJs = __webpack_require__(14);

	var _helperFunctionsHoverInBoundsJs2 = _interopRequireDefault(_helperFunctionsHoverInBoundsJs);

	var _helperFunctionsActiveBlockFunction = __webpack_require__(12);

	var _helperFunctionsActiveBlockFunction2 = _interopRequireDefault(_helperFunctionsActiveBlockFunction);

	var _helperFunctionsGeneratorId = __webpack_require__(15);

	var _helperFunctionsGeneratorId2 = _interopRequireDefault(_helperFunctionsGeneratorId);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	// Here we create Distributor blocks

	var distributorBlocks = (function () {
	  function distributorBlocks(x, y, item) {
	    var _this2 = this;

	    _classCallCheck(this, distributorBlocks);

	    this.genId = (0, _helperFunctionsGeneratorId2["default"])();
	    this.rootBlockSet = _raphaelContainerJs2["default"].set();
	    this.LineFromCoordsX = 0;
	    this.LineFromCoordsY = 0;

	    var promise = new Promise(function (resolve) {
	      resolve(_this2.createRootBlock(x, y, item));
	    });
	    promise.then(function (resolve) {
	      _this2.createPoiBlocks(item);
	    });
	  }

	  _createClass(distributorBlocks, [{
	    key: "createRootBlock",
	    value: function createRootBlock(x, y, item) {
	      var _this3 = this;

	      var genId = this.genId;
	      this.rootBlockSet.genId = this.genId;
	      _storage2["default"].distribitorObjectsStorage[this.genId] = {}; //create an object in storage with unic ID
	      //console.log(GlobalStorage.distribitorObjectsStorage);
	      var typeNode = "distributor";
	      var title = _raphaelContainerJs2["default"].text(x + 80, y + 32, item.name).attr({
	        cursor: "move",
	        "font-size": 15
	      });
	      title.node.distributorName = item.name;
	      this.rootBlockSet.push(title);
	      this.rootBlockSet.distributorType = item.name.toLowerCase();
	      var distributorType = this.rootBlockSet.distributorType;
	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 160, 64, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      workBlock.node.distributorName = item.name;
	      this.rootBlockSet.push(workBlock);
	      title.toFront();
	      this.LineFromCoordsX = workBlock.attr("x");
	      this.LineFromCoordsY = workBlock.attr("y");
	      this.rootBlockSet.draggableSet(this.rootBlockSet, typeNode);
	      this.rootBlockSet.mouseover(function () {
	        workBlock.attr({
	          stroke: "red"
	        });
	      });
	      this.rootBlockSet.mouseout(function () {
	        workBlock.attr({
	          stroke: "none"
	        });
	      });
	      this.rootBlockSet.hoverInBounds(hoverIn, hoverOut);
	      _storage2["default"].distribitorObjectsStorage[this.genId].rootBlockSet = this.rootBlockSet;
	      this.rootBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(_this3.rootBlockSet);
	      });

	      // Hover in function
	      function hoverIn() {
	        //console.log("IN");
	        /*this.animate({
	          r: 70
	        }, 500);*/
	        console.log(_storage2["default"].effectCreateDrag);
	        if (_storage2["default"].effectCreateDrag.active !== false) {
	          _storage2["default"].effectCreateDrag.distribitorMouseOver = genId;
	          //GlobalStorage.effectCreateDrag.distributorType=distributorType;
	          //console.log(this);
	          this.attr({ opacity: .1 });
	          //console.log(GlobalStorage.effectCreateDrag);
	        }
	        if (_storage2["default"].effectCreateDrag.poi === false) {
	          this.attr({ cursor: "no-drop" });
	        }
	      }

	      // Hover out function
	      function hoverOut() {
	        console.log("OUT");
	        //console.log(GlobalStorage.effectCreateDrag);
	        _storage2["default"].effectCreateDrag.distribitorMouseOver = null;
	        this.attr({ cursor: "move" });
	        //GlobalStorage.effectCreateDrag.active=false

	        //console.log("OUT");
	        /*this.animate({
	          r: 50
	        }, 500);*/
	        this.attr({ opacity: 1 });
	      }
	      /*this.rootBlockSet.mousedown(function(){
	        console.log(this);
	      })*/
	    }
	  }, {
	    key: "createPoiBlocks",
	    value: function createPoiBlocks(item) {
	      //console.log(item);
	      var control = {
	        name: "POI",
	        fullname: "Point of Interest",
	        effectName: "POI"
	      };

	      function forEachPOI(x, _this) {
	        for (var i = x + 1; --i;) {
	          var connectPath = _raphaelContainerJs2["default"].path(["M", _this.LineFromCoordsX + 160, _this.LineFromCoordsY + 32, "L", _this.LineFromCoordsX + 260, _this.LineFromCoordsY - 130 + i * 50 + 15]);
	          connectPath.node.lineFromCyrcle = "noCircleDistributor";
	          _this.rootBlockSet.push(connectPath);
	          var CommonControls = new _mainBlockJs2["default"]().createBlockCommonControls(_this.LineFromCoordsX + 260, _this.LineFromCoordsY - 130 + i * 50, control, true);
	          CommonControls.poiName = "poiOrder" + i;
	          CommonControls.parentId = _this.genId;
	          CommonControls.push(connectPath);
	          _storage2["default"].distribitorObjectsStorage[_this.genId]["poiOrder" + i] = CommonControls;
	          //console.log(GlobalStorage.distribitorObjectsStorage);
	        }
	      }

	      switch (item.name) {
	        case "Cube":
	          forEachPOI(6, this);
	          break;
	        case "Sphere":
	          forEachPOI(10, this);
	          break;
	        case "Random":
	          forEachPOI(5, this);
	          break;
	        default:
	          alert('Unknown Distributor');
	      }
	    }
	  }]);

	  return distributorBlocks;
	})();

	exports["default"] = distributorBlocks;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Raphael.st.hoverInBounds = function (inFunc, outFunc) {
		var inBounds = false;

		// Mouseover function. Only execute if `inBounds` is false.
		this.mouseover(function () {
			if (!inBounds) {
				inBounds = true;
				inFunc.call(this);
			}
		});

		// Mouseout function
		this.mouseout(function (e) {
			var x = e.offsetX || e.clientX,
			    y = e.offsetY || e.clientY;

			// Return `false` if we're still inside the element's bounds
			if (this.isPointInside(x, y)) return false;

			inBounds = false;
			outFunc.call(this);
		});

		return this;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	function generatorId() {
	   var S4 = function S4() {
	      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	   };
	   return S4();
	}

	exports["default"] = generatorId;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _mainBlockMainBlockJs = __webpack_require__(6);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	var _mainBlockDisributorBlocks = __webpack_require__(13);

	var _mainBlockDisributorBlocks2 = _interopRequireDefault(_mainBlockDisributorBlocks);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _moveEffectsJs = __webpack_require__(11);

	var _moveEffectsJs2 = _interopRequireDefault(_moveEffectsJs);

	// Here we handle drag of blocks from secondMenu and add blocks on the main workspace
	Raphael.st.simpleDraggable = function (storageName, item) {
	  //console.log(item);
	  //let itemH = item;
	  var initialX = undefined;
	  var me = this,
	      lx = 0,
	      ly = 0,
	      ox = 0,
	      oy = 0,
	      moveFnc = function moveFnc(dx, dy) {
	    lx = dx + ox;
	    ly = dy + oy;
	    me.transform('t' + lx + ',' + ly);
	  },
	      startFnc = function startFnc() {
	    initialX = me.getBBox().x;
	    //console.log(me[1].node.StaticGroupTipe);
	    if (me[1].node.StaticGroupTipe == 'effects') {
	      _storage2["default"].effectCreateDrag.active = true;
	      //console.log(me[2].node.poi);
	      _storage2["default"].effectCreateDrag.effectType = me[2].node.id;
	      _storage2["default"].effectCreateDrag.poi = me[2].node.poi;
	    }
	  },
	      endFnc = function endFnc() {

	    console.log();
	    //console.log(itemH);
	    if (_storage2["default"].effectCreateDrag.active === true && _storage2["default"].effectCreateDrag.distribitorMouseOver !== null) {
	      (function () {
	        //ADD effects blocks into DISTRIBITOR
	        console.log(_storage2["default"].effectCreateDrag.distribitorMouseOver);
	        var cordX = undefined;
	        var cordY = undefined;
	        var connectPath = undefined;
	        var workBlock = undefined;
	        //let item=itemH;

	        var genId = _storage2["default"].effectCreateDrag.distribitorMouseOver; //get an Unic Id of Distributor over which one mouse being
	        var distribitorObject = _storage2["default"].distribitorObjectsStorage[genId]; //get object with this key
	        var distributorType = distribitorObject.rootBlockSet.distributorType;
	        Object.keys(distribitorObject).map(function (objectKey, index) {
	          if (distribitorObject[objectKey].poiName) {
	            (function () {
	              //filter object priperty to get object with poiName only
	              var poiSet = distribitorObject[objectKey]; //get set with this key
	              //console.log(index);
	              _csInterface2["default"].evalScript("$._ext.applyEffectDistributor(\"" + item.name + "\",\"" + distributorType + "\"," + index + ")", function (res) {
	                // send data to extendScript

	                var promise = new Promise(function (resolve) {
	                  var value = distribitorObject[objectKey].poiName; // get name of object
	                  cordX = distribitorObject[objectKey][1].attr("x"); // get coordinates of correspond POI block
	                  cordY = distribitorObject[objectKey][1].attr("y"); // get coordinates of correspond POI block
	                  workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX + 130, cordY, item, res); // create effect block

	                  resolve(workBlock);
	                });
	                promise.then(function (resolve) {
	                  (0, _moveEffectsJs2["default"])(workBlock);
	                  connectPath = _raphaelContainerJs2["default"].path(["M", cordX + 80, cordY + 16, "L", cordX + 130, cordY + 16]); //create line between POI and effect blocks
	                  connectPath.node.lineFromCyrcle = "circleRight"; //asign name of the line for POI blocks
	                  resolve.push(connectPath);
	                  poiSet.push(connectPath);
	                  _storage2["default"].distribitorObjectsStorage[genId][resolve.setEffectName] = resolve;
	                  _storage2["default"].effectCreateDrag.active = false; //put effectCreateDrag.active in false. This means that an effect was successfully added to the dispatcher.
	                });
	              });

	              //workBlock=new mainBlock().createBlockEffects((cordX+130),cordY,item,res);//only for test in browser
	            })();
	          }
	        });
	      })();
	    }

	    _storage2["default"].effectCreateDrag.effectType = null;
	    var cordY = me.getBBox().y;
	    var cordX = me.getBBox().x;
	    //let item=itemH;

	    if (cordX - initialX < 100) {
	      cordX += 120;
	    } else {
	      cordX;
	    }

	    //console.log(me);

	    if (this.node.StaticGroupTipe == 'effects' && _storage2["default"].effectCreateDrag.distribitorMouseOver === null) {
	      // check if this block is effect and distribitorMouseOver is null if this is true that means we want add ordinar effect not assign effect to dispacther.

	      _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")", function (res) {
	        //push data into extend script

	        var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX, cordY, item, res);
	        (0, _moveEffectsJs2["default"])(workBlock);
	        _storage2["default"].effectCreateDrag.active = false; // close ability to add this effect to dispatcher
	      });

	      //-let res=item.name;//only for test in browser
	      //-let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,res);//only for test in browser
	    } else if (this.node.StaticGroupTipe == 'commonControls') {

	        console.log(item);
	        //console.log(this[0].id);
	        if (item.name == "POI") {

	          _csInterface2["default"].evalScript("$._ext.createControlPoint()", function (res) {
	            //push data into extend script

	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, cordY, item, false, res);
	          });
	        } else if (item.name == "FOV") {

	          _csInterface2["default"].evalScript("$._ext.createControlFOV()", function (res) {
	            //push data into extend script

	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, cordY, item, false, res);
	          });
	        } else if (item.name == "Waves") {
	          var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, cordY, item, false);
	        }
	      } else if (this.node.StaticGroupTipe == 'distributor') {
	        new _mainBlockDisributorBlocks2["default"](cordX, cordY, item);

	        //let workBlock=new mainBlock().createBlockCommonControls(500,cordY,item);
	      }

	    _storage2["default"].storageOfSecondMenuSets[storageName].hide(); //hide the menu panel
	    me.transform('t' + 0 + ',' + 0); //return a block from secondMenu to an enitial place
	  };

	  this.drag(moveFnc, startFnc, endFnc);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _csInterfaceJs = __webpack_require__(7);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	function CheckCommonContrlAbility(item) {
	  /*csInterface.evalScript(`$._ext.CheckCommonContrlAbility("${item.name}")`,(res)=>{
	    //console.log(res);
	    });*/
	}

	exports["default"] = CheckCommonContrlAbility;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	//Function which handgle all process with Deleting Blocks

	var deleteFunctions = window.addEventListener("contextmenu", function (event) {
	  event.preventDefault();
	  console.log(_storage2['default'].toDelete);
	  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
	  //csInterface.registerKeyEventsInterest(keyEventsInterest);
	  /*event.preventDefault();*/
	  //console.log(GlobalStorage.distribitorObjectsStorage[genId]);
	  if (_storage2['default'].toDelete != undefined /*&&event.keyCode==46*/) {

	      var promise = new Promise(function (resolve) {
	        _storage2['default'].overMouseSet = null;
	        if (_storage2['default'].toDelete.genId) {
	          (function () {
	            //Remove whole Distributor Blocks with all childs
	            var genId = _storage2['default'].toDelete.genId;
	            var distribitorObject = _storage2['default'].distribitorObjectsStorage[genId];
	            Object.keys(distribitorObject).map(function (objectKey, index) {
	              //console.log(objectKey);
	              if (_storage2['default'].historyOfObjects[objectKey]) {
	                // check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
	                delete _storage2['default'].historyOfObjects[objectKey]; //Remove effects from historyOfObjects
	                //Call to ExtScript

	                _csInterface2['default'].evalScript('$._ext.deleteEffect("' + objectKey + '")', function (res) {
	                  //Remove effects from After Effects
	                  var remove = _storage2['default'].toDelete.remove();
	                  resolve(remove);
	                });

	                //
	              }

	              _storage2['default'].distribitorObjectsStorage[genId][objectKey].remove(); //Remove this object from GlobalStorage.distribitorObjectsStorage
	            });
	          })();
	        } else if (_storage2['default'].toDelete.setEffectName) {
	            //Remove ordinar effects (not chained with Distributor)
	            var effectName = _storage2['default'].toDelete.setEffectName;
	            delete _storage2['default'].historyOfObjects[effectName];

	            //Call to ExtScript

	            _csInterface2['default'].evalScript('$._ext.deleteEffect("' + effectName + '")', function (res) {
	              //Remove effects from After Effects
	              var remove = _storage2['default'].toDelete.remove();
	              resolve(remove);
	            });

	            //
	          } else if (_storage2['default'].toDelete.fullCommonContrlName) {
	              //Remove CommonControls (not chained with Distributor)
	              var CommonContrlName = _storage2['default'].toDelete.fullCommonContrlName;
	              var thisCommonContrlName = _storage2['default'].toDelete.thisCommonContrlName;
	              var itemsArray = _storage2['default'].toDelete.items;
	              var arrayOfLinkedEffects = _.filter(itemsArray, function (i) {
	                //filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )
	                if (i.node.nodeName == "path") {

	                  return i.LineTo;
	                }
	              });

	              var arrayOfLinkedEffectsFiltered = _.map(arrayOfLinkedEffects, function (i) {
	                //get array with names of linked to this common control ffects
	                return i.LineTo;
	              });
	              var arrayOfLinkedEffectsString = arrayOfLinkedEffectsFiltered.join(';'); //transform array to string to pass in into "ext.deleteCommonControl" function
	              //Call to ExtScript

	              //console.log(GlobalStorage.toDelete.thisCommonContrlName);

	              _csInterface2['default'].evalScript('$._ext.deleteCommonControl("' + CommonContrlName + '","' + arrayOfLinkedEffectsString + '","' + thisCommonContrlName + '")', function (res) {

	                var remove = _storage2['default'].toDelete.remove();
	                resolve(remove);
	              });

	              //
	            }
	        //resolve ()
	      }).then(function (resolve) {

	        resolve = undefined;
	        _storage2['default'].toDelete = undefined;
	        _storage2['default'].prevActive = undefined;
	      });
	    }
	  /*workBlockSet.remove()*/
	});

	function deleteEffects() {}

	exports['default'] = deleteFunctions;
	module.exports = exports['default'];

/***/ }
/******/ ]);