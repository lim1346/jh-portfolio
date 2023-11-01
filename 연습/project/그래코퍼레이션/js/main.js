$(document).ready(function(){

  var mql = window.matchMedia('screen and (max-width: 1280px)');

      function isElementUnderBottom(elem, triggerDiff) {
        const { top } = elem.getBoundingClientRect();
        const { innerHeight } = window;
        return top > innerHeight + (triggerDiff || 0);
      }
      
      function handleScroll() {
        const elems = document.querySelectorAll('.circle_on');
        elems.forEach(elem => {
          if (isElementUnderBottom(elem, -100)) {
            $('#circle').fadeIn(1000);
          } else {
            $('#circle').fadeOut();
          }
        })
      }






  /* 풀페이지 js*/
  $('#fullpage').fullpage({ 
    //option here
    autoScrolling:true,
    scrollHorizontally: true,
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition:'left',
    onLeave: function(anchorLink, index){

    /* section별 script */
    if(index == 2) {

      /* 이벤트효과 */
      setTimeout(function() {
        $('#fullpage .section2 .text h3').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section2 .text h4').addClass('on');
      }, 800);
      setTimeout(function() {
        $('#fullpage .section2 .text button').addClass('on');
      }, 1000);
      setTimeout(function() {
        $('#fullpage .section2 .circle').fadeIn();
        $('#fullpage .section2 .section2_bg').css('opacity','1');
      }, 1400);

    } else if(index == 3)  {

      setTimeout(function() {
        $('#fullpage .section3 .title').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section3 ul li:first-child').addClass('on');
      }, 800);
      setTimeout(function() {
        $('#fullpage .section3 ul li:nth-child(2)').addClass('on');
      }, 1000);
      setTimeout(function() {
        $('#fullpage .section3 ul li:nth-child(3)').addClass('on');
      }, 1200);
      setTimeout(function() {
        $('#fullpage .section3 .section3_bg').addClass('on');
      }, 1200);
      
           /* 숫자 카운트 */
           $('.counter').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 2200,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });


      
    } else if(index == 4)  {

      setTimeout(function() {
        $('#fullpage .section4 .title').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section4 ul li').addClass('on');
      }, 800);
      setTimeout(function() {
        $('#fullpage .section4 .section4_bg').addClass('on');
      }, 1000);

     

    } else if(index == 5) {
      setTimeout(function() {
        $('#fullpage .section5 .title').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section5 .post-wrapper').addClass('on');
      }, 900);
      setTimeout(function() {
        $('#fullpage .section5 .more_btn').addClass('on');
      }, 1200);



    } else if(index == 6) {
      setTimeout(function() {
        $('#fullpage .section6 .title').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section6 ul li:first-child').addClass('on');
      }, 800);
      setTimeout(function() {
        $('#fullpage .section6 ul li:nth-child(2)').addClass('on');
      }, 1000);
      setTimeout(function() {
        $('#fullpage .section6 ul li:nth-child(3)').addClass('on');
        $('#fullpage .section6 .container .post-wrapper').addClass('on');
      }, 1200);
      setTimeout(function() {
        $('#fullpage .section6 ul li:nth-child(4)').addClass('on');
      }, 1400);
      setTimeout(function() {
        $('#fullpage .section6 .more_btn').addClass('on');
      }, 1600);

    }else if(index == 7) {
      setTimeout(function() {
        $('#fullpage .section7 .text h3').addClass('on');
      }, 600);
      setTimeout(function() {
        $('#fullpage .section7 .text h4').addClass('on');
      }, 800);
      setTimeout(function() {
        $('#fullpage .section7 .text button').addClass('on');
      }, 1000);
      setTimeout(function() {
        $('#fullpage .section7 .circle').fadeIn();
        $('#fullpage .section7 .section7_bg').addClass('on');
      }, 1200);
      }
    }
  });

  /* 햄버거 버튼 */
  const icons = document.querySelectorAll('.icon');
  icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
      $('body').toggleClass('on');
      $('.top_btn').toggleClass('no');
      icon.classList.toggle('open');
      $('.click_show').toggleClass('on');
      setTimeout(function() {
        $('.click_show ul li:first-child').toggleClass('on');
      },400)
      setTimeout(function() {
        $('.click_show .container .lang').toggleClass('on');
      },400)
      setTimeout(function() {
        $('.click_show ul li:nth-child(2)').toggleClass('on');
      },520)
      setTimeout(function() {
        $('.click_show ul li:nth-child(3)').toggleClass('on');
      },640)
      setTimeout(function() {
        $('.click_show ul li:nth-child(4)').toggleClass('on');
      },760)
      setTimeout(function() {
        $('.click_show ul li:nth-child(5)').toggleClass('on');
      },880)
      setTimeout(function() {
        $('.click_show ul li:nth-child(6)').toggleClass('on');
      },1000)
    });
  });
  

  $('#fullpage .section2 .text button').mouseenter(function(){
    setTimeout(function() {
      $('#fullpage .section2 .text button .int_more_arrow').attr('src', 'image/button/section1_arrow_white.png');
      $('#fullpage .section2 .text button .int_more_arrow').css('margin-left','20px');
    },250)
  });
  $('#fullpage .section2 .text button').mouseleave(function(){
    $('#fullpage .section2 .text button .int_more_arrow').attr('src', 'image/button/section1_arrow.png');
    $('#fullpage .section2 .text button .int_more_arrow').css('margin-left','10px');
  });

  $('#fullpage .section7 .text button').mouseenter(function(){
    setTimeout(function() {
      $('#fullpage .section7 .text button .int_more_arrow').attr('src', 'image/button/section1_arrow_white.png');
      $('#fullpage .section7 .text button .int_more_arrow').css('transform','translateX(10px)');
    },250)
  });
  $('#fullpage .section7 .text button').mouseleave(function(){
    $('#fullpage .section7 .text button .int_more_arrow').attr('src', 'image/button/section1_arrow.png');
    $('#fullpage .section7 .text button .int_more_arrow').css('transform','translateX(0px)');
  });



  /* 브랜드 슬라이드*/

  $('#fullpage .section5 .post-wrapper').not('.slick-initialized').slick({
    slide: 'div',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow  : "<button type='button' class='slick-next'>Next</button>",
    draggable : true,
    speed : 800,
    autoplaySpeed : 1800,
    pauseOnHover : true,
    responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 1025, 
        settings: {
          slidesToShow:2,
          centerMode: true,
          centerPadding: '50px',
        } 
      },
      { 
        breakpoint: 768,
        settings: {
          slidesToShow:1,
          centerMode: true,
          centerPadding: '50px',
          arrows : false, 
        }  
      }
    ],

  });




  var mql = window.matchMedia('screen and (max-width: 1367px)');
  if (mql.matches) {
    $('.nav-icon-5').click(function(){
      setTimeout(function() {
        $('.nav-icon-5 span').toggleClass('on');
      },400)
      $('.header').toggleClass('no');
  });
};




  var mql = window.matchMedia('screen and (max-width: 1280px)');
  if (mql.matches) {
    

   $('.selectfit img').attr('src', 'image/main/logo_select_on.png');
   $('.nuti img').attr('src', 'image/main/logo_nuti_on.png');
   $('.botami img').attr('src', 'image/main/logo_botami_on.png');
   $('.ranking img').attr('src', 'image/main/logo_ranking_on.png');
   $('.ozu img').attr('src', 'image/main/logo_ozu_on.png');
   $('.monster img').attr('src', 'image/main/logo_monster_on.png');
   $('.gml img').attr('src', 'image/main/logo_gml_on.png');

   $('#fullpage .section6 .post-wrapper').slick({
    slide: 'div',
    infinite: false,
    slidesToScroll: 1,
    slidesToShow:2,
    draggable : true,
    speed : 800,
    prevArrow : false,
    nextArrow : false,
    dots : true, 
    settings: {
      slidesToShow:2,
      centerMode: true,
      centerPadding: '100px',
    } 

   });


}else {
   /* 메인페이지 브랜드 마우스 오버*/


   $('#fullpage .section5 .post-wrapper .selectfit').mouseenter(function(){
    $('.selectfit img').attr('src', 'image/main/logo_select_on.png');
    $('.selectfit').addClass('on');
});
$('#fullpage .section5 .post-wrapper .nuti').mouseenter(function(){
  $('.nuti img').attr('src', 'image/main/logo_nuti_on.png');
  $('.nuti').addClass('on');
});
$('#fullpage .section5 .post-wrapper .botami').mouseenter(function(){
  $('.botami img').attr('src', 'image/main/logo_botami_on.png');
  $('.botami').addClass('on');
});
$('#fullpage .section5 .post-wrapper .ranking').mouseenter(function(){
  $('.ranking img').attr('src', 'image/main/logo_ranking_on.png');
  $('.ranking').addClass('on');
});
$('#fullpage .section5 .post-wrapper .ozu').mouseenter(function(){
  $('.ozu img').attr('src', 'image/main/logo_ozu_on.png');
  $('.ozu').addClass('on');
});
$('#fullpage .section5 .post-wrapper .monster').mouseenter(function(){
  $('.monster img').attr('src', 'image/main/logo_monster_on.png');
  $('.monster').addClass('on');
});
$('#fullpage .section5 .post-wrapper .gml').mouseenter(function(){
  $('.gml img').attr('src', 'image/main/logo_gml_on.png');
  $('.gml').addClass('on');
});

$('#fullpage .section5 .post-wrapper .selectfit').mouseleave(function(){
  $('.selectfit img').attr('src', 'image/main/logo_select.png');
  $('.selectfit').removeClass('on');
})
$('#fullpage .section5 .post-wrapper .nuti').mouseleave(function(){
  $('.nuti img').attr('src', 'image/main/logo_nuti.png');
  $('.nuti').removeClass('on');
});
$('#fullpage .section5 .post-wrapper .botami').mouseleave(function(){
  $('.botami img').attr('src', 'image/main/logo_botami.png');
  $('.botami').removeClass('on');
});
$('#fullpage .section5 .post-wrapper .ranking').mouseleave(function(){
  $('.ranking img').attr('src', 'image/main/logo_ranking.png');
  $('.ranking').removeClass('on');
});
$('#fullpage .section5 .post-wrapper .ozu').mouseleave(function(){
  $('.ozu img').attr('src', 'image/main/logo_ozu.png');
  $('.ozu').removeClass('on');
});
$('#fullpage .section5 .post-wrapper .monster').mouseleave(function(){
  $('.monster img').attr('src', 'image/main/logo_monster.png');
  $('.monster').removeClass('on');
});
$('#fullpage .section5 .post-wrapper .gml').mouseleave(function(){
  $('.gml img').attr('src', 'image/main/logo_gml.png');
  $('.gml').removeClass('on');
});



}

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.up-on-scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -100)) {
      elem.style.opacity = '0';
      elem.style.transform = 'translateY(90px)';
    } else {
      elem.style.opacity = '1';
      elem.style.transform = 'translateY(0px)';
    }
  })
}


