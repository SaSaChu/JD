/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
   $('.banner, .spb').imgLiquid ({verticalAlign: 'center'});

   $('.navboxout, #navbox .x').click(function() {
    $('#navbox').toggleClass('sn');
     $('#cover').toggleClass('show');
   })
});

