 const SecondButton={
  effects:[
    {name:"Stretcher", poi:false, fov:false, waves:false },
    {name:"Repeater", poi:false, fov:false, waves:false},
    {name:"Spiraler", poi:true, fov:false, waves:false},
    {name:"Circular Waves", poi:true, fov:false, waves:true},
    {name:"Meridian Waves", poi:true, fov:false, waves:true},
    {name:"Flat Mirror", poi:true, fov:true, waves:false},
    {name:"Curved Mirror", poi:true, fov:true, waves:false},
    {name:"Magnifying Glass", poi:true, fov:true, waves:false},
    {name:"Mobius Raw", poi:false, fov:false, waves:false},
    {name:"Mobius Rotate", poi:false, fov:false, waves:false},
    {name:"Mobius Zoom", poi:false, fov:false, waves:false},
    {name:"Escher Droste", poi:true, fov:false, waves:false},
    {name: "Rotator", poi:false, fov:false, waves:false}
  ],
  commonControls:[
    {name:"POI", effectName:"POI", fullname:"Point of Interest"},
    {name:"FOV", effectName:"FOV", fullname:"FOV"},
    {name:"Waves", effectName:"Waves", fullname:"Waves"}
  ],
  distributor:[
    {name:"Cube"},
    {name:"Sphere"},
    {name:"Random"}
  ]
};

export default SecondButton;
