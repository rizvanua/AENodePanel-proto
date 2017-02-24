function addPOIFunction(effectName, propName, thisPropName, _this){    
    _this.currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").point.value"; 
    
};

function addFOVFunction(effectName, propName, thisPropName, _this){    
     _this.currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").angle.value";
  
};

function addStrengthFunction(effectName, propName, thisPropName, _this){ 
    _this.currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").slider.value";    
};

function addWavesFunction(effectName, propName, thisPropName,_this){
    _this.currentLayer.effect.property(effectName).property("Amplitude").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Wavelength").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Phase").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Max Latitude").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Displacement").expression= "[50]";
};

function addPropertyToEffect(effectName, propName, propValue,_this){
     $.writeln(_this.currentLayer.effect.property(effectName));
        _this.currentLayer.effect.property(effectName).property(propName).setValue([propValue]);
};

function generatorPOI() {
    var F1 = function() {
       return (((1+Math.random())*0x100)|0);
    };
    var F2 = function() {
       return (((1+Math.random())*0x200)|0);
    };
    return ("["+F1()+"," + F2() + "]");
}

//MAIN CODE
$._ext = {
    checkChangesGloba: function()
    {
        this.currentCompName;
        this.currentLayerName;
        this.currentEffectName;
        this.effectsQuantity;
    },
     initialProjectTest : function()
    {        
       this.currentComp = app.project.activeItem;
       $.writeln(app.project.activeItem)
        
        if (this.currentComp){
            var layerCount = this.currentComp.numLayers;
          
            
            if (layerCount > 0){
             
                for (var i = 1; i>=layerCount; i++){
                                   
                    if(this.currentComp.layers[i] instanceof AVLayer)
                    {
                        $.writeln(this.currentComp.layers[i].effect.numProperties);
                        for (var key in this.currentComp.layers[i]) {
                            //$.writeln(key);
                            }
                        //this.currentComp.layers[i].unicID="9:80 PM";
                         //$.writeln(this.currentComp.layers[i].effect);
                        this.currentComp = app.project.activeItem;
                        this.itemWidth= app.project.activeItem.width;
                        this.itemHight= app.project.activeItem.height;
                        this.distributorProps={
                                        cube:[[0.00*this.itemWidth, 0.5*this.itemHight],[0.25*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.5*this.itemHight],[0.75*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.0*this.itemHight],[0.50*this.itemWidth, 1.0*this.itemHight]],
                                        sphere:[[0.00*this.itemWidth, 0.5*this.itemHight],[0.25*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.5*this.itemHight],[0.75*this.itemWidth, 0.5*this.itemHight],[0.10*this.itemWidth, 0.25*this.itemHight],[0.43*this.itemWidth, 0.25*this.itemHight],[0.77*this.itemWidth, 0.25*this.itemHight],[0.10*this.itemWidth, 0.75*this.itemHight],[0.43*this.itemWidth, 0.75*this.itemHight],[0.77*this.itemWidth, 0.75*this.itemHight]]
                                        };
                       
                        this.currentLayer = this.currentComp.layers[i];  
                       return true;

                    }
                     
                }               
              
            } 
        else{
             return false;
            }
            
          
        } 
        else {
           
             
            return false;
        }
    },
        applyEffect : function(effectName)
    {        
         
        if (this.currentComp){
            var layerEffect=this.currentLayer.Effects.addProperty(effectName);   
             
                          return layerEffect.name;      
            
            }
    },
      applyEffectPresets: function(effectName, propertyOfEffect) {
          var layerEffect = this.currentLayer.Effects.addProperty(effectName);

          //function findObj(propertyOfEffect) {
          for (var key in propertyOfEffect) {
            if (typeof propertyOfEffect[key] == "object") {
            //$.writeln('null'==0);
            //$.writeln(typeof  propertyOfEffect[key].expression=='number');
            

              if (typeof propertyOfEffect[key].value=='number'||typeof propertyOfEffect[key].value=='string'&& propertyOfEffect[key].value !='null') {
                //$.writeln(propertyOfEffect[key].value)          
                var propString = propertyOfEffect[key].value;
                if (typeof propertyOfEffect[key].value == "string") {
                  var string_array = propString.split(',');
                  //$.writeln(this['itemWidth']) ; 
                  var propertyNew = [];
                  for (var i = 0; i < string_array.length; i++) {
                    //propertyNew.push(eval(string_array[i]));
                    //$.writeln(string_array[i].split('*'));
                    var arrData = string_array[i].split('*');

                    if (arrData.length ==2) {
                      var result = this[arrData[0]] * arrData[1];
                      propertyNew.push(result);
                    } else if(arrData.length ==1) {
                      var result = this[arrData[0]];
                      propertyNew.push(result);
                    }
                    
                  }
             
                  layerEffect.property(key).setValue(propertyNew);
                } else {
                  var result = propertyOfEffect[key].value;
                  // $.writeln(propertyOfEffect[key].value);
                  layerEffect.property(key).setValue([result]);
                }




                // layerEffect.property(key).setValue("[" + String(propertyNew) + "]") ;
              }
              if (typeof propertyOfEffect[key].expression=='number'||typeof propertyOfEffect[key].expression=='string'&& propertyOfEffect[key].expression !='null') {
                //layerEffect.property(key).expression = "[" + String(propertyNew) + "]";
                 layerEffect.property(key).expression=propertyOfEffect[key].expression;
               
              }
            }

          }

          //}

          //findObj.call(this, propertyOfEffect);

          return layerEffect.name;
},
    applyEffectDistributor: function(effectName, distributorType,index){
                      
                     
                        var layerEffect=this.currentLayer.Effects.addProperty(effectName);
                        if(distributorType=="cube"){                          
                            var newValue="["+this.distributorProps.cube[index].toString()+"]";
                            layerEffect.property("Point of Interest").expression=newValue;
                            }
                        else if(distributorType=="sphere"){
                            var newValue="["+this.distributorProps.sphere[index].toString()+"]";
                            layerEffect.property("Point of Interest").expression=newValue;
                            }
                        else{
                            layerEffect.property("Point of Interest").expression=generatorPOI();
                            }                       
                                                   
                          return layerEffect.name;                 

               
            
           
        
     },
    createControlPoint: function(){
       
        var ControlPoint=this.currentLayer.Effects.addProperty("Point Control");        
        return ControlPoint.name;
        },
    createControlFOV: function(){        
        var AngleControl=this.currentLayer.Effects.addProperty("Angle Control");
        return AngleControl.name;
        },
    createControlStrength: function(){        
        var SliderControl=this.currentLayer.Effects.addProperty("Slider Control");
        return SliderControl.name;
        },
    addCommonControls: function(effectName,propName,thisPropName)
   {       
       
               switch (propName) {
                          case "Point of Interest":
                            addPOIFunction(effectName, propName,thisPropName,this);
                            break;
                          case "FOV":
                            addFOVFunction(effectName, propName,thisPropName,this);
                            break;
                        case "Waves":
                        addWavesFunction(effectName, propName,thisPropName,this);
                        break;
                         case "Strength":
                            addStrengthFunction(effectName, propName,thisPropName,this);
                            break;
                          default:
                            alert( "Unrecognized control type" );                           
                            
                            }
               
      
       
        
    },
    moveEffectIndex: function(effectName,number)
    {
      
        
        var number=(number*1);
        if(number>0&&effectName)
        {
            this.currentLayer.effect.property(effectName).moveTo(number);
            return number;
        }
     },
 
    deleteEffect: function (effectName){
        if(effectName!="null"){
            this.currentLayer.effect.property(effectName).remove();
         
         return effectName;
            }
         
      },
  
    deleteCommonControl: function(propName, arrayOfLinkedEffects, thisCommonContrlName){         
        this.effectNameArr = arrayOfLinkedEffects.split(';');        
       this.currentLayer.effect.property(thisCommonContrlName).remove();
         if(this.effectNameArr[0]!=''){
              for (var i =0; i<this.effectNameArr.length; i++){            
             
            
             this.currentLayer.effect.property(this.effectNameArr[i]).property(propName).expressionEnabled = false;
            }
         }        
    },
    selectEffect: function(effectName){
        this.currentLayer.effect.property(effectName).selected=true;
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        },
    selectCommonControl: function(effectName){
        this.currentLayer.effect.property(effectName).selected=true;
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        },
    unSelectCommonControl: function(effectName){
        this.currentLayer.effect.property(effectName).selected=false;
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        }
};

