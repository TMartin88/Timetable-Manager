import { MarkerClusterer } from "https://cdn.skypack.dev/@googlemaps/markerclusterer@2.0.3";

let map;
const llcCentre = { lat: 51.905797, lng: -8.952052 };

let elem = document.getElementById("map");

function createCenterControl(map) {
  const controlButton = document.createElement("button");

  // Set CSS for the control.
  controlButton.style.backgroundColor = "#fff";
  controlButton.style.border = "2px solid #fff";
  controlButton.style.borderRadius = "3px";
  controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlButton.style.color = "rgb(25,25,25)";
  controlButton.style.cursor = "pointer";
  controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
  controlButton.style.fontSize = "16px";
  controlButton.style.lineHeight = "38px";
  controlButton.style.margin = "8px 0 22px";
  controlButton.style.padding = "0 5px";
  controlButton.style.textAlign = "center";
  controlButton.textContent = "Reset Map";
  controlButton.title = "Click to Reset Centre";
  controlButton.type = "button";
  // Setup the click event listeners: simply set the map to Chicago.
  controlButton.addEventListener("click", () => {
    map.setCenter(llcCentre);
    map.setZoom(9);
  });
  return controlButton;
}

function createBusInfo(map) {
  const controlNote= document.createElement("button");

  // Set CSS for the control.
  controlNote.style.backgroundColor = "#fff";
  controlNote.style.border = "2px solid #fff";
  controlNote.style.borderRadius = "3px";
  controlNote.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  controlNote.style.color = "rgb(25,25,25)";
  controlNote.style.cursor = "pointer";
  controlNote.style.fontFamily = "Roboto,Arial,sans-serif";
  controlNote.style.fontSize = "16px";
  controlNote.style.lineHeight = "38px";
  controlNote.style.margin = "0 12px 12px 0";
  controlNote.style.padding = "0 5px";
  controlNote.style.textAlign = "center";
  controlNote.textContent = "Click on a Bus Icon";
  controlNote.title = "Click on Bus icon to see all Routes that begin, end or travel through that Urban Centre.";
  controlNote.type = "description";

  return controlNote;
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: llcCentre,
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    fullscreenControl: true,
  });

  // Create the DIVs to hold the controls.
  const centerControlDiv = document.createElement("div");
  
  // Create the control.
  const centerControl = createCenterControl(map);
  

  // Create the DIV to hold the controls.
  const busInfoDiv = document.createElement("div");

  // Create the control.
  const busInfo = createBusInfo(map);

  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

  busInfoDiv.appendChild(busInfo);
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(busInfoDiv);

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

