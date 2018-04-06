$(document).ready(function(){
var sc = $("#scrol");
	$(window).scroll(function(){
		if($(this).scrollTop() >= 500){
			sc.show(500);
		}
		else{
			sc.hide(500);
		}
	});
	sc.click(function(){
		$("html,body").animate({
			scrollTop : 0
		},1000);
	});    
});

//---------------------------------------------------
$(window).on("load",function(){
$("#loading").fadeOut(2000);
});





	
