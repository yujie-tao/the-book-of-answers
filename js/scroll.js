$(function() {
              $('.scroll1 a').bind('click', function(event) {
              	$("body").css({"overflow-x": "auto","max-width": "unset"});
				$("html").css({"overflow-x": "auto","max-width": "unset"});
                var $anchor = $(this);
                
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 1000);
                event.preventDefault();

                $("body").css({"overflow-x": "hidden"});
              	$("html").css({"overflow-x": "hidden"});
              });
   				
            });

$("#askQuestion").click(function(){
    setTimeout(function(){
       $("#introtext").html("Here you have a quesiton that wish to ask </br>[It’s for serious one, not for fun] </br></br>Close your eyes</br>and medidate for several seconds</br></br>Click anywhere on the screen whenever you are ready</br>the Book will answer that for you</br>it may take couple of seconds");
       $("#introtext").addClass("fade-in");
   }, 700);
    $("#introtext").removeClass("fade-in");
    $("#introtext").html("");
});



 $(function() {
              $('.scroll2 a').bind('click', function(event) {
                var $anchor = $(this);
                /*
                if you want to use one of the easing effects:
                $('html, body').stop().animate({
                    scrollLeft: $($anchor.attr('href')).offset().left
                }, 1500,'easeInOutExpo');
                 */
                $('html, body').stop().animate({
                  scrollLeft: $($anchor.attr('href')).offset().left
                }, 1000);
                event.preventDefault();

                // timer();
                showText3();
              });
            });
