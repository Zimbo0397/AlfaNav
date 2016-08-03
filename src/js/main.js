$('.vacitemslider').bxSlider({
  mode: 'fade'
});

$('.news-slider').bxSlider({
  mode: 'fade'
});
$('.person-info-slider').bxSlider({
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

$('.crossbtn').each(function () {
	$(this).on('click', function(e) {
		e.preventDefault();
		$(this).closest('.filters-item').toggleClass('open')
	})
})
$('#side-open').on('click', function() {
  $(this).toggleClass('open')
  $('.side-panel').addClass('open')
})
$('#side-close').on('click', function() {
  $('.side-panel').removeClass('open')
  $('#side-open').removeClass('open')
})

// // init gogle maps
// function initMap() {
//   // Create a map object and specify the DOM element for display.
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     scrollwheel: false,
//     zoom: 8
//   });
// }
//socials-counters
