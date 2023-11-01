$(document).ready(function(){

    $(function(){
        $('#daehan #main_slider #slider-div').slick({
            slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
            infinite : true, 	//무한 반복 옵션	 
            fade: true,
            cssEase: 'linear',
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            vertical : false,		// 세로 방향 슬라이드 옵션
            prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
            nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
            dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
            draggable : true, 	//드래그 가능 여부 
            
            responsive: [ // 반응형 웹 구현 옵션
                {  
                    breakpoint: 1280, //화면 사이즈 960px
                    settings: {
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        arrows : false,
                    } 
                },
                { 
                    breakpoint: 768, //화면 사이즈 768px
                    settings: {	
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        arrows : false,
                    } 
                }
            ]
        });
    });




    setTimeout(function() {
        $('.loading').fadeOut();
      }, 2000);

      setTimeout(function() {
        $('#fullpage .se1 .container .logo').addClass('on');
    }, 2000);
    setTimeout(function() {
        $('#fullpage .se1 .container h3').addClass('on');
    }, 2200);
    setTimeout(function() {
        $('#fullpage .se1 .container span').addClass('on');
    }, 2400);
    setTimeout(function() {
        $('#fullpage .se1 .container p').addClass('on');
    }, 2600);
    setTimeout(function() {
        $('#fullpage .se1 a span').addClass('on');
    }, 2800);

	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally:true,
		navigation:true,
        onLeave: function(anchorLink, index){ 
            if(index == 2) {
                setTimeout(function() {
                    $('#fullpage .se2 .container h2,#fullpage .se2 .se2_button').addClass('on');
                }, 400);
                setTimeout(function() {
                    $('#fullpage .se2  .img_wrap').addClass('on');
                }, 600);
                setTimeout(function() {
                    $('#fullpage .se2 .text_wrap').addClass('on');
                }, 800);
            }else if(index == 3)  {
                setTimeout(function() {
                    $('#fullpage .se3 .container .se3_title').addClass('on');
                }, 400);
                setTimeout(function() {
                    $('#fullpage .se3 .se3_walk .se3_phonewrap .se3_phone').addClass('on');
                }, 600);
                setTimeout(function() {
                    $('#fullpage .se3 .se3_walk .se3_padwrap .se3_pad').addClass('on');
                }, 800);
                setTimeout(function() {
                    $('#fullpage .se3 .se3_walk .se3_macwrap .se3_mac').addClass('on');
                }, 1000);
                setTimeout(function() {
                    $('#fullpage .se3 .se3_walk .se3_hov a,#fullpage .se3 .se3_walk .se3_leaf ').addClass('on');
                }, 1500);

            }else if(index == 4)  {
                setTimeout(function() {
                    $('#fullpage .se4 .container .se4_title').addClass('on');
                }, 400);
                setTimeout(function() {
                    $('#fullpage .se4 .se4_walk .se4_phone').addClass('on');
                }, 600);
                setTimeout(function() {
                    $('#fullpage .se4 .se4_walk .se4_macwrap .se4_mac').addClass('on');
                }, 800);
                setTimeout(function() {
                    $('#fullpage .se4 .se4_walk .se4_padwrap .se4_pad').addClass('on');
                }, 1000);
                setTimeout(function() {
                    $('#fullpage .se4 .se4_walk .se4_hov a,#fullpage .se4 .se4_walk .se4_leaf ').addClass('on');
                }, 1500);
            }else if(index == 5)  {
                setTimeout(function() {
                    $('#fullpage .se5 .container .se5_title').addClass('on');
                }, 400);
                setTimeout(function() {
                    $('#fullpage .se5 .se5_walk .se5_phonewrap .se5_phone').addClass('on');
                }, 600);
                setTimeout(function() {
                    $('#fullpage .se5 .se5_walk .se5_padwrap .se5_pad').addClass('on');
                }, 800);
                setTimeout(function() {
                    $('#fullpage .se5 .se5_walk .se5_macwrap .se5_mac').addClass('on');
                }, 1000);
                setTimeout(function() {
                    $('#fullpage .se5 .se5_walk .se5_hov a,#fullpage .se5 .se5_walk .se5_leaf ').addClass('on');
                }, 1500);
            }else if(index == 6)  {
                setTimeout(function() {
                    $('#fullpage .se6 .container h3').addClass('on');
                }, 400);
                setTimeout(function() {
                    $('#fullpage .se6 .container p').addClass('on');
                }, 600);
            }
        }
	});


	$('#fullpage .se2 .se2_button button').on("click", function(){
		$(this).addClass('on');
		$(this).siblings().removeClass('on');

		if($("#fullpage .se2 .se2_button .intro").hasClass("on") === true) {
			$('#fullpage .se2 .text_wrap .text').addClass('on');
		} else { 							
			$('#fullpage .se2 .text_wrap .text').removeClass('on');
		}
	
		if($("#fullpage .se2 .se2_button .profile").hasClass("on") === true) {
			$('#fullpage .se2 .text_wrap .profile').addClass('on');
		
		} else { 
			$('#fullpage .se2 .text_wrap .profile').removeClass('on');
		}
	});



});
