// GLOBAL VARIABLES
var currentLayer={};
var effectNameArr=[];
var itemWidth;
// FUNCTIONS USED AS INTERNAL IN THIS  PROJECT
function addPOIFunction(effectName, propName){    
    defValuePOI=currentLayer.effect.property(effectName).property(propName).value;
     //currentLayer.effect.property(effectName).property(propName).setValue([100,980]);
     currentLayer.effect.property(effectName).property(propName).expression= "[100,itemWidth/2]";
};

function addFOVFunction(effectName, propName){
    //defValueFOI=currentLayer.effect.property(effectName).property(propName).value;
    
    currentLayer.effect.property(effectName).property(propName).expression= "[index*30]";
  
};

function addWavesFunction(effectName, propName){
};

//MAIN CODE
$._ext = {   
    applyEffect : function(effectName)
    {
        var currentComp = app.project.activeItem;
        itemWidth= app.project.activeItem.width;
         
        if (currentComp){
            var layerCount = currentComp.numLayers;
            if (layerCount > 0){
                for (var i = 1; i <= layerCount; ++i){

                    if(currentComp.layer(i).selected&&currentComp.layer(i) instanceof AVLayer){
                        currentLayer= currentComp.layer(i);
                        var layerEffect=currentComp.layer(i).Effects.addProperty(effectName);
                         /*$.writeln(layerEffect.propertyIndex);*/
                         /*$.writeln(currentLayer.lselectedProperties);*/
                        /*for(var ty=0; ty<currentLayer.length;  ty++){
                            $.writeln(currentLayer.lselectedProperties);
                            }*/
                          
                          return layerEffect.name;
                        /*alert(currentComp.layer(i))*/
                        }
                    }

                }
            else{
                alert("Please add a layer");
                }
            }
    },
    addCommonControls: function(effectName,propName)
   {       
       /*$.writeln(currentLayer.selectedPropertie);*/
       var hasProperty=currentLayer.effect.property(effectName).property(propName);
       if(hasProperty)
           {
               switch (propName) {
                          case "Point of Interest":
                            addPOIFunction(effectName, propName);
                            break;
                          case "FOV":
                            addFOVFunction(effectName, propName);
                            break;
                          case "Waves":
                            addWavesFunction(effectName, propName);
                            break;
                          default:
                            alert( "Unrecognized control type" );                           
                            
                            }
               
           }
       else
       {
            alert("The effect doesn't support  this control");
        }
       
        
    },
    moveEffectIndex: function(effectName,number)
    {
        //$.writeln(effectName);
        //$.writeln(number);
        
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
         //$.writeln(effectName);
         return effectName;
            }
         
      },
  
    deleteCommonControl: function(propName, arrayOfLinkedEffects){        
        effectNameArr = arrayOfLinkedEffects.split(';');        
        //matchName
         if(effectNameArr[0]!=''){
             for (var i =0; i<effectNameArr.length; i++){            
         //currentLayer.effect.property(effectNameArr[i]).property(propName).setValue(defValuePOI); 
         //$.writeln(currentLayer.effect.property(effectNameArr[i]).matchName.value);         
         currentLayer.effect.property(effectNameArr[i]).property(propName).expressionEnabled = false;
        }
             }        
    }
};