/* GRAE알파벳 설명*/
window.addEventListener('scroll', handleScroll);
$(window).on('scroll', function(){ 
  if($(window).scrollTop() > 2000) {
    $('#intro  .section2').addClass('on');
  } else {
    $('#intro  .section2').removeClass('on');
  }
  if($(window).scrollTop() > 2600) {
      $('#intro .section2 .container .glad').addClass('on');
  } else {
    $('#intro .section2 .container .glad').removeClass('on');
    }
  if($(window).scrollTop() > 3100) {
    $('#intro .section2 .container .resolution').addClass('on');
  } else {
    $('#intro .section2 .container .resolution').removeClass('on');
  }
  if($(window).scrollTop() > 3600) {
    $('#intro .section2 .container .affirmation').addClass('on');
  } else {
    $('#intro .section2 .container .affirmation').removeClass('on');
  }
  if($(window).scrollTop() > 4100) {
    $('#intro .section2 .container .everyting').addClass('on');
  } else {
    $('#intro .section2 .container .everyting').removeClass('on');
  }
  if($(window).scrollTop() > 4600) {
    $('#intro .section2 .container .dot').addClass('on');
  } else {
    $('#intro .section2 .container .dot').removeClass('on');
  }


var mql = window.matchMedia('screen and (max-width: 1280px)');
  if (mql.matches) { 
    if($(window).scrollTop() > 1500) {
      $('#intro  .section2').addClass('on');
    }
  }
var mobi = window.matchMedia('screen and (max-width: 768px)');
  if (mobi.matches) { 
    if($(window).scrollTop() > 1100) {
      $('#intro  .section2').addClass('on');
    } else {
      $('#intro  .section2').removeClass('on');
    }
    if($(window).scrollTop() > 1900) {
      $('#intro .section2 .container .glad').addClass('on');
    } else {
      $('#intro .section2 .container .glad').removeClass('on');
    }
    if($(window).scrollTop() > 2200) {
      $('#intro .section2 .container .resolution').addClass('on');
    } else {
      $('#intro .section2 .container .resolution').removeClass('on');
    }
    if($(window).scrollTop() > 2500) {
      $('#intro .section2 .container .affirmation').addClass('on');
    } else {
      $('#intro .section2 .container .affirmation').removeClass('on');
    }
    if($(window).scrollTop() > 2800) {
      $('#intro .section2 .container .everyting').addClass('on');
    } else {
      $('#intro .section2 .container .everyting').removeClass('on');
    }
    if($(window).scrollTop() > 3100) {
      $('#intro .section2 .container .dot').addClass('on');
    } else {
      $('#intro .section2 .container .dot').removeClass('on');
    }
  }
});


