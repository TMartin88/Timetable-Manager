import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.0.3";

let elem = document.getElementById("map");

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 52.166197, lng: -8.868844 },
    
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    
  });

  const labels = "";
  const image = "https://res.cloudinary.com/dxbarumnj/image/upload/v1675443108/departure_board_FILL0_wght400_GRAD0_opsz48_egf6hh.png";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {  
    const url = myURL[i];
    console.log(position);
    console.log(url);
    const marker = new google.maps.Marker({
      position,
      map,
      url,
      icon: image,
      title: "Routes",
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      window.open(url);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });

}

const locations = [
{ lat: 51.746012, lng:  -8.734378 },  // Bandon
{ lat: 51.721879, lng:  -9.112725 },  // Dunmanway
{ lat: 51.550689, lng:  -9.270886 },  // Skibbereen
{ lat: 51.752312, lng:  -9.556771 },  // Glengarriff
{ lat: 51.526893, lng:  -9.549010 },  // Schull
{ lat: 51.484240, lng:  -9.364681 },  // Baltimore
{ lat: 51.620167, lng:  -8.894828 },  // Clonakilty
{ lat: 51.706548, lng:  -8.522314 },  // Kinsale
{ lat: 51.815790, lng:  -8.391598 },  // Carrigaline
{ lat: 51.900273, lng:  -8.469793 },  // Cork City
{ lat: 51.849244, lng:  -8.297357 },  // Cobh
{ lat: 51.913674, lng:  -8.171996 },  // Midleton
{ lat: 51.955069, lng:  -7.849503 },  // Youghal
{ lat: 52.137933, lng:  -8.275258 },  // Fermoy
{ lat: 52.265949, lng:  -8.270015 },  // Mitchelstown
{ lat: 52.173137, lng:  -8.463791 },  // Castletownroche
{ lat: 52.246113, lng:  -8.427172 },  // Kildorrerry
{ lat: 52.354566, lng:  -8.682920 },  // Charleville
{ lat: 52.231949, lng:  -8.670039 },  // Buttevant
{ lat: 52.177491, lng:  -8.903708 },  // Kanturk
{ lat: 52.135769, lng:  -8.647718 },  // Mallow
{ lat: 51.901325, lng:  -8.939089 },  // Macroom
{ lat: 51.680538, lng:   -9.448646 },  // Bantry
{ lat: 51.933936, lng:   -8.561546 },  // Blarney
{ lat: 51.918478, lng:   -8.396795 },  // Glanmire
{ lat: 51.928124, lng:   -8.395253 },  // Riverstown
];

const myURL = 
[  
'https://locallinkcork.com/?s=bandon&post_types=schedule',
'https://locallinkcork.com/?s=dunmanway&post_types=schedule',
'https://locallinkcork.com/?s=skibbereen&post_types=schedule',
'https://locallinkcork.com/?s=glengarriff&post_types=schedule',
'https://locallinkcork.com/?s=schull&post_types=schedule',
'https://locallinkcork.com/?s=baltimore&post_types=schedule',
'https://locallinkcork.com/?s=clonakilty&post_types=schedule',
'https://locallinkcork.com/?s=kinsale&post_types=schedule',
'https://locallinkcork.com/?s=carrigaline&post_types=schedule',
'https://locallinkcork.com/?s=cork%20city&post_types=schedule',
'https://locallinkcork.com/?s=cobh&post_types=schedule',
'https://locallinkcork.com/?s=midleton&post_types=schedule',
'https://locallinkcork.com/?s=youghal&post_types=schedule',
'https://locallinkcork.com/?s=fermoy&post_types=schedule',
'https://locallinkcork.com/?s=mitchelstown&post_types=schedule',
'https://locallinkcork.com/?s=castletownroche&post_types=schedule',
'https://locallinkcork.com/?s=kildorrery&post_types=schedule',
'https://locallinkcork.com/?s=charleville&post_types=schedule',
'https://locallinkcork.com/?s=buttevant&post_types=schedule',
'https://locallinkcork.com/?s=kanturk&post_types=schedule',
'https://locallinkcork.com/?s=mallow&post_types=schedule',
'https://locallinkcork.com/?s=macroom&post_types=schedule',
'https://locallinkcork.com/?s=bantry&post_types=schedule', 
'https://locallinkcork.com/?s=blarney&post_types=schedule',
'https://locallinkcork.com/?s=glanmire&post_types=schedule',
'https://locallinkcork.com/?s=riverstown&post_types=schedule',
];
 
window.initMap = initMap;
