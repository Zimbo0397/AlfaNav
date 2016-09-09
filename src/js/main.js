

var loading = {
  avgTime: 3000,
  trg: 2,
  state: 0,
  preloader: $('body > #preloader'),
  loaded: function () {

    if(++loading.state == loading.trg) {

      loading.status(1);
      setTimeout(loading.done, 500);

    } else {

      loading.status(loading.state / loading.trg / 1.1);

    }
  },
  status: function (mult) {

    loading.preloader.find('> .load-indocator').css({
      'clip-path': 'polygon(0% 0%, ' + mult * 100 + '% 0%, ' + mult * 100 + '% 100%, 0% 100%)',
      '-webkit-clip-path': 'polygon(0% 0%, ' + mult * 100 + '% 0%, ' + mult * 100 + '% 100%, 0% 100%)'
    });

  },
  done: function () {

    if (loading.finished) return;

    // hide preloader
    loading.preloader.addClass('done').animate({}).delay(400).animate({
      'opacity': 0
    }, 400, function () {

      $(window)
        .trigger('scroll')
        .trigger('resize');

      loading.status(0);
      $(this).detach();
      loading.finished = true;


    });

  }
};

// TODO test it
$('img').each(function () {

  if (!this.naturalWidth || true) {
    loading.trg ++;
    $(this).one('load', loading.loaded).one('error', loading.loaded);
  }

});

$(window).on('load', function() {
  loading.status(1);
  setTimeout(loading.done, 500);
})

// init bx-sliders
$('.animate-slider').bxSlider({
  mode: 'fade',
  speed: 800,
  auto: true,
  pause: 10000,
  controls: false
});
$('.vacitemslider').bxSlider({
  mode: 'fade'
});

var newsSlider = $('.news-slider').bxSlider({
    mode: 'fade',
    easing: 'easeInQuint',
    speed: 200
  });

var personSlider = $('.person-info-slider').bxSlider({
    mode: 'fade',
    speed: 200
  });
$(window).on('load', function() {
		var setCurrentTime = function() {
			$('.timeline-holder li').each(function() {
				var $this = $(this);
					$thisDataSlide = $this.attr('data-slide'),

					$this.removeClass('active');

				if($thisDataSlide == $milestonesSlider.getCurrentSlide()) {
					$this.addClass('active')
				}

			});
		},
		$milestonesSlider = $('.milestonesSlider')
		.bxSlider({
			mode: 'fade',
      speed: 200,
			onSlideNext: function($slideElement, oldIndex, newIndex) {
				setCurrentTime();
			},
			onSlidePrev: function($slideElement, oldIndex, newIndex) {
				$('.timeline-holder li').each(function() {
					setCurrentTime();
				});
			}
		});
	$('.time').each(function() {
		var $this = $(this);

			$this.on('click', function(e) {
				var thisDataSlide = $this.parent().attr('data-slide');
				e.preventDefault();
				$milestonesSlider.goToSlide(thisDataSlide);
				setCurrentTime();
		})
	})
		
});
// END init bx-sliders


//wow animation init
$(window).on('load', function() {
  new WOW().init();
})
//END wow animation init



// $('.top-line.index:before')



// Ui-slider init
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 100,
      max: 500000,
      values: [ 100, 500000 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val(ui.values[ 0 ]);
        $( "#amount2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount1" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );
  } );

$( function() {
    $( "#slider-range1" ).slider({
      value:2001,
      min: 0,
      max: 5000,
      step: 2,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value );
      }
    });
    $( "#amount3" ).val( $( "#slider-range1" ).slider( "value" ) );
  } );

$( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 100,
      max: 50000,
      values: [ 8500, 14000 ],
      slide: function( event, ui ) {
        $( "#amount4" ).val(ui.values[ 0 ]);
        $( "#amount5" ).val(ui.values[ 1 ]);
      }
    });
    $( "#amount4" ).val( $( "#slider-range2" ).slider( "values", 0 ));
    $( "#amount5" ).val( $( "#slider-range2" ).slider( "values", 1 ) );
  } );

// END Ui-slider init



// click functions on pages

$('.crossbtn').each(function () {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).closest('.filters-item').toggleClass('open')
	})
})
$('#side-open').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('open')
  $('.side-panel').addClass('open')
  $('body').addClass('blackshadow')
})
$('#side-close').on('click', function(e) {
  e.preventDefault();
  $('.side-panel').removeClass('open')
  $('#side-open').removeClass('open')
  $('body').removeClass('blackshadow')
})
$('#callback1').on('click', function(e) {
  e.preventDefault();
  $('.call-back-inner').parent().addClass('open')
  $('body').addClass('blackshadow')
})
$('#callback2').on('click', function(e) {
  e.preventDefault();
  $('.call-back-inner').parent().addClass('open')
  $('body').addClass('blackshadow')
})
$('#callbackclose1').on('click', function() {
  $('.call-back-inner').parent().removeClass('open')
  $('body').removeClass('blackshadow')
})

