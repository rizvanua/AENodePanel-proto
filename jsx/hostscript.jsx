function addPOIFunction(effectName, propName, thisPropName, _this){    
    _this.currentLayer.effect.property(effectName).property(propName).expression='(thisLayer.effect('+'"'+thisPropName+'"'+').point.value)*(thisLayer.effect("Master").slider.value/100)'; 
    
};

function addFOVFunction(effectName, propName, thisPropName, _this){    
    //$.writeln(effectName);
    //$.writeln(propName);
    //$.writeln(thisPropName);
     _this.currentLayer.effect.property(effectName).property(propName).expression='thisLayer.effect('+'"'+thisPropName+'"'+').angle.value*(thisLayer.effect("Master").slider.value/100)';
  
};

function addStrengthFunction(effectName, propName, thisPropName, _this){ 
    _this.currentLayer.effect.property(effectName).property(propName).expression='thisLayer.effect('+'"'+thisPropName+'"'+').slider.value*(thisLayer.effect("Master").slider.value/100)';    
};

function addWavesFunction(effectName, propName, thisPropName,_this){
    _this.currentLayer.effect.property(effectName).property("Amplitude").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Wavelength").expression= "[300]";
    _this.currentLayer.effect.property(effectName).property("Phase").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Max Latitude").expression= "[50]";
    _this.currentLayer.effect.property(effectName).property("Displacement").expression= "[50]";
};

function addPropertyToEffect(effectName, propName, propValue,_this){
     //$.writeln(_this.currentLayer.effect.property(effectName));
        _this.currentLayer.effect.property(effectName).property(propName).setValue([propValue]);
};

