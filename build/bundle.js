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

	//import SideBar from "./sideBar/sideBar.js";
	//import secondSideBarBlocks from "./sideBar/secondSideBarBlocks.js";
	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _startArraysArrSecondButtonJs = __webpack_require__(1);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _helperFunctionsDeleteFunctions = __webpack_require__(4);

	var _helperFunctionsDeleteFunctions2 = _interopRequireDefault(_helperFunctionsDeleteFunctions);

	var _customEventsDeleteEventListenerJs = __webpack_require__(6);

	var _customEventsDeleteEventListenerJs2 = _interopRequireDefault(_customEventsDeleteEventListenerJs);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _helperFunctionsCheckBackEnd = __webpack_require__(7);

	var _helperFunctionsCheckBackEnd2 = _interopRequireDefault(_helperFunctionsCheckBackEnd);

	var _mainMenu = __webpack_require__(13);

	var _mainMenu2 = _interopRequireDefault(_mainMenu);

	var myReq = undefined;
	var status = false;
	var AnimationFrame = undefined;
	/**/
	/*window.localStorage.hey="one";*/
	//console.log(window.localStorage);
	var jsonString = "[{\"keyCode\": \t46},{\"keyCode\": 46,\"ctrlKey\": true}]";
	_csInterface2["default"].registerKeyEventsInterest(jsonString);

	//window.addEventListener('keydown',function(e){
	//alert("window:keydown detected");
	//});

	/*document.addEventListener('mouseleave',function(e){
	  let effectCheckArr=[]
	      setTimeout(function() {

	        csInterface.evalScript(`$._ext.checkChangesGlobal()`, (res)=>{
	            //console.log(GlobalStorage.historyOfObjects);
	            if(res&&res!="undefined"){
	              effectCheckArr=res.split(',');
	              if(GlobalStorage.effectCheckArr.length>effectCheckArr.length){
	                console.log(GlobalStorage.effectCheckArr);
	                console.log(effectCheckArr);
	                let promise = new Promise(
	                          (resolve) => {
	                            let blockToRemove=_.difference(GlobalStorage.effectCheckArr, effectCheckArr);
	                            GlobalStorage.effectCheckArr=effectCheckArr;
	                            GlobalStorage.blockToRemove=blockToRemove[0];
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
	              else{
	                console.log(GlobalStorage.effectCheckArr);
	                GlobalStorage.effectCheckArr=effectCheckArr;
	              }
	            }



	          //console.log(res);

	        });
	              requestAnimationFrame(startCheck);

	          }, 500);
	});*/

	/*document.addEventListener('mouseenter',function(e){
	       //alert("window:mouseenter detected");
	       cancelAnimationFrame(AnimationFrame);
	});*/
	//let path = "./test.js";
	//console.log();
	var systemPathOS = _csInterface2["default"].getSystemPath(SystemPath.EXTENSION); //path to files
	//let MantraPath=csInterface.getSystemPath(SystemPath.HOST_APPLICATION).replace("AfterFX.exe", "Plug-ins/Mettle/Mantra/");
	/*let readDirMantra = window.cep.fs.readdir(MantraPath);
	if(readDirMantra.err === 0)
	{
	  let arrFilesMantra=readDirMantra.data;
	  arrFilesMantra.forEach((file)=>{
	    let objMantra={}
	    let nameEffect=file.replace("Mantra ", "").replace(".aex", "");
	    if (nameEffect=="VR AE")
	    {
	      nameEffect="Mettle Mantra VR";
	    }
	    objMantra.name=nameEffect;
	    arrSecondButton.effects.push(objMantra);

	  });
	}*/
	var path = _csInterface2["default"].getSystemPath(SystemPath.EXTENSION) + "/presets/"; // here we get information from JSON files
	//console.log(path);
	var readDir = window.cep.fs.readdir(path);
	if (readDir.err === 0) {
	  var arrFiles = readDir.data;
	  arrFiles.forEach(function (file) {
	    //console.log(file);
	    var filePath = path + file;
	    var result = window.cep.fs.readFile(filePath);
	    if (result.err === 0) {
	      (function () {
	        //console.log(JSON.parse(result.data));
	        var filePresetObject = JSON.parse(result.data);
	        _startArraysArrSecondButtonJs2["default"].presets.push({ name: filePresetObject.name });
	        //GlobalStorage.arrOfPresetsEffects[filePresetObject.name]=filePresetObject.name;
	        //console.log(filePresetObject);
	        _storage2["default"].arrOfPresetsEffects[filePresetObject.name] = {};
	        _storage2["default"].arrOfPresetsEffects[filePresetObject.name].propsArray = [];
	        //console.log(GlobalStorage.arrOfPresetsEffects);
	        filePresetObject.arrOfPresetsEffects.forEach(function (index, i) {

	          //console.log(index);
	          //let arrIndex=[];
	          //console.log(filePresetObject.arrOfPresetsEffects[i]);

	          for (var key in index) {
	            //filePresetObject.arrOfPresetsEffects[i][key]=index[key];
	            //console.log(JSON.stringify(filePresetObject.arrOfPresetsEffects[i][key]));
	            //arrIndex.push(`{"${key}":${JSON.stringify(index[key])}}`);
	            //console.log(key);
	            var obj = _defineProperty({}, "\"" + key + "\"", index[key]);
	            //console.log(obj);
	            _storage2["default"].arrOfPresetsEffects[filePresetObject.name].propsArray.push(obj);
	            //GlobalStorage.arrOfPresetsEffects[filePresetObject.name].[`"${key}"`]=index[key];

	            //GlobalStorage.arrOfPresetsEffects[filePresetObject.name][index][key]=`${JSON.stringify(index[key])}`;
	            //console.log(`"${key}":${i[key]}`);
	          }
	          //console.log(GlobalStorage.arrOfPresetsEffects)
	          /*filePresetObject[index].forEach((i)=>{
	            console.log(key);
	              })*/

	          //console.log(arrIndex);
	          //console.log(GlobalStorage.arrOfPresetsEffects[filePresetObject.name]);
	          /*if(GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propEffect){
	            GlobalStorage.arrOfPresetsEffects[filePresetObject.name].propEffect[`${index}`]=arrIndex.join(";");
	          }*/
	        });
	      })();
	    } else {
	        //console.log("BAD");
	      }
	  });

	  //console.log(readDir.data);
	  //let readDir = window.cep.fs.readFile(path);
	} else {}
	  //console.log('FUCK')

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
	  /*function startCheck() {
	  
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
	  startCheck();*/
	  /**/
	var createMainMenu = new _mainMenu2["default"]();
	//let sideBarFraime= new SideBar().createBar();
	/*let promise= new Promise((resolve)=>{
		let sideBarInnerBlocks= new SideBar().createInnerBlocks();
	        resolve(sideBarInnerBlocks);
	      }).then((resolve)=>{
					let secondBarInnerBlocks= new secondSideBarBlocks().createStaticEffects();
				});*/

	//let sideBarInnerBlocks= new SideBar().createInnerBlocks();
	//let secondBarInnerBlocksEffects= new secondSideBarBlocks().createStaticEffects();
	//let secondBarInnerBlocksControls= new secondSideBarBlocks().createStaticCommonControls();
	//let secondBarInnerBlocksDistributor= new secondSideBarBlocks().createStaticDistributorControls();
	//let secondBarInnerBlocksPresets= new secondSideBarBlocks().createStaticPresets();
	var checkStart = new _helperFunctionsCheckBackEnd2["default"]();

	document.getElementsByTagName('svg')[0].addEventListener('click', function (e) {

	  if (e.target.nodeName === 'svg') {

	    if (_storage2["default"].toDelete != undefined) {
	      _storage2["default"].toDelete[1].attr({ stroke: "none" });
	    }

	    if (_storage2["default"].toDelete && _storage2["default"].prevActive && _storage2["default"].toDelete[1].node && _storage2["default"].prevActive[1].node && _storage2["default"].toDelete[1].node.effectName != _storage2["default"].prevActive[1].node.effectName) {

	      _storage2["default"].prevActive[1].attr({ stroke: "none" });
	    }

	    //GlobalStorage.toDelete=undefined;
	  }
	});

	/*csInterface.addEventListener("hover",
	  function (event)     {
	    console.log("type=" + event.type + ", data=" + event.data);
	  } ); // Anonymous function is the second parameter*/

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SecondButton = {
	  effects: [{ name: "Stretcher" }, //if you add new control (poi, fov, waves etc) don't forget add this into pages src\sideBar\secondSideBarBlocks.js into "dummy.node" propety and page src\mainBlock\mainBlock.js  createBlockEffects "workBlockSet" property
	  { name: "Repeater" }, { name: "Spiraler" }, { name: "Circular Waves" }, { name: "Meridian Waves" }, { name: "Flat Mirror" }, { name: "Curved Mirror" }, { name: "Magnifying Glass" }, { name: "Mobius Raw" }, { name: "Mobius Rotate" }, { name: "Mobius Zoom" }, { name: "Escher Droste" }, { name: "Rotator" }, { name: "Project 2D" }, { name: "Blur" }, { name: "Mettle Mantra VR" }],
	  commonControls: [{ name: "Point Control", effectName: "Point Control", fullname: "Point Control", shortName: "point" }, { name: "Angle Control", effectName: "Angle Control", fullname: "Angle Control", shortName: "angle" }, { name: "Slider Control", effectName: "Slider Control", fullname: "Slider Control", shortName: "slider" }],
	  distributor: [{ name: "Cube" }, { name: "Sphere" }, { name: "Random" }],
	  presets: [] //We push object {name: "SomeName"} from presets folder via window.cep.fs.readdir and window.cep.fs.readFile API

	};

	exports["default"] = SecondButton;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var csInterface = new CSInterface();

	exports["default"] = csInterface;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var R = Raphael("container", '100%', '100%');

	exports['default'] = R;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	//Function which handgle all process with Deleting Blocks

	var deleteFunctions = window.addEventListener("keydown", function (event) {
	  event.preventDefault();
	  //console.log(event);
	  //let keyEventsInterest=[{     "keyCode": 46  },  {     "keyCode": 123,     "ctrlKey": true  }];
	  //csInterface.registerKeyEventsInterest(keyEventsInterest);

	  //console.log(GlobalStorage.distribitorObjectsStorage[genId]);

	  if (_storage2['default'].toDelete != undefined && event.keyCode == 46) {

	    var promise = new Promise(function (resolve) {
	      _storage2['default'].overMouseSet = null;
	      if (_storage2['default'].toDelete.genId) {
	        (function () {
	          //Remove whole Distributor Blocks with all childs
	          var genId = _storage2['default'].toDelete.genId;
	          var distribitorObject = _storage2['default'].distribitorObjectsStorage[genId];
	          var remove = _storage2['default'].toDelete.remove();
	          Object.keys(distribitorObject).map(function (objectKey, index) {
	            //console.log(objectKey);
	            if (_storage2['default'].historyOfObjects[objectKey]) {
	              // check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
	              delete _storage2['default'].historyOfObjects[objectKey]; //Remove effects from historyOfObjects
	              //Call to ExtScript

	              _csInterface2['default'].evalScript('$._ext.deleteEffect("' + objectKey + '")', function (res) {
	                //Remove effects from After Effects
	                console.log("REMOVE");
	                var remove = _storage2['default'].toDelete;
	                resolve(remove);
	              });

	              //
	            }
	            if (objectKey != "countTypeOfEffects") {
	              _storage2['default'].distribitorObjectsStorage[genId][objectKey].remove(); //Remove this object from GlobalStorage.distribitorObjectsStorage
	            }
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
	            //Remove CommonControls
	            var CommonContrlName = _storage2['default'].toDelete.fullCommonContrlName;
	            var thisCommonContrlName = _storage2['default'].toDelete.thisCommonContrlName;
	            var itemsArray = _storage2['default'].toDelete.items;

	            var arrayOfLinkedEffects = _.filter(itemsArray, function (i) {
	              //filter array to get just paths to linked effects (names of linked effects are stored in property "LineTo" of path )

	              if (i.node.nodeName == "path" && !i.DistributorEffects) {
	                //console.log(i.LineTo);
	                return i.LineTo;
	              } else if (i.node.nodeName == "path" && i.DistributorEffects) {
	                return i.DistributorEffects;
	              }
	            });

	            /*let arrayOfLinkedEffectsFiltered=_.map(arrayOfLinkedEffects,(i)=>{//get array with names of linked to this common control ffects
	                if(i.DistributorEffects){
	                  return i.DistributorEffects.join(';')
	                }
	                return i.LineTo;
	              });*/
	            var arrayOfLinkedEffectsFiltered = _.map(arrayOfLinkedEffects, function (i) {
	              //get array with names of linked to this common control ffects
	              if (i.DistributorEffects) {
	                return i.DistributorEffects.join(';');
	              }
	              var jsonObject = undefined;
	              jsonObject = '{"Lineto":"' + i.LineTo + '","propertyOfEffect":"' + i.propertyOfEffect + '"}';
	              return jsonObject;
	            });

	            var arrayOfLinkedEffectsString = arrayOfLinkedEffectsFiltered.join(';'); //transform array to string to pass in into "ext.deleteCommonControl" function
	            //Call to ExtScript
	            //console.log(arrayOfLinkedEffectsString);
	            //console.log(GlobalStorage.toDelete.thisCommonContrlName);

	            switch (_storage2['default'].toDelete[0].node.effectName) {
	              case "Strength":
	                //console.log(thisCommonContrlName);
	                _csInterface2['default'].evalScript('$._ext.deleteCommonControl("Strength","' + arrayOfLinkedEffectsString + '","' + thisCommonContrlName + '")', function (res) {

	                  var remove = _storage2['default'].toDelete.remove();
	                  resolve(remove);
	                });
	                break;
	              default:
	                console.log(CommonContrlName);

	                console.log(thisCommonContrlName);

	                _csInterface2['default'].evalScript('$._ext.deleteCommonControl(\'' + arrayOfLinkedEffectsString + '\',"' + thisCommonContrlName + '")', function (res) {

	                  var remove = _storage2['default'].toDelete.remove();
	                  resolve(remove);
	                });
	            }

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	// Global storage for ever functions. It uses to keep objects and variables which use as global.

	var GlobalStorage = {
	  initial: false,
	  storageOfSecondMenuSets: { //storage secondMenu items
	    effects: _raphaelContainerJs2["default"].set(),
	    commonControls: _raphaelContainerJs2["default"].set(),
	    distributor: _raphaelContainerJs2["default"].set(),
	    presets: _raphaelContainerJs2["default"].set()
	  },
	  Flags: {
	    effects: true,
	    commonControls: true,
	    distributor: true,
	    presets: true
	  },
	  mainMenuSet: { //storage firsts (main) vertical line of menu
	    effects: _raphaelContainerJs2["default"].set(),
	    commonControls: _raphaelContainerJs2["default"].set(),
	    distributor: _raphaelContainerJs2["default"].set(),
	    presets: _raphaelContainerJs2["default"].set()
	  },
	  lastEffectBlock: {
	    y: 0
	  },
	  prevActive: undefined,
	  historyOfObjects: {
	    itemArray: []
	  },
	  undermostEffectBlock: {
	    y: 10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
	  },
	  undermostCommonControlBlock: {
	    y: 10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
	  },
	  effectCreateDrag: {
	    active: false,
	    effectType: null,
	    distribitorMouseOver: null
	  },
	  effectCheckArr: [],
	  blockToRemove: null,
	  arrOfPresetsEffects: {}, // storage for all array with presets' effects
	  distribitorObjectsStorage: {}, // Here we hold all Distributors sets
	  toDelete: undefined, //Temporary object which one contents object for deleting by pressing key "DELETE"
	  currentLine: null, //Temporary object with just created Line
	  overMouseSet: null, //Temporary object what contents Set over which fire event mouseover
	  overDistributorMouse: null //Temporary object what contents genId of DISTRIBUTOR need to add common control (FOV, Strange)
	};

	exports["default"] = GlobalStorage;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	//import csInterface from '../csInterface';
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var deleteBlockEvent = new Event('deleteBlockEvent');
	document.addEventListener('deleteBlockEvent', function (e) {
	  /*console.log(GlobalStorage.blockToRemove);
	  console.log(GlobalStorage.effectCheckArr);
	  console.log(this.effectCheckArr);*/
	  _storage2['default'].undermostEffectBlock.y = 10;
	  _storage2['default'].blockToRemove.forEach(function (i, num) {
	    console.log(_storage2['default'].blockToRemove[num]);
	    console.log(_storage2['default'].historyOfObjects);
	    _storage2['default'].historyOfObjects[_storage2['default'].blockToRemove[num]].remove();
	    delete _storage2['default'].historyOfObjects[_storage2['default'].blockToRemove[num]];
	  });

	  /*if(GlobalStorage.historyOfObjects[objectKey]){// check if object wicth this name exists in historyOfObjects (if exist this is EffectObject)
	    delete GlobalStorage.historyOfObjects[objectKey];//Remove effects from historyOfObjects
	    //Call to ExtScript
	                  csInterface.evalScript(`$._ext.deleteEffect("${objectKey}")`,(res)=>{//Remove effects from After Effects
	                    let remove=GlobalStorage.effectCheckArr.remove()
	                  resolve(remove);
	                });
	      //
	  }*/
	}, false);

	exports['default'] = deleteBlockEvent;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _mainBlockMainBlockJs = __webpack_require__(8);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(1);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(11);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _customEventsDeleteEventListenerJs = __webpack_require__(6);

	var _customEventsDeleteEventListenerJs2 = _interopRequireDefault(_customEventsDeleteEventListenerJs);

	var checkBackEnd = (function () {
	  function checkBackEnd() {
	    _classCallCheck(this, checkBackEnd);

	    this.status = false;
	    this.AnimationFrame;
	    this.AnimationFrameStart;
	    this.effectCheckArr = [];
	    this.startCheck();
	    this.mouseEnterEvent();
	    this.mouseLeaveEvent();
	  }

	  _createClass(checkBackEnd, [{
	    key: "startCheck",
	    value: function startCheck() {
	      var _this = this;

	      //function startCheckFunction(){
	      if (this.status != 'true') {
	        //check status if status is not true this means that no one layer is active and we restart function startCheck();
	        this.AnimationFrameStart = setTimeout(function () {

	          _csInterfaceJs2["default"].evalScript("$._ext. initialProjectTest()", function (res) {
	            //console.log('START FUNCTION');
	            //console.log(res);
	            _this.status = res; //get value for status from ExtendScript ('true' or 'false')
	          });

	          _this.startCheck();
	          //console.log('firstEvent');
	        }, 1000);
	      } else // in this case status is true and we can start to build Panel
	        {
	          document.getElementById("glass").style.display = "none";

	          this.createBlock(); // get gata about stage from backEnd and create block on Panel
	          this.functionCheckAE();
	        }
	      //};
	      //startCheckFunction();
	    }
	  }, {
	    key: "mouseEnterEvent",
	    value: function mouseEnterEvent() {
	      var _this2 = this;

	      document.addEventListener('mouseenter', function (e) {
	        //console.log(e);
	        //console.log("mouseEnterEvent");
	        //console.log(this);
	        clearTimeout(_this2.AnimationFrame);
	      });
	    }
	  }, {
	    key: "functionCheckAE",
	    value: function functionCheckAE() {
	      var _this3 = this;

	      this.AnimationFrame = setTimeout(function () {

	        _csInterfaceJs2["default"].evalScript("$._ext.checkChangesGlobal()", function (res) {
	          console.log(res);
	          //console.log(res===undefined);
	          if (res && res == 0) {
	            //CHECK if we use went on new Layer
	            var promise = new Promise(function (resolve) {
	              _raphaelContainerJs2["default"].clear();
	              _storage2["default"].historyOfObjects = {
	                itemArray: []
	              };
	              _storage2["default"].undermostEffectBlock.y = 10; //reset global y coodinate
	              _storage2["default"].undermostCommonControlBlock.y = 10;
	              resolve(_raphaelContainerJs2["default"]);
	            });
	            promise.then(function (resolve) {
	              //console.log('NEW LAYER');
	              _this3.createBlock();
	            });
	          } else if (res == 'false' || res === false) {
	            _this3.status = false;
	            clearTimeout(_this3.AnimationFrame);
	            _raphaelContainerJs2["default"].clear();
	            _storage2["default"].historyOfObjects = {
	              itemArray: []
	            };
	            _storage2["default"].undermostEffectBlock.y = 10; //reset global y coodinate
	            _storage2["default"].undermostCommonControlBlock.y = 10;
	            _this3.startCheck();
	          } else if (res & res == 100 || res == '100') {
	            // No one layer is selected
	            console.log('SILENCE IS GOLD');
	            _storage2["default"].historyOfObjects = {
	              itemArray: []
	            };
	            //GlobalStorage.undermostEffectBlock.y=10; //reset global y coodinate
	            //GlobalStorage.undermostCommonControlBlock.y=10;
	          } else if (res && res != "undefined") {
	              _this3.effectCheckArr = res.split(',');
	              if (res == "empty") {
	                _this3.effectCheckArr = [];
	              }
	              //console.log(this.effectCheckArr);
	              if (_storage2["default"].effectCheckArr.length > _this3.effectCheckArr.length) {
	                //console.log(GlobalStorage.effectCheckArr);
	                //console.log(this.effectCheckArr);
	                var promise = new Promise(function (resolve) {
	                  var blockToRemove = _.difference(_storage2["default"].effectCheckArr, _this3.effectCheckArr);
	                  _storage2["default"].effectCheckArr = _this3.effectCheckArr;
	                  _storage2["default"].blockToRemove = blockToRemove;
	                  //console.log(GlobalStorage.blockToRemove);
	                  resolve(blockToRemove);
	                });
	                promise.then(function (resolve) {
	                  document.dispatchEvent(_customEventsDeleteEventListenerJs2["default"]);
	                  //console.log(effectToRemove[0]);
	                });
	              } else if (_storage2["default"].effectCheckArr.length < _this3.effectCheckArr.length) {
	                  (function () {
	                    //console.log("Create");
	                    var cordX = undefined;
	                    var blockToCreate = _.difference(_this3.effectCheckArr, _storage2["default"].effectCheckArr);
	                    blockToCreate.forEach(function (i) {
	                      //console.log(i);
	                      _csInterfaceJs2["default"].evalScript("$._ext.findEffect(\"" + i + "\")", function (res) {
	                        //console.log(res);
	                        var startObject = JSON.parse(res);
	                        _this3.functionCreateBlocks(startObject, cordX);
	                      });
	                    });

	                    //console.log(GlobalStorage.effectCheckArr);
	                    //console.log(this.effectCheckArr);
	                    _storage2["default"].effectCheckArr = _this3.effectCheckArr;
	                    //console.log(res);
	                    //this.createBlock(res);
	                  })();
	                } else {
	                    console.log('RENAME');
	                    //console.log(GlobalStorage.historyOfObjects);
	                    //console.log(res);
	                    //console.log(GlobalStorage.effectCheckArr);
	                    //console.log(this.effectCheckArr);
	                    _this3.functionRename(_this3.effectCheckArr, _storage2["default"].effectCheckArr);
	                    _storage2["default"].effectCheckArr = _this3.effectCheckArr;
	                    //console.log('Equality')
	                  }
	            }

	          //console.log(res);
	        });
	        //console.log("I'm working");
	        _this3.functionCheckAE();
	      }, 1000);
	    }
	  }, {
	    key: "mouseLeaveEvent",
	    value: function mouseLeaveEvent() {
	      var _this4 = this;

	      document.addEventListener('mouseleave', function (e) {
	        //console.log("PreLeave");
	        //console.log(e.toElement);
	        if (e.toElement === null && _this4.status == 'true') {
	          //console.log(this.AnimationFrame);
	          //console.log("mouseLeaveEvent");
	          _this4.functionCheckAE();
	        }
	      });
	    }
	  }, {
	    key: "createBlock",
	    value: function createBlock() {
	      var _this5 = this;

	      var cordX = undefined;

	      _csInterfaceJs2["default"].evalScript("$._ext.getData()", function (res) {

	        //console.log('WORK');
	        //console.log(JSON.parse(res));
	        var startObject = JSON.parse(res);
	        if (startObject.hasVR === true) {
	          _this5.functionCreateBlocks(startObject, cordX);
	        }
	      });
	    }
	  }, {
	    key: "functionCreateBlocks",
	    value: function functionCreateBlocks(startObject, cordX) {
	      //let cordY=GlobalStorage.undermostEffectBlock.y;

	      //console.log(startObject.hasVR);
	      // chesk if layer has Mantra VR Effect (this effect is )

	      //console.log(startObject);
	      //console.log(startObject);
	      startObject.effectsObj.forEach(function (i, num) {
	        // Create EffectBlock
	        var itemArr = _startArraysArrSecondButtonJs2["default"].effects.filter(function (obj) {
	          //console.log(i);
	          return obj.name == i.baseEffect;
	        });
	        cordX = 250;
	        var item = itemArr[0];
	        var res = i;
	        //cordY+=50;
	        var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX, _storage2["default"].undermostEffectBlock.y += 50, item, res);
	        (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        //console.log(workBlock);
	        _storage2["default"].effectCheckArr.push(res);
	      });

	      //console.log(startObject.commonControlObj);
	      startObject.commonControlObj.forEach(function (i, num) {
	        //Create commonControlBlock
	        //console.log('Create commonControlBlock');
	        var itemArr = _startArraysArrSecondButtonJs2["default"].commonControls.filter(function (obj) {
	          return obj.fullname == i.baseEffect;
	        });
	        cordX = 100;
	        //console.log(i);
	        var item = itemArr[0];
	        //console.log(item);
	        var res = i.realName;
	        //cordY+=50;
	        //console.log('CREATE');
	        //console.log(res);
	        var workBlock = undefined;
	        if (res != 'Master') {
	          workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, _storage2["default"].undermostCommonControlBlock.y += 50, item, false, res);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        } else {
	          //console.log('CREATE MASTER');
	          cordX = 100;
	          //cordY=5;
	          workBlock = new _mainBlockMainBlockJs2["default"]().createBlockMaster(cordX, 5, item, false, res);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	        }

	        //console.log(workBlock);
	        _storage2["default"].effectCheckArr.push(res);
	      });
	      startObject.linesObj.forEach(function (i, num) {
	        //Create lines beetween commonControl Block and Effect Block
	        //console.log(i);
	        //console.log(GlobalStorage.historyOfObjects[i.LineFrom]);
	        //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("x"));
	        var LineFromX = _storage2["default"].historyOfObjects[i.LineFrom][0].attr("x");
	        //console.log(GlobalStorage.historyOfObjects[i.LineFrom][0].attr("y"));
	        var LineFromY = _storage2["default"].historyOfObjects[i.LineFrom][0].attr("y");
	        _storage2["default"].historyOfObjects[i.LineTo];
	        //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("x"));
	        var LineToX = _storage2["default"].historyOfObjects[i.LineTo][0].attr("x");
	        //console.log(GlobalStorage.historyOfObjects[i.LineTo][0].attr("y"));
	        var LineToY = _storage2["default"].historyOfObjects[i.LineTo][0].attr("y");
	        var connectPath = _raphaelContainerJs2["default"].path(["M", LineFromX + 120, LineFromY + 16, "L", LineToX, LineToY + 15]);
	        connectPath.LineFrom = i.LineFrom;
	        connectPath.LineTo = i.LineTo;
	        connectPath.propertyOfEffect = i.propertyOfEffect;
	        console.log(connectPath.propertyOfEffect);
	        connectPath.node.lineFromCyrcle = "circleRight";
	        _storage2["default"].historyOfObjects[i.LineFrom].push(connectPath);
	        _storage2["default"].historyOfObjects[i.LineTo].push(connectPath);
	        var itemArr = _startArraysArrSecondButtonJs2["default"].commonControls.filter(function (obj) {
	          return obj.fullname == i.baseEffect;
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
	  }, {
	    key: "functionRename",
	    value: function functionRename(array, others) {
	      var newNameArr = _.difference(array, others);
	      var oldNameArr = _.difference(others, array);
	      var newName = newNameArr[0];
	      var oldName = oldNameArr[0];

	      //console.log(newName);
	      //console.log(oldName);
	      //console.log(GlobalStorage.historyOfObjects[oldName]);
	      if (_storage2["default"].historyOfObjects[oldName]) {
	        //Rename EffectBlock
	        _storage2["default"].historyOfObjects[oldName][1].attr({ text: newName });
	        if (_storage2["default"].historyOfObjects[oldName].setEffectName) {
	          _storage2["default"].historyOfObjects[oldName].setEffectName = newName;
	          _storage2["default"].historyOfObjects[newName] = _storage2["default"].historyOfObjects[oldName];
	          delete _storage2["default"].historyOfObjects[oldName];
	          console.log(_storage2["default"].historyOfObjects[newName]);
	          _storage2["default"].historyOfObjects[newName].forEach(function (i) {
	            if (i.node.nodeName == 'path') {
	              i.LineTo = newName;
	            }
	          });
	        } else if (_storage2["default"].historyOfObjects[oldName].thisCommonContrlName) {
	          (function () {
	            //Rename CreateBlock
	            _storage2["default"].historyOfObjects[oldName].thisCommonContrlName = newName;
	            //let thisNewName=newName.replace(" Control", "");
	            var thisNewName = newName;
	            //console.log(GlobalStorage.historyOfObjects[oldName][2]);
	            _storage2["default"].historyOfObjects[oldName][2].attr({ text: thisNewName });
	            _storage2["default"].historyOfObjects[oldName].currentName = thisNewName;
	            _storage2["default"].historyOfObjects[thisNewName] = _storage2["default"].historyOfObjects[oldName];
	            delete _storage2["default"].historyOfObjects[oldName];
	            console.log(_storage2["default"].historyOfObjects[thisNewName]);
	            _storage2["default"].historyOfObjects[thisNewName].forEach(function (i) {
	              if (i.node.nodeName == 'path') {
	                i.LineFrom = thisNewName;
	              }
	            });
	          })();
	        }
	      }
	    }
	  }]);

	  return checkBackEnd;
	})();

	exports["default"] = checkBackEnd;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _helperFunctionsDraggableSetJs = __webpack_require__(9);

	var _helperFunctionsDraggableSetJs2 = _interopRequireDefault(_helperFunctionsDraggableSetJs);

	var _helperFunctionsDrawLineFromToJs = __webpack_require__(10);

	var _helperFunctionsDrawLineFromToJs2 = _interopRequireDefault(_helperFunctionsDrawLineFromToJs);

	/*import deleteFunctions from "../helperFunctions/deleteFunctions.js"*/
	//import deleteInOneClick from "../helperFunctions/deleteInOneClick.js"

	var _helperFunctionsActiveBlockFunction = __webpack_require__(12);

	var _helperFunctionsActiveBlockFunction2 = _interopRequireDefault(_helperFunctionsActiveBlockFunction);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	// This class works with mainBlocks (Effects, commonControls, Distributor) and add eventListebers (click,mouseover etc) to them

	var mainBlock = (function () {
	  function mainBlock() {
	    _classCallCheck(this, mainBlock);
	  }

	  _createClass(mainBlock, [{
	    key: "createBlockEffects",
	    value: function createBlockEffects(x, y, item, obj) {
	      //console.log("BOOOOOO");
	      //let objectEffect=JSON.parse(obj);
	      var blockEffectName = obj.name;
	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "effects";
	      workBlockSet.setEffectName = blockEffectName;
	      workBlockSet.baseEffect = item.name;
	      workBlockSet.point = obj.point;
	      workBlockSet.angle = obj.angle;
	      workBlockSet.slider = obj.slider;
	      /*workBlockSet.poi=item.poi;
	      workBlockSet.fov=item.fov;
	      workBlockSet.strength=item.strength;
	      workBlockSet.waves=item.waves;*/
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

	      //title.node.effectName=blockEffectName;
	      workBlockSet.push(title);

	      //workBlock.node.effectName=blockEffectName;
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
	      //console.log(GlobalStorage.historyOfObjects);
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      workBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeEffectBlock(workBlockSet, blockEffectName);
	      });

	      workBlockSet.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	        //console.log(GlobalStorage.currentLine);
	        //console.log("OVER");
	        //console.log(workBlockSet);
	        //console.log(this);
	        //workBlockSet.deleteInOneClick(workBlockSet);
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
	        _storage2["default"].toDelete = undefined;
	        workBlockSet.attr({ cursor: "move" });
	        _storage2["default"].overMouseSet = null; //Clear interim object if mouse get out
	      });
	      return workBlockSet;
	    }
	  }, {
	    key: "createBlockCommonControls",
	    value: function createBlockCommonControls(x, y, item, distributor, res) {

	      var thisItemName = res;
	      /*  if(res){
	          let index=res.length-1;
	            let number=res.charAt(index)*1;
	          if (number){
	          thisItemName=`${item.name} ${number}`;
	          }
	        }*/

	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "commonControls";
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ fill: "rgb(64, 64, 64)",
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      workBlockSet.push(dummy);
	      //dummy.node.effectName=item.effectName;

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ //fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": "commonControl"
	      });
	      //workBlock.node.effectName=item.effectName;

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, thisItemName).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      //title.node.effectName=item.effectName;

	      //console.log(item);
	      workBlockSet.shortName = item.shortName;
	      workBlockSet.currentName = thisItemName;
	      workBlockSet.push(workBlock);
	      workBlockSet.push(title);

	      dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
	            circleLeft.node.effectName=item.name;
	            workBlockSet.push(circleLeft);
	            circleLeft.node.circleName="circleLeft";*/

	      if (distributor == false) {
	        var circleRight = _raphaelContainerJs2["default"].circle(x + 120, y + 15, 6);
	        circleRight.node.effectName = item.name;
	        workBlockSet.push(circleRight);
	        circleRight.node.circleName = "circleRight";
	      }

	      _storage2["default"].historyOfObjects[res] = workBlockSet;
	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.thisCommonContrlName = res;
	      workBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      workBlockSet.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	      });
	      workBlockSet.mouseout(function () {
	        _storage2["default"].toDelete = undefined;
	      });
	      return workBlockSet;
	    }
	  }, {
	    key: "createBlockMaster",
	    value: function createBlockMaster(x, y, item, distributor, res) {

	      var thisItemName = res;
	      /*  if(res){
	          let index=res.length-1;
	            let number=res.charAt(index)*1;
	          if (number){
	          thisItemName=`${item.name} ${number}`;
	          }
	        }*/

	      var workBlockSet = _raphaelContainerJs2["default"].set();
	      var typeNode = "commonControls";
	      var dummy = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({
	        "fill-opacity": 0,
	        stroke: "none",
	        opacity: 1,
	        cursor: "pointer"
	      });
	      workBlockSet.push(dummy);
	      //dummy.node.effectName=item.effectName;

	      var workBlock = _raphaelContainerJs2["default"].rect(x, y, 120, 32, 5).attr({ //fill: "rgb(64, 64, 64)",
	        stroke: "none",
	        cursor: "move",
	        "class": "multiplier"
	      });
	      //workBlock.node.effectName=item.effectName;

	      var title = _raphaelContainerJs2["default"].text(x + 60, y + 15, thisItemName).attr({
	        cursor: "move",
	        "font-size": 15
	      });

	      //title.node.effectName=item.effectName;

	      //console.log(item);
	      workBlockSet.shortName = item.shortName;
	      workBlockSet.currentName = thisItemName;
	      workBlockSet.push(workBlock);
	      workBlockSet.push(title);

	      dummy.toFront();

	      /*let circleLeft=R.circle(x+1, y+15, 6);// Uncomment if you need Left circle
	            circleLeft.node.effectName=item.name;
	            workBlockSet.push(circleLeft);
	            circleLeft.node.circleName="circleLeft";*/

	      /*if(distributor==false){
	        let circleRight=R.circle(x+120, y+15, 6);
	              circleRight.node.effectName=item.name;
	              workBlockSet.push(circleRight);
	              circleRight.node.circleName="circleRight";
	      }*/

	      _storage2["default"].historyOfObjects[res] = workBlockSet;
	      workBlockSet.fullCommonContrlName = item.fullname;
	      workBlockSet.thisCommonContrlName = res;
	      workBlockSet.click(function () {
	        new _helperFunctionsActiveBlockFunction2["default"]().activeNotEffectBlock(workBlockSet);
	      });
	      workBlockSet.draggableSet(workBlockSet, typeNode);
	      workBlockSet.mouseover(function () {
	        _storage2["default"].toDelete = workBlockSet;
	      });
	      workBlockSet.mouseout(function () {
	        _storage2["default"].toDelete = undefined;
	      });
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _drawLineFromToJs = __webpack_require__(10);

	var _drawLineFromToJs2 = _interopRequireDefault(_drawLineFromToJs);

	var _moveEffectsJs = __webpack_require__(11);

	var _moveEffectsJs2 = _interopRequireDefault(_moveEffectsJs);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

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
	    //console.log(GlobalStorage.historyOfObjects);
	    // save a reference to the core implementation
	    //console.log(thisSet);
	    //if(type=="effects")
	    //{
	    /*console.log(thisSet[1].node.effectName);*/
	    (0, _moveEffectsJs2["default"])(thisSet);

	    //}

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

	      item.attr({ cx: _this.ox + dx + 120, cy: _this.oy + dy + 16 });
	    }
	  } else if (item.node.nodeName == 'rect') {
	    item.attr({ x: _this.ox + dx, y: _this.oy + dy });
	  } else if (item.node.nodeName == 'text') {
	    item.attr({ x: _this.ox + dx + 60, y: _this.oy + dy + 15 });
	  } else if (item.node.nodeName == 'path') {
	    if (item.node.lineFromCyrcle == "circleRight") //moving line from right circle of common control  to Effect Block
	      {
	        var LX = item.attr().path[1][1];
	        var LY = item.attr().path[1][2];
	        item.attr("path", "M" + (_this.ox + dx + 120) + " " + (_this.oy + dy + 16) + "L" + LX + " " + LY);
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
	  } else if (item.node.nodeName == 'path' && !item.DistributorEffects) {
	    //moving line from this RootDistributorBlock  to common control
	    var LX = item.attr().path[1][1];
	    var LY = item.attr().path[1][2];
	    item.attr("path", "M" + (_this.ox + dx + 160) + " " + (_this.oy + dy + 32) + "L" + LX + " " + LY);
	  } else if (item.node.nodeName == 'path' && item.DistributorEffects) {
	    var MX = item.attr().path[0][1];
	    var MY = item.attr().path[0][2];
	    item.attr("path", "M" + MX + " " + MY + "L" + (_this.ox + dx + 160) + " " + (_this.oy + dy + 32));
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	// Class which DRAWS CONNECTIONS line from/to blocks

	var drawLineFromTo = (function () {
	  function drawLineFromTo() {
	    _classCallCheck(this, drawLineFromTo);
	  }

	  _createClass(drawLineFromTo, [{
	    key: 'startdrawLineFromTo',
	    value: function startdrawLineFromTo(_this, thisSet) {
	      //console.log(thisSet);
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
	      //console.log(GlobalStorage.overMouseSe);
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
	      //console.log(GlobalStorage.overMouseSet);

	      if (_storage2['default'].currentLine) {
	        var typeOfControll = _storage2['default'].currentLine.node.shortControlName;
	        console.log(typeOfControll);

	        //console.log(GlobalStorage.currentLine);
	        //console.log(GlobalStorage.overMouseSet[typeOfControll]);

	        console.log(_storage2['default'].overMouseSet);
	        if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null && _storage2['default'].overMouseSet[typeOfControll]) {
	          (function () {
	            // in this case the current Line has connection to a destination block
	            console.log(_storage2['default'].currentLine);
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
	              //console.log(effectNameLocal);
	              //console.log(thisPropName);
	              var type = thisSet.shortName;
	              console.log(overMouseSet);
	              console.log(_storage2['default'].overMouseSet);
	              switch (thisSet.shortName) {
	                case "point":
	                  var pointArr = [];
	                  for (var key in overMouseSet.point) {
	                    pointArr.push(key);
	                  }
	                  _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + pointArr[0] + '","' + thisPropName + '","' + type + '")');
	                  break;
	                case "angle":
	                  var angleArr = [];
	                  for (var key in overMouseSet.angle) {
	                    angleArr.push(key);
	                  }
	                  _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + angleArr[0] + '","' + thisPropName + '","' + type + '")');
	                  break;
	                case "slider":
	                  var sliderArr = [];
	                  for (var key in overMouseSet.slider) {
	                    sliderArr.push(key);
	                  }
	                  _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + sliderArr[0] + '","' + thisPropName + '","' + type + '")');
	                  break;
	                case "Strength":
	                  _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","Strength","' + thisPropName + '")');
	                  break;
	                default:
	                  _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	                  thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	                  _storage2['default'].currentLine = null; //clear objects in global storage
	              }

	              //
	            });
	          })();
	        } else if (_storage2['default'].currentLine && _storage2['default'].overDistributorMouse) {
	            var genId = _storage2['default'].overDistributorMouse;
	            //console.log(GlobalStorage.distribitorObjectsStorage[genId]);
	            if (_storage2['default'].distribitorObjectsStorage[genId].countTypeOfEffects > 0) {
	              (function () {
	                var contains = function contains() {
	                  var flag = false;
	                  Object.keys(distribitorObject).forEach(function (Object) {
	                    if (Object != "countTypeOfEffects" && Object != "rootBlockSet" && !distribitorObject[Object].shortName && distribitorObject[Object][thisSet.shortName] === true) {
	                      //if(distribitorObject[Object][thisSet.shortName]===true){
	                      flag = true;
	                      //}
	                      DistributorEffects.push(Object);
	                      //console.log(Object);
	                      //console.log(thisSet.currentName);
	                      var effectNameLocal = distribitorObject[Object].setEffectName;
	                      var propName = thisSet.fullCommonContrlName;
	                      var thisPropName = thisSet.thisCommonContrlName;
	                      //console.log(thisSet.shortName);
	                      switch (thisSet.shortName) {
	                        case 'fov':
	                          _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","' + propName + '","' + thisPropName + '")');
	                          break;
	                        case 'strength':
	                          //console.log('strength');
	                          _csInterface2['default'].evalScript('$._ext.addCommonControls("' + effectNameLocal + '","Strength","' + thisPropName + '")');
	                          break;
	                        //default:

	                      }
	                    }
	                  });
	                  return flag;
	                };

	                var distribitorObject = _storage2['default'].distribitorObjectsStorage[genId];
	                var DistributorEffects = [];

	                var checkDistrEffects = contains();
	                if (checkDistrEffects === true) {

	                  _storage2['default'].currentLine.DistributorEffects = DistributorEffects;
	                  _storage2['default'].currentLine.attr({ stroke: "black" }); //add black color for already successfully connected line
	                  //overMouseSet.push(GlobalStorage.currentLine).toBack()
	                  _storage2['default'].currentLine.toBack();
	                  _storage2['default'].distribitorObjectsStorage[genId].rootBlockSet.push(_storage2['default'].currentLine);
	                  _storage2['default'].currentLine = null;
	                  _storage2['default'].overDistributorMouse = null;
	                } else {
	                  _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	                  thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	                  _storage2['default'].currentLine = null;
	                  //GlobalStorage.overDistributorMouse=null;
	                }
	              })();
	            } else {
	                _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	                thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	                _storage2['default'].currentLine = null;
	              }
	            //console.log(GlobalStorage.distribitorObjectsStorage[genId].countTypeOfEffects);
	          } else if (_storage2['default'].overMouseSet === null && _storage2['default'].currentLine !== null) {
	              //in this case the current Line dosen't has a destination block
	              _storage2['default'].currentLine.remove(); //Remove Line when it dosen't has connection with other block
	              thisSet.splice(thisSet.length - 1, 1); //Remove last element (path from set)
	              _storage2['default'].currentLine = null; //clear objects in global storage
	            } else if (_storage2['default'].overMouseSet !== null && _storage2['default'].currentLine !== null) {
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	// Function to check an order of Effects' blocks (by X coordinate)

	function moveEffects(thisSet) {
	  //console.log(thisSet);
	  //console.log(thisSet)
	  //console.log(JSON.stringify(R.canvas.innerHTML));
	  //console.log(GlobalStorage.historyOfObjects);
	  //console.log(JSON.stringify(GlobalStorage.historyOfObjects));
	  _storage2['default'].historyOfObjects.itemArray.length = 0;
	  var storageName = undefined;
	  if (thisSet.setEffectName) {
	    storageName = thisSet.setEffectName;
	    //console.log(storageName);
	  } else if (thisSet.thisCommonContrlName) {
	      storageName = thisSet.thisCommonContrlName;
	      //console.log(storageName);
	    }
	  //GlobalStorage.historyOfObjects[storageName]=thisSet;
	  for (var key in _storage2['default'].historyOfObjects) {
	    if (key != "itemArray") {
	      var thisBlockEffectName = undefined;
	      if (_storage2['default'].historyOfObjects[key].setEffectName) {
	        thisBlockEffectName = _storage2['default'].historyOfObjects[key].setEffectName;
	      } else if (_storage2['default'].historyOfObjects[key].thisCommonContrlName) {
	        thisBlockEffectName = _storage2['default'].historyOfObjects[key].thisCommonContrlName;
	      }
	      var attrY = _storage2['default'].historyOfObjects[key][0].attr("y");
	      var obj = { name: thisBlockEffectName, y: attrY };
	      _storage2['default'].historyOfObjects.itemArray.push(obj);
	    }
	  }

	  var promise = new Promise(function (resolve) {
	    //console.log(GlobalStorage.historyOfObjects);
	    var test = _.sortBy(_storage2['default'].historyOfObjects.itemArray, function (i) {

	      return i.y; // Y is point relatively which we are sorting our array. So we've sort array of effects by Y coordinate of rectangle.
	    });

	    //  GlobalStorage.undermostEffectBlock.y=test[test.length-1][1].attr("y");//this is the y coordinate of the lowermost blockEffect
	    //console.log(test);
	    resolve(test);
	  }).then(function (resolve) {
	    //console.log(resolve);
	    var mymap = _.map(resolve, function (i, num) {
	      //if(i.name){
	      return i.name; // create map of the array and get array of effects' names
	      //  }
	      //  else if(i.thisCommonContrlName){
	      //  console.log(i.thisCommonContrlName);
	      //return i.thisCommonContrlName;// create map of the array and get array of effects' names
	      //}
	    });
	    return mymap;
	  }).then(function (mymap) {
	    //console.log(mymap)
	    var myIndex = _.indexOf(mymap, storageName); //get index of the curent effect in array. This Index is  the place of effect in order
	    myIndex += 1;
	    //console.log(myIndex);
	    //console.log(storageName);
	    _csInterface2['default'].evalScript('$._ext.moveEffectIndex("' + storageName + '","' + myIndex + '")', function (res) {
	      console.log(_storage2['default'].effectCheckArr);
	      console.log(_storage2['default'].historyOfObjects.itemArray);
	      _storage2['default'].effectCheckArr = _storage2['default'].historyOfObjects.itemArray.map(function (i) {
	        return i.name;
	      });
	      console.log(_storage2['default'].effectCheckArr);
	    });
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

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var activeBlockFunctionsClass = (function () {
	  function activeBlockFunctionsClass() {
	    _classCallCheck(this, activeBlockFunctionsClass);
	  }

	  _createClass(activeBlockFunctionsClass, [{
	    key: "activeEffectBlock",
	    value: function activeEffectBlock(workBlockSet) {
	      //GlobalStorage.toDelete=workBlockSet;
	      var effectName = workBlockSet.setEffectName;
	      //console.log(effectName);
	      if (_storage2["default"].prevActive) {
	        //console.log(GlobalStorage.prevActive[0].id);
	      }

	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[0] && workBlockSet[0].id != _storage2["default"].prevActive[0].id) {

	        _storage2["default"].prevActive[0].attr({ stroke: "none" });
	        if (_storage2["default"].prevActive.thisCommonContrlName) {
	          var controlName = _storage2["default"].prevActive.thisCommonContrlName;
	          _csInterfaceJs2["default"].evalScript("$._ext.unSelectCommonControl(\"" + controlName + "\")", function (res) {//Unselect commonControl in  After Effects native panel
	            //let remove=GlobalStorage.toDelete.remove()
	            //resolve(remove);
	          });
	        }
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

	      //GlobalStorage.toDelete=workBlockSet;
	      if (_storage2["default"].prevActive) {
	        console.log(_storage2["default"].prevActive);
	      }
	      if (_storage2["default"].prevActive && _storage2["default"].prevActive[0] && workBlockSet[0].id != _storage2["default"].prevActive[0].id) {

	        _storage2["default"].prevActive[0].attr({ stroke: "none" });
	        if (_storage2["default"].prevActive.thisCommonContrlName) {
	          var controlName = _storage2["default"].prevActive.thisCommonContrlName;
	          _csInterfaceJs2["default"].evalScript("$._ext.unSelectCommonControl(\"" + controlName + "\")", function (res) {//Selet effects in  After Effects native panel
	            //let remove=GlobalStorage.toDelete.remove()
	            //resolve(remove);
	          });
	        }
	      }
	      if (workBlockSet.thisCommonContrlName) {
	        var controlName = workBlockSet.thisCommonContrlName;
	        _csInterfaceJs2["default"].evalScript("$._ext.selectCommonControl(\"" + controlName + "\")", function (res) {//Selet effects in  After Effects native panel
	          //let remove=GlobalStorage.toDelete.remove()
	          //resolve(remove);
	        });
	      }

	      _storage2["default"].prevActive = workBlockSet;

	      _storage2["default"].toDelete[0].attr({ stroke: "red" });
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

	var _startArraysArrButtonMainJs = __webpack_require__(14);

	var _startArraysArrButtonMainJs2 = _interopRequireDefault(_startArraysArrButtonMainJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(1);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _mainBlockMainBlockJs = __webpack_require__(8);

	var _mainBlockMainBlockJs2 = _interopRequireDefault(_mainBlockMainBlockJs);

	//import secondSideBarBlocks from "./secondSideBarBlocks.js";

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterface = __webpack_require__(2);

	var _csInterface2 = _interopRequireDefault(_csInterface);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(11);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var _mainBlockPresetsBlocksJs = __webpack_require__(15);

	var _mainBlockPresetsBlocksJs2 = _interopRequireDefault(_mainBlockPresetsBlocksJs);

	var mainMenu = (function () {
	  function mainMenu() {
	    _classCallCheck(this, mainMenu);

	    var wrapUl = $('<ul>', {
	      id: "nav"
	    });
	    //blocks of First Menue
	    var effects = $('<li>', {
	      id: 'effects'
	    }).append("<div class='bage-small'><p>E</p></div>");
	    var effectsUl = effects.append("<ul class='subs'></ul>");
	    wrapUl.append(effects);

	    var commonControls = $('<li>', {
	      id: 'commonControls'
	    }).append("<div class='bage-small'><p>C</p></div>");
	    var commonControlsUl = commonControls.append("<ul class='subs'></ul>");
	    wrapUl.append(commonControls);

	    /*let distributors=$('<li>',{
	      id:'distributor'
	    }).append("<div class='bage-small disable'><p>D</p></div>");
	    let distributorsUl=distributors.append("<ul class='subs disable'></ul>");
	    wrapUl.append(distributors);*/

	    var multipliers = $('<li>', {
	      id: 'multiplier'
	    }).append("<div class='bage-small multipliers disable'><p>M</p></div>");
	    var multiplierUl = multipliers.children().append("<ul class='subs disable'></ul>");
	    wrapUl.append(multipliers);

	    var presets = $('<li>', {
	      id: 'presets'
	    }).append("<div class='bage-small presets'><p>P</p></div>");
	    var presetsUl = presets.children().append("<ul class='subs'></ul>");
	    wrapUl.append(presets);

	    //blocks of second Menue with draggable
	    _startArraysArrSecondButtonJs2["default"].effects.forEach(function (item, i) {
	      var effectLi = $('<li>', {
	        id: item.name,
	        text: item.name,
	        dataPoi: item.poi
	      }).draggable({
	        start: function start(event, ui) {
	          _storage2["default"].effectCreateDrag.active = true;
	          _storage2["default"].effectCreateDrag.effectType = ui.helper.attr("id"); //put Effect Type into GlobalStorage.effectCreateDrag.effectType to add a lot of effects wuth current type into Distributor
	          _storage2["default"].effectCreateDrag.poi = ui.helper.attr("datapoi"); //crete object with poi value TRUE or FALSE to check if we can add this effect into distributor
	          $(this).parent().fadeTo(0, 1); // lock opacity in 1 to keep div visible
	          $(this).parent().css('top', 0); //lock top coordinate of menu to keep menu visible
	          $(this).parent().css('left', 50); //lock left coordinate of menu to keep menu visible
	        },
	        stop: function stop(event, ui) {
	          var cordX = this.getBoundingClientRect().left; //get real positio of X
	          var cordY = this.getBoundingClientRect().top; //get real positio of Y
	          _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")", function (res) {
	            //push data into extend script
	            var obj = JSON.parse(res);
	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX, cordY, item, obj);
	            (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	            _storage2["default"].effectCreateDrag.active = false; // close ability to add this effect to dispatcher
	          });
	          $(this).parent().fadeTo(0, 0); // unlock opacity and turn it in 0 to hide menu
	          $(this).parent().removeAttr('style'); //remove style options to rest in into intitial (see css file) style
	          $(this).css('left', 0).css('top', 0);
	          //$(this).parent().css('left',-9999);
	        }
	      });

	      effectLi.click(function () {
	        var cordX = 250;
	        _csInterface2["default"].evalScript("$._ext.applyEffect(\"" + item.name + "\")", function (res) {
	          //push data into extend script
	          var obj = JSON.parse(res);
	          var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockEffects(cordX, _storage2["default"].undermostEffectBlock.y += 50, item, obj);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	          //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	        });
	      });
	      effects.children('ul').append(effectLi);
	      //console.log(item);
	    });

	    _startArraysArrSecondButtonJs2["default"].commonControls.forEach(function (item, i) {
	      var commonControlLi = $('<li>', {
	        id: item.name,
	        text: item.name,
	        "class": 'control'
	      }).draggable({
	        start: function start(event, ui) {
	          $(this).parent().fadeTo(0, 1); // lock opacity in 1 to keep div visible
	          $(this).parent().css('top', 0); //lock top coordinate of menu to keep menu visible
	          $(this).parent().css('left', 50); //lock left coordinate of menu to keep menu visible
	        },
	        stop: function stop(event, ui) {
	          var cordX = this.getBoundingClientRect().left; //get real positio of X
	          var cordY = this.getBoundingClientRect().top; //get real positio of Y
	          var controlType = item.name;
	          _csInterface2["default"].evalScript("$._ext.createControl(\"" + controlType + "\")", function (res) {
	            //push data into extend script
	            var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, cordY, item, false, res);
	            (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock); // range an order of this effect
	          });
	          $(this).parent().fadeTo(0, 0); // unlock opacity and turn it in 0 to hide menu
	          $(this).parent().removeAttr('style'); //remove style options to rest in into intitial (see css file) style
	          $(this).css('left', 0).css('top', 0);
	        }
	      });
	      commonControlLi.click(function () {
	        var cordX = 100;
	        _csInterface2["default"].evalScript("$._ext.createControl(\"" + item.name + "\")", function (res) {
	          //push data into extend script
	          var workBlock = new _mainBlockMainBlockJs2["default"]().createBlockCommonControls(cordX, _storage2["default"].undermostCommonControlBlock.y += 50, item, false, res);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	          //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	        });
	      });
	      commonControlsUl.children('ul').append(commonControlLi);
	      //console.log(item);
	    });

	    /*arrSecondButton.distributor.forEach((index,i)=>{
	      let distributorlLi=$('<li>',{
	        id:index.name,
	        text:index.name
	      });
	      distributorsUl.children('ul').append(distributorlLi);
	      //console.log(index);
	    });*/

	    _startArraysArrSecondButtonJs2["default"].presets.forEach(function (item, i) {
	      var presetLi = $('<li>', {
	        id: item.name,
	        text: item.name
	      }).draggable({
	        start: function start(event, ui) {
	          $(this).parent().fadeTo(0, 1); // lock opacity in 1 to keep div visible
	          $(this).parent().css('top', 0); //lock top coordinate of menu to keep menu visible
	          $(this).parent().css('left', 50); //lock left coordinate of menu to keep menu visible
	        },
	        stop: function stop(event, ui) {
	          var cordX = this.getBoundingClientRect().left; //get real positio of X
	          var cordY = this.getBoundingClientRect().top; //get real positio of Y

	          //let lowestCoordY=GlobalStorage.undermostEffectBlock.y;
	          new _mainBlockPresetsBlocksJs2["default"]().createPresetsBlocks(cordX, item);

	          $(this).parent().fadeTo(0, 0); // unlock opacity and turn it in 0 to hide menu
	          $(this).parent().removeAttr('style'); //remove style options to rest in into intitial (see css file) style
	          $(this).css('left', 0).css('top', 0);
	          //$(this).parent().css('left',-9999);
	        }

	      });
	      presetsUl.children('ul').append(presetLi);
	      //console.log(index);
	    });

	    var menuDiv = $('#menu').append(wrapUl);
	  }

	  _createClass(mainMenu, [{
	    key: "start",
	    value: function start(event) {
	      //console.log(event);
	    }
	  }]);

	  return mainMenu;
	})();

	exports["default"] = mainMenu;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var arrButton = [{ name: 'Effects', systName: 'effects' }, { name: 'Common Controls', systName: 'commonControls' }, { name: 'Distributor', systName: 'distributor' }, { name: 'Presets', systName: 'presets' }]; //Array with buttons

	exports['default'] = arrButton;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _raphaelContainerJs = __webpack_require__(3);

	var _raphaelContainerJs2 = _interopRequireDefault(_raphaelContainerJs);

	var _mainBlockJs = __webpack_require__(8);

	var _mainBlockJs2 = _interopRequireDefault(_mainBlockJs);

	var _storage = __webpack_require__(5);

	var _storage2 = _interopRequireDefault(_storage);

	var _csInterfaceJs = __webpack_require__(2);

	var _csInterfaceJs2 = _interopRequireDefault(_csInterfaceJs);

	var _startArraysArrSecondButtonJs = __webpack_require__(1);

	var _startArraysArrSecondButtonJs2 = _interopRequireDefault(_startArraysArrSecondButtonJs);

	var _helperFunctionsMoveEffectsJs = __webpack_require__(11);

	var _helperFunctionsMoveEffectsJs2 = _interopRequireDefault(_helperFunctionsMoveEffectsJs);

	var presetsBlocks = (function () {
	  function presetsBlocks() {
	    _classCallCheck(this, presetsBlocks);
	  }

	  _createClass(presetsBlocks, [{
	    key: "createPresetsBlocks",
	    value: function createPresetsBlocks(cordX, presetsType) {
	      //console.log(presetsType);
	      this.createPresetsEffects(cordX, presetsType);
	    }
	  }, {
	    key: "createPresetsEffects",
	    value: function createPresetsEffects(cordX, presetsType) {
	      var _this = this;

	      var lowestCoordY = _storage2["default"].undermostEffectBlock.y;
	      //console.log(GlobalStorage.arrOfPresetsEffects[presetsType.name]);
	      //  GlobalStorage.arrOfPresetsEffects[presetsType.name].forEach((itemName)=>{
	      var effectBlocks = _storage2["default"].arrOfPresetsEffects[presetsType.name].propsArray;
	      //console.log(effectBlocks);
	      effectBlocks.forEach(function (obj, num) {
	        //console.log(obj);
	        //console.log(this.innerForEach(obj));
	        var itemArr = _startArraysArrSecondButtonJs2["default"].effects.filter(function (a, index) {
	          var keyName = Object.keys(obj)[0].replace(/(^")|("$)/g, '');
	          return _startArraysArrSecondButtonJs2["default"].effects[index].name == keyName;
	          //return arrSecondButton.effects[index].name==keyName.slice(0, -1);
	        });

	        var item = itemArr[0];
	        var propertyOfEffectString = _this.innerForEach(obj);
	        //console.log(propertyOfEffectString);
	        _csInterfaceJs2["default"].evalScript("$._ext.applyEffectPresets(\"" + item.name + "\"," + propertyOfEffectString + ")", function (res) {
	          //push data into extend script
	          lowestCoordY += 40;
	          var objPreset = JSON.parse(res);
	          //console.log(objPreset);
	          var workBlock = new _mainBlockJs2["default"]().createBlockEffects(cordX, lowestCoordY, item, objPreset);
	          //console.log(workBlock);
	          (0, _helperFunctionsMoveEffectsJs2["default"])(workBlock);
	          _storage2["default"].effectCreateDrag.active = false; // close ability to add this effect to dispatcher
	        });
	      });
	      for (var key in effectBlocks) {

	        //let propertyOfEffectString=JSON.stringify(effectBlocks[key]);

	        //console.log(propertyOfEffectString);
	        /*csInterface.evalScript(`$._ext.applyEffectPresets("${item.name}",${propertyOfEffectString})`,(res)=>{//push data into extend script
	        lowestCoordY+=40
	          let workBlock=new mainBlock().createBlockEffects(cordX,lowestCoordY,item,res);
	          console.log(workBlock);
	          moveEffects(workBlock);
	          GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
	        });*/

	      }

	      var propertyOfEffect = _storage2["default"].arrOfPresetsEffects[presetsType.name];
	      /*console.log(propertyOfEffect);
	      function stringProp (obj){
	        let ObjOfString={};
	      for (var key in obj) {
	                     ObjOfString[`"${key}"`]=`${obj[key]}`;
	        }
	        return ObjOfString;
	      }*/
	      //let testData=stringProp(propertyOfEffect);
	      //let propertyOfEffectString=JSON.stringify(stringProp(propertyOfEffect));

	      /*let testX=JSON.stringify(testData);
	      let objParsed=JSON.parse(testX);
	      console.log(objParsed["Mobius Zoom"].split(';'))*/
	      //let propertyOfEffect=GlobalStorage.arrOfPresetsEffects[presetsType.name][itemName].join(';');
	      /*console.log(propertyOfEffect.forEach((i)=>{
	        console.log(i);
	      }));*/

	      //});
	    }
	  }, {
	    key: "innerForEach",
	    value: function innerForEach(obj) {
	      var objToStringlify = {};
	      var objName = Object.keys(obj)[0];
	      obj[objName].forEach(function (innerObj, innerNum) {
	        var innerObjName = Object.keys(innerObj)[0];
	        objToStringlify[innerObjName] = innerObj[innerObjName];
	        //console.log(innerObjName);
	        //console.log(innerObj[innerObjName]);
	      });
	      return JSON.stringify(objToStringlify);
	    }
	  }]);

	  return presetsBlocks;
	})();

	;

	exports["default"] = presetsBlocks;
	module.exports = exports["default"];

/***/ }
/******/ ]);