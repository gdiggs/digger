$(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var origin = new google.maps.LatLng(Route.origin.latitude, Route.origin.longitude);
  var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);

  var calcRoute = function() {
    var selectedMode = 'WALKING';//document.getElementById('mode').value;
    var request = {
        origin: origin,
        waypoints: Route.waypoints,
        destination: origin,
        optimizeWaypoints: true,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: origin
  }
  map = new google.maps.Map($('#map-canvas')[0], mapOptions);
  directionsDisplay.setMap(map);

  calcRoute();
});
