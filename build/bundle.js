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
	          //Test event

	          var event = new CSEvent("com.adobe.cep.test", "APPLICATION");event.data = "This is a test!";_csInterface2["default"].dispatchEvent(event);
	          //
	          //Hover In function
	          _storage2["default"].storageOfSets[item.systName].show();
	          _storage2["default"].mainMenuSet[item.systName][1].show();
	        }, function (e) {
	          //Hover Out function
	          var objectWrap = _storage2["default"].mainMenuSet[item.systName][1];
	          var x = e.offsetX || e.clientX,
	              y = e.offsetY || e.clientY;

	          if (this.isPointInside(x, y) === false) {
	            _storage2["default"].storageOfSets[item.systName].hide();
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
	  commonControls: [{ name: "POI" }, { name: "FOV" }, { name: "Waves" }],
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
	        //GlobalStorage.mainMenuSet[objName].push(x);
	        var secondBlockMenuMiniSet = _raphaelContainerJs2["default"].set();
	        secondBlockMenuMiniSet.push(title);
	        secondBlockMenuMiniSet.push(x);

	        _storage2["default"].storageOfSets[storageName].push(secondBlockMenuMiniSet);
	        /*GlobalStorage.storageOfSets[storageName].push(x);*/

	        /*let line = R.path( ["M", 75, (sidebar_inner+16), "L", 35, (CoordY+12) ] );
	          GlobalStorage.storageOfSets[storageName].push(line);*/
	        secondBlockMenuMiniSet.mousedown(function () {
	          var cordY = x.attr("y");
	          console.log(this.node.StaticGroupTipe);
	          if (this.node.StaticGroupTipe == 'effects') {
	            /*test call to ExtScript*/

	            _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")");

	            /**/
	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(500, cordY, item);
	          } else if (this.node.StaticGroupTipe == 'commonControls') {
	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(500, cordY, item);
	          }
	        });
	        _storage2["default"].storageOfSets[storageName].hide();
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

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var mainBlock = (function () {
	  function mainBlock() {
	    _classCallCheck(this, mainBlock);
	  }

	  _createClass(mainBlock, [{
	    key: "createBlockEffects",
	    value: function createBlockEffects(x, y, item) {
	      //csInterface.evalScript(`$._ext.sendText("${this.node.effectName}")`);
	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "effects";

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, item.name).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      title.node.effectName = item.name;
	      workBlockSet.push(title);

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": ''
	      });
	      workBlock.node.effectName = item.name;
	      workBlockSet.push(workBlock);
	      title.toFront();

	      var circleLeft = _raphaelContainerJs2["default"].circle(x + 1, y + 15, 6);
	      circleLeft.node.effectName = item.name;
	      circleLeft.node.circleName = "circleLeft";
	      workBlockSet.push(circleLeft);

	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      workBlockSet.mouseover(function () {
	        console.log("OVER");
	        _storage2["default"].overMouseSet.push(workBlockSet); //Push this set into temporary object fro compere reasone
	      });
	      workBlockSet.mouseout(function () {
	        _storage2["default"].overMouseSet.length = 0; //Clear interim object if mouse get out
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

	      /*workBlockSet.drag(this.move,this.start,this.up);*/
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      console.log(this.node.effectName);
	      //csInterface.evalScript(`$._ext.sendText("${this.node.effectName}")`);
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

	var _storage = __webpack_require__(10);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(7);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	Raphael.st.draggableSet = function (setObj, type) {

	  var thisSet = this;
	  console.log();
	  var bbox = this.getBBox();
	  var curenLineLocal = undefined;
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
	        if (item.node.nodeName == "path") {

	          curenLineLocal.attr("path", "M" + _this.ox + " " + _this.oy + "L" + (_this.ox + dx) + " " + (_this.oy + dy));
	        }
	      });
	    };
	  },
	      startFnc = function startFnc() {

	    var bBoxCoordSet = _raphaelContainerJs2["default"].set();
	    thisSet.forEach(function (item, i) {
	      if (item.node.nodeName != "path") {
	        bBoxCoordSet.push(item);
	      }
	    });

	    if (this.node.nodeName != 'circle') {
	      var setCoord = bBoxCoordSet.getBBox();
	      this.ox = setCoord.x;
	      this.oy = setCoord.y;
	    } else {
	      this.ox = this.attr("cx");
	      this.oy = this.attr("cy");
	      var connectPath = _raphaelContainerJs2["default"].path(["M", this.ox, this.oy, "L", this.ox, this.oy]).attr({ stroke: "blue" });
	      curenLineLocal = connectPath;

	      thisSet.push(curenLineLocal);
	      _storage2["default"].currentLine.push(connectPath); //Send just created Line into GlobalStorage object currentLine
	      console.log(_storage2["default"].currentLine);
	      console.log(_storage2["default"].overMouseSet);
	    };

	    /*test call to ExtScript*/
	    /*var csInterface = new CSInterface();
	    
	      							csInterface.evalScript('$._ext.sendText("Circular Waves")');*/

	    /**/
	  },
	      endFnc = function endFnc() {

	    if (_storage2["default"].overMouseSet.length > 0 && curenLineLocal != undefined) {
	      (function () {
	        // in this case the current Line has connection to a destination block
	        _storage2["default"].overMouseSet[0].push(curenLineLocal); //Push curent Line into destination set
	        curenLineLocal.attr({ stroke: "black" });
	        _storage2["default"].currentLine.length = 0;
	        /*console.log(GlobalStorage.overMouseSet[0][1].node.effectName);*/
	        var effectNameLocal = _storage2["default"].overMouseSet[0][1].node.effectName;
	        var propName = "Point of Interest";
	        var promise = new Promise(function (resolve) {
	          resolve(_storage2["default"].overMouseSet[0].push(curenLineLocal));
	        }).then(function (resolve) {
	          return _storage2["default"].overMouseSet.length = 0;
	        }).then(function (res) {
	          curenLineLocal = undefined;
	          /*test call to ExtScript*/

	          _csInterface2["default"].evalScript("$._ext.addCommonControls(\"" + effectNameLocal + "\",\"" + propName + "\")");

	          /**/
	        });
	      })();
	    } else if (_storage2["default"].overMouseSet.length === 0 && curenLineLocal != undefined) {
	        //in this case the current Line dosen't has a destination block
	        curenLineLocal.remove(); //Remove Line when it dosen't has connection with other block
	        thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	        curenLineLocal = undefined;
	      }
	  };

	  this.drag(moveFnc, startFnc, endFnc);
	};
	/**/

	function EffectMove(item, i, _this, dx, dy) {

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
	    var LX = item.attr().path[1][1];
	    var LY = item.attr().path[1][2];
	    item.attr("path", "M" + (_this.ox + dx) + " " + (_this.oy + dy) + "L" + LX + " " + LY);
	  }
	}

	function startdrawLineFromTo(ox, oy) {
	  var connectPath = _raphaelContainerJs2["default"].path(["M", ox, oy, "L", ox, oy]);
	}

	function moveLine() {
	  console.log(this);
	}
	function endDrawLine() {}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(2);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	/*drawLineFromTo();*/

	// Script to generate projects of high complexity.

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

	var GlobalStorage = {
	  storageOfSets: {
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
	  lastEffectBlock: {},
	  currentLine: [], //Temporary object with just created Line
	  overMouseSet: [] //Temporary object what contents Set over which fire event mouseover
	};

	exports["default"] = GlobalStorage;
	module.exports = exports["default"];

/***/ }
/******/ ]);