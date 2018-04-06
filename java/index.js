$(document).ready(function(){
$(".customer-table1").on({
    mouseenter:function(){
$(".span1").slideDown(2000);
},
    
 mouseleave:function(){
$(".span1").fadeOut(100);    
 }
}); 
    
$(".customer-table2").on({
    mouseenter:function(){
$(".span2").slideDown(2000);
},
    
 mouseleave:function(){
$(".span2").fadeOut(100);    
 }
}); 
    
$(".customer-table3").on({
    mouseenter:function(){
$(".span3").slideDown(2000); 
},
    
 mouseleave:function(){
$(".span3").fadeOut(100);   
 }
}); 
    
$(".customer-table4").on({
    mouseenter:function(){
$(".span4").slideDown(2000);  
},
    
 mouseleave:function(){
$(".span4").fadeOut(100);    
 }
}); 
    
    
$(".customer-table5").on({
    mouseenter:function(){
$(".span5").slideDown(2000);   
},
    
 mouseleave:function(){
$(".span5").fadeOut(100);   
 }
}); 
    
    
$(".customer-table6").on({
    mouseenter:function(){
$(".span6").slideDown(2000);  
},
    
 mouseleave:function(){
$(".span6").fadeOut(100);    
 }
}); 
    
    
$(".customer-table7").on({
    mouseenter:function(){
$(".span7").slideDown(2000);  
},
    
 mouseleave:function(){
$(".span7").fadeOut(100);    
 }
}); 
    
    
$(".customer-table8").on({
    mouseenter:function(){
$(".span8").slideDown(2000);  
},
    
 mouseleave:function(){
$(".span8").fadeOut(100);    
 }
}); 
    
    
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





	
