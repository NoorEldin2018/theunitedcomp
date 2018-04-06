$(document).ready(function(){
var sc = $("#scrol");
	$(window).scroll(function(){
		if($(this).scrollTop() >= 300){
			sc.show(300);
		}
		else{
			sc.hide(300);
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




	
