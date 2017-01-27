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

	var _sideBarSecondSideBarBlocksJs = __webpack_require__(4);

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

	var _secondSideBarBlocksJs = __webpack_require__(4);

	var _secondSideBarBlocksJs2 = _interopRequireDefault(_secondSideBarBlocksJs);

	var _storage = __webpack_require__(8);

	var _storage2 = _interopRequireDefault(_storage);

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
	      var _this = this;

	      var sidebar_inner = 5;
	      var self = this;
	      _startArraysArrButtonmainJs2["default"].forEach(function (item, i) {
	        if (i > 0) {
	          sidebar_inner = sidebar_inner + 34;
	        }
	        var firstLetter = item.charAt(0);
	        var title = _raphaelContainerJs2["default"].text(22, sidebar_inner + 15, firstLetter).attr({
	          "font-size": 15
	        });

	        var x = _raphaelContainerJs2["default"].rect(5, sidebar_inner, 32, 32).attr({ fill: "hsb(.8, 1, 1)",
	          stroke: "none",
	          opacity: 0.5,
	          cursor: "pointer"
	        });
	        x.node.id = item;
	        x.click(function () {
	          switch (x.node.id) {
	            case 'Effects':
	              _this.clickFunction('effects');
	              _this.checkerShowFunction('effects');
	              break;
	            case 'Common Controls':
	              _this.clickFunction('commonControls');
	              _this.checkerShowFunction('commonControls');
	              break;
	            case 'Distributor':
	              _this.clickFunction('distributor');
	              _this.checkerShowFunction('distributor');
	              break;
	            default:
	              console.log(x.node.id);
	          }
	        });
	      });
	    }
	  }, {
	    key: "clickFunction",
	    value: function clickFunction(Name) {
	      if (_storage2["default"].Flags[Name] == true) {
	        _storage2["default"].Flags[Name] = false;
	        _storage2["default"].storageOfSets[Name].show();
	      } else {
	        {
	          _storage2["default"].Flags[Name] = true;
	          _storage2["default"].storageOfSets[Name].hide();
	        }
	      }
	    }
	  }, {
	    key: "checkerShowFunction",
	    value: function checkerShowFunction(Name) {

	      var obj = _storage2["default"].Flags;
	      for (var prop in obj) {
	        if (prop != Name) {
	          _storage2["default"].Flags[prop] = true;
	          _storage2["default"].storageOfSets[prop].hide();
	        }
	      }
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
	var arrButton = ['Effects', 'Common Controls', 'Distributor']; //Array with buttons

	exports['default'] = arrButton;
	module.exports = exports['default'];

/***/ },
/* 4 */
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

	var _startArraysArrSecondButtonJs = __webpack_require__(5);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _mainBlockMainBlockJs = __webpack_require__(6);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	var _sideBarJs = __webpack_require__(1);

	var _sideBarJs2 = _interopRequireDefault(_sideBarJs);

	var _storage = __webpack_require__(8);

	var _storage2 = _interopRequireDefault(_storage);

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

	        var x = _raphaelContainerJs2["default"].rect(75, sidebar_inner, 32, 32).attr({ fill: "hsb(.8, 1, 1)",
	          stroke: "none",
	          opacity: 0.5,
	          cursor: "pointer"
	        });
	        x.node.id = item.name;
	        _storage2["default"].storageOfSets[storageName].push(x);

	        var line = _raphaelContainerJs2["default"].path(["M", 75, sidebar_inner + 16, "L", 35, CoordY + 12]);

	        _storage2["default"].storageOfSets[storageName].push(line);
	        x.mousedown(function () {
	          var cordY = x.attr("y");

	          var workBlock = new _mainBlockMainBlockJs2["default"]().createBlock(75, cordY, item);
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
	      this.createStaticFunction("Common Controls", "controls", "commonControls");
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
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SecondButton = {
	  effects: [{ name: "Stretcher" }, { name: "Repeater" }, { name: "Spiraler" }, { name: "Circular Waves" }, { name: "Meridian Waves" }, { name: "Flat Mirror" }, { name: "Curved Mirror" }, { name: "Magnifying Glass" }, { name: "Mobius Raw" }, { name: "Mobius Rotate" }, { name: "Mobius Zoom" }, { name: "Escher Droste" }],
	  controls: [{ name: "POI" }, { name: "FOV" }, { name: "Waves" }],
	  distributor: [{ name: "Cube" }, { name: "Sphere" }, { name: "Random" }]
	};

	exports["default"] = SecondButton;
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

	var mainBlock = (function () {
	  function mainBlock() {
	    _classCallCheck(this, mainBlock);
	  }

	  _createClass(mainBlock, [{
	    key: "createBlock",
	    value: function createBlock(x, y, item) {
	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 102, 32).attr({ fill: "hsb(.8, 1, 1)",
	        stroke: "none",
	        opacity: 0.5,
	        cursor: "move"
	      });
	      workBlock.node.effectName = item.name;
	      console.log(workBlock);
	      workBlock.drag(this.move, this.start, this.up);
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      console.log(this.node.effectName);
	      _csInterfaceJs2["default"].evalScript("$._ext.sendText(\"" + this.node.effectName + "\")");
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
	  }
	};

	exports["default"] = GlobalStorage;
	module.exports = exports["default"];

/***/ }
/******/ ]);