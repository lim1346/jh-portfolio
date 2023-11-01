function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  $( document ).ready( function() {
    $('.center').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
      });
  });




 jQuery(document).ready(($) => {
        $('.quantity').on('click', '.plus', function(e) {
            let $input = $(this).prev('input.qty');
            let val = parseInt($input.val());
            $input.val( val+1 ).change();
        });
 
        $('.quantity').on('click', '.minus', 
            function(e) {
            let $input = $(this).next('input.qty');
            var val = parseInt($input.val());
            if (val > 0) {
                $input.val( val-1 ).change();
            } 
        });

        $(".menu .menu_tap ul .menu_on").click( function() {
            $(this).addClass('on');
            $(this).siblings().removeClass('on');	
        });
        
        $(".menu .menu_tap ul li:first-child").click( function() {
            $('.mcmoring_menu').addClass('on');
            $('.mcmoring_menu').siblings().removeClass('on');	
        });
        $(".menu .menu_tap ul li:nth-child(2)").click( function() {
            $('.bugger_menu').addClass('on');
            $('.bugger_menu').siblings().removeClass('on');	
        });
    });