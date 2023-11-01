$(function() {
    var page = $('#fullpage').fullpage({
        // 1. 네비게이션 보이기
        navigation : true,
        // 2. 네비게이션 위치 지정
        navigationPosition : 'right',
        // menu에 대한 옵션 설정
        menu : '.gnb',
        anchors : ['section1', 'section2', 'section3', 'section4', 'section5'],
    });
})

$(function(){
    var fixScroll = 0;
    $(window).scroll(function(event){
         var scroll = $(this).scrollTop();
         if (scroll > 350){
         //스크롤 높이 설정
              $(".header").addClass("on");
         }
         else {
              $(".header").removeClass("on");
         }
         fixScroll = scroll;
    });
});