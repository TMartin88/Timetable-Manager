import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.0.3";

let elem = document.getElementById("map");

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: {
      lat: 51.905797,
      lng: -8.952052
    },
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
  });

  const labels = "";
  const image = "https://res.cloudinary.com/dxbarumnj/image/upload/v1675443108/departure_board_FILL0_wght400_GRAD0_opsz48_egf6hh.png";

  // Set this flag to true if you want to fetch the data from the Django model
  const fromModel = true;

  // Define the URL for fetching the data from the Django model
  //const modelUrl = '/api/urban/';
  const modelUrl = '/maps/urban-locations/';

  // Define the URL for fetching the data from the JSON file
  const jsonUrl = '/static/json/locations.json';

  // Get the data from the appropriate source
  const fetchUrl = fromModel ? modelUrl : jsonUrl;

  // Get the data from the JSON file using absolute path
  try {
    fetch(fetchUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Filter the locations with showmap value "True"
        const filteredLocations = data.locations.filter(location => location.showmap === true);
        // Pick up the locations
        const locations = filteredLocations.map(location => location.location);
        // Pick up the Place Names
        const urls = filteredLocations.map(location => location.name);
        const markers = locations.map((position, i) => {

          const url = urls[i];
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
            form.action = "/search/search/";
            form.method = "get"

            const input = document.createElement("input");
            input.type = "search";
            input.name = "q";
            input.value = urls[i];
            console.log(input.value);
            form.appendChild(input);

            document.body.appendChild(form);
            form.submit();
          });
          return marker;
        });

        // Add a marker clusterer to manage the markers.
        new MarkerClusterer({
          markers,
          map
        });
      })
      .catch(function (error) {
        console.error('Error fetching JSON file: ' + error);
      });
  } catch (error) {
    console.error('Error fetching JSON file: ' + error);
  }
}

window.initMap = initMap;

if (document.querySelector(".post-detail-page")) {

  function checkTableHeight() {
    try {
      var elmnt = document.getElementById('swappera');
      var tableHeight = elmnt.offsetHeight;
      var viewHeight = window.innerHeight;
      console.log(tableHeight)
      if (tableHeight > viewHeight) {
        document.getElementById('swappera').style.height = "90vh";
        document.getElementById('swapperb').style.height = "90vh";
      }
    } catch (error) {
      console.error(error);
    }
  }

  checkTableHeight();

  const swapper = document.getElementById('my_Direction');
  const swapper2 = document.getElementById('my_Direction2');

  let i = 0

  function swapDiv(event, elem) {
    const topTable = document.getElementById('swappera');
    const bottomTable = document.getElementById('swapperb');
    if (i % 2 == 0) {
      bottomTable.insertAdjacentElement("afterend", topTable);
    } else {
      topTable.insertAdjacentElement("afterend", bottomTable);
    }
    i++
  }

  swapper.addEventListener("click", function (event) {
    // The user has Clicked Swap. Now swap the tables and h2 header
    event.preventDefault();
    swapDiv(event, swapper);
  });

  swapper2.addEventListener("click", function (event) {
    try {
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

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});