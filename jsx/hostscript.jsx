function addPOIFunction(effectName, propName, thisPropName, _this){    
    _this.currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").point.value";
    
     
    
};

function addFOVFunction(effectName, propName, thisPropName, _this){    
     _this.currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").angle.value";
  
};

function addWavesFunction(effectName, propName, thisPropName,_this){
    _this.currentLayer.effect.property(effectName).property("Amplitude").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Wavelength").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Phase").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Max Latitude").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Displacement").expression= "[50]";
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
     initialProjectTest : function()
    {        
       this.currentComp = app.project.activeItem;
        
        if (this.currentComp){
            var layerCount = this.currentComp.numLayers;
          
            
            if (layerCount > 0){
             
                for (var i = 1; i <= layerCount; ++i){
                                    
                    if(this.currentComp.layers[i] instanceof AVLayer)
                    {
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
    applyEffectDistributor: function(effectName, distributorType,index){
                      
                     
                        var layerEffect=this.currentLayer.Effects.addProperty(effectName);
                        if(distributorType=="cube"){                          
                            var newValue="["+this.distributorProps.cube[index-1].toString()+"]";
                            layerEffect.property("Point of Interest").expression=newValue;
                            }
                        else if(distributorType=="sphere"){
                            var newValue="["+this.distributorProps.sphere[index-1].toString()+"]";
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
        if(effectName!=null){
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
        }
};

