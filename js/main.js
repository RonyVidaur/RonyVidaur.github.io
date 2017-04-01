const panels = document.querySelectorAll('.panel')
console.log(panels)
function toggleOpen() {
  console.log('hello')
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))

var title = document.title
window.addEventListener('blur', function(){
  document.title = "Hey! come back..."
})
window.addEventListener('focus', function(){
  document.title = title
})

//     var scaleCurve = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
//     var el = document.querySelector('.main'),
// 	   elSpan = el.querySelector('span'),
// 	// mo.js timeline obj
// 	   timeline = new mojs.Timeline(),
//
// 	// tweens for the animation:
//
// 	// burst animation
// 	tween1 = new mojs.Burst({
// 		parent: el,
// 		duration: 1500,
// 		shape : 'circle',
// 		fill : [ '#988ADE', '#DE8AA0', '#8AAEDE', '#8ADEAD', '#DEC58A', '#8AD1DE' ],
// 		opacity: 0.6,
// 		childOptions: { radius: {20:0} },
// 		radius: {40:120},
// 		count: 6,
// 		isSwirl: true,
// 		easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
// 	}),
// 	// ring animation
// 	tween2 = new mojs.Transit({
// 		parent: el,
// 		duration: 750,
// 		type: 'circle',
// 		radius: {0: 50},
// 		fill: 'transparent',
// 		stroke: '#988ADE',
// 		strokeWidth: {15:0},
// 		opacity: 0.6,
// 		easing: mojs.easing.bezier(0, 1, 0.5, 1)
// 	}),
// 	// icon scale animation
// 	tween3 = new mojs.Tween({
// 		duration : 900,
// 		onUpdate: function(progress) {
// 			var scaleProgress = scaleCurve(progress);
// 			elSpan.style.WebkitTransform = elSpan.style.transform = 'scale3d(' + scaleProgress + ',' + scaleProgress + ',1)';
// 		}
// 	});
//
// // add tweens to timeline:
// timeline.add(tween1, tween2, tween3);
//
// // when clicking the button start the timeline/animation:
// el.addEventListener('mouseenter', function() {
// 	timeline.replay();
// });
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(14.0818, -87.20681), // Tegus

        //  style the map.
        styles: [
          {"stylers":[{"hue":"#B61530"},{"saturation":60},{	"lightness":-40},]
          },
          {"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"	},]},{"featureType":"water","stylers":[{"color":"#D10721"}]},{"featureType":"road","stylers":[{"color":"#B61530"},{	}]},{"featureType":"road.local","stylers":[{"color":"#B61530"},{	"lightness":6	}]},{"featureType":"road.highway","stylers":[{"color":"#B61530"},{	"lightness":-25	}]},{"featureType":"road.arterial","stylers":[{"color":"#B61530"},{	"lightness":-10	}]},{"featureType":"transit","stylers":[{"color":"#B61530"},{	"lightness":70	}]},{"featureType":"transit.line","stylers":[{"color":"#B61530"},{	"lightness":90	}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]}]
    };

    // Get the HTML DOM element that will contain your map
    // using a div with id="map"
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(14.0818, -87.20681),
        map: map,
        title: 'Here!'
    });
}
