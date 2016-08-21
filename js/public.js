/**
 * @author      ZEUS Design - http://www.zeusdesign.com.tw
 * @copyright   Copyright (c) 2016 ZEUS Design
 */

$(function () {
   // 圖自動縮放
   $('.banners .img, .spb, .peopimg, .sc_cel, .case_b05').imgLiquid ({verticalAlign: 'center'});

   // 右邊menu
   $('.navboxout, #navbox .x').click(function() {
     $('#navbox').toggleClass('sn');
     $('#cover').toggleClass('show');
   });

   // 語言
   $('.openlang').click(function() {
     $('.lang').toggleClass('langshow');
   });


   // partner點選切換tab
   $('.ba').click(function() {
    $('.ba').removeClass ('h');
    $(this).addClass ('h');

    $('.partnersbox').removeClass('partnershow');
    $('.partnersbox').eq($(this).index()).addClass('partnershow');
   });

   $('.ba').eq (0).click();


   // service下拉
   $('.sc_detail .sc_a03, .sc_detail .sc_a01, .sc_detail .sc_b04').click(function () {
    if ($(this).parent().hasClass('A')) {
      $(this).parent().removeClass('A');
      $(this).parent().addClass('B');
    }
    else  {
      $(this).parent().removeClass('B');
      $(this).parent().addClass('A');
    }
   })

  // service下拉動畫
  $('.serviceboxs').each (function () {
    var $that = $(this);
    $that.get (0).ori_h = $that.height () + 31 * 2;
    $that.get (0).sh_h = $that.find ('.sc_detail').addClass ('B').height () + 31 * 2;
    $that.find ('.sc_detail').removeClass ('B');

    $that.find ('.sc_a03,.sc_a01,.sc_b04').click(function () {
      if ($(this).parent().hasClass('A')) {
        $that.css ({
          'height': $that.get (0).sh_h
        }).animate ({
          'height': $that.get (0).ori_h
        });

      } else {
        $that.css ({
          'height': $that.get (0).ori_h
        }).animate ({
          'height': $that.get (0).sh_h
        });

      }
    });
  });

  var now = document.URL.replace (/^.*[\\\/]/, '');
  var hash = window.location.hash.trim ().slice (1);
  if (hash.length) {
    now = now.replace ('#' + hash, '');
    if (now == 'service.html') {
      for (var i = 1; i < 10; i++) {
        if (hash == ('service_' + i)) {
            $('.serviceboxs').eq (i - 1).find ('.sc_a03').click ();
        }
      }
    }
  }
  window.onhashchange = function () {
    location.reload ();
  };

  

  // $('.case_detail').hover(function(){
  //   $(this).removeClass('D');
  //   $(this).addClass('C');
  // }, function(){
  //  $(this).removeClass('C');
  //  $(this).addClass('D');
  // });


  $('.case_detail .case_a01, .case_detail .case_a03, .case_detail .case_b06').click(function() {
    if ($(this).parent().hasClass('casebg01') && $(this).parent().hasClass('C')) {
      $(this).parent().removeClass('casebg01');
      $(this).parent().removeClass('C');
      $(this).parent().addClass('D');
    }
    else {
      $(this).parent().removeClass('D');
      $(this).parent().addClass('casebg01');
      $(this).parent().addClass('C');
    }
  });



  $('#to_top').click (function () {
    $('body').animate ({ scrollTop: 0 }, 'slow');
  });
  $('.banners').each (function () {
    var $that = $(this);
    $that.data ('n', 1).attr ('class', 'banners n1').data ('l', $that.find ('.banner').length);
    $that.find ('.points a').click (function () {
      $that.data ('n', $(this).index () + 1).attr ('class', 'banners n' + ($(this).index () + 1));
    });
  });

  setInterval (function () {
    var n = $('.banners').data ('n'),
        l = $('.banners').data ('l');
    n = (n + 1 > l ? 0 : n) + 1;
    $('.banners').data ('n', n).attr ('class', 'banners n' + n);
  }, 7000);

});







