function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zZWxpbmVqZW5pZmVyIiwiYSI6ImNreDc1bmVhMTFubmcyb28xMm91M2JpNHcifQ.E1YuXo2ohngf_o258R663A';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });

  // TODO: add a marker to the map
  var marker=mapboxgl.Marker()
  .setLngLat([-71.091542, 42.358862])
  .addTo(map);
}

// Do not edit the code below
window.onload = () => {
  createMapMarker();
};

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { createMapMarker };
}
