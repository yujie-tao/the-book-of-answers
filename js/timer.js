var countdown;
var clicked;

// setInterval(function() {
//   showText();
// }, 1000);
function timer(){
  countdown = 4;
  clicked=false;
// var clicked=false;
  setInterval(showText1,4000);
}

function showText1(){
   countdown--;
  if(countdown==3){

   //  setTimeout(function(){
   //    // $('.second').addClass("fade-in");
   //    // $('.setence').addClass("fade-in");
   //    $('.second').text(3);
   //      $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
   // }, 200);
     // $('.second').addClass("fade-out");
      // $('.setence').addClass("fade-out");
      // $('.second').removeClass("fade-in");
      // $('.setence').removeClass("fade-in");

      setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').text(3);
      $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
     
   }, 200);
      $('.second').removeClass("fade-in");
      $('.setence').removeClass("fade-in");

   //    setTimeout(function(){
   //    $('.second').addClass("fade-out");
   //    $('.setence').addClass("fade-out");
   //    $('.second').text(3);
   //      $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
     
   // }, 400);
   //    $('.second').removeClass("fade-out");
   //    $('.setence').removeClass("fade-out");

     

   //    setTimeout(function(){
   //    $('.second').addClass("fade-out");
   //    $('.setence').addClass("fade-out");
     
   // }, 400);

   //    $('.second').removeClass("fade-out");
   //    $('.setence').removeClass("fade-out");
  }


  if(countdown==2){
    setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').text(2);
    $('.setence').html("[And you know the answer,</br> by heart]");
   }, 300);
    $('.second').removeClass("fade-in");
    $('.setence').removeClass("fade-in");
  }

  if(countdown==1){
     setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').text(1);
    $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
    // $('.instruction').html('Click anywhere to view answer');
   }, 300);

      setTimeout(function(){
    $('.instruction').addClass("fade-in");
    $('.instruction').html('Click anywhere to view answer');
   }, 2400);

    $('.second').removeClass("fade-in");
    $('.setence').removeClass("fade-in");
    $('.instruction').removeClass("fade-in");
  }

  if(countdown<=0){
    $('#counting').click(function(){
      if(clicked==false){
        $(".second").html('');
        $('.setence').html('');
        $('.instruction').html('&nbsp');
        setTimeout(function(){
          $(".second").html($('#answer').text());
          $(".second").addClass("fade-in");
   }, 700);
       clicked=true;
        $('.second').removeClass("fade-in");

        setTimeout(function(){
          $('.instruction').text("Ask one more");
          $(".second").addClass("fade-in");
   }, 4000);
       
     }
    })

    countdown=-1;
  }


 
}

function showText(){
   countdown--;
  if(countdown==3){

    setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').text(3);
        $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
   }, 400);
      $('.second').removeClass("fade-in");
      $('.setence').removeClass("fade-in");
  }


  if(countdown==2){
    setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').text(2);
    $('.setence').html("[And you know the answer,</br> by heart]");
   }, 400);
    $('.second').removeClass("fade-in");
    $('.setence').removeClass("fade-in");
  }

  if(countdown==1){
     setTimeout(function(){
    $('.second').addClass("fade-in");
    $('.setence').addClass("fade-in");
    $('.second').text(1);
    $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
    // $('.instruction').html('Click anywhere to view answer');
   }, 400);

      setTimeout(function(){
    $('.instruction').addClass("fade-in");
    $('.instruction').html('Click anywhere to view answer');
   }, 1000);

    $('.second').removeClass("fade-in");
    $('.setence').removeClass("fade-in");
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
        $('.second').removeClass("fade-in");
     }
    })

    countdown=-1;
  }


 
}