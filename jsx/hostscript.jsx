function addExpressionFunction(effectName, propName,thisPropName,_this,multiplierStr,type){
         var multiplierArrModif=[];        
        if(multiplierStr&&multiplierStr.length>0){
          var multiplierArr= multiplierStr.split(',');         
        //$.writeln(effectName);
        //$.writeln(propName);
        //$.writeln(type);
         for(var i=0;i<multiplierArr.length;i++){
                 var str='(thisLayer.effect("'+multiplierArr[i]+'").slider.value/100)';
                // $.writeln(str);
                 multiplierArrModif.push(str);
             }
         
            var arrStr=multiplierArrModif.join('*');
            var expressionString='thisLayer.effect('+'"'+thisPropName+'"'+').'+type+'.value*(thisLayer.effect("Master").slider.value/100)'+'*'+arrStr;    
          _this.currentLayer.effect.property(effectName).property(propName).expression=expressionString;
        }
    else{
            var expressionString='thisLayer.effect('+'"'+thisPropName+'"'+').'+type+'.value*(thisLayer.effect("Master").slider.value/100)'; 
            _this.currentLayer.effect.property(effectName).property(propName).expression=expressionString;
        }     
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
   if(app.project.activeItem===null){//check if  at least one item is active
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
      //$.writeln(this.currentLayer);
        //$.writeln(thisLayerName);
     /* for(var key in this.currentLayer){
            $.writeln(key);
          }*/
      if(!thisLayerName){
          //return '110';//empty layer without effects
          return false;
          }
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
      //var effectArray = [];
      var stateScope={
                selectedEffect:{
                    effectName:null,// the name of selected effect
                    effectIndex:null,// the index of selected effect
                    distrInst:null //the quantity of distributors                    
                },
                effectArray:[],
                hasVR: false
        };
      //this.effectsQuantity=this.currentLayer.effect.numProperties;
      if(this.currentLayer.effect('Mantra VR')){// check if  'Mantra VR'  is on this layer 
            stateScope.hasVR=true;
            }
      this.effectsQuantity = this.currentLayer.effect.numProperties;

      for (var i = this.currentLayer.effect.numProperties; i--;) {
        //$.writeln(this.currentLayer.effect(i+1).property(2).propertyType);
        if(this.currentLayer.effect(i + 1).selected){
             stateScope.selectedEffect.effectName=this.currentLayer.effect(i + 1).name;
            stateScope.selectedEffect.effectIndex=this.currentLayer.effect(i + 1).propertyIndex;
            }
        if(this.currentLayer.effect(i + 1).selected&&this.currentLayer.effect(i + 1).property('Number Of Instances')){// check if this effect is selected and this effect has            
            stateScope.selectedEffect.distrInst=Math.round(this.currentLayer.effect(i + 1).property('Number Of Instances').value); // get value  of property('Number Of Instances')   and assiggn to object  stateScope
            }        
        stateScope.effectArray.push(this.currentLayer.effect(i + 1).name);//push current effect name into ffectArray

      }
      //$.writeln(effectArray);
      //return effectArray;
      
      return JSON.stringify(stateScope);
    } else if (this.currentLayer.effect.numProperties == 0) {
      return '110';//empty layer without effects
    }
  }