function checkEffectsQuantity(_this){
 if (_this.effectsQuantity!=_this.currentLayer.effect.numProperties)
 { 
     var effectArray=[];
      //$.writeln(_this.currentLayer.effect.numProperties)
      _this.effectsQuantity=_this.currentLayer.effect.numProperties;
      
      for(var i=_this.currentLayer.effect.numProperties; i--;){
           //$.writeln(_this.currentLayer.effect(i+1).name);
          //$.writeln(_this.currentLayer.effect(i+1).propertyType);          
          effectArray.push(_this.currentLayer.effect(i+1).name);
              //$.writeln(_this.currentLayer.effect(i+1).name);
              
          
          }
      
     return effectArray;
  }
else{
return false;    
    }
 //return 
 
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
    checkChangesGlobal: function() {
  this.currentCompName;
  this.currentLayerName;
  this.currentEffectName;
  this.effectsQuantity;
  //$.writeln(this.effectsQuantity);
  //$.writeln(this.currentLayer.effect.numProperties);
  //$.writeln(this.currentLayer.effect.numProperties);
  //$.writeln(this.currentLayerName);
  //$.writeln(app.project.activeItem.layers.num);
  //$.writeln(app.project.activeItem.name);
   //$.writeln('app.project');
  //$.writeln(app.project);
   //$.writeln('app.project.activeItem');
  //$.writeln(app.project.activeItem);
   if(app.project.activeItem===null){
    return 100; // No one Item is active     
      }
  var myLayers = app.project.activeItem.selectedLayers; 
  //$.writeln(myLayers);
 
  if (myLayers) {
         for (key in myLayers) {
      var thisLayerName = myLayers[0].name;
      var thisLayerIndex = myLayers[0].index;
    }
    //$.writeln('thisLayerName' + thisLayerName);
    //$.writeln('thisLayerIndex' + thisLayerIndex);
    //$.writeln(thisLayerName);
    //$.writeln(this.currentLayerName);
    //$.writeln(this.currentLayerIndex);

    if (!thisLayerName || !this.currentLayerName || (app.project.activeItem && this.currentComp.name != app.project.activeItem.name) || (thisLayerName != this.currentLayerName) || (thisLayerIndex != this.currentLayerIndex)) { //check if user changes composition or layer
      //$.writeln('IM WORKING');
      this.effectsQuantity = this.currentLayer.effect.numProperties;
      this.currentLayerName = thisLayerName;
      this.currentLayerIndex = thisLayerIndex;
      //this.currentLayer.name=thisLayerName;
      //this.currentComp.name=app.project.activeItem.name;

      if (this.state === true) {
        this.initialProjectTest();
      } else {
        return false;
      }
      //$.writeln(this.initialProjectTest());
      return 0;
    } else if (this.currentLayer.effect.numProperties) {
      var effectArray = [];
      //this.effectsQuantity=this.currentLayer.effect.numProperties;
      //$.writeln(this.currentLayer.effect.numProperties);
      this.effectsQuantity = this.currentLayer.effect.numProperties;

      for (var i = this.currentLayer.effect.numProperties; i--;) {
        //$.writeln(this.currentLayer.effect(i+1).property(2).propertyType);
        effectArray.push(this.currentLayer.effect(i + 1).name);

      }
      //$.writeln(effectArray);
      return effectArray;
    } else if (this.currentLayer.effect.numProperties == 0) {
      return 'empty';
    }
  }
else {
    return 0;
    }

}, 
     initialProjectTest : function()
    {    
       this.state=false;
       this.currentComp = app.project.activeItem;
       //$.writeln(app.project.activeItem)
       
        
        if (this.currentComp){
            var layerCount = this.currentComp.numLayers;          
           
            if (layerCount > 0){
            
                for (var i = 0; i<layerCount; i++){
                                   //$.writeln('TEST STATE')
                                   //$.writeln(this.currentComp.layers[i+1].selected)
                    if(this.currentComp.layers[i+1]&&this.currentComp.layers[i+1].selected&&this.currentComp.layers[i+1] instanceof AVLayer)
                    {
                       
                        //$.writeln(this.currentComp.layers[i+1].name);
                         //$.writeln(this.currentComp.layers[i+1].index);
                         this.currentLayerName=this.currentComp.layers[i+1].name;
                         this.currentLayerIndex=this.currentComp.layers[i+1].index;
                      
                        this.effectsQuantity=this.currentComp.layers[i+1].effect.numProperties;
                        this.currentLayer = this.currentComp.layers[i+1]; 
                        
                         this.createMasterMultiplier();
                        //$.writeln(this.currentComp.layers[i].effect.numProperties);
                        for (var key in this.currentComp.layers[i+1]) {
                            //$.writeln(key);
                            }
                        //this.currentComp.layers[i].unicID="9:80 PM";
                         //$.writeln(this.currentComp.layers[i].effect);
                       // this.currentComp = app.project.activeItem;
                        this.itemWidth= app.project.activeItem.width;
                        this.itemHight= app.project.activeItem.height;
                        this.distributorProps={
                                        cube:[[0.00*this.itemWidth, 0.5*this.itemHight],[0.25*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.5*this.itemHight],[0.75*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.0*this.itemHight],[0.50*this.itemWidth, 1.0*this.itemHight]],
                                        sphere:[[0.00*this.itemWidth, 0.5*this.itemHight],[0.25*this.itemWidth, 0.5*this.itemHight],[0.50*this.itemWidth, 0.5*this.itemHight],[0.75*this.itemWidth, 0.5*this.itemHight],[0.10*this.itemWidth, 0.25*this.itemHight],[0.43*this.itemWidth, 0.25*this.itemHight],[0.77*this.itemWidth, 0.25*this.itemHight],[0.10*this.itemWidth, 0.75*this.itemHight],[0.43*this.itemWidth, 0.75*this.itemHight],[0.77*this.itemWidth, 0.75*this.itemHight]]
                                        };
                       
                        
                       this.state=true;

                    }
                     
                }
            return this.state;
              
            } 
        else{
             this.effectsQuantity=0;
           
             return false;
            }
            
          
        } 
        else {
           
             
            return false;
        }
    },
    createMasterMultiplier: function(){// function to create 
        
        if(!this.currentLayer.effect('Master')){
            var MasterMultiplier=this.currentLayer.Effects.addProperty('Slider Control');        
                MasterMultiplier.name='Master';
                 this.currentLayer.effect('Master').property("Slider").expression='clamp(value, min=0, max=100)';  //set range of value from 0 to 100
                  this.currentLayer.effect('Master').property("Slider").setValue(100);// set defaul value 100
            }
        else{
  //this.currentLayer.effect('Master').expression='clamp(value, min=0, max=100)';            
            }
         
              
        },
    getData: function ()
    {
        var Obj={
                commonControlObj:[],
                effectsObj:[],
                linesObj:[],
                hasVR: false
            };
       
        //$.writeln(this.currentLayer.effect.numProperties);
        
        for(var i=0; i<this.currentLayer.effect.numProperties; i++){
           //$.writeln(this.currentLayer.effect(i+1).name);
            //$.writeln(this.currentLayer.effect(i+1).matchName);
            
            switch (this.currentLayer.effect(i+1).matchName) {
                  case "ADBE Angle Control":
                  var thisMatchName=this.currentLayer.effect(i+1).matchName;
                  var thisName=this.currentLayer.effect(i+1).name
                   Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                     //$.writeln(this.currentLayer.effect(i+1).property('Angle').value);
                    break;
                  case "ADBE Slider Control":
                    var thisMatchName=this.currentLayer.effect(i+1).matchName;
                    var thisName=this.currentLayer.effect(i+1).name
                    Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                     //$.writeln(this.currentLayer.effect(i+1).property('Slider').value);
                    break;
                  case "ADBE Point Control":
                   var thisMatchName=this.currentLayer.effect(i+1).matchName;
                   var thisName=this.currentLayer.effect(i+1).name
                   Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                   //$.writeln(this.currentLayer.effect(i+1).property('Point').value);
                    break;
                 case "Mettle Mantra VR":
                   var thisMatchName=this.currentLayer.effect(i+1).matchName;
                   var thisName=this.currentLayer.effect(i+1).name                  
                   Obj.effectsObj.push({baseEffect:thisMatchName, name:thisName});
                   Obj.hasVR=true;
                   //$.writeln(this.currentLayer.effect(i+1).property('Point').value);
                    break;
                  default:
                  var thisEffectObj={
                      point:{},
                      angle:{},
                      slider:{}
                      };
                  
                  var thisName=this.currentLayer.effect(i+1).name;
                  var thisMatchName=this.currentLayer.effect(i+1).matchName;
                  var layerEffect=this.currentLayer.effect(i+1);
                  thisEffectObj.baseEffect=thisMatchName.replace("Mettle Mantra ", "");
                    thisEffectObj.name=thisName;                 
                     
                     for(var d=layerEffect.numProperties; d--;)
                     {                       
                                 
                          
                              
                               if (layerEffect.property(d + 1).name != 'Frame Layout' && layerEffect.property(d + 1).name != 'Compositing Options') 
                               {
                                        switch (layerEffect.property(d+ 1).propertyValueType) 
                                        {
                                          case 6415:                                          
                                            thisEffectObj.point[layerEffect.property(d + 1).name] = false;                                             
                                            //$.writeln(layerEffect.property(d + 1).name);
                                            //$.writeln('Point');
                                            break;
                                          case 6417:
                                            if (layerEffect.property(d + 1).hasMax) {
                                              thisEffectObj.slider[layerEffect.property(d + 1).name] = false;                                               
                                              //$.writeln(layerEffect.property(d + 1).name);
                                              //$.writeln('Slider');
                                            } else {
                                              thisEffectObj.angle[layerEffect.property(d + 1).name] = false;                                               
                                              //$.writeln(layerEffect.property(d + 1).name);
                                              //$.writeln('Angle');
                                            }
                                            break;
                                          default:
                                            break;
                                        }
                                   }

                                  
                                  if(layerEffect.property(d+1).expressionEnabled)
                            {
                                 var LineTo=layerEffect.name; 
                                 var propertyOfEffect=layerEffect.property(d+1).name;
                                 //var LineFrom=layerEffect.property(d+1).expression.match(/\{([^}]+)\}/);
                                 var LineFrom=layerEffect.property(d+1).expression.match(/\(\"([^)]+)\"\)/)[1];
                                  //$.writeln('LINE');
                                 //$.writeln(LineTo);
                                  //$.writeln(LineFrom);
                                  //$.writeln(layerEffect.property(d+1).expression);
                                 Obj.linesObj.push({"LineFrom":LineFrom, "LineTo":LineTo, "propertyOfEffect":propertyOfEffect});
                                
                              }
                          
                         }
                     Obj.effectsObj.push(thisEffectObj);
                }
            //Obj.effectsObj.push(thisEffectObj);            
            }
        //$.writeln(JSON.stringify(Obj))
         return JSON.stringify(Obj);
        },
        applyEffect: function(effectName) {
            var effectObj={
                effectsObj:[],
                point:{},
                angle:{},
                slider:{}
                }

              if (this.currentComp) {
                var layerEffect = this.currentLayer.Effects.addProperty(effectName);
                effectObj.name=layerEffect.name;

                for (var i = layerEffect.numProperties; i--;) {
                  if (layerEffect.property(i + 1).name != 'Frame Layout' && layerEffect.property(i + 1).name != 'Compositing Options') {
                    switch (layerEffect.property(i + 1).propertyValueType) {
                      case 6415:
                        effectObj.point[layerEffect.property(i + 1).name]=false;
                        //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Point');
                        break;
                      case 6417 :
                      if( layerEffect.property(i + 1).hasMax){
                          effectObj.slider[layerEffect.property(i + 1).name]=false;
                          //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Slider');
                          }
                      else{
                           effectObj.angle[layerEffect.property(i + 1).name]=false;
                          //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Angle');
                          }                  
                        break;                      
                      default:
                        break;
                    }
                  }

                }

             //$.writeln(JSON.stringify(effectObj));
                return JSON.stringify(effectObj);
                //return effectObj.name;

              }
            },
        findEffect: function(effectName){
                var Obj = {
                  commonControlObj: [],
                  effectsObj: [],
                  linesObj: []
                };

                var layerEffect = this.currentLayer.effect.property(effectName);
               
                switch (layerEffect.matchName) {
                  case "ADBE Angle Control":
                    var thisMatchName = layerEffect.matchName;
                    var thisName = effectName;
                    Obj.commonControlObj.push({
                      baseEffect: thisMatchName.replace("ADBE ", ""),
                      realName: thisName
                    });

                    break;
                  case "ADBE Slider Control":
                    var thisMatchName = layerEffect.matchName;
                    var thisName = effectName;
                    Obj.commonControlObj.push({
                      baseEffect: thisMatchName.replace("ADBE ", ""),
                      realName: thisName
                    });

                    break;
                  case "ADBE Point Control":
                    var thisMatchName = layerEffect.matchName;
                    var thisName = effectName;
                    Obj.commonControlObj.push({
                      baseEffect: thisMatchName.replace("ADBE ", ""),
                      realName: thisName
                    });

                    break;
                  case "Mettle Mantra VR":
                    var thisMatchName = layerEffect.matchName;
                    var thisName = effectName;
                    Obj.effectsObj.push({
                      baseEffect: thisMatchName,
                      name: thisName
                    });
                    Obj.hasVR = true;

                    break;
                  default:
                    var thisEffectObj = {
                      point: {},
                      angle: {},
                      slider: {}
                    };

                    var thisName = effectName;
                    var thisMatchName = layerEffect.matchName;
                    thisEffectObj.baseEffect = thisMatchName.replace("Mettle Mantra ", "");
                    thisEffectObj.name = thisName;

                    for (var d = layerEffect.numProperties; d--;) {

                      if (layerEffect.property(d + 1).name != 'Frame Layout' && layerEffect.property(d + 1).name != 'Compositing Options') {
                        switch (layerEffect.property(d + 1).propertyValueType) {
                          case 6415:
                            thisEffectObj.point[layerEffect.property(d + 1).name] = false;
                          case 6417:
                            if (layerEffect.property(d + 1).hasMax) {
                              thisEffectObj.slider[layerEffect.property(d + 1).name] = false;
                            } else {
                              thisEffectObj.angle[layerEffect.property(d + 1).name] = false;
                            }
                            break;
                          default:
                            break;
                        }
                      }


                      if (layerEffect.property(d + 1).expressionEnabled) {
                        var LineTo = layerEffect.name;
                        var propertyOfEffect = layerEffect.property(d + 1).name;
                        var LineFrom = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[1];
                         //$.writeln('LINE');
                         //$.writeln(LineFrom);
                        Obj.linesObj.push({
                          "LineFrom": LineFrom,
                          "LineTo": LineTo,
                          "propertyOfEffect": propertyOfEffect
                        });

                      }

                    }
                    Obj.effectsObj.push(thisEffectObj);
                }

                return JSON.stringify(Obj);
            },
      applyEffectPresets: function(effectName, propertyOfEffect) {
          var effectObj={
                point:{},
                angle:{},
                slider:{}
                }
            
          var layerEffect = this.currentLayer.Effects.addProperty(effectName);
                 effectObj.name=layerEffect.name;
          
          //
          for (var i = layerEffect.numProperties; i--;) {
                  if (layerEffect.property(i + 1).name != 'Frame Layout' && layerEffect.property(i + 1).name != 'Compositing Options') {
                    switch (layerEffect.property(i + 1).propertyValueType) {
                      case 6415:
                        effectObj.point[layerEffect.property(i + 1).name]=false;
                        //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Point');
                        break;
                      case 6417 :
                      if( layerEffect.property(i + 1).hasMax){
                          effectObj.slider[layerEffect.property(i + 1).name]=false;
                          //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Slider');
                          }
                      else{
                           effectObj.angle[layerEffect.property(i + 1).name]=false;
                          //$.writeln(layerEffect.property(i + 1).name);
                        //$.writeln('Angle');
                          }                  
                        break;                      
                      default:
                        break;
                    }
                  }

                }
          //

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
            return JSON.stringify(effectObj);
          //return layerEffect.name;
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
    createControl: function(controlType){
        var Control=this.currentLayer.Effects.addProperty(controlType);        
        return Control.name;
        },
   /* createControlPoint: function(){
       
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
        },*/
    addCommonControls: function(effectName,propName,thisPropName,type)
   {       
       
               switch (type) {
                          case "point":
                            addPOIFunction(effectName, propName,thisPropName,this);
                            break;
                          case "angle":
                            addFOVFunction(effectName, propName,thisPropName,this);
                            break;
                        case "Waves":
                        addWavesFunction(effectName, propName,thisPropName,this);
                        break;
                         case "slider":
                            addStrengthFunction(effectName, propName,thisPropName,this);
                            break;
                          default:
                            alert( "Unrecognized control type" );                           
                            
                            }
               
      
       
        
    },
    moveEffectIndex: function(effectName,number)
    {
        //$.writeln(effectName);
        
        var number=(number*1);
        if(number>0&&effectName)
        {
            this.currentLayer.effect.property(effectName).moveTo(number);
            return number;
        }
     },
 
    deleteEffect: function (effectName){
        if(effectName!="null"){
            
             //$.writeln(this.currentLayer.effect.property(effectName).propertyIndex);             
            this.currentLayer.effect.property(effectName).remove();
            this.currentLayer.selected=true;
            
             
         return effectName;
            }
         
      },
  
    deleteCommonControl: function(arrayOfLinkedEffects, thisCommonContrlName){   
        $.writeln(arrayOfLinkedEffects);
        $.writeln(thisCommonContrlName);
       
        this.effectNameArr = arrayOfLinkedEffects.split(';');  
       
      
       this.currentLayer.effect.property(thisCommonContrlName).remove();
         if(this.effectNameArr[0]!=''){
              for (var i =0; i<this.effectNameArr.length; i++){            
             
             var effectNameArr=JSON.parse(this.effectNameArr[i]);
              $.writeln(effectNameArr.Lineto);
              $.writeln(effectNameArr.propertyOfEffect);
             this.currentLayer.effect.property(effectNameArr.Lineto).property(effectNameArr.propertyOfEffect).expressionEnabled = false;
            }
         }        
    },
    selectEffect: function(effectName){
         //$.writeln(effectName);
        this.currentLayer.effect.property(effectName).selected=true;
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        },
    selectCommonControl: function(effectName){
        this.currentLayer.effect.property(effectName).selected=true;
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        },
    unSelectCommonControl: function(effectName){
        if(this.currentLayer.effect.property(effectName)){
            this.currentLayer.effect.property(effectName).selected=false;
            }
        
        //this.currentLayer.effect.property(effectName).activeViewer=true;
        }
};

