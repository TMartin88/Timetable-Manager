import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.0.3";

let elem = document.getElementById("map");

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: { lat: 51.905797, lng: -8.952052 }, 
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    
  });

  const labels = "";
  const image = "https://res.cloudinary.com/dxbarumnj/image/upload/v1675443108/departure_board_FILL0_wght400_GRAD0_opsz48_egf6hh.png";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {  
    const url = myURL[i];
    const upperCaseurl = url.toUpperCase();
    const marker = new google.maps.Marker({
      position,
      map,
      upperCaseurl,
      icon: image,
      title: "Click to Search Routes",
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      const form = document.createElement("form");
      form.action="/search/search/";
      form.method="get"

      const input = document.createElement("input");
      input.type = "search";
      input.name = "q";
      input.value = myURL[i];
      console.log(input.value);
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();

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
{ lat: 51.644473, lng:   -8.584195 },  //Garretstown
];

const myURL = 
[  
'bandon',
'dunmanway',
'skibbereen',
'glengarriff',
'schull',
'baltimore',
'clonakilty',
'kinsale',
'carrigaline',
'cork%20city',
'cobh',
'midleton',
'youghal',
'fermoy',
'mitchelstown',
'castletownroche',
'kildorrery',
'charleville',
'buttevant',
'kanturk',
'mallow',
'macroom',
'bantry', 
'blarney',
'glanmire',
'riverstown',
'garretstown',
];
 
window.initMap = initMap;

if (window.location.href.indexOf("post_detail") > -1) {

function checkTableHeight()
{
    try
    {
    var elmnt = document.getElementById('swappera');
    var tableHeight = elmnt.offsetHeight;
    var viewHeight = window.innerHeight;
    console.log(tableHeight)
    if(tableHeight > viewHeight)
    {
        document.getElementById('swappera').style.height = "90vh";
        document.getElementById('swapperb').style.height = "90vh";
    }
    } catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
}

checkTableHeight();

const swapper = document.getElementById('my_Direction');
const swapper2 = document.getElementById('my_Direction2');

let i = 0
function swapDiv(event, elem) {
    const topTable = document.getElementById('swappera');
    const bottomTable= document.getElementById('swapperb');
    if (i % 2 == 0) {
        bottomTable.insertAdjacentElement("afterend",topTable);
    } else {
         topTable.insertAdjacentElement("afterend",bottomTable); 
    }
    i++
  }
  
swapper.addEventListener("click", function(event) {
    // The user has Clicked Swap. Now swap the tables and h2 header
     event.preventDefault();
     console.log("clicked");
   swapDiv(event, swapper);
  }); 
  
swapper2.addEventListener("click", function(event) {
         try
    {
    // The user has Clicked Swap. Now swap the tables and h2 header
     event.preventDefault();
   swapDiv(event, swapper);
    } catch (error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
  });
}

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

/*
  const getData = async () => {
    const response = await fetch('/get_table_data/');
    const data = await response.json();
    console.log(data);
    instance.updateData(data.data);
  }
  
  getData();
  */
  