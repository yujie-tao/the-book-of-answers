var countdown = 4;
var clicked=false;

// setInterval(function() {
//   showText();
// }, 1000);
function timer(){
  setInterval(showText,1000);
}



function showText(){
  countdown--;
  if(countdown==3){
  $('.second').html(countdown);
    $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
  }
	if(countdown==2){
	$('.second').html(countdown);
  	$('.setence').html("[And you know the answer,</br> by heart]");
  }

   if(countdown==1){
   	$('.second').text(countdown);
  	$('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
    $('.instruction').html('Click anywhere to view answer');
 //  	$( "html" ).click(function() {
 //  	$('.second').html($('#answer').text());
 //    $('.setence').html('');
 //    clearInteval(countdown);
	// });
  }
  // if(countdown==0){

  // }

  if(countdown<=0){
      

  	$('#counting').click(function(){

      if(clicked==false){
      $(".second").html('');
      $('.setence').html('');
      $('.instruction').html('');
       setTimeout(function(){
       $(".second").html($('#answer').text());
       $(".second").addClass("fade-in");
   }, 700);
       clicked=true;
     }
  	})

  	// document.getElementbByTagName("html").onclick=function(){
  	// 	$('.second').html($('#answer').text());
  	// 	$('.setence').html('');
  	// };
  		// $('.second').html($('#answer').text());
  		// $('.setence').html('');
  	// $('.second').text(1);
  	// $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
  	countdown=-1;
  }
 
 //  if (countdown < 0) {
 //  	$( "html" ).click(function() {
 //  	$('.second').html($('#answer').text());
 //    $('.setence').html('');
 //    countdown=0
	// });

	// }
}

//  $(function() {
//               $('.scroll a').bind('click', function(event) {
//                countdown = 4;
//               });
//             });



// $('button').on('click', function() {
//   countdown = 3;
// });
