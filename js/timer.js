// var countdown;
// var clicked;

// // setInterval(function() {
// //   showText();
// // }, 1000);
// function timer(){
//   countdown = 3;
//   clicked=false;
// // var clicked=false;
//   setInterval(showText1,3000);
// }

function showTimer(){
   setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').text(3);
      $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");  
   }, 1000);

    setTimeout(function(){
      $('.second').removeClass("fade-in");
      $('.setence').removeClass("fade-in");
   }, 3200);

   
    setTimeout(function(){
      $('.second').addClass("fade-out");
      $('.setence').addClass("fade-out");
   }, 4400);

  setTimeout(function(){
      $('.second').removeClass("fade-out");
      $('.setence').removeClass("fade-out");
      $('.second').text(" ");
      $('.setence').html(" "); 
   }, 5600);
    

      setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').text(2);
      $('.setence').html("[And you know the answer,</br> by heart]");  
   }, 6800);

      setTimeout(function(){
      $('.second').removeClass("fade-in");
      $('.setence').removeClass("fade-in");
   }, 9000);


    setTimeout(function(){
        $('.second').addClass("fade-out");
        $('.setence').addClass("fade-out");
   }, 9800);

    setTimeout(function(){
      $('.second').removeClass("fade-out");
      $('.setence').removeClass("fade-out");
      $('.second').text(" ");
      $('.setence').html(" "); 
   }, 11000);

     setTimeout(function(){
      $('.second').addClass("fade-in");
      $('.setence').addClass("fade-in");
      $('.second').text(1);
      $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
   }, 12200 );

    setTimeout(function(){
    $('.instruction').addClass("fade-in");
    $('.instruction').html('Click anywhere to view answer');
    clicked=false
   }, 14900);


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

        $('.instruction').css({"cursor":"pointer"});
        $('.instruction').click(function() {
          location.reload();

    });
       
     }
    })



}


// function showText1(){
//   if(countdown==3){
//       setTimeout(function(){
//       $('.second').addClass("fade-in");
//       $('.setence').addClass("fade-in");
//       $('.second').text(3);
//       $('.setence').html("[All questions could be answered some day,</br> it’s just a matter of time]");  
//    }, 100);
//       $('.second').removeClass("fade-in");
//       $('.setence').removeClass("fade-in");


//       setTimeout(function(){
//         $('.second').addClass("fade-out");
//         $('.setence').addClass("fade-out");
//    }, 2000);

//       $('.second').removeClass("fade-out");
//       $('.setence').removeClass("fade-out");

//   }


//   if(countdown==2){
//     setTimeout(function(){
//     $('.second').addClass("fade-in");
//     $('.setence').addClass("fade-in");
//     $('.second').text(2);
//     $('.setence').html("[And you know the answer,</br> by heart]");
//    }, 100);
//     $('.second').removeClass("fade-in");
//     $('.setence').removeClass("fade-in");

//       setTimeout(function(){
//         $('.second').addClass("fade-out");
//         $('.setence').addClass("fade-out");
//    }, 2000);

//       $('.second').removeClass("fade-out");
//       $('.setence').removeClass("fade-out");

//   }

//   if(countdown==1){
//      setTimeout(function(){
//     $('.second').addClass("fade-in");
//     $('.setence').addClass("fade-in");
//     $('.second').text(1);
//     $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
//    }, 100);

//       setTimeout(function(){
//     $('.instruction').addClass("fade-in");
//     $('.instruction').html('Click anywhere to view answer');
//    }, 2400);

//     $('.second').removeClass("fade-in");
//     $('.setence').removeClass("fade-in");
//     $('.instruction').removeClass("fade-in");
//   }

//   if(countdown<=0){
//     $('#counting').click(function(){
//       if(clicked==false){
//         $(".second").html('');
//         $('.setence').html('');
//         $('.instruction').html('&nbsp');
//         setTimeout(function(){
//           $(".second").html($('#answer').text());
//           $(".second").addClass("fade-in");
//    }, 700);
//        clicked=true;
//         $('.second').removeClass("fade-in");

//         setTimeout(function(){
//           $('.instruction').text("Ask one more");
//           $(".second").addClass("fade-in");
//    }, 4000);

//         $('.instruction').css({"cursor":"pointer"});
//         $('.instruction').click(function() {
//           location.reload();

//     });
       
//      }
//     })

//     countdown=-1;
//   }
//      countdown--;
// }

// function showText(){
//    countdown--;
//   if(countdown==3){

//     setTimeout(function(){
//       $('.second').addClass("fade-in");
//       $('.setence').addClass("fade-in");
//       $('.second').text(3);
//         $('.setence').html(" [All questions could be answered some day,</br> it’s just a matter of time]");
//    }, 400);
//       $('.second').removeClass("fade-in");
//       $('.setence').removeClass("fade-in");
//   }


//   if(countdown==2){
//     setTimeout(function(){
//     $('.second').addClass("fade-in");
//     $('.setence').addClass("fade-in");
//     $('.second').text(2);
//     $('.setence').html("[And you know the answer,</br> by heart]");
//    }, 400);
//     $('.second').removeClass("fade-in");
//     $('.setence').removeClass("fade-in");
//   }

//   if(countdown==1){
//      setTimeout(function(){
//     $('.second').addClass("fade-in");
//     $('.setence').addClass("fade-in");
//     $('.second').text(1);
//     $('.setence').html('[Here is the one the Book gives you,</br> are you ready?]');
//    }, 400);

//       setTimeout(function(){
//     $('.instruction').addClass("fade-in");
//     $('.instruction').html('Click anywhere to view answer');
//    }, 1000);

//     $('.second').removeClass("fade-in");
//     $('.setence').removeClass("fade-in");
//   }

//   if(countdown<=0){
//     $('#counting').click(function(){
//       if(clicked==false){
//         $(".second").html('');
//         $('.setence').html('');
//         $('.instruction').html('');
//         setTimeout(function(){
//           $(".second").html($('#answer').text());
//           $(".second").addClass("fade-in");
//    }, 700);
//        clicked=true;
//         $('.second').removeClass("fade-in");

//         $(".instruction").attr({
//             "href" : "#home",
//         });

//      }
//     })

//     countdown=-1;
//   }


 
// }