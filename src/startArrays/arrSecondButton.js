 const SecondButton={
  effects:[
    {name:"Stretcher", poi:false, fov:false, waves:false, strength:true},//if you add new control (poi, fov, waves etc) don't forget add this into pages src\sideBar\secondSideBarBlocks.js into "dummy.node" propety and page src\mainBlock\mainBlock.js  createBlockEffects "workBlockSet" property
    {name:"Repeater", poi:false, fov:false, waves:false, strength:false},
    {name:"Spiraler", poi:true, fov:false, waves:false, strength:true},
    {name:"Circular Waves", poi:true, fov:false, waves:true, strength:false},
    {name:"Meridian Waves", poi:true, fov:false, waves:true, strength:false},
    {name:"Flat Mirror", poi:true, fov:true, waves:false, strength:false},
    {name:"Curved Mirror", poi:true, fov:true, waves:false, strength:false},
    {name:"Magnifying Glass", poi:true, fov:true, waves:false, strength:false},
    {name:"Mobius Raw", poi:false, fov:false, waves:false, strength:false},
    {name:"Mobius Rotate", poi:false, fov:false, waves:false, strength:false},
    {name:"Mobius Zoom", poi:false, fov:false, waves:false, strength:false},
    {name:"Escher Droste", poi:true, fov:false, waves:false, strength:false},
    {name: "Rotator", poi:false, fov:false, waves:false, strength:false}
  ],
  commonControls:[
    {name:"POI", effectName:"POI", fullname:"Point of Interest"},
    {name:"FOV", effectName:"FOV", fullname:"FOV"},
    {name:"Waves", effectName:"Waves", fullname:"Waves"},
    {name:"Strength", effectName:"Strength", fullname:"Slider Control"}
  ],
  distributor:[
    {name:"Cube"},
    {name:"Sphere"},
    {name:"Random"}
  ],
  presets:[]//We push object {name: "SomeName"} from presets folder via window.cep.fs.readdir and window.cep.fs.readFile API 

};

export default SecondButton;