$('#readTestimonials1').on('click', function(e) {
  e.preventDefault();
  $('#shipowners1').addClass('open')
})

$('#filtersOpen').on('click', function(e) {
  e.preventDefault();
  $('.filters-holder').addClass('open')
  $('.database').addClass('blackshadow')
  
})
$('#filtersClose').on('click', function(e) {
  e.preventDefault();
  $('.filters-holder').removeClass('open')
  $('.database').removeClass('blackshadow')
})

$('#addrev').on('click', function(e) {
  e.preventDefault();
  $('.seafarers-rev').parent().addClass('open')
  $('body').addClass('blackshadow')
})
$('#rewiewClose').on('click', function() {
  $('.rewiew-holder').parent().removeClass('open')
  $('body').removeClass('blackshadow')
})

$('#addrev1').on('click', function(e) {
  e.preventDefault();
  $('.owners-rew').parent().addClass('open')
  $('body').addClass('blackshadow')
})
$('#rewiewClose1').on('click', function() {
  $('.rewiew-holder').parent().removeClass('open')
  $('body').removeClass('blackshadow')
})

$('#find-job-form').on('click', function(e) {
  e.preventDefault();
  $('.find-job-form').addClass('open')
  $('body').addClass('blackshadow');
})
$('#jobFormClose').on('click', function() {
  $('.find-job-form').removeClass('open')
  $('body').removeClass('blackshadow');
})


$('.teamLink').each(function() {
    var dataSlide = $(this).attr('dataslide');
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.person-info-modal').addClass('open');
    $('body').addClass('blackshadow');
    personSlider.goToSlide(dataSlide);
  })
})

$('#personModalClose').on('click', function(e) {
  e.preventDefault();
  $('.person-info-modal').removeClass('open');
  $('body').removeClass('blackshadow');
})

$('.newsLink').each(function() {
    var dataSlide = $(this).attr('dataslide');
  $(this).on('click', function() {
    $('.news-modal').addClass('open');
    $('body').addClass('blackshadow');
    newsSlider.goToSlide(dataSlide);
  })
})

$('#newsModalClose').on('click', function(e) {
  e.preventDefault();
  $('.news-modal').removeClass('open');
  $('body').removeClass('blackshadow');
})


  $('#tab-sv1').on('click', function(e) {
    e.preventDefault();
    $('.tab-sv').removeClass('active');
    $(this).addClass('active');
    $('#carousel-holder2').removeClass('active');
    $('#carousel-holder1').addClass('active');
  })
  $('#tab-sv2').on('click', function(e) {
    e.preventDefault();
    $('.tab-sv').removeClass('active');
    $(this).addClass('active');
    $('#carousel-holder1').removeClass('active');
    $('#carousel-holder2').addClass('active');
  })

  $('#tab-sv5').on('click', function(e) {
    e.preventDefault();
    $('.tab-sv').removeClass('active');
    $(this).addClass('active');
    $('#owners').removeClass('active');
    $('#seafarers').addClass('active');
  })
  $('#tab-sv6').on('click', function(e) {
    e.preventDefault();
    $('.tab-sv').removeClass('active');
    $(this).addClass('active');
    $('#seafarers').removeClass('active');
    $('#owners').addClass('active');
  })

$('.down-btn').on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 25});
})
$('.fill-form').each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    var text = $(this).find('.v-type').text();
    $('#v-type').val(text);
    $('.find-job-form').addClass('open');
    $('body').addClass('blackshadow');
  });
});

$('.apply-btn').each(function() {
  $(this).on('click', function(e) {
    e.preventDefault();
    var text = $(this).closest('tr').find('.vtype span').text();
    $('#v-type').val(text);
    $('.find-job-form').addClass('open');
    $('body').addClass('blackshadow');
  });
});

$('.rewiew-holder').each(function() {
  var $self = $(this)
    $self.find('.button').on('click', function() {
      $self.addClass('end')
  })
})
// END click functions on pages

//smooth scroll function
$(document).ready(function(){
    $("#ourstrnav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$('.newservitem').on('mouseenter', function() {
  $('.newservitem').removeClass('animate');
  $(this).addClass('animate');
});
// END smooth scroll function



$(window).on('load', function() {
  var href = window.location.hash.replace("#","");
  if (href = 'shipowners1') {
    $('#shipowners1').addClass('open')
  }
})

//nav scroll hide
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 20) {
    $('.top-line').addClass('close');
  } else
    $('.top-line').removeClass('close');
})
if ($(this).scrollTop() > 20) {
  $('.top-line').addClass('close');
} else {
  $('.top-line').removeClass('close');
}

//END nav scroll hide


// animate numbers init