$(window).on('scroll', function(){
  if($(window).scrollTop() > 10) {
    $(' .header').addClass('on');
  } else {
    $(' .header').removeClass('on');
  }
});


/* 화면이 로딩되면 바로 실행되는 스크립트*/
jQuery(document).ready(function() {
  $('#fullpage .section1 .container .grae_logo').fadeIn(1500);
  $('#fullpage .mousey').fadeIn(1500);
  $('#fp-nav.left').fadeIn(1500);
  $('.right_bar').fadeIn().css('right','0');
  $('#intro .section1 .container h3').addClass('on');
  $('#intro .section1 .container p').addClass('on');
  $('#intro .section1 .container .intro_img').addClass('on');
  $('#brand .section1 .container h3').addClass('on');
  $('#brand .section1 .container p').addClass('on');
  $('#brand .section1 .section1_img').addClass('on');
  $('#business .section1 .container h3').addClass('on');
  $('#business .section1 .container .section1_text1').addClass('on');
  $('#business .section1 .section1_img').addClass('on');
  $('#story .section1 .container h3').addClass('on');
  $('#story .section1 .section1_img').addClass('on');
  $('#contact .section1 .container h3').addClass('on');
  $('#contact .section1 .section1_img').addClass('on');

});



/* 브랜드 팝업*/
$('#brand .section2 .selectfit').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();
  $('#brand .section2 .selectfit_popup').addClass('on');

})
$('#brand .section2 .nuti').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();
  $('#brand .section2 .nuti_popup').addClass('on');
})
$('#brand .section2 .botami').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();;
  $('#brand .section2 .botami_popup').addClass('on');
})
$('#brand .section2 .ranking').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();;
  $('#brand .section2 .ranking_popup').addClass('on');
})
$('#brand .section2 .monster').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();;
  $('#brand .section2 .monster_popup').addClass('on');
})
$('#brand .section2 .wozoo').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();;
  $('#brand .section2 .wozoo_popup').addClass('on');
})
$('#brand .section2 .gml').click(function(){
  $('#brand .section2 .brand_popup_wrap').addClass('on').fadeIn();;
  $('#brand .section2 .gml_popup').addClass('on');
})