else {
    return 0;
    }

}, 
     initialProjectTest : function()
    {   
       this.countM=0; 
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
                        
                         //this.createMasterMultiplier();
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
                       if(!this.currentComp.layers[i+1].effect('Mettle Mantra VR')){// chesk if 'Mantra VR' is on this layer
                           return false;
                           }
                        
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
                 //this.currentLayer.effect('Master').property("Slider").expression='clamp(value, min=0, max=100)';  //set range of value from 0 to 100
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
                multiplierObj:[],
                hasVR: false
            };
       
        //$.writeln(this.currentLayer.effect.numProperties);
        if(this.currentLayer.effect('Mantra VR')){
            Obj.hasVR=true;
            }
        
        for(var i=0; i<this.currentLayer.effect.numProperties; i++){
          //$.writeln('CHECK');
            //$.writeln(this.currentLayer.effect('Mantra VR').name);
            
            switch (this.currentLayer.effect(i+1).matchName) {
                  case "ADBE Angle Control":
                  var thisMatchName=this.currentLayer.effect(i+1).matchName;
                  var thisName=this.currentLayer.effect(i+1).name
                   Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                     //$.writeln(this.currentLayer.effect(i+1).property('Angle').value);
                    break;
                  case "ADBE Slider Control":
                    var thisMatchName=this.currentLayer.effect(i+1).matchName;
                    var thisName=this.currentLayer.effect(i+1).name;
                     if(thisName.search( /Multiplier/i )>-1){
                         this.countM+=1; 
                        Obj.multiplierObj.push({
                            baseEffect: thisMatchName.replace("ADBE ", ""),
                            realName: thisName
                    });
                        }
                    else{
                         Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                        }                   
                     //$.writeln(this.currentLayer.effect(i+1).property('Slider').value);
                    break;
                  case "ADBE Point Control":
                   var thisMatchName=this.currentLayer.effect(i+1).matchName;
                   var thisName=this.currentLayer.effect(i+1).name
                   Obj.commonControlObj.push({baseEffect:thisMatchName.replace("ADBE ", ""), realName:thisName});
                   //$.writeln(this.currentLayer.effect(i+1).property('Point').value);
                    break;
                 case "Mettle Mantra VR":
                   this.createMasterMultiplier();
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
                        slider:{},
                      propArray:[]
                      };
                   //$.writeln('getData');
                  var thisName=this.currentLayer.effect(i+1).name;
                  var thisMatchName=this.currentLayer.effect(i+1).matchName;
                  var layerEffect=this.currentLayer.effect(i+1);
                  thisEffectObj.baseEffect=thisMatchName.replace("Mettle Mantra ", "");
                    thisEffectObj.name=thisName;                 
                     
                     for(var d=0; d<layerEffect.numProperties; d++)
                     { 
                         this.functionEffectLoop(layerEffect, d, thisEffectObj);
                         
                     if(layerEffect.property(d+1).expressionEnabled)
                            {
                                 var LineTo=layerEffect.name; 
                                 var propertyOfEffect=layerEffect.property(d+1).name;                                
                                 var LineFrom=layerEffect.property(d+1).expression.match(/\(\"([^)]+)\"\)/)[1];                                 
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
        applyEffect: function(effectName) {// function to apply effect from HTML5 panel
            //$.writeln('ApplyEffect');
            var effectObj={
                //effectsObj:[],
                point:{},
                angle:{},
                slider:{},
                propArray:[]
                }
                this.createMasterMultiplier();
              if (this.currentComp) {
                var layerEffect = this.currentLayer.Effects.addProperty(effectName);
                effectObj.name=layerEffect.name;

                for (var i =0; i<layerEffect.numProperties; i++) {
                    this.functionEffectLoop(layerEffect,i,effectObj);
               

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
                  linesObj: [],
                  multiplierObj:[]
                };
                //$.writeln( this.currentLayer.effect('Mantra VR').name);
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
                    if(thisName.search( /Multiplier/i )>-1){
                        Obj.multiplierObj.push({
                            baseEffect: thisMatchName.replace("ADBE ", ""),
                            realName: thisName
                    });
                        }
                    else{
                         Obj.commonControlObj.push({
                            baseEffect: thisMatchName.replace("ADBE ", ""),
                            realName: thisName
                    });
                        }
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
                    if(!this.currentLayer.effect.property("Master")){
                         this.createMasterMultiplier();
                        }                   
                    break;
                  default:
                    var thisEffectObj = {
                    point:{},
                    angle:{},
                    slider:{},
                    propArray:[]
                    };

                    var thisName = effectName;
                    var thisMatchName = layerEffect.matchName;
                    thisEffectObj.baseEffect = thisMatchName.replace("Mettle Mantra ", "");
                    thisEffectObj.name = thisName;

                    for (var d=0; d<layerEffect.numProperties; d++) {
                        this.functionEffectLoop(layerEffect,d,thisEffectObj);
                        
                      if (layerEffect.property(d + 1).expressionEnabled) {
                        var LineTo = layerEffect.name;                       
                        var propertyOfEffect = layerEffect.property(d + 1).name;
                        var LineFrom = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[1];
                         var LineFromMult = layerEffect.property(d + 1).expression.match(/\(\"([^)]+)\"\)/)[3];
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
                //$.writeln(JSON.stringify(Obj.effectsObj));
                return JSON.stringify(Obj);
            },
      applyEffectPresets: function(effectName, propertyOfEffect) {
          var effectObj={
                point:{},
                angle:{},
                slider:{},
                 propArray:[]
                }
            
          var layerEffect = this.currentLayer.Effects.addProperty(effectName);
                 effectObj.name=layerEffect.name;
          
          //
          for (var i=0; i<layerEffect.numProperties; i++) {
              this.functionEffectLoop(layerEffect,i,effectObj);              
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
 
    createControl: function(controlType){
        var Control=this.currentLayer.Effects.addProperty(controlType);        
        return Control.name;
        },
  
    addCommonControls: function(effectName,propName,thisPropName,type,multiplierStr)
   {       
         //$.writeln(type);
         addExpressionFunction(effectName, propName,thisPropName,this,multiplierStr,type);             
      
       
        
    },
    createMultiplier: function(){     
       this.countM+=1;  
         /* for (var i=0; i<this.currentLayer.effect.numProperties; i++){
              var str=this.currentLayer.effect(i+1).name;
              if(str.search( /Multiplier/i )>-1){
                  this.countM+=1
                   $.writeln(this.countM);
                  }
              }*/
          if(this.countM>0){
                var Multiplier=this.currentLayer.Effects.addProperty('Slider Control').name='Multiplier'+(this.countM-1);    
               
            return 'Multiplier'+(this.countM-1);             
              }
          else{
             var Multiplier=this.currentLayer.Effects.addProperty('Slider Control').name='Multiplier';   
            
            return 'Multiplier';
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
 
    renameEffect: function(oldEffectName, newEffectName){
         this.currentLayer.effect.property(oldEffectName).name=newEffectName;
         return newEffectName;
        },
 
   deleteEffect: function (effectName){
        if(effectName!="null"&&this.currentLayer.effect.property(effectName)){
            
             //$.writeln(this.currentLayer.effect.property(effectName).propertyIndex);             
            this.currentLayer.effect.property(effectName).remove();
            this.currentLayer.selected=true;
            
             
         return effectName;
            }
         
      },
  deletePropExpression: function(effectName,propertyName){
      //$.writeln(effectName);  
      //$.writeln(propertyName);          
      this.currentLayer.effect.property(effectName).property(propertyName).expressionEnabled = false;
      this.currentLayer.effect.property(effectName).property(propertyName).expression = "";
      },
  
    deleteCommonControl: function(arrayOfLinkedEffects, thisCommonContrlName){   
        //$.writeln(arrayOfLinkedEffects);
        //$.writeln(thisCommonContrlName);
       
        this.effectNameArr = arrayOfLinkedEffects.split(';');  
       
      
      //
      function deleteFromEffects(callback){
         if(this.effectNameArr[0]!=''){
                      for (var i =0; i<this.effectNameArr.length; i++){            
                     
                     var effectNameArr=JSON.parse(this.effectNameArr[i]);
                      //$.writeln(effectNameArr.Lineto);
                      //$.writeln(effectNameArr.propertyOfEffect);
                      if(this.currentLayer.effect.property(effectNameArr.Lineto)){
                           this.currentLayer.effect.property(effectNameArr.Lineto).property(effectNameArr.propertyOfEffect).expressionEnabled = false;
                            this.currentLayer.effect.property(effectNameArr.Lineto).property(effectNameArr.propertyOfEffect).expression="";
                          }
                    
                    }
                 } 
         callback.call(this);
        };
    deleteFromEffects.call(this, function(){
        if(this.currentLayer.effect.property(thisCommonContrlName)){
          this.currentLayer.effect.property(thisCommonContrlName).remove();
          }
        });
      //
       
         
     this.currentLayer.selected=true;
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
        },
    functionEffectLoop: function(layerEffect, d, Obj) {//this function is used in Loop of effect properties
     if (layerEffect.property(d + 1).name != 'Frame Layout' && layerEffect.property(d + 1).name != 'Compositing Options') {
       if (layerEffect.property(d + 1).name == 'Number Of Instances') {
         Obj.distrInst = Math.round(layerEffect.property(d + 1).value);
       }
       switch (layerEffect.property(d + 1).propertyValueType) {
         case 6415:
           Obj.propArray.push({
             name: layerEffect.property(d + 1).name,
             state: false,
             index: layerEffect.property(d + 1).propertyIndex,
             type: 'point'
           })
           break;
         case 6417:
           if (layerEffect.property(d + 1).hasMax&&layerEffect.property(d + 1).maxValue>1) {              
             Obj.propArray.push({
               name: layerEffect.property(d + 1).name,
               state: false,
               index: layerEffect.property(d + 1).propertyIndex,
               type: 'slider'
             })
           }else if(layerEffect.property(d + 1).hasMax&&layerEffect.property(d + 1).maxValue<=1){
               Obj.propArray.push({
               name: layerEffect.property(d + 1).name,
               state: false,
               index: layerEffect.property(d + 1).propertyIndex,
               type: 'checkbox'
             })
               }else {
             Obj.propArray.push({
               name: layerEffect.property(d + 1).name,
               state: false,
               index: layerEffect.property(d + 1).propertyIndex,
               type: 'angle'
             })
           }
           break;
         default:
           break;
       }
     }
   }
    
   
};

