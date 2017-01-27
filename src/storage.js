import R from "./raphaelContainer.js"
let GlobalStorage={
  storageOfSets:{
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

  },
  currentLine:[], //Temporary object with just created Line
  overMouseSet:[] //Temporary object what contents Set over which fire event mouseover
}

export default GlobalStorage;
