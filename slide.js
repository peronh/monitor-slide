$(function(){
	
	var currentSlide = 1;

	setInterval(function(){

    $('#slider #slides').animate({
          'margin-left':'-=765px'
    },1500,function(){

    	currentSlide++;
    	if (currentSlide === $('.slide').length ){
    		currentSlide = 1;
    		$('#slides').css({'margin-left':0});
    	}
    });   
  },4000);
}); 
