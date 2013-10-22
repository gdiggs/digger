$(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var storeDisplay;
  var markers = [];
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

  var attachStoreInfo = function(marker, store) {
    google.maps.event.addListener(marker, 'click', function() {
      var text = store.name + '<br>' + store.address + ' ' + store.addinfo + '<br>' + store.phone;
      storeDisplay.setContent(text);
      storeDisplay.open(map, marker);
    });
  };

  $('#mode').change(calcRoute);

  directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    suppressInfoWindows: true
  });
  var mapOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: origin
  }
  map = new google.maps.Map($('#map-canvas')[0], mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel($('#directions-panel')[0]);
  storeDisplay = new google.maps.InfoWindow();

  $.each(Route.stores, function(i, store) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(store.lat, store.lng),
      title: store.name,
      animation: google.maps.Animation.DROP,
      map: map
    });
    attachStoreInfo(marker, store);
    markers[i] = marker;
  });

  var originMarker = new google.maps.Marker({
    position: new google.maps.LatLng(Route.origin.latitude, Route.origin.longitude),
    map: map,
    title: 'Starting Point'
  });

  calcRoute();
});