$(window).on('scroll', function() {
  if($('.info-block').length) {
      var targOffsetTop = $('.counters-holder').offset().top,
          targScrollTop = $(window).scrollTop(),
          winHeight =$(window).height();
          if (!targOffsetTop) {
            targOffsetTop = 100000;
          }
          if (targOffsetTop - winHeight < targScrollTop) {
            if (!$('.counters-holder').hasClass('numbers')) {
                $('#animateNumber1')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 16648
                    },
                    2000
                  );

                  $('#animateNumber2')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 1243
                    },
                    2000
                  );
            }
            $('.counters-holder').addClass('numbers')
          }
    
  }
})

$(window).on('load', function() {
  if($('.info-block').length) {
      var targOffsetTop = $('.counters-holder').offset().top,
          targScrollTop = $(window).scrollTop(),
          winHeight =$(window).height();
          if (!targOffsetTop) {
            targOffsetTop = 100000;
          }
          if (targOffsetTop - winHeight < targScrollTop) {
            if (!$('.counters-holder').hasClass('numbers')) {
                $('#animateNumber1')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 16648
                    },
                    2000
                  );

                  $('#animateNumber2')
                  .prop('number', 0)
                  .animateNumber(
                    {
                      number: 1243
                    },
                    2000
                  );
            }
            $('.counters-holder').addClass('numbers')
          }
    
  }
})

$('#animateNumber3')
  .prop('number', 0)
  .animateNumber(
    {
      number: 17
    },
    2000
  );

  $('#animateNumber4')
  .prop('number', 0)
  .animateNumber(
    {
      number: 20
    },
    2000
  );
// END animate numbers init

// init gogle maps

var map;
try {
  if(document.getElementById('map')) {
    $('<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbiWDuTu93dbTnJpUDshix6zDZpMYVglc&amp;callback=initMap" async="" defer=""></script>').appendTo('head')
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.4828766, lng: 30.6859532},
        zoom: 8
      });
    }
    $('.city').each(function() {
          var $self = $(this),
          lat = $self.attr('lat'),
          lng = $self.attr('lng'),
          LatLng = {lat: parseInt(lat), lng: parseInt(lng)};
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.city').removeClass('active')
        $(this).addClass('active')
        map.setCenter(LatLng)
      })
    })
  }
} catch(e) {
  console.log(e)
}



// Object-Fit script
$('.carousel').alphaSlider();
$('.carousel2').alphaSlider();


if( /Android/i.test(navigator.userAgent) ) {
 $('.button').each(function() {
  $(this).css("padding-top", "5px")
  })
 $('.find-job-form li label').each(function() {
  $(this).css("padding-top", "5px")
  })
  $('.menu-list li a').each(function() {
    $(this).css("padding-top", "5px")
  })
  $('.tabs-holder .tab-sv').each(function() {
    $(this).css("padding-top", "14px")
  })
}
if( /MSIE/i.test(navigator.userAgent)) {
  alert(1);
};

$('.form-part li').each(function() {
  var $this =  $(this);
  $this.find('input').on('click', function() {
    $('.form-part li').removeClass('active');
    $this.addClass('active');
  })
})
$('.form-holder textarea').on('click', function() {
  $('.form-part li').removeClass('active');
})
$('.data-form li').each(function() {
  var $this =  $(this);
  $this.find('input').on('click', function() {
    $('.data-form li').removeClass('active');
    $this.addClass('active');
  })
})

// function msieversion() 
// {
//     var ua = window.navigator.userAgent;
//     var msie = ua.indexOf("MSIE ");

//     if (msie > 0) // If Internet Explorer, return version number
//     {
//         alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
//     }
//     else  // If another browser, return 0
//     {
//         alert('otherbrowser');
//     }

//     return false;
// }
// msieversion();

function fitImageToHolder () {
  $('.video-holder').each(function () {
    var $holder = $(this);
    var $image = $holder.find('video');
    var image = $image.get(0);
    var holderWidth = $holder.width(),
      holderHeight = $holder.height(),
      imageWidth = $image.width(),
      imageHeight = $image.height();
      // imageWidth = image.naturalWidth,
      // imageHeight = image.naturalHeight;
    function fitImg (img) {
      if (holderWidth - imageWidth < holderHeight - imageHeight) {
        $(img).css({
          'width': 'auto',
          'height': '100%'
        });
      } else {
        $(img).css({
          'width': '100%',
          'height': 'auto'
        });
      }
    }
    if (imageWidth) {
      fitImg (image);
    } else {
      $image.on('load', function () {
        imageWidth = this.naturalWidth;
        imageHeight = this.naturalHeight;
        fitImg (this);
      });
    }
  });
}
fitImageToHolder ();
function fitOnResize () {
  clearTimeout(fitImageToHolder.timeoutId);
  fitImageToHolder.timeoutId = setTimeout(fitImageToHolder, 500);
}

$(window).on('resize', function () {
  fitOnResize ();
});