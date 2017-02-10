// GLOBAL VARIABLES
var currentLayer={};
var effectNameArr=[];
var currentComp;
var itemWidth;
var itemHight;
var distributorProps={
    cube:[[0.00*itemWidth, 0.5*itemHight],[0.25*itemWidth, 0.5*itemHight],[0.50*itemWidth, 0.5*itemHight],[0.75*itemWidth, 0.5*itemHight],[0.50*itemWidth, 0.0*itemHight],[0.50*itemWidth, 1.0*itemHight]],
    sphere:[[0.00*itemWidth, 0.5*itemHight],[0.25*itemWidth, 0.5*itemHight],[0.50*itemWidth, 0.5*itemHight],[0.75*itemWidth, 0.5*itemHight],[0.10*itemWidth, 0.25*itemHight],[0.43*itemWidth, 0.25*itemHight],[0.77*itemWidth, 0.25*itemHight],[0.10*itemWidth, 0.75*itemHight],[0.43*itemWidth, 0.75*itemHight],[0.77*itemWidth, 0.75*itemHight]]
    };

// FUNCTIONS USED AS INTERNAL IN THIS  PROJECT
function addPOIFunction(effectName, propName, thisPropName){
    var itemHalfWidth=  "[100," + itemWidth / 2 + "]";
    
    //defValuePOI=currentLayer.effect.property(effectName).property(propName).value;
    //currentLayer.effect.property(effectName).selected=true;
    //currentLayer.effect("Point Control").point.value
     //currentLayer.effect.property(effectName).property(propName).setValue([100,980]);
    currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").point.value";
    // currentLayer.effect(thisPropName).point.value;
     
    
};

function addFOVFunction(effectName, propName, thisPropName){
    //defValueFOI=currentLayer.effect.property(effectName).property(propName).value;
    
     currentLayer.effect.property(effectName).property(propName).expression="thisLayer.effect("+"'"+thisPropName+"'"+").angle.value";
  
};

function addWavesFunction(effectName, propName, thisPropName){
    currentLayer.effect.property(effectName).property("Amplitude").expression= "[300]";
    currentLayer.effect.property(effectName).property("Wavelength").expression= "[300]";
    currentLayer.effect.property(effectName).property("Phase").expression= "[50]";
    currentLayer.effect.property(effectName).property("Max Latitude").expression= "[50]";
    currentLayer.effect.property(effectName).property("Displacement").expression= "[50]";
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
       var currentComp = app.project.activeItem;
        
        if (currentComp){
            var layerCount = currentComp.numLayers;
          
            
            if (layerCount > 0){
             
                for (var i = 1; i <= layerCount; ++i){
                                    
                    if(currentComp.layers[i] instanceof AVLayer)
                    {
                        currentComp = app.project.activeItem;
                        itemWidth= app.project.activeItem.width;
                        itemHight= app.project.activeItem.height;
                       
                        currentLayer = currentComp.layers[i];  
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
         
        if (currentComp){
            var layerEffect=currentLayer.Effects.addProperty(effectName);   
                          
                          return layerEffect.name;
            
            
            }
    },
    applyEffectDistributor: function(effectName, distributorType,index){
        
        //currentComp = app.project.activeItem;
        //itemWidth= app.project.activeItem.width;
         $.writeln(currentComp);
        if (currentComp){
            var layerCount = currentComp.numLayers;
            if (layerCount > 0){
                for (var i = 1; i <= layerCount; i++){

                    if(currentComp.layer(i).selected&&currentComp.layer(i) instanceof AVLayer){
                        currentLayer= currentComp.layer(i);
                        var layerEffect=currentComp.layer(i).Effects.addProperty(effectName);
                        if(distributorType=="cube"){
                            $.writeln(distributorProps.cube[i-1]);
                            var newValue="["+distributorProps.cube[index-1].toString()+"]";
                            layerEffect.property("Point of Interest").expression=newValue;
                            }
                        else if(distributorType=="sphere"){
                            var newValue="["+distributorProps.sphere[index-1].toString()+"]";
                            layerEffect.property("Point of Interest").expression=newValue;
                            }
                        else{
                            layerEffect.property("Point of Interest").expression=generatorPOI();
                            }
                       
                        
                                                   
                          return layerEffect.name;
                       
                        }
                    }

                }
            else{
                alert("Please add a layer");
                }
            }
        
     },
    createControlPoint: function(){
       
        var ControlPoint=currentLayer.Effects.addProperty("Point Control");
        return ControlPoint.name;
        },
    createControlFOV: function(){        
        var AngleControl=currentLayer.Effects.addProperty("Angle Control");
        return AngleControl.name;
        },
    addCommonControls: function(effectName,propName,thisPropName)
   {       
       
               switch (propName) {
                          case "Point of Interest":
                            addPOIFunction(effectName, propName,thisPropName);
                            break;
                          case "FOV":
                            addFOVFunction(effectName, propName,thisPropName);
                            break;
                          case "Waves":
                            addWavesFunction(effectName, propName,thisPropName);
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
            currentLayer.effect.property(effectName).moveTo(number);
            return number;
        }
     },
 
    deleteEffect: function (effectName){
        if(effectName!=null){
            currentLayer.effect.property(effectName).remove();
         
         return effectName;
            }
         
      },
  
    deleteCommonControl: function(propName, arrayOfLinkedEffects, thisCommonContrlName){        
        effectNameArr = arrayOfLinkedEffects.split(';');        
       currentLayer.effect.property(thisCommonContrlName).remove();
         if(effectNameArr[0]!=''){
              for (var i =0; i<effectNameArr.length; i++){            
             
            
             currentLayer.effect.property(effectNameArr[i]).property(propName).expressionEnabled = false;
            }
         }        
    },
    selectEffect: function(effectName){
        currentLayer.effect.property(effectName).selected=true;
        }
};

