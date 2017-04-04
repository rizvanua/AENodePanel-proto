 const SecondButton={
  effects:[
    {name:"Stretcher"},//if you add new control (poi, fov, waves etc) don't forget add this into pages src\sideBar\secondSideBarBlocks.js into "dummy.node" propety and page src\mainBlock\mainBlock.js  createBlockEffects "workBlockSet" property
    {name:"Repeater"},
    {name:"Spiraler"},
    {name:"Circular Waves"},
    {name:"Meridian Waves"},
    {name:"Flat Mirror"},
    {name:"Curved Mirror"},
    {name:"Magnifying Glass"},
    {name:"Mobius Raw"},
    {name:"Mobius Rotate"},
    {name:"Mobius Zoom"},
    {name:"Escher Droste"},
    {name:"Rotator"},
    {name:"Project 2D"},
    {name:"Blur"},
    {name:"Mettle Mantra VR"},
    {name:"Chromatic Aberrations"},
    {name:"Color Gradients"},
    {name:"Denoise"},
    {name:"Digital Glitch"},
    {name:"Fractal Noise"},
    {name:"Glow"},
    {name:"Sharpen"},
    {name:"Hyperbolic Tiler"}
  ],
  commonControls:[
    {name:"Point Control", effectName:"Point Control", fullname:"Point Control", shortName:"point"},
    {name:"Angle Control", effectName:"Angle Control", fullname:"Angle Control", shortName:"angle"},
    {name:"Slider Control", effectName:"Slider Control", fullname:"Slider Control",shortName:"slider"}
  ],
  distributor:[
    {name:"Cube"},
    {name:"Sphere"},
    {name:"Random"}
  ],
  presets:[],//We push object {name: "SomeName"} from presets folder via window.cep.fs.readdir and window.cep.fs.readFile API
  multiplier:[
    {name:"Multiplier", id:"multiplier-one", shortName:"multiplier"}
  ]

};

export default SecondButton;
