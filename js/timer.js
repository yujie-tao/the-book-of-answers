var countdown = 4;
var clicked=false;

// setInterval(function() {
//   showText();
// }, 1000);
function timer(){
  setInterval(showText,2000);
}

function showText1(){
   countdown--;
  if(countdown==3){

    setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').html(countdown);
        $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
   }, 200);
      $('.second').removeClass("fade-in");
      $('.setence').removeClass("fade-in");
  }


  if(countdown==2){
    setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').html(countdown);
    $('.setence').html("[And you know the answer,</br> by heart]");
   }, 200);
    $('.second').removeClass("fade-in");
    $('.setence').removeClass("fade-in");
  }

  if(countdown==1){
     setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').text(countdown);
    $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
    $('.instruction').html('Click anywhere to view answer');
   }, 200);
  }

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

    countdown=-1;
  }

 
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
  }
  

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

  	countdown=-1;
  }

}

