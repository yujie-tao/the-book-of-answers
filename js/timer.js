var countdown = 3;
setInterval(function() {
  $('.second').text(countdown);
  countdown--;
  if (countdown < 0) {
    $('.second').text($('#answer').text());
    countdown = 0; 
  }
}, 2000);

   