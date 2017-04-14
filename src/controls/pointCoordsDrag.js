import csInterface from "../csInterface.js";
/*$.fn.pointCoordsDrag= function () {

};*/

(function($) {
  $.fn.pointCoordsDrag = function(coords,pointName,pointInputX,pointInputY){

    let width=$(this).parent().width();
    let height=$(this).parent().height();
    let coordsArr=coords.split(',');
    let currentWidth=coordsArr[0];
    let currentHight=coordsArr[1];
    let compositionWidth=coordsArr[2];
    let compositionHight=coordsArr[3];
//let parentElem=parentElem.position()
    pointInputX.on( "keypress", (e)=>{
      //console.log(pointInputX.val());
      if(e.which == 13) {
        //point.css({'top'});
        //let thisPointY=`${(currentHight*height)/compositionHight}px`;
        let thisPointX=`${(pointInputX.val()*width)/compositionWidth}px`;
        //$(this).css({'top':thisPointY});
        $(this).css({'left':thisPointX});
        let yValue=((parseInt($(this).css('top')))*compositionHight)/height;
        let setValue=[pointInputX.val(),yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
    })

    pointInputY.on( "keypress", (e)=>{
      //console.log(pointInputX.val());
      if(e.which == 13) {
        //console.log(point.css('top'));
        let thisPointY=`${(pointInputY.val()*height)/compositionHight}px`;
        $(this).css({'top':thisPointY});
        let xValue=((parseInt($(this).css('left')))*compositionWidth)/width;
        let setValue=[xValue,pointInputY.val()];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`);

          }
    })
//
    $(this).draggable({
      create: function(event, ui){

        //if(coords&&coords!='undefined'){
            console.log('create',coords);
          let coordsArr=coords.split(',');
        //}
        let currentWidth=coordsArr[0];
        let currentHight=coordsArr[1];
        let compositionWidth=coordsArr[2];
        let compositionHight=coordsArr[3];
        //$(this).position.top=(750/2);
        pointInputX.val(currentWidth);
        pointInputY.val(currentHight);
        let thisPointY=`${(currentHight*height)/compositionHight}px`;
        let thisPointX=`${(currentWidth*width)/compositionWidth}px`;
        $(this).css({'top':thisPointY});
        $(this).css({'left':thisPointX});
        //$(this).position.left=(1500/2);
      },
      drag: function( event, ui ) {
        /*let offset=$(this).position();
        console.log(offset);*/
        let coordY=parseInt($(this).css('top'),10);
        let coordX=parseInt($(this).css('left'),10)
        console.log(coordY,coordX);
        if(ui.position.top>200){
          ui.position.top=200;
          $(this).css({'top':'200px'})
          //return false;
        }
        else if(ui.position.top<0){
          ui.position.top=0;
          $(this).css({'top':'0px'})
          //return false;
        }
        if(ui.position.left>400){
          ui.position.left=400;
          $(this).css({'left':'400px'})
          //return false;
        }
        else if(ui.position.left<0){
          ui.position.left=0;
          $(this).css({'left':'0px'})
          //return false;
        }
        let yValue=((ui.position.top)*compositionHight)/height;
        let xValue=((ui.position.left)*compositionWidth)/width;
        pointInputX.val(xValue);
        pointInputY.val(yValue);
        let setValue=[xValue,yValue];
        csInterface.evalScript(`$._ext.setPointControlValue("${pointName}","${setValue}")`)
        //console.log(((ui.position.top)*compositionHight)/height);
        //console.log(((ui.position.left)*compositionWidth)/width);
      }
});
     return this;
  };
})(jQuery);
