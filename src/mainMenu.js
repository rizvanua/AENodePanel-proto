import arrButton from "./startArrays/arrButtonMain.js";
import arrSecondButton from "./startArrays/arrSecondButton.js";
import mainBlock from "./mainBlock/mainBlock.js";
//import secondSideBarBlocks from "./secondSideBarBlocks.js";
import GlobalStorage from './storage';
import csInterface from './csInterface';
import moveEffects  from "./helperFunctions/moveEffects.js";
import presetsBlocks from "./mainBlock/presetsBlocks.js";

class mainMenu {
  constructor(){
    let wrapUl=$('<ul>',{
      id:"nav"
    });
//blocks of First Menue
    let effects=$('<li>',{
      id:'effects'
    }).append("<div class='bage-small'><p>E</p></div>");
    let effectsUl=effects.append("<ul class='subs'></ul>");
    wrapUl.append(effects);

    let commonControls=$('<li>',{
      id:'commonControls'
    }).append("<div class='bage-small'><p>C</p></div>");
    let commonControlsUl=commonControls.append("<ul class='subs'></ul>");
    wrapUl.append(commonControls);

    /*let distributors=$('<li>',{
      id:'distributor'
    }).append("<div class='bage-small disable'><p>D</p></div>");
    let distributorsUl=distributors.append("<ul class='subs disable'></ul>");
    wrapUl.append(distributors);*/

    let multipliers=$('<li>',{
      id:'multiplier'
    }).append("<div class='bage-small multipliers disable'><p>M</p></div>");
    let multiplierUl=multipliers.children().append("<ul class='subs disable'></ul>");
    wrapUl.append(multipliers);

    let presets=$('<li>',{
      id:'presets'
    }).append("<div class='bage-small presets'><p>P</p></div>");
    let presetsUl=presets.children().append("<ul class='subs'></ul>");
    wrapUl.append(presets);


//blocks of second Menue with draggable
    arrSecondButton.effects.forEach((item,i)=>{
      let effectLi=$('<li>',{
        id:item.name,
        text:item.name,
        dataPoi:item.poi
      }).draggable({
        start:function (event, ui) {
        GlobalStorage.effectCreateDrag.active=true;
        GlobalStorage.effectCreateDrag.effectType=ui.helper.attr("id");//put Effect Type into GlobalStorage.effectCreateDrag.effectType to add a lot of effects wuth current type into Distributor
        GlobalStorage.effectCreateDrag.poi=ui.helper.attr("datapoi");//crete object with poi value TRUE or FALSE to check if we can add this effect into distributor
        $(this).parent().fadeTo(0, 1);// lock opacity in 1 to keep div visible
        $(this).parent().css('top',0);//lock top coordinate of menu to keep menu visible
        $(this).parent().css('left',50);//lock left coordinate of menu to keep menu visible
      },
      stop:function (event, ui) {
        let cordX=this.getBoundingClientRect().left;//get real positio of X
        let cordY=this.getBoundingClientRect().top;//get real positio of Y
        csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{//push data into extend script
          let obj=JSON.parse(res);
          let workBlock=new mainBlock().createBlockEffects(cordX,cordY,item,obj);
          moveEffects(workBlock);
          GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
      });
      $(this).parent().fadeTo(0, 0);// unlock opacity and turn it in 0 to hide menu
      $(this).parent().removeAttr('style');//remove style options to rest in into intitial (see css file) style
      $(this).css('left',0).css('top',0);
        //$(this).parent().css('left',-9999);
      },
    });

    effectLi.click(()=>{
        let cordX=250;
        csInterface.evalScript(`$._ext.applyEffect("${item.name}")`,(res)=>{//push data into extend script
          let obj=JSON.parse(res);
          let workBlock=new mainBlock().createBlockEffects(cordX,GlobalStorage.undermostEffectBlock.y+=50,item,obj);
          moveEffects(workBlock);
          //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
      });
    });
      effects.children('ul').append(effectLi);
      //console.log(item);
    });

    arrSecondButton.commonControls.forEach((item,i)=>{
      let commonControlLi=$('<li>',{
        id:item.name,
        text:item.name,
        class:'control'
      }).draggable({
        start:function (event, ui) {
          $(this).parent().fadeTo(0, 1);// lock opacity in 1 to keep div visible
          $(this).parent().css('top',0);//lock top coordinate of menu to keep menu visible
          $(this).parent().css('left',50);//lock left coordinate of menu to keep menu visible
        },
        stop:function (event, ui) {
          let cordX=this.getBoundingClientRect().left;//get real positio of X
          let cordY=this.getBoundingClientRect().top;//get real positio of Y
          let controlType=item.name;
          csInterface.evalScript(`$._ext.createControl("${controlType}")`,(res)=>{//push data into extend script
            let workBlock=new mainBlock().createBlockCommonControls(cordX,cordY,item,false, res);
            moveEffects(workBlock);// range an order of this effect
          });
          $(this).parent().fadeTo(0, 0);// unlock opacity and turn it in 0 to hide menu
          $(this).parent().removeAttr('style');//remove style options to rest in into intitial (see css file) style
          $(this).css('left',0).css('top',0);
        }
      });
      commonControlLi.click(()=>{
          let cordX=100;
          csInterface.evalScript(`$._ext.createControl("${item.name}")`,(res)=>{//push data into extend script
            let workBlock=new mainBlock().createBlockCommonControls(cordX,GlobalStorage.undermostCommonControlBlock.y+=50,item,false, res);
            moveEffects(workBlock);
            //GlobalStorage.effectCreateDrag.active=false// close ability to add this effect to dispatcher
        });
      });
      commonControlsUl.children('ul').append(commonControlLi);
      //console.log(item);
    });

    /*arrSecondButton.distributor.forEach((index,i)=>{
      let distributorlLi=$('<li>',{
        id:index.name,
        text:index.name
      });
      distributorsUl.children('ul').append(distributorlLi);
      //console.log(index);
    });*/

    arrSecondButton.presets.forEach((item,i)=>{
      let presetLi=$('<li>',{
        id:item.name,
        text:item.name
      }).draggable({
        start:function (event, ui) {
        $(this).parent().fadeTo(0, 1);// lock opacity in 1 to keep div visible
        $(this).parent().css('top',0);//lock top coordinate of menu to keep menu visible
        $(this).parent().css('left',50);//lock left coordinate of menu to keep menu visible
      },
      stop:function (event, ui) {
        let cordX=this.getBoundingClientRect().left;//get real positio of X
        let cordY=this.getBoundingClientRect().top;//get real positio of Y

        //let lowestCoordY=GlobalStorage.undermostEffectBlock.y;
        new presetsBlocks().createPresetsBlocks(cordX,item);

      $(this).parent().fadeTo(0, 0);// unlock opacity and turn it in 0 to hide menu
      $(this).parent().removeAttr('style');//remove style options to rest in into intitial (see css file) style
      $(this).css('left',0).css('top',0);
        //$(this).parent().css('left',-9999);
      },

      });
      presetsUl.children('ul').append(presetLi);
      //console.log(index);
    });

    let menuDiv=$('#menu').append(wrapUl);
    }

    start(event){
        //console.log(event);
      }


}

export default mainMenu;
