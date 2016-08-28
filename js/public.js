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
      $(this).parent().parent().siblings ().find ('.sc_detail').filter ('.B').find ('.sc_a03').click ();
    }
    else  {
      $(this).parent().removeClass('B');
      $(this).parent().addClass('A');
    }
   })

  // service下拉動畫
  $('.serviceboxs._s').each (function () {
    var $that = $(this);
    $that.get (0).ori_h = $that.height () + 31 * 2;
    $that.get (0).sh_h = $that.data ('add') + 70;
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


  // $('.case_detail').hover(function(){
  //   $(this).removeClass('D');
  //   $(this).addClass('C');
  // }, function(){
  //  $(this).removeClass('C');
  //  $(this).addClass('D');
  // });

  // case
  $('.case_detail .case_a01, .case_detail .case_a03, .case_detail .case_b06').click(function() {
    if ($(this).parent().hasClass('casebg01') && $(this).parent().hasClass('C')) {
      $(this).parent().removeClass('casebg01');
      $(this).parent().removeClass('C');
      $(this).parent().addClass('D');
      $(this).parent().parent().siblings ().find ('.case_detail').filter ('.D').find ('.case_a01').click ();
    }
    else {
      $(this).parent().removeClass('D');
      $(this).parent().addClass('casebg01');
      $(this).parent().addClass('C');
    }
  });




  // case
  $('.serviceboxs._c').each (function () {
    var $that = $(this);
    $that.get (0).ori_h = $that.height () + 15 * 2;
    var cl = $that.find ('.case_detail').attr ('class');
    $that.get (0).sh_h = $that.data ('add') + 70;
    $that.find ('.case_detail').attr ('class', cl);

    $that.find ('.case_a01,.case_a03,.case_b06').click(function () {
      if ($(this).parent().hasClass('C')) {
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
    var i = 1;
    if (now == 'service.html') {
      for (i = 1; i < 10; i++) {
        if (hash == ('service_' + i)) {
            $('.serviceboxs._s').eq (i - 1).find ('.sc_a03').click ();
        }
      }
    }

    if (now == 'case.html') {
      for (i = 1; i < 10; i++) {
        if (hash == ('case_' + i)) {
            $('.serviceboxs._c').eq (i - 1).find ('.case_a01').click ();
        }
      }
    }
    if (now == 'partners.html') {
      for (i = 1; i < 10; i++) {
        if (hash == ('partners_' + i)) {
            $('.ba').eq (i - 1).click ();
        }
      }
    }
  }
  window.onhashchange = function () {
    location.reload ();
  };


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


  $('#send_btn').click (function () {
    var content = $('#send_content').val ();
    if (!content.length) return false;

    $.ajax ({
      url: 'mail/a.php',
      data: {
        content: content,
      },
      async: true, cache: false, dataType: 'json', type: 'post',
      beforeSend: function () { }
    })
    .done (function () {  })
    .fail (function (result) { console.error (result.responseText); })
    .complete (function (result) { $('#send_content').val (''); });
  });

  $('#contact_send').click (function () {
    var name = $('#contact_name').val ();
    var mail = $('#contact_mail').val ();
    var content = $('#contact_content').val ();

    if (!name.length && !mail.length && !content.length) return false;

    $.ajax ({
      url: 'mail/b.php',
      data: {
        name: name,
        mail: mail,
        content: content,
      },
      async: true, cache: false, dataType: 'json', type: 'post',
      beforeSend: function () { }
    })
    .done (function () {  })
    .fail (function (result) { console.error (result.responseText); })
    .complete (function (result) {
      $('#contact_name').val ('');
      $('#contact_mail').val ('');
      $('#contact_content').val ('');
    });
  });

});







