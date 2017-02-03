import R from "./raphaelContainer.js"

// Global storage for ever functions. It uses to keep objects and variables which use as global.

let GlobalStorage={
  storageOfSecondMenuSets:{//storage secondMenu items
    effects: R.set(),
    commonControls:R.set(),
    distributor:R.set(),
  },
  Flags:{
    effects: true,
    commonControls:true,
    distributor:true
  },
  mainMenuSet:{
    effects:R.set(),
    commonControls:R.set(),
    distributor:R.set()
  },
  lastEffectBlock:{
    y:0
  },
  prevActive:undefined,
  historyOfObjects:{
    itemArray:[]
  },
  toDelete:undefined,//Temporary object which one contents object for deleting by pressing key "DELETE"
  currentLine:null, //Temporary object with just created Line
  overMouseSet:null //Temporary object what contents Set over which fire event mouseover
}

export default GlobalStorage;
