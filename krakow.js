 $(document).ready(function() {
  
    $('a').hover(function(){
	  $(this).toggleClass("teraz");
	}); 	
	
 	 var view = 0; 
 
	$("#big-two").css("opacity", 0 ).css("display", "none");		 
	$("#big-three").css("opacity", 0 ).css("display", "none"); 
    $("#big-four").css("opacity", 0 ).css("display", "none");
    
     $("#visit").css("color", "#FFFF00");    
	
    $("#culture").bind('click', function callCulture() {
		if(view == 0) {
		   $("#big-one").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-two").css("display", "block").fadeTo( "slow", 1 );	
           $("#visit").css("color", "#FFFFFF");
		   $("#culture").css("color", "#FFFF00");
		   
		} else if (view == 2) {
		   $("#big-three").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-two").css("display", "block").fadeTo( "slow", 1 );	
           $("#study").css("color", "#FFFFFF");
		   $("#culture").css("color", "#FFFF00");	
		   
		} else if (view == 3) {
		   $("#big-three").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-two").css("display", "block").fadeTo( "slow", 1 );	
           $("#night-life").css("color", "#FFFFFF");
		   $("#culture").css("color", "#FFFF00");		   
		} 
	view = 1;	 
	});	

    $("#study").bind('click', function callStudy() {
		if(view == 0) {
		   $("#big-one").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-three").css("display", "block").fadeTo( "slow", 1 );	
           $("#visit").css("color", "#FFFFFF");
		   $("#study").css("color", "#FFFF00");
		   
		} else if (view == 1) {
		   $("#big-two").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-three").css("display", "block").fadeTo( "slow", 1 );	
           $("#culture").css("color", "#FFFFFF");
		   $("#study").css("color", "#FFFF00");	
		   
		} else if (view == 3) {
		   $("#big-four").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-three").css("display", "block").fadeTo( "slow", 1 );	
           $("#night-life").css("color", "#FFFFFF");
		   $("#study").css("color", "#FFFF00");		   
		} 
	view = 2;	 
	});	
	
    $("#night-life").bind('click', function CallNight() {
		if(view == 0) {
		   $("#big-one").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-four").css("display", "block").fadeTo( "slow", 1 );	
           $("#visit").css("color", "#FFFFFF");
		   $("#night-life").css("color", "#FFFF00");
		   
		} else if (view == 1) {
		   $("#big-two").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-four").css("display", "block").fadeTo( "slow", 1 );	
           $("#culture").css("color", "#FFFFFF");
		   $("#night-life").css("color", "#FFFF00");	
		   
		} else if (view == 2) {
		   $("#big-three").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-four").css("display", "block").fadeTo( "slow", 1 );	
           $("#study").css("color", "#FFFFFF");
		   $("#night-life").css("color", "#FFFF00");		   
		} 
	view = 3;	 
	});	
	
	// 0 == main/visit, big-one; 
	// 1 == culture, big-two; 
	// 2 == study, big-three; 
	// 3 == night life, big-four;
    $("#visit").bind('click', function callVisit() {
		if(view == 1) {
		   $("#big-two").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-one").css("display", "block").fadeTo( "slow", 1 );	
           $("#culture").css("color", "#FFFFFF");
		   $("#visit").css("color", "#FFFF00");
		   
		} else if (view == 2) {
		   $("#big-three").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-one").css("display", "block").fadeTo( "slow", 1 );	
           $("#study").css("color", "#FFFFFF");
		   $("#visit").css("color", "#FFFF00");		   
		} else if (view == 3) {
		   $("#big-four").fadeTo( "slow", 0 ).css("display", "none");		
		   $("#big-one").css("display", "block").fadeTo( "slow", 1 );	
           $("#night-life").css("color", "#FFFFFF");
		   $("#visit").css("color", "#FFFF00");		   
		} 
	view = 0;	 
	});	
	

	
	
	
	
});
