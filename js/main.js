$(document).ready(function(){
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally:true,
		navigation:true,
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
