 $(function() {
              $('#home a').bind('click', function(event) {
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
              });
            });