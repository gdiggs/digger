$(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var origin = new google.maps.LatLng(Route.origin.latitude, Route.origin.longitude);

  var calcRoute = function() {
    var selectedMode = $('#mode').val();
    var request = {
        origin: origin,
        waypoints: Route.waypoints,
        destination: origin,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode[selectedMode]
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  };

  $('#mode').change(calcRoute);

  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: origin
  }
  map = new google.maps.Map($('#map-canvas')[0], mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel($('#directions-panel')[0]);

  calcRoute();
});
