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

	var _helperFunctionsDeleteFunctions = __webpack_require__(13);

	var _helperFunctionsDeleteFunctions2 = _interopRequireDefault(_helperFunctionsDeleteFunctions);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

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
	console.log(document.getElementsByTagName('svg')[0]);

	document.getElementsByTagName('svg')[0].addEventListener('click', function (e) {
	  console.log(e);
	  console.log(e.target.nodeName === 'svg');
	  if (e.target.nodeName === 'svg') {

	    if (_storage2["default"].toDelete != undefined) {
	      _storage2["default"].toDelete[1].attr({ stroke: "none" });
	    }

	    if (_storage2["default"].toDelete && _storage2["default"].prevActive != undefined && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {
	      console.log("YES");
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
	        _storage2["default"].mainMenuSet[item.systName].push(x);
	        x.node.id = item.name;

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
	  effects: [{ name: "Stretcher" }, { name: "Repeater" }, { name: "Spiraler" }, { name: "Circular Waves" }, { name: "Meridian Waves" }, { name: "Flat Mirror" }, { name: "Curved Mirror" }, { name: "Magnifying Glass" }, { name: "Mobius Raw" }, { name: "Mobius Rotate" }, { name: "Mobius Zoom" }, { name: "Escher Droste" }],
	  commonControls: [{ name: "POI", fullname: "Point of Interest" }, { name: "FOV", fullname: "FOV" }, { name: "Waves", fullname: "Waves" }],
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

	var _sideBarJs = __webpack_require__(1);

	var _sideBarJs2 = _interopRequireDefault(_sideBarJs);

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

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
	        if (i > 0) {
	          sidebar_inner = sidebar_inner + 34;
	        }

	        var x = _raphaelContainerJs2["default"].rect(58, sidebar_inner, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	          stroke: "none",
	          opacity: 1,
	          cursor: "pointer"
	        });
	        x.node.StaticGroupTipe = objName;
	        x.node.id = item.name;
	        var title = _raphaelContainerJs2["default"].text(117, sidebar_inner + 15, item.name).attr({
	          "font-size": 15,
	          cursor: "pointer"
	        });
	        title.node.StaticGroupTipe = objName;

	        var secondBlockMenuMiniSet = _raphaelContainerJs2["default"].set();
	        secondBlockMenuMiniSet.push(title);
	        secondBlockMenuMiniSet.push(x);

	        _storage2["default"].storageOfSecondMenuSets[storageName].push(secondBlockMenuMiniSet);

	        secondBlockMenuMiniSet.mousedown(function () {
	          var cordY = x.attr("y");

	          if (this.node.StaticGroupTipe == 'effects') {
	            /*test call to ExtScript*/
	            if (_storage2["default"].lastEffectBlock.y == 0) {
	              cordY = 5;
	            } else {
	              cordY = _storage2["default"].lastEffectBlock.y + 5;
	            }

	            _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")", function (res) {
	              var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(800, cordY, item, res);
	            });

	            /**/
	            //--let res=item.name;//only for test in browser
	            //--let workBlock=new mainBlock().createBlockEffects(500,cordY,item,res);//only for test in browser
	          } else if (this.node.StaticGroupTipe == 'commonControls') {
	              var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(500, cordY, item);
	            }
	        });
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

	/*import deleteFunctions from "../helperFunctions/deleteFunction.js"*/

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
	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, blockEffectName).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      title.node.effectName = blockEffectName;
	      workBlockSet.push(title);
	      _storage2["default"].lastEffectBlock.y = y + 32;
	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      workBlock.node.effectName = blockEffectName;
	      workBlockSet.push(workBlock);
	      title.toFront();

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
	        (0, _helperFunctionsActiveBlockFunction2["default"])(workBlockSet);
	      });
	      workBlockSet.mouseover(function () {
	        //console.log("OVER");
	        _storage2["default"].overMouseSet = workBlockSet; //Push this set into temporary object for compere reasone
	      });
	      workBlockSet.mouseout(function () {
	        //console.log("OUT");
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });
	    }
	  }, {
	    key: "createBlockCommonControls",
	    value: function createBlockCommonControls(x, y, item) {
	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "commonControls";
	      var title = _raphaelContainerJs2["default"].text(x + 40, y + 15, item.name).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      title.node.effectName = item.name;
	      workBlockSet.push(title);

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 80, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      workBlock.node.effectName = item.name;
	      workBlockSet.push(workBlock);
	      title.toFront();

	      var circleLeft = _raphaelContainerJs2["default"].circle(x + 1, y + 15, 6);
	      circleLeft.node.effectName = item.name;
	      workBlockSet.push(circleLeft);
	      circleLeft.node.circleName = "circleLeft";

	      var circleRight = _raphaelContainerJs2["default"].circle(x + 80, y + 15, 6);
	      circleRight.node.effectName = item.name;
	      workBlockSet.push(circleRight);
	      circleRight.node.circleName = "circleRight";

	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.click(function () {
	        (0, _helperFunctionsActiveBlockFunction2["default"])(workBlockSet);
	      });
	      /*workBlockSet.drag(this.move,this.start,this.up);*/
	      workBlockSet.draggableSet(workBlockSet, typeNode);
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
	      });
	    } else {
	      thisSet.forEach(function (item, i) {
	        if (item != undefined && item.node != null && item.node.nodeName == "path") {
	          new _drawLineFromToJs2["default"]().moveLine(_this, dx, dy);
	        } else if (item != undefined && item.node == null) {
	          thisSet.splice(i, 1);
	        }
	      });
	    };
	  },
	      startFnc = function startFnc() {

	    var bBoxCoordSet = _raphaelContainerJs2["default"].set();
	    thisSet.forEach(function (item, i) {
	      //console.log(item);
	      if (item != undefined && item.node != null && item.node.nodeName != "path") {
	        bBoxCoordSet.push(item);
	      } else if (item != undefined && item.node == null) {
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
	    };
	  },
	      endFnc = function endFnc() {
	    // save a reference to the core implementation

	    if (type == "effects") {
	      /*console.log(thisSet[1].node.effectName);*/
	      (0, _moveEffectsJs2["default"])(thisSet);
	      console.log("move");
	    }

	    //console.log(GlobalStorage.historyOfObjects);
	    new _drawLineFromToJs2["default"]().endDrawLine(this, thisSet);
	  };

	  this.drag(moveFnc, startFnc, endFnc);
	};
	/**/

	function EffectMove(item, i, _this, dx, dy) {
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
	    if (item.node.lineFromCyrcle == "circleRight") {
	      var LX = item.attr().path[1][1];
	      var LY = item.attr().path[1][2];
	      item.attr("path", "M" + (_this.ox + dx + 80) + " " + (_this.oy + dy + 16) + "L" + LX + " " + LY);
	    }
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
	      _this.ox = _this.attr("cx");
	      _this.oy = _this.attr("cy");
	      var connectPath = _raphaelContainerJs2['default'].path(["M", _this.ox, _this.oy, "L", _this.ox, _this.oy]).attr({ stroke: "blue" });
	      connectPath.node.lineFromCyrcle = _this.node.circleName; //Here we asign from which one circle go the Line (Right cyrcle or LeftCyrcle)
	      _storage2['default'].currentLine = connectPath; //Send just created Line into GlobalStorage object currentLine
	      thisSet.push(_storage2['default'].currentLine);
	    }
	  }, {
	    key: 'moveLine',
	    value: function moveLine(_this, dx, dy) {
	      _storage2['default'].currentLine.attr("path", 'M' + _this.ox + ' ' + _this.oy + 'L' + (_this.ox + dx) + ' ' + (_this.oy + dy));
	    }
	  }, {
	    key: 'endDrawLine',
	    value: function endDrawLine(_this, thisSet) {

	      if (_storage2['default'].overMouseSet != null && _storage2['default'].currentLine != null) {
	        (function () {
	          // in this case the current Line has connection to a destination block
	          _storage2['default'].currentLine.attr({ stroke: "black" });
	          var overMouseSet = _storage2['default'].overMouseSet;
	          var effectNameLocal = overMouseSet.setEffectName;
	          _storage2['default'].currentLine.LineFrom = _this.node.effectName;
	          _storage2['default'].currentLine.LineTo = effectNameLocal;
	          _storage2['default'].currentLine.baseEffect = overMouseSet.baseEffect;

	          var propName = thisSet.fullCommonContrlName;
	          var promise = new Promise(function (resolve) {
	            resolve(overMouseSet.push(_storage2['default'].currentLine).toBack()); //Push curent Line into destination set
	          }).then(function (resolve) {
	            return _storage2['default'].overMouseSet = null;
	          }).then(function (res) {
	            _storage2['default'].currentLine = null;
	            //Call to ExtScript

	            _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + propName + '")');

	            //
	          });
	        })();
	      } else if (_storage2['default'].overMouseSet === null && _storage2['default'].currentLine != null) {
	          //in this case the current Line dosen't has a destination block
	          _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	          thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	          _storage2['default'].currentLine = null;
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
	    console.log(_storage2['default'].historyOfObjects);
	    var test = _.sortBy(_storage2['default'].historyOfObjects.itemArray, function (i) {
	      return i[1].attr("y"); // Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
	    });

	    resolve(test);
	  }).then(function (resolve) {
	    console.log(resolve);
	    var mymap = _.map(resolve, function (i, num) {
	      return i[1].node.effectName; // create map of the array and get array of effects' names
	    });
	    return mymap;
	  }).then(function (mymap) {
	    console.log(mymap);
	    var myIndex = _.indexOf(mymap, storageName); //get index of the curent effect in array. This Index is  the place of effect in order
	    myIndex += 1;
	    console.log(myIndex);
	    console.log(storageName);
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(7);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	function activeBlockFunction(workBlockSet) {

	  _storage2["default"].toDelete = workBlockSet;
	  if (_storage2["default"].prevActive != undefined && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {

	    _storage2["default"].prevActive[1].attr({ stroke: "none" });
	  }
	  _storage2["default"].prevActive = workBlockSet;
	  _storage2["default"].toDelete[1].attr({ stroke: "red" });
	}

	exports["default"] = activeBlockFunction;
	module.exports = exports["default"];

/***/ },
/* 13 */
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
	        //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
	        //csInterface.registerKeyEventsInterest(keyEventsInterest);
	        /*event.preventDefault();*/

	        if (_storage2['default'].toDelete != undefined /*&&event.keyCode==46*/) {

	                        var promise = new Promise(function (resolve) {
	                                _storage2['default'].overMouseSet = null;

	                                if (_storage2['default'].toDelete.setEffectName) {
	                                        var effectName = _storage2['default'].toDelete.setEffectName;
	                                        delete _storage2['default'].historyOfObjects[effectName];

	                                        //Call to ExtScript

	                                        _csInterface2['default'].evalScript('$._ext.deleteEffect("' + effectName + '")', function (res) {
	                                                var remove = _storage2['default'].toDelete.remove();
	                                                resolve(remove);
	                                        });

	                                        //
	                                } else if (_storage2['default'].toDelete.fullCommonContrlName) {
	                                                var CommonContrlName = _storage2['default'].toDelete.fullCommonContrlName;
	                                                var itemsArray = _storage2['default'].toDelete.items;
	                                                var arrayOfLinkedEffects = _.filter(itemsArray, function (i) {
	                                                        if (i.node.nodeName == "path") {

	                                                                return i.LineTo;
	                                                        }
	                                                });

	                                                var arrayOfLinkedEffectsFiltered = _.map(arrayOfLinkedEffects, function (i) {
	                                                        return i.LineTo;
	                                                });
	                                                var arrayOfBaseEffects = _.map(arrayOfLinkedEffects, function (i) {
	                                                        return i.baseEffect;
	                                                });

	                                                console.log(arrayOfBaseEffects);

	                                                var arrayOfBaseEffectsString = arrayOfBaseEffects.join(';');
	                                                var arrayOfLinkedEffectsString = arrayOfLinkedEffectsFiltered.join(';');
	                                                //Call to ExtScript

	                                                _csInterface2['default'].evalScript('$._ext.deleteCommonControl("' + CommonContrlName + '","' + arrayOfLinkedEffectsString + '","' + arrayOfBaseEffectsString + '")', function (res) {

	                                                        var remove = _storage2['default'].toDelete.remove();
	                                                        resolve(remove);
	                                                });

	                                                //
	                                        }
	                                //resolve ()
	                        }).then(function (resolve) {

	                                resolve = undefined;
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