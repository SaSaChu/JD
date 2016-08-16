/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
   $('.banner, .spb, .peopimg').imgLiquid ({verticalAlign: 'center'});


   $('.navboxout, #navbox .x').click(function() {
     $('#navbox').toggleClass('sn');
     $('#cover').toggleClass('show');
   });


   $('.openlang').click(function() {
     $('.lang').toggleClass('langshow');
   });


   $('.ba').click(function() {
    $('.ba').removeClass ('h');
    $(this).addClass ('h');

    $('.partnersbox').removeClass('partnershow');
    $('.partnersbox').eq($(this).index()).addClass('partnershow');
   });

   $('.ba').eq (0).click();

});

