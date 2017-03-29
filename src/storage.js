import R from "./raphaelContainer.js"

// Global storage for ever functions. It uses to keep objects and variables which use as global.

let GlobalStorage={
  input:{},//link to the HTML input element
  initial:false,
  renameObj:{
    oldName:null,
    newName:null
  },
  /*storageOfSecondMenuSets:{//storage secondMenu items
    effects: R.set(),
    commonControls:R.set(),
    distributor:R.set(),
    presets:R.set()
  },
  Flags:{
    effects: true,
    commonControls:true,
    distributor:true,
    presets:true
  },
  mainMenuSet:{//storage firsts (main) vertical line of menu
    effects:R.set(),
    commonControls:R.set(),
    distributor:R.set(),
    presets:R.set()
  },*/
  hasVR:false,
  lastEffectBlock:{
    y:0
  },
  prevActive:undefined,
  historyOfObjects:{
    itemArray:[]
  },
  undermostEffectBlock:{
    y:10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
  },
  undermostCommonControlBlock:{
    y:10 //this is an Y coordinate of the lowermost blockEffect (see "moveEffects.js")
  },
  effectCreateDrag:{
    active:false,
    effectType:null,
    distribitorMouseOver:null
  },
  controlProp:{
    type:null,//type of common control ('point' or 'angle' or 'slider')
    name:null,// name of commonControls property (for example 'Point of Interest')
    circle:null,// link to the sibling circle to toogle className
    coordDif:null//different in number between getBBox().y of CommonControlBlock and this property block
  },
  effectCheckArr:[],
  blockToRemove:null,
  arrOfPresetsEffects:{},// storage for all array with presets' effects
  distribitorObjectsStorage:{},// Here we hold all Distributors sets
  toDelete:undefined,//Temporary object which one contents object for deleting by pressing key "DELETE"
  currentLine:null, //Temporary object with just created Line
  overMouseSet:null, //Temporary object what contents Set over which fire event mouseover
  overDistributorMouse:null //Temporary object what contents genId of DISTRIBUTOR need to add common control (FOV, Strange)
}

export default GlobalStorage;
