// init bx-sliders
$('.vacitemslider').bxSlider({
  mode: 'fade'
});

var newsSlider = $('.news-slider').bxSlider({
    mode: 'fade'
  });

var personSlider = $('.person-info-slider').bxSlider({
    mode: 'fade'  
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
new WOW().init();
//END wow animation init




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
$('#side-open').on('click', function() {
  $(this).toggleClass('open')
  $('.side-panel').addClass('open')
  $('body').addClass('blackshadow')
})
$('#side-close').on('click', function() {
  $('.side-panel').removeClass('open')
  $('#side-open').removeClass('open')
  $('body').removeClass('blackshadow')
})

$('#callback1').on('click', function() {
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
})
$('#filtersClose').on('click', function(e) {
  e.preventDefault();
  $('.filters-holder').removeClass('open')
})

$('#addrev').on('click', function(e) {
  e.preventDefault();
  $('.rewiew-holder').parent().addClass('open')
})
$('#rewiewClose').on('click', function() {
  $('.rewiew-holder').parent().removeClass('open')
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
  $(this).on('click', function() {
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

// END smooth scroll function



// animate numbers init


$('#animateNumber1')
  .prop('number', 16500)
  .animateNumber(
    {
      number: 16648
    },
    2000
  );

  $('#animateNumber2')
  .prop('number', 1100)
  .animateNumber(
    {
      number: 1243
    },
    2000
  );
  
// END animate numbers init

// init gogle maps

var map;
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


// map.setCenter(marker.getPosition());