$('.brand_popup .popup_close').click(function(){
  $('#brand .section2 .brand_popup_wrap').removeClass('on').fadeOut();;
  $('#brand .section2 .brand_popup').removeClass('on');

})


/* business js*/
$(window).on('scroll', function(){ 
  if($(window).scrollTop() > 400) {
    $('#business .section1 .section1_img_1').addClass('on');
  };
      var mql = window.matchMedia('screen and (max-width: 1280px)');
      if (mql.matches) {
        $(window).on('scroll', function(){ 
          if($(window).scrollTop() > 100) {
            $('#business .section1 .section1_img_1').addClass('on');
            $('#story .section1 .section1_img_1').addClass('on');
            $('#intro .section1 .section1_img_1').addClass('on');
            $('#brand .section1 .section1_img_1').addClass('on');
            $('#contact .section1 .section1_img_1').addClass('on');
          };
        });
      } else {
        $(window).on('scroll', function(){ 
          if($(window).scrollTop() > 400) {
            $('#business .section1 .section1_img_1').addClass('on');
            $('#story .section1 .section1_img_1').addClass('on');
            $('#intro .section1 .section1_img_1').addClass('on');
            $('#contact .section1 .section1_img_1').addClass('on');
            $('#brand .section1 .section1_img_1').addClass('on');
          };
        });
      }
    })
  /* 탑버튼 */
  $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
          $('.top_btn').addClass('on');
      } else {
          $('.top_btn').removeClass('on');
      }
  });

  $(".top_btn").click(function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
    return false;
  });




});


