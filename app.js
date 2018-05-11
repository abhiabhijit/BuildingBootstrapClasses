  $(document).ready(function(){


 

//  $("#flip").mouseenter(function() {
//   $("#flip").addClass("underline")


// });

$("#flip").blur(function() {


   	$("#flip").removeClass("underline");


});
    

 $("#flip").click(function() {
  $("#panel").toggle(500);
    $("#panel2").hide();
         $("#panel3").hide();


});


  $("#flip").focus(function() {
 	   	// $("*").removeClass("underline");


   	$("#flip").addClass("underline");



});
   
//     $("#flip2").mouseenter(function() {
//   $("#flip2").addClass("underline")


// });

 $("#flip2").blur(function() {


   	$("#flip2").removeClass("underline");


});
    
    
 
     $("#flip2").click(function() {
  $("#panel2").toggle(500);  
  $("#panel").hide();
         $("#panel3").hide();
});

 $("#flip2").focus(function() {


   	$("#flip2").addClass("underline");


});
   
    


//  $("#flip3").mouseenter(function() {
//   $("#flip3").addClass("underline")


// });
 




 $("#flip3").click(function() {
  $("#panel3").toggle(500);
  $("#panel2").hide();
         $("#panel").hide();

  	$("*").removeClass("underline");


   	$("#flip3").addClass("underline");


});

 $("#flip3").focus(function() {


   	$("#flip3").addClass("underline");


});

  $("#flip3").blur(function() {


   	$("#flip3").removeClass("underline");


});
    


  let responsive_menu = $('.navbar_ul');
  $('#menu-acces').on('click', function(e) {
    e.preventDefault();
    responsive_menu.slideToggle();
   
  });

  $(window).resize(function(){
    let width = $(this).width(); 
    if(width > 480 && responsive_menu.is(':hidden')) {
      responsive_menu.removeAttr('style');
    }
  }); 
  $('nav li').on('click', function(e) {                
    let width = $(window).width();
    if(width < 480 ) {
      responsive_menu.slideToggle(); 
    }
  });





$(".modal-open").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).css({"display":"block"});
});

$(".close-modal, .closemodal").click(function(){
  $(".modal").css({"display":"none"});
});



});// end document ready function
