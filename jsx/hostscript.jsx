var currentLayer={};

$._ext = {

    applyEffect : function(effectName)
    {
        var currentComp = app.project.activeItem;
        if (currentComp){
            var layerCount = currentComp.numLayers;
            if (layerCount > 0){
                for (var i = 1; i <= layerCount; ++i){

                    if(currentComp.layer(i).selected&&currentComp.layer(i) instanceof AVLayer){
                        currentLayer= currentComp.layer(i);
                        currentComp.layer(i).Effects.addProperty(effectName).addEventListener('click',function(){
                                    alert("EVENT WORKS");
                            });
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
        currentLayer.effect.property(effectName).property(propName).setValue([100,980]
)
    }
};