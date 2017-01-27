// Script to generate projects of high complexity.

$._ext = {

    sendText : function(effectName)
    {
        var currentComp = app.project.activeItem;

        if (currentComp){
            var layerCount = currentComp.numLayers;
            if (layerCount > 0){
                var allText = new Array();
                for (var i = 1; i <= layerCount; ++i){
                    var currentLayer = currentComp.layers[i];
                    if (currentLayer instanceof TextLayer){
                        allText[i-1] = currentLayer.text.sourceText.value;
                        $.writeln(app.effects[1].toString());
                        /*alert(currentLayer.text.sourceText.value);*/
                    }

                    alert(currentLayer);
                    if(currentLayer instanceof AVLayer){
                        $.writeln(currentLayer.Effects);
                        currentLayer.Effects.addProperty(effectName)

                          }
                }
                return allText;
            } else {

              alert("No text layers in " + currentComp.name + ".");
            }
        } else {
            alert("No active Comp.");
        }
    }
};
