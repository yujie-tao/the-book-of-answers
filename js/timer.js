var countdown = 3;

setInterval(function() {
  countdown--;
  showText();
}, 1000);


function showText(){
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

      $(".second").html('');
      $('.setence').html('');
      $('.instruction').html('');
       setTimeout(function(){
       $(".second").html('#answer');
       $(".second").addClass("fade-in");
   }, 700);

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
