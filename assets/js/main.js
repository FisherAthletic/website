function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

// Click functions that link to pages //
function footballGridClick () {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "All");
}

function baseballGridClick () {
  location.href = "./pages/baseball.html";
  localStorage.setItem("chosenItem", "All");
}

function trackGridClick () {
  location.href = "./pages/track-field.html";
  localStorage.setItem("chosenItem", "All");
}

function chairsGridClick () {
  location.href = "./pages/chairs-stools.html";
  localStorage.setItem("chosenItem", "All");
}

function paddingGridClick () {
  location.href = "./pages/padding.html";
  localStorage.setItem("chosenItem", "All");
}

function windscreenGridClick () {
  location.href = "./pages/windscreen.html";
  localStorage.setItem("chosenItem", "All");
}

function strengthGridClick () {
  location.href = "./pages/strength-conditioning.html";
  localStorage.setItem("chosenItem", "All");
}

function gymGridClick () {
  location.href = "./pages/gym.html";
  localStorage.setItem("chosenItem", "All");
}

// Rep locator selection and population
// Rep info object that holds data for states
var repInfo = {
  ak: 'Rep: Bill Mills<br>Email: <a href="mailto:bill@tmsreps.com">bill@tmsreps.com</a>',
  al: 'Rep: Joey Ferolito<br>Email: <a href="mailto:jrferolito@hotmail.com">jrferolito@hotmail.com</a>',
  ar: 'Rep: Beau Brumfield<br>Email: <a href="mailto:beaubrumfield@gmail.com">beaubrumfield@gmail.com</a>',
  az: 'Rep: Brant Alley<br>Email: <a href="mailto:brant@tmsreps.com">brant@tmsreps.com</a>',
  ca: 'Rep: Aaron Maloney (Southern and Central CA)<br>Email: <a href="mailto:aaron@tmsreps.com">aaron@tmsreps.com</a><hr>Rep: Mark Griewahn (Northern CA)<br>Email: <a href="mailto:mark@tmsreps.com">mark@tmsreps.com</a>',
  co: 'Rep: Brant Alley<br>Email: <a href="mailto:brant@tmsreps.com">brant@tmsreps.com</a>',
  ct: 'Rep: Rich Boudreau<br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  dc: 'Rep: Barry Smith<br>Email: <a href="mailto:bsmith27_99@yahoo.com">bsmith27_99@yahoo.com</a>',
  de: 'Rep: Barry Smith<br>Email: <a href="mailto:bsmith27_99@yahoo.com">bsmith27_99@yahoo.com</a>',
  fl: 'Rep: Mike O`neal<br>Email: <a href="mailto:fmo98@aol.com">fmo98@aol.com</a><hr>Rep: Joey Ferolito (FL Panhandle)<br>Email: <a href="mailto:jrferolito@hotmail.com">jrferolito@hotmail.com</a>',
  ga: 'Rep: Joey Ferolito<br>Email: <a href="mailto:jrferolito@hotmail.com">jrferolito@hotmail.com</a>',
  ia: 'No rep has been assigned to your area. Please give us a call and we will be happy to assist you.<hr><a href="tel:+1-800-438-6028" class="btn btn-outline-light">Call +1 (800) 438-6028 </a>',
  id: 'Rep: Ben Peters<br>Email: <a href="mailto:ben@tmsreps.com">ben@tmsreps.com</a>',
  il: 'Rep: Steve DeCastecker<br>Email: <a href="mailto:stevedrep1@sbcglobal.net">stevedrep1@sbcglobal.net</a>',
  in: 'Rep: Brian Makela<br>Email: <a href="mailto:bmakela@outlook.com">bmakela@outlook.com</a><hr>Rep: David Worst (North IN)<br>Email: <a href="mailto:daworst1@msn.com">daworst1@msn.com</a>',
  ks: 'No rep has been assigned to your area. Please give us a call and we will be happy to assist you.<hr><a href="tel:+1-800-438-6028" class="btn btn-outline-light">Call +1 (800) 438-6028 </a>',
  ky: 'Rep: Mike Sallie<br>Email: <a href="mailto:mikesallie59@gmail.com">mikesallie59@gmail.com</a>',
  la: 'Rep: Scott McMullin<br>Email: <a href="mailto:scottmcmullin58@yahoo.com">scottmcmullin58@yahoo.com</a>',
  ma: 'Rep: Rich Boudreau<br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  md: 'Rep: Barry Smith<br>Email: <a href="mailto:bsmith27_99@yahoo.com">bsmith27_99@yahoo.com</a>',
  me: 'Rep: Rich Boudreau<br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  mi: 'Rep: David Worst<br>Email: <a href="mailto:daworst1@msn.com">daworst1@msn.com</a>',
  mn: 'Rep: Dennis Anderson<br>Email: <a href="mailto:dande43436@comcast.net">dande43436@comcast.net</a>',
  mo: 'No rep has been assigned to your area. Please give us a call and we will be happy to assist you.<hr><a href="tel:+1-800-438-6028" class="btn btn-outline-light">Call +1 (800) 438-6028 </a>',
  ms: 'Rep: Scott McMullin<br>Email: <a href="mailto:scottmcmullin58@yahoo.com">scottmcmullin58@yahoo.com</a>',
  mt: 'Rep: Ben Peters<br>Email: <a href="mailto:ben@tmsreps.com">ben@tmsreps.com</a>',
  nc: 'Rep: Don Leonard<br>Email: <a href="mailto:dsleonard@aol.com">dsleonard@aol.com</a>',
  nd: 'Rep: Dennis Anderson<br>Email: <a href="mailto:dande43436@comcast.net">dande43436@comcast.net</a>',
  ne: 'No rep has been assigned to your area. Please give us a call and we will be happy to assist you.<hr><a href="tel:+1-800-438-6028" class="btn btn-outline-light">Call +1 (800) 438-6028 </a>',
  nh: 'Rep: Rich Boudreau<br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  nj: 'Rep: Mike Robinson<br>Email: <a href="mailto:mikerob@erols.com">mikerob@erols.com</a>',
  nm: 'Rep: Brant Alley <br>Email: <a href="mailto:brant@tmsreps.com">brant@tmsreps.com</a>',
  nv: 'Rep: Mark Griewahn <br>Email: <a href="mailto:mark@tmsreps.com">mark@tmsreps.com</a>',
  ny: 'Rep: Allan M. Dick (NY 130-32, 144-49) <br>Email: <a href="mailto:aldick@comcast.net">aldick@comcast.net</a><hr>Rep: Mike Robinson (NY 100-119)<br>Email: <a href="mailto:mikerob@erols.com">mikerob@erols.com</a><hr>Rep: Rich Boudreau (NY 120-129)<br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  oh: 'Rep: Brian Makela <br>Email: <a href="mailto:bmakela@outlook.com">bmakela@outlook.com</a><hr>Rep: David Worst (North OH)<br>Email: <a href="mailto:daworst1@msn.com">daworst1@msn.com</a>',
  ok: 'Rep: Beau Brumfield <br>Email: <a href="mailto:beaubrumfield@gmail.com">beaubrumfield@gmail.com</a>',
  or: 'Rep: Bill Mills <br>Email: <a href="mailto:bill@tmsreps.com">bill@tmsreps.com</a>',
  pa: 'Rep: Allan M. Dick (PA 150-169)<br>Email: <a href="mailto:aldick@comcast.net">aldick@comcast.net</a><hr>Rep: Mike Robinson (PA 170-197)<br>Email: <a href="mailto:mikerob@erols.com">mikerob@erols.com</a>',
  ri: 'Rep: Rich Boudreau <br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  sc: 'Rep: Don Leonard <br>Email: <a href="mailto:dsleonard@aol.com">dsleonard@aol.com</a>',
  sd: 'Rep: Dennis Anderson <br>Email: <a href="mailto:dande43436@comcast.net">dande43436@comcast.net</a>',
  tn: 'Rep: Mike Sallie <br>Email: <a href="mailto:mikesallie59@gmail.com">mikesallie59@gmail.com</a>',
  tx: 'Rep: Beau Brumfield (Northeast TX)<br>Email: <a href="mailto:beaubrumfield@gmail.com">beaubrumfield@gmail.com</a><hr>Rep: Doug Gollahon (North, Central, West TX)<br>Email: <a href="mailto:doug.gollahon@gmail.com">doug.gollahon@gmail.com</a><hr>Rep: Cody Parker (South and Southeast TX)<br>Email: <a href="mailto:parker0225@msn.com">parker0225@msn.com</a><hr>Rep: Derran Barrows (El Paso)<br>Email: <a href="mailto:derran.barrows@gmail.com">derran.barrows@gmail.com</a>',
  ut: 'Rep: Ben Peters <br>Email: <a href="mailto:ben@tmsreps.com">ben@tmsreps.com</a>',
  va: 'Rep: Dave Newton <br>Email: <a href="mailto:david.newton9@verizon.net">david.newton9@verizon.net</a>',
  vt: 'Rep: Rich Boudreau <br>Email: <a href="mailto:richboudreau@comcast.net">richboudreau@comcast.net</a>',
  wa: 'Rep: Bill Mills (Western WA)<br>Email: <a href="mailto:bill@tmsreps.com">bill@tmsreps.com</a><hr>Rep: Ben Peters (Eastern WA)<br>Email: <a href="mailto:ben@tmsreps.com">ben@tmsreps.com</a>',
  wi: 'Rep: Dennis Anderson <br>Email: <a href="mailto:dande43436@comcast.net">dande43436@comcast.net</a>',
  wv: 'Rep: Dave Newton <br>Email: <a href="mailto:david.newton9@verizon.net">david.newton9@verizon.net</a>',
  wy: 'Rep: Brant Alley (Eastern WY)<br>Email: <a href="mailto:brant@tmsreps.com">brant@tmsreps.com</a><hr>Rep: Ben Peters (Western WY)<br>Email: <a href="mailto:ben@tmsreps.com">ben@tmsreps.com</a>',
  default: ''
};

// This function will display rep information that it grabs from the repInfo object
function stateRepInfo() {
  var stateSelection = document.getElementById("state-selection").value;
  // stateSelection = stateSelection.replace(/['"]+/g, '');
  console.log(stateSelection);
  var repInfoDiv = document.getElementById("rep-info-div");
  repInfoDiv.innerHTML = repInfo[stateSelection];
};

// This function will filter downloads that are displayed based on dropdown selection
function filterDownloads() {
  var downloadFilterSelection = document.getElementById("download-filter-selection").value;
  var downloadsList = document.getElementsByClassName("downloads-list");

  for(i = 0; i < downloadsList.length; i++) {
    var currentDownloadsList = downloadsList[i].attributes.value.value;
    if(downloadFilterSelection == currentDownloadsList || downloadFilterSelection == "All") {
      downloadsList[i].style.display = "flex";
    } else {
      downloadsList[i].style.display = "none";
    }
  }
};

// This variable stores the localStorage item "chosenItem"
var chosenItem = localStorage.getItem("chosenItem");

function focusTackleWheels() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "tackleWheels");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbShields() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "shields");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbPracticeItems() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "practiceItems");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbSidelineMarkersPylons() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "sidelineMarkersPylons");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbSleds() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "sleds");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbGoalPostPads() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "goalPostPads");
  chosenItem = localStorage.getItem("chosenItem");
}

function focusFbDummies() {
  location.href = "./pages/football.html";
  localStorage.setItem("chosenItem", "dummies");
  chosenItem = localStorage.getItem("chosenItem");
}

try {
  if(chosenItem != null && document.getElementById("footballPageTitle")) {
    document.getElementById("football-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("baseballPageTitle")) {
    document.getElementById("baseball-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("trackPageTitle")) {
    document.getElementById("track-field-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("chairsStoolsPageTitle")) {
    document.getElementById("chairs-stools-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("paddingPageTitle")) {
    document.getElementById("padding-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("windscreenPageTitle")) {
    document.getElementById("windscreen-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("strengthPageTitle")) {
    document.getElementById("strength-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  } else if(chosenItem != null && document.getElementById("gymPageTitle")) {
    document.getElementById("gym-products-filter-selection").value = chosenItem;
    console.log("this should be working...")
  }
} catch(err) {
  console.log("Tackle wheels are awesome!")
};

// run footballGridClick function anytime the football link from the navbar is clicked
document.getElementById("football-page-link").addEventListener("click", footballGridClick);
document.getElementById("baseball-page-link").addEventListener("click", baseballGridClick);
document.getElementById("track-field-page-link").addEventListener("click", trackGridClick);
document.getElementById("chairs-stools-page-link").addEventListener("click", chairsGridClick);
document.getElementById("padding-page-link").addEventListener("click", paddingGridClick);
document.getElementById("windscreen-page-link").addEventListener("click", windscreenGridClick);
document.getElementById("strength-page-link").addEventListener("click", strengthGridClick);
document.getElementById("gym-page-link").addEventListener("click", gymGridClick);

// Scroll button
mybutton = document.getElementById("scroll-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(window.innerWidth > 550) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    };
  } else {
    mybutton.style.display = "none";
  };
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// store the input search bar as a variable
var searchInputBar = document.getElementById("searchInputBar");

searchInputBar.addEventListener("keyup", function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    searchSite();
  }
})

document.getElementById("nav-search-icon").addEventListener("click", searchSite);

// projects filter

// search button on navbar
function searchSite() {
  var siteURL = document.location.href;
  var siteTitle = document.title;
  switch(searchInputBar.value.toUpperCase()) {
    case "AD SIGNS":
      if(siteTitle == "Fisher Athletic | Get Equipped") { //make sure this matches the current title for the index page (document.title)
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "adSigns");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./football.html";
          localStorage.setItem("chosenItem", "adSigns");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "AGILITY BOXES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "agBoxes");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./strength-conditioning.html";
          localStorage.setItem("chosenItem", "agBoxes");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "ARMOR WRAP":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BALL RACKS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./gym.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BANDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "bands");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./strength-conditioning.html";
          localStorage.setItem("chosenItem", "bands");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BASEBALL":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./baseball.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BASKETBALL":
    if(siteTitle == "Fisher Athletic | Get Equipped") {
      location.href = "./pages/gym.html";
      localStorage.setItem("chosenItem", "All");
      chosenItem = localStorage.getItem("chosenItem");
    } else {
        location.href = "./gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
    }
    break;
    case "BATTING CAGES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "battingCages");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./baseball.html";
          localStorage.setItem("chosenItem", "battingCages");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BEAM PADDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/padding.html";
        localStorage.setItem("chosenItem", "beamPadding");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./padding.html";
          localStorage.setItem("chosenItem", "beamPadding");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BELTS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "belts");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./strength-conditioning.html";
          localStorage.setItem("chosenItem", "belts");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BENCHES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "benches");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./football.html";
          localStorage.setItem("chosenItem", "benches");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BLASTERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "blasters");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./football.html";
          localStorage.setItem("chosenItem", "blasters");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BLEACHER END CLOSURES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./gym.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BLEACHER MOUNT TABLES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CARTS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "carts");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./football.html";
          localStorage.setItem("chosenItem", "carts");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CHAIN SETS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "chainIndicatorSets");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "chainIndicatorSets");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CHAIRS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CHAIR CARTS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CHAMPIONSHIP BANNERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "DISTANCE MARKERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "distanceMarkers");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "distanceMarkers");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "DOWNLOADS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/download-center.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./download-center.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "INDICATOR SETS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "chainIndicatorSets");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "chainIndicatorSets");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CHUTES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "chutes");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "chutes");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CONDITIONING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CONES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "cones");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "cones");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "CROSSBARS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "crossbars");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "crossbars");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "DISCUS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "discusCage");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "discusCage");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "DISCUS CAGE":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "discusCage");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "discusCage");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "DUMMIES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "dummies");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "dummies");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FACILITY BRANDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FENCE TOPS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "fenceTops");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "fenceTops");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FIELD ACCESSORIES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "fieldAccessories");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "fieldAccessories");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FIELD COVERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "fieldCoversMats");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "fieldCoversMats");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FIELD MATS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "fieldCoversMats");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "fieldCoversMats");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FIELD PADDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/padding.html";
        localStorage.setItem("chosenItem", "fieldPadding");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./padding.html";
        localStorage.setItem("chosenItem", "fieldPadding");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FLOOR MOUNT TABLES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FOOTBALL":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "FOUL POLES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "foulPoles");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "foulPoles");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "BAGS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "gearEquipmentBags");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "gearEquipmentBags");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "GLUTE HAMS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "gluteHams");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "gluteHams");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "GOAL POSTS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "goalPostPads");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "goalPostPads");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "GOAL POST PADS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "goalPostPads");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "goalPostPads");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "GYM":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "GYM FLOOR COVER":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "HIGH JUMP PITS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "highJumpPits");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "highJumpPits");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "HURDLES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "hurdlesCart");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "hurdlesCart");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "HURDLE CART":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "hurdlesCart");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "hurdlesCart");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "INFIELD SCREENS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "infieldScreens");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "infieldScreens");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "KICKING CAGES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "kickingCages");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "kickingCages");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "LADDERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "ladders");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "ladders");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "NAME PLATES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "NETTING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "netting");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "netting");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "MEDIA BANNERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "MEDICINE BALLS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "medicineBalls");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "medicineBalls");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "PADDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/padding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./padding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "PITCHING AIDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/baseball.html";
        localStorage.setItem("chosenItem", "pitchingAids");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./baseball.html";
        localStorage.setItem("chosenItem", "pitchingAids");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "POLE VAULT PITS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "poleVaultPits");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "poleVaultPits");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "PRACTICE ITEMS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "practiceItems");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "practiceItems");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;

    case "PYLONS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "REMOVABLE PADDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/padding.html";
        localStorage.setItem("chosenItem", "removablePadding");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./padding.html";
        localStorage.setItem("chosenItem", "removablePadding");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "ROPES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "ropes");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "ropes");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "ROUGH RAP":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "all");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "all");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SCORERS TABLE":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./gym.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SHIELDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "shields");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "shields");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SIDELINE CAPES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sidelineCapes");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sidelineCapes");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SIDELINE COVERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sidelineCovers");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sidelineCovers");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SIDELINE MARKERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SIDELINE PYLONS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sidelineMarkersPylons");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SLEDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "sleds");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "sleds");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SMOOTH RAP":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STANDARDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "standards");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "standards");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STANDARD PADS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "standardPads");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "standardPads");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STARTER BLOCKS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "starterBlocks");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "starterBlocks");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STENCILS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "stencils");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "stencils");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STRENGTH":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "STOOLS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./chairs-stools.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "SWAG MAT":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TACKLE WHEELS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "tackleWheels");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "tackleWheels");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TEMPERAPLEX NAME PLATES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TEMPERAPLEX WALL SIGNS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
          location.href = "./facility-branding.html";
          localStorage.setItem("chosenItem", "All");
          chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "THIRD HAND":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "thirdHand");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "thirdHand");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TOE BOARDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "toeBoards");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "toeBoards");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TRACK":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TRACK ACCESSORIES":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "trackAccessories");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "trackAccessories");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "TRAINERS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/strength-conditioning.html";
        localStorage.setItem("chosenItem", "trainer");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./strength-conditioning.html";
        localStorage.setItem("chosenItem", "trainer");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "VAULT BOX":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "vaultBoxPads");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "vaultBoxPads");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "VAULT PADS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/track-field.html";
        localStorage.setItem("chosenItem", "vaultBoxPads");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./track-field.html";
        localStorage.setItem("chosenItem", "vaultBoxPads");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "WALL PADDING":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/padding.html";
        localStorage.setItem("chosenItem", "wallPadding");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./padding.html";
        localStorage.setItem("chosenItem", "wallPadding");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "WINDOW PERF":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "WINDOW MESH":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./facility-branding.html";
        localStorage.setItem("chosenItem", "All");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "WINDSCREEN":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/windscreen.html";
        localStorage.setItem("chosenItem", "windscreen");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./windscreen.html";
        localStorage.setItem("chosenItem", "windscreen");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "WRISTBANDS":
      if(siteTitle == "Fisher Athletic | Get Equipped") {
        location.href = "./pages/football.html";
        localStorage.setItem("chosenItem", "wristbands");
        chosenItem = localStorage.getItem("chosenItem");
      } else {
        location.href = "./football.html";
        localStorage.setItem("chosenItem", "wristbands");
        chosenItem = localStorage.getItem("chosenItem");
      }
      break;
    case "":
      alert("Input what you're looking for in the search bar.")
      break;
    default:
      alert("Sorry, item could not be found. Please try a different search.");
  }
}

// Downloads
document.getElementById("downloads-list-1").addEventListener("click", openDealerForm)
function openDealerForm() {
  window.open("../assets/downloads/forms/new-dealer-credit-application.pdf");
}

document.getElementById("downloads-list-2").addEventListener("click", openWallPanelMeasure)
function openWallPanelMeasure() {
  window.open("../assets/downloads/forms/wall-panel-measuring.pdf");
}

// Baseball captions p1 //
function msdpCaption () {
  document.getElementById("msdpCaption").innerHTML = document.getElementById("msdpImage").alt;
}

function tmwsCaption () {
  document.getElementById("tmwsCaption").innerHTML = document.getElementById("tmwsImage").alt;
};

function dmwsCaption () {
  document.getElementById("dmwsCaption").innerHTML = document.getElementById("dmwsImage").alt;
};

function dbpsoCaption () {
  document.getElementById("dbpsoCaption").innerHTML = document.getElementById("dbpsoImage").alt;
};

function pcaps223Caption () {
  document.getElementById("pcaps223Caption").innerHTML = document.getElementById("pcaps223Image").alt;
};

function rpg184Caption () {
  document.getElementById("rpg184Caption").innerHTML = document.getElementById("rpg184Image").alt;
};

function rpsg184Caption () {
  document.getElementById("rpsg184Caption").innerHTML = document.getElementById("rpsg184Image").alt;
};

function bspCaption () {
  document.getElementById("bspCaption").innerHTML = document.getElementById("bspImage").alt;
};

function bsp46Caption () {
  document.getElementById("bsp46Caption").innerHTML = document.getElementById("bsp46Image").alt;
};

function bbc100yCaption () {
  document.getElementById("bbc100yCaption").innerHTML = document.getElementById("bbc100yImage").alt;
};

function bfc250yCaption () {
  document.getElementById("bfc250yCaption").innerHTML = document.getElementById("bfc250yImage").alt;
};

function trpg10Caption () {
  document.getElementById("trpg10Caption").innerHTML = document.getElementById("trpg10Image").alt;
};


// Baseball captions p2 //
function bbc100gCaption () {
  document.getElementById("bbc100gCaption").innerHTML = document.getElementById("bbc100gImage").alt;
};

function pc1Caption () {
  document.getElementById("pc1Caption").innerHTML = document.getElementById("pc1Image").alt;
};

function tpt201550Caption () {
  document.getElementById("tpt201550Caption").innerHTML = document.getElementById("tpt201550Image").alt;
};

function hpm612Caption () {
  document.getElementById("hpm612Caption").innerHTML = document.getElementById("hpm612Image").alt;
};

function odc4Caption () {
  document.getElementById("odc4Caption").innerHTML = document.getElementById("odc4Image").alt;
};

function odc6Caption () {
  document.getElementById("odc6Caption").innerHTML = document.getElementById("odc6Image").alt;
};

function mp36Caption () {
  document.getElementById("mp36Caption").innerHTML = document.getElementById("mp36Image").alt;
};

function pm412Caption () {
  document.getElementById("pm412Caption").innerHTML = document.getElementById("pm412Image").alt;
};

function pm612Caption () {
  document.getElementById("pm612Caption").innerHTML = document.getElementById("pm612Image").alt;
};

function hpm612Caption () {
  document.getElementById("hpm612Caption").innerHTML = document.getElementById("hpm612Image").alt;
};

function ic1006Caption () {
  document.getElementById("ic1006Caption").innerHTML = document.getElementById("ic1006Image").alt;
};

function pp88wCaption () {
  document.getElementById("pp88wCaption").innerHTML = document.getElementById("pp88wImage").alt;
};

// Baseball captions p3 //
function ip88wCaption () {
  document.getElementById("ip88wCaption").innerHTML = document.getElementById("ip88wImage").alt;
};

function ic1018Caption () {
  document.getElementById("ic1018Caption").innerHTML = document.getElementById("ic1018Image").alt;
};

function pp57Caption () {
  document.getElementById("pp57Caption").innerHTML = document.getElementById("pp57Image").alt;
};

function pp58stCaption () {
  document.getElementById("pp58stCaption").innerHTML = document.getElementById("pp58stImage").alt;
};

function fc170Caption () {
  document.getElementById("fc170Caption").innerHTML = document.getElementById("fc170Image").alt;
};

function pp67Caption () {
  document.getElementById("pp67Caption").innerHTML = document.getElementById("pp67Image").alt;
};

function bcb48Caption () {
  document.getElementById("bcb48Caption").innerHTML = document.getElementById("bcb48Image").alt;
};

function fp1010Caption () {
  document.getElementById("fp1010Caption").innerHTML = document.getElementById("fp1010Image").alt;
};

function ip67Caption () {
  document.getElementById("ip67Caption").innerHTML = document.getElementById("ip67Image").alt;
};

function sfp67Caption () {
  document.getElementById("sfp67Caption").innerHTML = document.getElementById("sfp67Image").alt;
};

function ip88Caption () {
  document.getElementById("ip88Caption").innerHTML = document.getElementById("ip88Image").alt;
};

function ip88pCaption () {
  document.getElementById("ip88pCaption").innerHTML = document.getElementById("ip88pImage").alt;
};

// Baseball captions p4 //
function pp88Caption () {
  document.getElementById("pp88Caption").innerHTML = document.getElementById("pp88Image").alt;
};

function pp88nCaption () {
  document.getElementById("pp88nCaption").innerHTML = document.getElementById("pp88nImage").alt;
};

function pp88pCaption () {
  document.getElementById("pp88pCaption").innerHTML = document.getElementById("pp88pImage").alt;
};

function sku7006Caption () {
  document.getElementById("sku7006Caption").innerHTML = document.getElementById("sku7006Image").alt;
};

function fp1010nCaption () {
  document.getElementById("fp1010nCaption").innerHTML = document.getElementById("fp1010nImage").alt;
};

function fp1010Caption () {
  document.getElementById("fp1010Caption").innerHTML = document.getElementById("fp1010Image").alt;
};

function sfp67nCaption () {
  document.getElementById("sfp67nCaption").innerHTML = document.getElementById("sfp67nImage").alt;
};

function sfp67pdCaption () {
  document.getElementById("sfp67pdCaption").innerHTML = document.getElementById("sfp67pdImage").alt;
};

function sfp67Caption () {
  document.getElementById("sfp67Caption").innerHTML = document.getElementById("sfp67Image").alt;
};

function pp67nCaption () {
  document.getElementById("pp67nCaption").innerHTML = document.getElementById("pp67nImage").alt;
};

function pp67pdCaption () {
  document.getElementById("pp67pdCaption").innerHTML = document.getElementById("pp67pdImage").alt;
};

function pp67Caption () {
  document.getElementById("pp67Caption").innerHTML = document.getElementById("pp67Image").alt;
};

// Baseball captions p5 //
function cnr42a178Caption () {
  document.getElementById("cnr42a178Caption").innerHTML = document.getElementById("cnr42a178Image").alt;
};

function cbn67Caption () {
  document.getElementById("cbn67Caption").innerHTML = document.getElementById("cbn67Image").alt;
};

function bt5512hCaption () {
  document.getElementById("bt5512hCaption").innerHTML = document.getElementById("bt5512hImage").alt;
};

function pbssoCaption () {
  document.getElementById("pbssoCaption").innerHTML = document.getElementById("pbssoImage").alt;
};

function cnr24178bkCaption () {
  document.getElementById("cnr24178bkCaption").innerHTML = document.getElementById("cnr24178bkImage").alt;
};

function szbb4875Caption () {
  document.getElementById("szbb4875Caption").innerHTML = document.getElementById("szbb4875Image").alt;
};

function cnr504178Caption () {
  document.getElementById("cnr504178Caption").innerHTML = document.getElementById("cnr504178Image").alt;
};

function cnr504178Caption () {
  document.getElementById("cnr504178Caption").innerHTML = document.getElementById("cnr504178Image").alt;
};

function cnr42078Caption () {
  document.getElementById("cnr42078Caption").innerHTML = document.getElementById("cnr42078Image").alt;
};

function szsbkCaption () {
  document.getElementById("szsbkCaption").innerHTML = document.getElementById("szsbkImage").alt;
};

function cnr72178Caption () {
  document.getElementById("cnr72178Caption").innerHTML = document.getElementById("cnr72178Image").alt;
};

function cnr5078Caption () {
  document.getElementById("cnr5078Caption").innerHTML = document.getElementById("cnr5078Image").alt;
};

function cnr5044Caption () {
  document.getElementById("cnr5044Caption").innerHTML = document.getElementById("cnr5044Image").alt;
};

// Baseball captions p6 //
function cnr36178bkCaption () {
  document.getElementById("cnr36178bkCaption").innerHTML = document.getElementById("cnr36178bkImage").alt;
};

function cnr42a178Caption () {
  document.getElementById("cnr42a178Caption").innerHTML = document.getElementById("cnr42a178Image").alt;
};

function dm1vCaption () {
  document.getElementById("dm1vCaption").innerHTML = document.getElementById("dm1vImage").alt;
};

function fn4s1765Caption () {
  document.getElementById("fn4s1765Caption").innerHTML = document.getElementById("fn4s1765Image").alt;
};

function fn4s17100Caption () {
  document.getElementById("fn4s17100Caption").innerHTML = document.getElementById("fn4s17100Image").alt;
};

function fp20Caption () {
  document.getElementById("fp20Caption").innerHTML = document.getElementById("fp20Image").alt;
};

function fp10Caption () {
  document.getElementById("fp10Caption").innerHTML = document.getElementById("fp10Image").alt;
};

function dm1Caption () {
  document.getElementById("dm1Caption").innerHTML = document.getElementById("dm1Image").alt;
};

function dm1mCaption () {
  document.getElementById("dm1mCaption").innerHTML = document.getElementById("dm1mImage").alt;
};

function dm1mvCaption () {
  document.getElementById("dm1mvCaption").innerHTML = document.getElementById("dm1mvImage").alt;
};

function dmsoCaption () {
  document.getElementById("dmsoCaption").innerHTML = document.getElementById("dmsoImage").alt;
};

function dmsomCaption () {
  document.getElementById("dmsomCaption").innerHTML = document.getElementById("dmsomImage").alt;
};

// Baseball captions p6 //
function fpbsoCaption () {
  document.getElementById("fpbsoCaption").innerHTML = document.getElementById("fpbsoImage").alt;
};

function sku360pt1Caption () {
  document.getElementById("sku360pt1Caption").innerHTML = document.getElementById("sku360pt1Image").alt;
};

function sku360pt2Caption () {
  document.getElementById("sku360pt2Caption").innerHTML = document.getElementById("sku360pt2Image").alt;
};

function ab75Caption () {
  document.getElementById("ab75Caption").innerHTML = document.getElementById("ab75Image").alt;
};

function ab75pcCaption () {
  document.getElementById("ab75pcCaption").innerHTML = document.getElementById("ab75pcImage").alt;
};

function ab75bCaption () {
  document.getElementById("ab75bCaption").innerHTML = document.getElementById("ab75bImage").alt;
};

function ab75bpcCaption () {
  document.getElementById("ab75bpcCaption").innerHTML = document.getElementById("ab75bpcImage").alt;
};

// Track & field captions p1 //
function hs1450saCaption () {
  document.getElementById("hs1450saCaption").innerHTML = document.getElementById("hs1450saImage").alt;
};

function hs1250raCaption () {
  document.getElementById("hs1250raCaption").innerHTML = document.getElementById("hs1250raImage").alt;
};

function ehcCaption () {
  document.getElementById("ehcCaption").innerHTML = document.getElementById("ehcImage").alt;
};

function dc1300Caption () {
  document.getElementById("dc1300Caption").innerHTML = document.getElementById("dc1300Image").alt;
};

function dc100pCaption () {
  document.getElementById("dc100pCaption").innerHTML = document.getElementById("dc100pImage").alt;
};

function dc100Caption () {
  document.getElementById("dc100Caption").innerHTML = document.getElementById("dc100Image").alt;
};

function dw476Caption () {
  document.getElementById("dw476Caption").innerHTML = document.getElementById("dw476Image").alt;
};

function dr576Caption () {
  document.getElementById("dr576Caption").innerHTML = document.getElementById("dr576Image").alt;
};

function spc6Caption () {
  document.getElementById("spc6Caption").innerHTML = document.getElementById("spc6Image").alt;
};

function spp8Caption () {
  document.getElementById("spp8Caption").innerHTML = document.getElementById("spp8Image").alt;
};

function pv222732Caption () {
  document.getElementById("pv222732Caption").innerHTML = document.getElementById("pv222732Image").alt;
};

function wc222732Caption () {
  document.getElementById("wc222732Caption").innerHTML = document.getElementById("wc222732Image").alt;
};

function gc2227Caption () {
  document.getElementById("gc2227Caption").innerHTML = document.getElementById("gc2227Image").alt;
};

function hj101824Caption () {
  document.getElementById("hj101824Caption").innerHTML = document.getElementById("hj101824Image").alt;
};

function wc101824Caption () {
  document.getElementById("wc101824Caption").innerHTML = document.getElementById("wc101824Image").alt;
};

// Track & field captions p2 //
function gc1018Caption () {
  document.getElementById("gc1018Caption").innerHTML = document.getElementById("gc1018Image").alt;
};

function dw476Caption () {
  document.getElementById("dw476Caption").innerHTML = document.getElementById("dw476Image").alt;
};

function dc100pCaption () {
  document.getElementById("dc100pCaption").innerHTML = document.getElementById("dc100pImage").alt;
};

function dc100netCaption () {
  document.getElementById("dc100netCaption").innerHTML = document.getElementById("dc100netImage").alt;
};

function wc222428Caption () {
  document.getElementById("wc222428Caption").innerHTML = document.getElementById("wc222428Image").alt;
};

function pv222428Caption () {
  document.getElementById("pv222428Caption").innerHTML = document.getElementById("pv222428Image").alt;
};

function wc222432Caption () {
  document.getElementById("wc222432Caption").innerHTML = document.getElementById("wc222432Image").alt;
};

function gc2224Caption () {
  document.getElementById("gc2224Caption").innerHTML = document.getElementById("gc2224Image").alt;
};

function pv222732Caption () {
  document.getElementById("pv222732Caption").innerHTML = document.getElementById("pv222732Image").alt;
};

function wc222728Caption () {
  document.getElementById("wc222728Caption").innerHTML = document.getElementById("wc222728Image").alt;
};

function wc222732Caption () {
  document.getElementById("wc222732Caption").innerHTML = document.getElementById("wc222732Image").alt;
};

function gc2227Caption () {
  document.getElementById("gc2227Caption").innerHTML = document.getElementById("gc2227Image").alt;
};

// Track & field captions p3 //
function wm240Caption () {
  document.getElementById("wm240Caption").innerHTML = document.getElementById("wm240Image").alt;
};

function wm480Caption () {
  document.getElementById("wm480Caption").innerHTML = document.getElementById("wm480Image").alt;
};

function pv222432Caption () {
  document.getElementById("pv222432Caption").innerHTML = document.getElementById("pv222432Image").alt;
};

function wc202330Caption () {
  document.getElementById("wc202330Caption").innerHTML = document.getElementById("wc202330Image").alt;
};

function wc202328Caption () {
  document.getElementById("wc202328Caption").innerHTML = document.getElementById("wc202328Image").alt;
};

function pv202126Caption () {
  document.getElementById("pv202126Caption").innerHTML = document.getElementById("pv202126Image").alt;
};

function pv202128Caption () {
  document.getElementById("pv202128Caption").innerHTML = document.getElementById("pv202128Image").alt;
};

function pv202132Caption () {
  document.getElementById("pv202132Caption").innerHTML = document.getElementById("pv202132Image").alt;
};

function wc202126Caption () {
  document.getElementById("wc202126Caption").innerHTML = document.getElementById("wc202126Image").alt;
};

function wc202128Caption () {
  document.getElementById("wc202128Caption").innerHTML = document.getElementById("wc202128Image").alt;
};

function wc202132Caption () {
  document.getElementById("wc202132Caption").innerHTML = document.getElementById("wc202132Image").alt;
};

function gc2021Caption () {
  document.getElementById("gc2021Caption").innerHTML = document.getElementById("gc2021Image").alt;
};

// Track & field captions p4 //
function pv202328Caption () {
  document.getElementById("pv202328Caption").innerHTML = document.getElementById("pv202328Image").alt;
};

function pv202332Caption () {
  document.getElementById("pv202332Caption").innerHTML = document.getElementById("pv202332Image").alt;
};

function wc202326Caption () {
  document.getElementById("wc202326Caption").innerHTML = document.getElementById("wc202326Image").alt;
};

function plzCaption () {
  document.getElementById("plzCaption").innerHTML = document.getElementById("plzImage").alt;
};

function ljc100Caption () {
  document.getElementById("ljc100Caption").innerHTML = document.getElementById("ljc100Image").alt;
};

function sr34bCaption () {
  document.getElementById("sr34bCaption").innerHTML = document.getElementById("sr34bImage").alt;
};

function sr44bCaption () {
  document.getElementById("sr44bCaption").innerHTML = document.getElementById("sr44bImage").alt;
};

function sr38bCaption () {
  document.getElementById("sr38bCaption").innerHTML = document.getElementById("sr38bImage").alt;
};

function sr48bCaption () {
  document.getElementById("sr48bCaption").innerHTML = document.getElementById("sr48bImage").alt;
};

function ttp630wCaption () {
  document.getElementById("ttp630wCaption").innerHTML = document.getElementById("ttp630wImage").alt;
};

function ttp1230Caption () {
  document.getElementById("ttp1230Caption").innerHTML = document.getElementById("ttp1230Image").alt;
};

function pbCaption () {
  document.getElementById("pbCaption").innerHTML = document.getElementById("pbImage").alt;
};

// Track & field captions p5 //
function abCaption () {
  document.getElementById("abCaption").innerHTML = document.getElementById("abImage").alt;
};

function ttsoCaption () {
  document.getElementById("ttsoCaption").innerHTML = document.getElementById("ttsoImage").alt;
};

function ttssCaption () {
  document.getElementById("ttssCaption").innerHTML = document.getElementById("ttssImage").alt;
};

function tticsCaption () {
  document.getElementById("tticsCaption").innerHTML = document.getElementById("tticsImage").alt;
};

function tltCaption () {
  document.getElementById("tltCaption").innerHTML = document.getElementById("tltImage").alt;
};

function thstbCaption () {
  document.getElementById("thstbCaption").innerHTML = document.getElementById("thstbImage").alt;
};

function tptbCaption () {
  document.getElementById("tptbCaption").innerHTML = document.getElementById("tptbImage").alt;
};

function tatbCaption () {
  document.getElementById("tatbCaption").innerHTML = document.getElementById("tatbImage").alt;
};

function tatbdpCaption () {
  document.getElementById("tatbdpCaption").innerHTML = document.getElementById("tatbdpImage").alt;
};

function thstbtCaption () {
  document.getElementById("thstbtCaption").innerHTML = document.getElementById("thstbtImage").alt;
};

function tpolytbCaption () {
  document.getElementById("tpolytbCaption").innerHTML = document.getElementById("tpolytbImage").alt;
};

function tchampCaption () {
  document.getElementById("tchampCaption").innerHTML = document.getElementById("tchampImage").alt;
};

// Track & field captions p6 //
function tcebCaption () {
  document.getElementById("tcebCaption").innerHTML = document.getElementById("tcebImage").alt;
};

function tolyCaption () {
  document.getElementById("tolyCaption").innerHTML = document.getElementById("tolyImage").alt;
};

function tstarCaption () {
  document.getElementById("tstarCaption").innerHTML = document.getElementById("tstarImage").alt;
};

function ttrackCaption () {
  document.getElementById("ttrackCaption").innerHTML = document.getElementById("ttrackImage").alt;
};

function sstCaption () {
  document.getElementById("sstCaption").innerHTML = document.getElementById("sstImage").alt;
};

function ts38Caption () {
  document.getElementById("ts38Caption").innerHTML = document.getElementById("ts38Image").alt;
};

function tisbCaption () {
  document.getElementById("tisbCaption").innerHTML = document.getElementById("tisbImage").alt;
};

function pv202326Caption () {
  document.getElementById("pv202326Caption").innerHTML = document.getElementById("pv202326Image").alt;
};

function hj112224Caption () {
  document.getElementById("hj112224Caption").innerHTML = document.getElementById("hj112224Image").alt;
};

function hj112226Caption () {
  document.getElementById("hj112226Caption").innerHTML = document.getElementById("hj112226Image").alt;
};

function hj112228Caption () {
  document.getElementById("hj112228Caption").innerHTML = document.getElementById("hj112228Image").alt;
};

function hj112232Caption () {
  document.getElementById("hj112232Caption").innerHTML = document.getElementById("hj112232Image").alt;
};

// Track & field captions p7 //
function wc112224Caption () {
  document.getElementById("wc112224Caption").innerHTML = document.getElementById("wc112224Image").alt;
};

function wc112226Caption () {
  document.getElementById("wc112226Caption").innerHTML = document.getElementById("wc112226Image").alt;
};

function wc112228Caption () {
  document.getElementById("wc112228Caption").innerHTML = document.getElementById("wc112228Image").alt;
};

function wc112232Caption () {
  document.getElementById("wc112232Caption").innerHTML = document.getElementById("wc112232Image").alt;
};

function gc1122Caption () {
  document.getElementById("gc1122Caption").innerHTML = document.getElementById("gc1122Image").alt;
};

function jr61218Caption () {
  document.getElementById("jr61218Caption").innerHTML = document.getElementById("jr61218Image").alt;
};

function wc61218Caption () {
  document.getElementById("wc61218Caption").innerHTML = document.getElementById("wc61218Image").alt;
};

function gc612Caption () {
  document.getElementById("gc612Caption").innerHTML = document.getElementById("gc612Image").alt;
};

function jr61224Caption () {
  document.getElementById("jr61224Caption").innerHTML = document.getElementById("jr61224Image").alt;
};

function wc61224Caption () {
  document.getElementById("wc61224Caption").innerHTML = document.getElementById("wc61224Image").alt;
};

function gc1018Caption () {
  document.getElementById("gc1018Caption").innerHTML = document.getElementById("gc1018Image").alt;
};

function wc101832Caption () {
  document.getElementById("wc101832Caption").innerHTML = document.getElementById("wc101832Image").alt;
};

// Track & field captions p8 //
function hj81620Caption () {
  document.getElementById("hj81620Caption").innerHTML = document.getElementById("hj81620Image").alt;
};

function hj81624Caption () {
  document.getElementById("hj81624Caption").innerHTML = document.getElementById("hj81624Image").alt;
};

function hj81626Caption () {
  document.getElementById("hj81626Caption").innerHTML = document.getElementById("hj81626Image").alt;
};

function hj81628Caption () {
  document.getElementById("hj81628Caption").innerHTML = document.getElementById("hj81628Image").alt;
};

function wc81620Caption () {
  document.getElementById("wc81620Caption").innerHTML = document.getElementById("wc81620Image").alt;
};

function wc81624Caption () {
  document.getElementById("wc81624Caption").innerHTML = document.getElementById("wc81624Image").alt;
};

function wc81626Caption () {
  document.getElementById("wc81626Caption").innerHTML = document.getElementById("wc81626Image").alt;
};

function wc81628Caption () {
  document.getElementById("wc81628Caption").innerHTML = document.getElementById("wc81628Image").alt;
};

function gc816Caption () {
  document.getElementById("gc816Caption").innerHTML = document.getElementById("gc816Image").alt;
};

function hj101824Caption () {
  document.getElementById("hj101824Caption").innerHTML = document.getElementById("hj101824Image").alt;
};

function hj101826Caption () {
  document.getElementById("hj101826Caption").innerHTML = document.getElementById("hj101826Image").alt;
};

function hj101828Caption () {
  document.getElementById("hj101828Caption").innerHTML = document.getElementById("hj101828Image").alt;
};

// Track & field captions p9 //
function wc101824Caption () {
  document.getElementById("wc101824Caption").innerHTML = document.getElementById("wc101824Image").alt;
};

function wc101826Caption () {
  document.getElementById("wc101826Caption").innerHTML = document.getElementById("wc101826Image").alt;
};

function wc101828Caption () {
  document.getElementById("wc101828Caption").innerHTML = document.getElementById("wc101828Image").alt;
};

function hjwk1220Caption () {
  document.getElementById("hjwk1220Caption").innerHTML = document.getElementById("hjwk1220Image").alt;
};

function pvst1510Caption () {
  document.getElementById("pvst1510Caption").innerHTML = document.getElementById("pvst1510Image").alt;
};

function pvtapeinCaption () {
  document.getElementById("pvtapeinCaption").innerHTML = document.getElementById("pvtapeinImage").alt;
};

function pvtapemtCaption () {
  document.getElementById("pvtapemtCaption").innerHTML = document.getElementById("pvtapemtImage").alt;
};

function pvs246016Caption () {
  document.getElementById("pvs246016Caption").innerHTML = document.getElementById("pvs246016Image").alt;
};

function pvst26tCaption () {
  document.getElementById("pvst26tCaption").innerHTML = document.getElementById("pvst26tImage").alt;
};

function vbp200Caption () {
  document.getElementById("vbp200Caption").innerHTML = document.getElementById("vbp200Image").alt;
};

function ss100Caption () {
  document.getElementById("ss100Caption").innerHTML = document.getElementById("ss100Image").alt;
};

function hjst1220Caption () {
  document.getElementById("hjst1220Caption").innerHTML = document.getElementById("hjst1220Image").alt;
};

// Track & field captions p10 //
function hjst1210Caption () {
  document.getElementById("hjst1210Caption").innerHTML = document.getElementById("hjst1210Image").alt;
};

function pvst1520Caption () {
  document.getElementById("pvst1520Caption").innerHTML = document.getElementById("pvst1520Image").alt;
};

function pvs32tCaption () {
  document.getElementById("pvs32tCaption").innerHTML = document.getElementById("pvs32tImage").alt;
};

function tavbCaption () {
  document.getElementById("tavbCaption").innerHTML = document.getElementById("tavbImage").alt;
};

function bm1501Caption () {
  document.getElementById("bm1501Caption").innerHTML = document.getElementById("bm1501Image").alt;
};

function bm1502Caption () {
  document.getElementById("bm1502Caption").innerHTML = document.getElementById("bm1502Image").alt;
};

function tpvsbCaption () {
  document.getElementById("tpvsbCaption").innerHTML = document.getElementById("tpvsbImage").alt;
};

function tssvbCaption () {
  document.getElementById("tssvbCaption").innerHTML = document.getElementById("tssvbImage").alt;
};

function tsvblCaption () {
  document.getElementById("tsvblCaption").innerHTML = document.getElementById("tsvblImage").alt;
};

function vbs100Caption () {
  document.getElementById("vbs100Caption").innerHTML = document.getElementById("vbs100Image").alt;
};

function tavblCaption () {
  document.getElementById("tavblCaption").innerHTML = document.getElementById("tavblImage").alt;
};

function cbl100Caption () {
  document.getElementById("cbl100Caption").innerHTML = document.getElementById("cbl100Image").alt;
};

// Track & field captions p11 //
function hj81624pkCaption () {
  document.getElementById("hj81624pkCaption").innerHTML = document.getElementById("hj81624pkImage").alt;
};

function pv202126pkCaption () {
  document.getElementById("pv202126pkCaption").innerHTML = document.getElementById("pv202126pkImage").alt;
};

function pvhj2624cCaption () {
  document.getElementById("pvhj2624cCaption").innerHTML = document.getElementById("pvhj2624cImage").alt;
};

// Chairs and stools page1 //
function ch100Caption () {
  document.getElementById("ch100Caption").innerHTML = document.getElementById("ch100Image").alt;
};

function ch100dpCaption () {
  document.getElementById("ch100dpCaption").innerHTML = document.getElementById("ch100dpImage").alt;
};

function chbdCaption () {
  document.getElementById("chbdCaption").innerHTML = document.getElementById("chbdImage").alt;
};

function chccoverCaption () {
  document.getElementById("chccoverCaption").innerHTML = document.getElementById("chccoverImage").alt;
};

function chc100Caption () {
  document.getElementById("chc100Caption").innerHTML = document.getElementById("chc100Image").alt;
};

function chc150Caption () {
  document.getElementById("chc150Caption").innerHTML = document.getElementById("chc150Image").alt;
};

function chc300Caption () {
  document.getElementById("chc300Caption").innerHTML = document.getElementById("chc300Image").alt;
};

function chbcoCaption () {
  document.getElementById("chbcoCaption").innerHTML = document.getElementById("chbcoImage").alt;
};

function stl1000dpCaption () {
  document.getElementById("stl1000dpCaption").innerHTML = document.getElementById("stl1000dpImage").alt;
};

// Padding captions p1 //
function co1Caption () {
  document.getElementById("co1Caption").innerHTML = document.getElementById("co1Image").alt;
};

function wpzb2Caption () {
  document.getElementById("wpzb2Caption").innerHTML = document.getElementById("wpzb2Image").alt;
};

function wp32622Caption () {
  document.getElementById("wp32622Caption").innerHTML = document.getElementById("wp32622Image").alt;
};

function pc612Caption () {
  document.getElementById("pc612Caption").innerHTML = document.getElementById("pc612Image").alt;
};

function pcsoCaption () {
  document.getElementById("pcsoCaption").innerHTML = document.getElementById("pcsoImage").alt;
};

function cbktCaption () {
  document.getElementById("cbktCaption").innerHTML = document.getElementById("cbktImage").alt;
};

function kw100Caption () {
  document.getElementById("kw100Caption").innerHTML = document.getElementById("kw100Image").alt;
};

function rwp224062Caption () {
  document.getElementById("rwp224062Caption").innerHTML = document.getElementById("rwp224062Image").alt;
};

function wm224062Caption () {
  document.getElementById("wm224062Caption").innerHTML = document.getElementById("wm224062Image").alt;
};

function rwp226123Caption () {
  document.getElementById("rwp226123Caption").innerHTML = document.getElementById("rwp226123Image").alt;
};

function rwp226103Caption () {
  document.getElementById("rwp226103Caption").innerHTML = document.getElementById("rwp226103Image").alt;
};

function rwp225123Caption () {
  document.getElementById("rwp225123Caption").innerHTML = document.getElementById("rwp225123Image").alt;
};

// Padding captions p2 //
function rwp225103Caption () {
  document.getElementById("rwp225103Caption").innerHTML = document.getElementById("rwp225103Image").alt;
};

function rwp224083Caption () {
  document.getElementById("rwp224083Caption").innerHTML = document.getElementById("rwp224083Image").alt;
};

function rwp224063Caption () {
  document.getElementById("rwp224063Caption").innerHTML = document.getElementById("rwp224063Image").alt;
};

function rwp226122Caption () {
  document.getElementById("rwp226122Caption").innerHTML = document.getElementById("rwp226122Image").alt;
};

function rwp225122Caption () {
  document.getElementById("rwp225122Caption").innerHTML = document.getElementById("rwp225122Image").alt;
};

function rwp225102Caption () {
  document.getElementById("rwp225102Caption").innerHTML = document.getElementById("rwp225102Image").alt;
};

function rwp224082Caption () {
  document.getElementById("rwp224082Caption").innerHTML = document.getElementById("rwp224082Image").alt;
};

function co2Caption () {
  document.getElementById("co2Caption").innerHTML = document.getElementById("co2Image").alt;
};

function ibpCaption () {
  document.getElementById("ibpCaption").innerHTML = document.getElementById("ibpImage").alt;
};

function rccCaption () {
  document.getElementById("rccCaption").innerHTML = document.getElementById("rccImage").alt;
};

function bp3Caption () {
  document.getElementById("bp3Caption").innerHTML = document.getElementById("bp3Image").alt;
};

function bp4Caption () {
  document.getElementById("bp4Caption").innerHTML = document.getElementById("bp4Image").alt;
};

// Padding captions p3 //
function pccCaption () {
  document.getElementById("pccCaption").innerHTML = document.getElementById("pccImage").alt;
};

function pbcCaption () {
  document.getElementById("pbcCaption").innerHTML = document.getElementById("pbcImage").alt;
};

function pbtCaption () {
  document.getElementById("pbtCaption").innerHTML = document.getElementById("pbtImage").alt;
};

function bspCaption () {
  document.getElementById("bspCaption").innerHTML = document.getElementById("bspImage").alt;
};

function bsp46Caption () {
  document.getElementById("bsp46Caption").innerHTML = document.getElementById("bsp46Image").alt;
};

function bsp36Caption () {
  document.getElementById("bsp36Caption").innerHTML = document.getElementById("bsp36Image").alt;
};

function dbpsoCaption () {
  document.getElementById("dbpsoCaption").innerHTML = document.getElementById("dbpsoImage").alt;
};

function pmv72122Caption () {
  document.getElementById("pmv72122Caption").innerHTML = document.getElementById("pmv72122Image").alt;
};

function pcaps223Caption () {
  document.getElementById("pcaps223Caption").innerHTML = document.getElementById("pcaps223Image").alt;
};

function pmv72162Caption () {
  document.getElementById("pmv72162Caption").innerHTML = document.getElementById("pmv72162Image").alt;
};

function pmv72262Caption () {
  document.getElementById("pmv72262Caption").innerHTML = document.getElementById("pmv72262Image").alt;
};

function pmv72123Caption () {
  document.getElementById("pmv72123Caption").innerHTML = document.getElementById("pmv72123Image").alt;
};

// Padding captions p4 //
function pmv72163Caption () {
  document.getElementById("pmv72163Caption").innerHTML = document.getElementById("pmv72163Image").alt;
};

function pmv72263Caption () {
  document.getElementById("pmv72263Caption").innerHTML = document.getElementById("pmv72263Image").alt;
};

// Track and field captions p1 //
function ssr5Caption () {
  document.getElementById("ssr5Caption").innerHTML = document.getElementById("ssr5Image").alt;
};

function ssr2Caption () {
  document.getElementById("ssr2Caption").innerHTML = document.getElementById("ssr2Image").alt;
};

function ssr125Caption () {
  document.getElementById("ssr125Caption").innerHTML = document.getElementById("ssr125Image").alt;
};

function ssr25Caption () {
  document.getElementById("ssr25Caption").innerHTML = document.getElementById("ssr25Image").alt;
};

function agbeltsmCaption () {
  document.getElementById("agbeltsmCaption").innerHTML = document.getElementById("agbeltsmImage").alt;
};

function agbeltmedCaption () {
  document.getElementById("agbeltmedCaption").innerHTML = document.getElementById("agbeltmedImage").alt;
};

function agbeltlgCaption () {
  document.getElementById("agbeltlgCaption").innerHTML = document.getElementById("agbeltlgImage").alt;
};

function cone12Caption () {
  document.getElementById("cone12Caption").innerHTML = document.getElementById("cone12Image").alt;
};

function bb06Caption () {
  document.getElementById("bb06Caption").innerHTML = document.getElementById("bb06Image").alt;
};

function bbrCaption () {
  document.getElementById("bbrCaption").innerHTML = document.getElementById("bbrImage").alt;
};

function cone3Caption () {
  document.getElementById("cone3Caption").innerHTML = document.getElementById("cone3Image").alt;
};

function cone6Caption () {
  document.getElementById("cone6Caption").innerHTML = document.getElementById("cone6Image").alt;
};

// Track and field captions p2 //
function cone18Caption () {
  document.getElementById("cone18Caption").innerHTML = document.getElementById("cone18Image").alt;
};

function cone28Caption () {
  document.getElementById("cone28Caption").innerHTML = document.getElementById("cone28Image").alt;
};

function agscore50Caption () {
  document.getElementById("agscore50Caption").innerHTML = document.getElementById("agscore50Image").alt;
};

function ps3000padCaption () {
  document.getElementById("ps3000padCaption").innerHTML = document.getElementById("ps3000padImage").alt;
};

function har06Caption () {
  document.getElementById("har06Caption").innerHTML = document.getElementById("har06Image").alt;
};

function har05Caption () {
  document.getElementById("har05Caption").innerHTML = document.getElementById("har05Image").alt;
};

function har04Caption () {
  document.getElementById("har04Caption").innerHTML = document.getElementById("har04Image").alt;
};

function har02Caption () {
  document.getElementById("har02Caption").innerHTML = document.getElementById("har02Image").alt;
};

function har01Caption () {
  document.getElementById("har01Caption").innerHTML = document.getElementById("har01Image").alt;
};

function ps3000Caption () {
  document.getElementById("ps3000Caption").innerHTML = document.getElementById("ps3000Image").alt;
};

function ps2500Caption () {
  document.getElementById("ps2500Caption").innerHTML = document.getElementById("ps2500Image").alt;
};

function ps1500Caption () {
  document.getElementById("ps1500Caption").innerHTML = document.getElementById("ps1500Image").alt;
};

// Track and field captions p3 //
function ps4000Caption () {
  document.getElementById("ps4000Caption").innerHTML = document.getElementById("ps4000Image").alt;
};

function aggluteCaption () {
  document.getElementById("aggluteCaption").innerHTML = document.getElementById("aggluteImage").alt;
};

function ply36306Caption () {
  document.getElementById("ply36306Caption").innerHTML = document.getElementById("ply36306Image").alt;
};

function ply363012Caption () {
  document.getElementById("ply363012Caption").innerHTML = document.getElementById("ply363012Image").alt;
};

function ply363024Caption () {
  document.getElementById("ply363024Caption").innerHTML = document.getElementById("ply363024Image").alt;
};

function ply363018Caption () {
  document.getElementById("ply363018Caption").innerHTML = document.getElementById("ply363018Image").alt;
};

function ply3630Caption () {
  document.getElementById("ply3630Caption").innerHTML = document.getElementById("ply3630Image").alt;
};

function agbox24Caption () {
  document.getElementById("agbox24Caption").innerHTML = document.getElementById("agbox24Image").alt;
};

function agbox18Caption () {
  document.getElementById("agbox18Caption").innerHTML = document.getElementById("agbox18Image").alt;
};

function disc12orCaption () {
  document.getElementById("disc12orCaption").innerHTML = document.getElementById("disc12orImage").alt;
};

function disc19orCaption () {
  document.getElementById("disc19orCaption").innerHTML = document.getElementById("disc19orImage").alt;
};

function wrp30Caption () {
  document.getElementById("wrp30Caption").innerHTML = document.getElementById("wrp30Image").alt;
};

// Track and field captions p4 //
function sd1454Caption () {
  document.getElementById("sd1454Caption").innerHTML = document.getElementById("sd1454Image").alt;
};

function amadj20Caption () {
  document.getElementById("amadj20Caption").innerHTML = document.getElementById("amadj20Image").alt;
};

function aglstl1913Caption () {
  document.getElementById("aglstl1913Caption").innerHTML = document.getElementById("aglstl1913Image").alt;
};

function am20Caption () {
  document.getElementById("am20Caption").innerHTML = document.getElementById("am20Image").alt;
};

function amrr20Caption () {
  document.getElementById("amrr20Caption").innerHTML = document.getElementById("amrr20Image").alt;
};

function agl4815Caption () {
  document.getElementById("agl4815Caption").innerHTML = document.getElementById("agl4815Image").alt;
};

function agl2420Caption () {
  document.getElementById("agl2420Caption").innerHTML = document.getElementById("agl2420Image").alt;
};

function agl1612Caption () {
  document.getElementById("agl1612Caption").innerHTML = document.getElementById("agl1612Image").alt;
};

function amadjrr20Caption () {
  document.getElementById("amadjrr20Caption").innerHTML = document.getElementById("amadjrr20Image").alt;
};

// Football captions p1 //
function sku9708ssCaption () {
  document.getElementById("sku9708ssCaption").innerHTML = document.getElementById("sku9708ssImage").alt;
};

function sku9802sjrCaption () {
  document.getElementById("sku9802sjrCaption").innerHTML = document.getElementById("sku9802sjrImage").alt;
};

function sku9715apCaption () {
  document.getElementById("sku9715apCaption").innerHTML = document.getElementById("sku9715apImage").alt;
};

function sku9301rCaption () {
  document.getElementById("sku9301rCaption").innerHTML = document.getElementById("sku9301rImage").alt;
};

function sku9201cCaption () {
  document.getElementById("sku9201cCaption").innerHTML = document.getElementById("sku9201cImage").alt;
};

function cl5mCaption () {
  document.getElementById("cl5mCaption").innerHTML = document.getElementById("cl5mImage").alt;
};

function sku9211rCaption () {
  document.getElementById("sku9211rCaption").innerHTML = document.getElementById("sku9211rImage").alt;
};

function jrts1Caption () {
  document.getElementById("jrts1Caption").innerHTML = document.getElementById("jrts1Image").alt;
};

function sku9722jrcCaption () {
  document.getElementById("sku9722jrcCaption").innerHTML = document.getElementById("sku9722jrcImage").alt;
};

function sku9000cpCaption () {
  document.getElementById("sku9000cpCaption").innerHTML = document.getElementById("sku9000cpImage").alt;
};

function sku9004mCaption () {
  document.getElementById("sku9004mCaption").innerHTML = document.getElementById("sku9004mImage").alt;
};

function sku9902mCaption () {
  document.getElementById("sku9902mCaption").innerHTML = document.getElementById("sku9902mImage").alt;
};

// Football captions p2 //
function sku9900psCaption () {
  document.getElementById("sku9900psCaption").innerHTML = document.getElementById("sku9900psImage").alt;
};

function sku9900pCaption () {
  document.getElementById("sku9900pCaption").innerHTML = document.getElementById("sku9900pImage").alt;
};

function sku9708ssgmCaption () {
  document.getElementById("sku9708ssgmCaption").innerHTML = document.getElementById("sku9708ssgmImage").alt;
};

function sku9201csCaption () {
  document.getElementById("sku9201csCaption").innerHTML = document.getElementById("sku9201csImage").alt;
};

function gppl1Caption () {
  document.getElementById("gppl1Caption").innerHTML = document.getElementById("gppl1Image").alt;
};

function gppedpCaption () {
  document.getElementById("gppedpCaption").innerHTML = document.getElementById("gppedpImage").alt;
};

function gppc13Caption () {
  document.getElementById("gppc13Caption").innerHTML = document.getElementById("gppc13Image").alt;
};

function gpplldpCaption () {
  document.getElementById("gpplldpCaption").innerHTML = document.getElementById("gpplldpImage").alt;
};

function gpps400Caption () {
  document.getElementById("gpps400Caption").innerHTML = document.getElementById("gpps400Image").alt;
};

function gppcwCaption () {
  document.getElementById("gppcwCaption").innerHTML = document.getElementById("gppcwImage").alt;
};

function gppcyCaption () {
  document.getElementById("gppcyCaption").innerHTML = document.getElementById("gppcyImage").alt;
};

function sku6000pgcCaption () {
  document.getElementById("sku6000pgcCaption").innerHTML = document.getElementById("sku6000pgcImage").alt;
};

// Football captions p3 //
function sku6000uprightsCaption () {
  document.getElementById("sku6000uprightsCaption").innerHTML = document.getElementById("sku6000uprightsImage").alt;
};

function sku6000hchCaption () {
  document.getElementById("sku6000hchCaption").innerHTML = document.getElementById("sku6000hchImage").alt;
};

function sku6000hghCaption () {
  document.getElementById("sku6000hghCaption").innerHTML = document.getElementById("sku6000hghImage").alt;
};

function gp1Caption () {
  document.getElementById("gp1Caption").innerHTML = document.getElementById("gp1Image").alt;
};

function szfb4875Caption () {
  document.getElementById("szfb4875Caption").innerHTML = document.getElementById("szfb4875Image").alt;
};

function szfb1010Caption () {
  document.getElementById("szfb1010Caption").innerHTML = document.getElementById("szfb1010Image").alt;
};

function sku6000targetsCaption () {
  document.getElementById("sku6000targetsCaption").innerHTML = document.getElementById("sku6000targetsImage").alt;
};

function sku6000hnetCaption () {
  document.getElementById("sku6000hnetCaption").innerHTML = document.getElementById("sku6000hnetImage").alt;
};

function sku6000cnetCaption () {
  document.getElementById("sku6000cnetCaption").innerHTML = document.getElementById("sku6000cnetImage").alt;
};

function sku6000pgh2Caption () {
  document.getElementById("sku6000pgh2Caption").innerHTML = document.getElementById("sku6000pgh2Image").alt;
};

function sku6000pgc1Caption () {
  document.getElementById("sku6000pgc1Caption").innerHTML = document.getElementById("sku6000pgc1Image").alt;
};

function sku6000pghCaption () {
  document.getElementById("sku6000pghCaption").innerHTML = document.getElementById("sku6000pghImage").alt;
};

// Football captions p4 //
function ws3dCaption () {
  document.getElementById("ws3dCaption").innerHTML = document.getElementById("ws3dImage").alt;
};

function ws3Caption () {
  document.getElementById("ws3Caption").innerHTML = document.getElementById("ws3Image").alt;
};

function wksrwCaption () {
  document.getElementById("wksrwCaption").innerHTML = document.getElementById("wksrwImage").alt;
};

function tw2814Caption () {
  document.getElementById("tw2814Caption").innerHTML = document.getElementById("tw2814Image").alt;
};

function tw3616Caption () {
  document.getElementById("tw3616Caption").innerHTML = document.getElementById("tw3616Image").alt;
};

function tw4220Caption () {
  document.getElementById("tw4220Caption").innerHTML = document.getElementById("tw4220Image").alt;
};

function tw4825Caption () {
  document.getElementById("tw4825Caption").innerHTML = document.getElementById("tw4825Image").alt;
};

function tw5428Caption () {
  document.getElementById("tw5428Caption").innerHTML = document.getElementById("tw5428Image").alt;
};

function tw6030Caption () {
  document.getElementById("tw6030Caption").innerHTML = document.getElementById("tw6030Image").alt;
};

function slmtorCaption () {
  document.getElementById("slmtorCaption").innerHTML = document.getElementById("slmtorImage").alt;
};

function slmtor115Caption () {
  document.getElementById("slmtor115Caption").innerHTML = document.getElementById("slmtor115Image").alt;
};

function slmtsoCaption () {
  document.getElementById("slmtsoCaption").innerHTML = document.getElementById("slmtsoImage").alt;
};

// Football captions p5 //
function slmor11Caption () {
  document.getElementById("slmor11Caption").innerHTML = document.getElementById("slmor11Image").alt;
};

function c181848Caption () {
  document.getElementById("c181848Caption").innerHTML = document.getElementById("c181848Image").alt;
};

function slmtcodp1Caption () {
  document.getElementById("slmtcodp1Caption").innerHTML = document.getElementById("slmtcodp1Image").alt;
};

function sku3002Caption () {
  document.getElementById("sku3002Caption").innerHTML = document.getElementById("sku3002Image").alt;
};

function c181836Caption () {
  document.getElementById("c181836Caption").innerHTML = document.getElementById("c181836Image").alt;
};

function slmtbkCaption () {
  document.getElementById("slmtbkCaption").innerHTML = document.getElementById("slmtbkImage").alt;
};

function fac100Caption () {
  document.getElementById("fac100Caption").innerHTML = document.getElementById("fac100Image").alt;
};

function cb8836Caption () {
  document.getElementById("cb8836Caption").innerHTML = document.getElementById("cb8836Image").alt;
};

function sku3010aCaption () {
  document.getElementById("sku3010aCaption").innerHTML = document.getElementById("sku3010aImage").alt;
};

function sku3010Caption () {
  document.getElementById("sku3010Caption").innerHTML = document.getElementById("sku3010Image").alt;
};

function sku5004Caption () {
  document.getElementById("sku5004Caption").innerHTML = document.getElementById("sku5004Image").alt;
};

function sku2011pkCaption () {
  document.getElementById("sku2011pkCaption").innerHTML = document.getElementById("sku2011pkImage").alt;
};

// Football captions p6 //
function provestCaption () {
  document.getElementById("provestCaption").innerHTML = document.getElementById("provestImage").alt;
};

function vest2bCaption () {
  document.getElementById("vest2bCaption").innerHTML = document.getElementById("vest2bImage").alt;
};

function cc100Caption () {
  document.getElementById("cc100Caption").innerHTML = document.getElementById("cc100Image").alt;
};

function cb106Caption () {
  document.getElementById("cb106Caption").innerHTML = document.getElementById("cb106Image").alt;
};

function sku3005Caption () {
  document.getElementById("sku3005Caption").innerHTML = document.getElementById("sku3005Image").alt;
};

function sku2003Caption () {
  document.getElementById("sku2003Caption").innerHTML = document.getElementById("sku2003Image").alt;
};

function sku3015pkCaption () {
  document.getElementById("sku3015pkCaption").innerHTML = document.getElementById("sku3015pkImage").alt;
};

function sku3013pkCaption () {
  document.getElementById("sku3013pkCaption").innerHTML = document.getElementById("sku3013pkImage").alt;
};

function sku3011pkCaption () {
  document.getElementById("sku3011pkCaption").innerHTML = document.getElementById("sku3011pkImage").alt;
};

function gl100Caption () {
  document.getElementById("gl100Caption").innerHTML = document.getElementById("gl100Image").alt;
};

function sku3003orCaption () {
  document.getElementById("sku3003orCaption").innerHTML = document.getElementById("sku3003orImage").alt;
};

function sku3000becoCaption () {
  document.getElementById("sku3000becoCaption").innerHTML = document.getElementById("sku3000becoImage").alt;
};

// Football captions p7 //
function sku3000beCaption () {
  document.getElementById("sku3000beCaption").innerHTML = document.getElementById("sku3000beImage").alt;
};

function vest3Caption () {
  document.getElementById("vest3Caption").innerHTML = document.getElementById("vest3Image").alt;
};

function py1Caption () {
  document.getElementById("py1Caption").innerHTML = document.getElementById("py1Image").alt;
};

function py1eCaption () {
  document.getElementById("py1eCaption").innerHTML = document.getElementById("py1eImage").alt;
};

function pybgCaption () {
  document.getElementById("pybgCaption").innerHTML = document.getElementById("pybgImage").alt;
};

function py1dp4Caption () {
  document.getElementById("py1dp4Caption").innerHTML = document.getElementById("py1dp4Image").alt;
};

function py2dpCaption () {
  document.getElementById("py2dpCaption").innerHTML = document.getElementById("py2dpImage").alt;
};

function ads3636Caption () {
  document.getElementById("ads3636Caption").innerHTML = document.getElementById("ads3636Image").alt;
};

function adcd3636Caption () {
  document.getElementById("adcd3636Caption").innerHTML = document.getElementById("adcd3636Image").alt;
};

function adcb3636Caption () {
  document.getElementById("adcb3636Caption").innerHTML = document.getElementById("adcb3636Image").alt;
};

function ab75Caption () {
  document.getElementById("ab75Caption").innerHTML = document.getElementById("ab75Image").alt;
};

function ab75pcCaption () {
  document.getElementById("ab75pcCaption").innerHTML = document.getElementById("ab75pcImage").alt;
};

function ab75bCaption () {
  document.getElementById("ab75bCaption").innerHTML = document.getElementById("ab75bImage").alt;
};

// Football captions p8 //
function ab75bpcCaption () {
  document.getElementById("ab75bpcCaption").innerHTML = document.getElementById("ab75bpcImage").alt;
};

function thsCaption () {
  document.getElementById("thsCaption").innerHTML = document.getElementById("thsImage").alt;
};

function slc01Caption () {
  document.getElementById("slc01Caption").innerHTML = document.getElementById("slc01Image").alt;
};

function slc02Caption () {
  document.getElementById("slc02Caption").innerHTML = document.getElementById("slc02Image").alt;
};

function slc11Caption () {
  document.getElementById("slc11Caption").innerHTML = document.getElementById("slc11Image").alt;
};

function slc12Caption () {
  document.getElementById("slc12Caption").innerHTML = document.getElementById("slc12Image").alt;
};

function slc21Caption () {
  document.getElementById("slc21Caption").innerHTML = document.getElementById("slc21Image").alt;
};

function slc22Caption () {
  document.getElementById("slc22Caption").innerHTML = document.getElementById("slc22Image").alt;
};

function sku3600bgCaption () {
  document.getElementById("sku3600bgCaption").innerHTML = document.getElementById("sku3600bgImage").alt;
};

function tb1515263Caption () {
  document.getElementById("tb1515263Caption").innerHTML = document.getElementById("tb1515263Image").alt;
};

function gbd151532Caption () {
  document.getElementById("gbd151532Caption").innerHTML = document.getElementById("gbd151532Image").alt;
};

function gb1515263Caption () {
  document.getElementById("gb1515263Caption").innerHTML = document.getElementById("gb1515263Image").alt;
};

// Football captions p9 //
function aa161426Caption () {
  document.getElementById("aa161426Caption").innerHTML = document.getElementById("aa161426Image").alt;
};

function c181848Caption () {
  document.getElementById("c181848Caption").innerHTML = document.getElementById("c181848Image").alt;
};

function wb151827Caption () {
  document.getElementById("wb151827Caption").innerHTML = document.getElementById("wb151827Image").alt;
};

function pbdc12Caption () {
  document.getElementById("pbdc12Caption").innerHTML = document.getElementById("pbdc12Image").alt;
};

function ap121426Caption () {
  document.getElementById("ap121426Caption").innerHTML = document.getElementById("ap121426Image").alt;
};

function punt2Caption () {
  document.getElementById("punt2Caption").innerHTML = document.getElementById("punt2Image").alt;
};

function sku3400bgCaption () {
  document.getElementById("sku3400bgCaption").innerHTML = document.getElementById("sku3400bgImage").alt;
};

function punt3Caption () {
  document.getElementById("punt3Caption").innerHTML = document.getElementById("punt3Image").alt;
};

function sku1050wCaption () {
  document.getElementById("sku1050wCaption").innerHTML = document.getElementById("sku1050wImage").alt;
};

function sku1050wdCaption () {
  document.getElementById("sku1050wdCaption").innerHTML = document.getElementById("sku1050wdImage").alt;
};

function sku1050btCaption () {
  document.getElementById("sku1050btCaption").innerHTML = document.getElementById("sku1050btImage").alt;
};

function sku1050jrwCaption () {
  document.getElementById("sku1050jrwCaption").innerHTML = document.getElementById("sku1050jrwImage").alt;
};

// Football captions p10 //
function banner19Caption () {
  document.getElementById("banner19Caption").innerHTML = document.getElementById("banner19Image").alt;
};

function sku3600stdCaption () {
  document.getElementById("sku3600stdCaption").innerHTML = document.getElementById("sku3600stdImage").alt;
};

function sku3600dlxCaption () {
  document.getElementById("sku3600dlxCaption").innerHTML = document.getElementById("sku3600dlxImage").alt;
};

function sku3400ecoCaption () {
  document.getElementById("sku3400ecoCaption").innerHTML = document.getElementById("sku3400ecoImage").alt;
};

function sku3600rnCaption () {
  document.getElementById("sku3600rnCaption").innerHTML = document.getElementById("sku3600rnImage").alt;
};

function sku3600poCaption () {
  document.getElementById("sku3600poCaption").innerHTML = document.getElementById("sku3600poImage").alt;
};

function sku3600hmCaption () {
  document.getElementById("sku3600hmCaption").innerHTML = document.getElementById("sku3600hmImage").alt;
};

function sku3600daCaption () {
  document.getElementById("sku3600daCaption").innerHTML = document.getElementById("sku3600daImage").alt;
};

function sku3400rnCaption () {
  document.getElementById("sku3400rnCaption").innerHTML = document.getElementById("sku3400rnImage").alt;
};

function sku9665Caption () {
  document.getElementById("sku9665Caption").innerHTML = document.getElementById("sku9665Image").alt;
};

function sku9631hdCaption () {
  document.getElementById("sku9631hdCaption").innerHTML = document.getElementById("sku9631hdImage").alt;
};

function sku9680Caption () {
  document.getElementById("sku9680Caption").innerHTML = document.getElementById("sku9680Image").alt;
};

// Football captions p11 //
function sku96510Caption () {
  document.getElementById("sku96510Caption").innerHTML = document.getElementById("sku96510Image").alt;
};

function ocwkCaption () {
  document.getElementById("ocwkCaption").innerHTML = document.getElementById("ocwkImage").alt;
};

function oc1010Caption () {
  document.getElementById("oc1010Caption").innerHTML = document.getElementById("oc1010Image").alt;
};

function fxcwkCaption () {
  document.getElementById("fxcwkCaption").innerHTML = document.getElementById("fxcwkImage").alt;
};

function fxc186Caption () {
  document.getElementById("fxc186Caption").innerHTML = document.getElementById("fxc186Image").alt;
};

function sku9672Caption () {
  document.getElementById("sku9672Caption").innerHTML = document.getElementById("sku9672Image").alt;
};

function sku9671Caption () {
  document.getElementById("sku9671Caption").innerHTML = document.getElementById("sku9671Image").alt;
};

function sku9670Caption () {
  document.getElementById("sku9670Caption").innerHTML = document.getElementById("sku9670Image").alt;
};

function sku9675Caption () {
  document.getElementById("sku9675Caption").innerHTML = document.getElementById("sku9675Image").alt;
};

function sku9674Caption () {
  document.getElementById("sku9674Caption").innerHTML = document.getElementById("sku9674Image").alt;
};

function sku9673Caption () {
  document.getElementById("sku9673Caption").innerHTML = document.getElementById("sku9673Image").alt;
};

function sku9669Caption () {
  document.getElementById("sku9669Caption").innerHTML = document.getElementById("sku9669Image").alt;
};

// Football captions p12 //
function sku9601Caption () {
  document.getElementById("sku9601Caption").innerHTML = document.getElementById("sku9601Image").alt;
};

function hd3500Caption () {
  document.getElementById("hd3500Caption").innerHTML = document.getElementById("hd3500Image").alt;
};

function hd100Caption () {
  document.getElementById("hd100Caption").innerHTML = document.getElementById("hd100Image").alt;
};

function hd800Caption () {
  document.getElementById("hd800Caption").innerHTML = document.getElementById("hd800Image").alt;
};

function hd700Caption () {
  document.getElementById("hd700Caption").innerHTML = document.getElementById("hd700Image").alt;
};

function hd600Caption () {
  document.getElementById("hd600Caption").innerHTML = document.getElementById("hd600Image").alt;
};

function hd5053Caption () {
  document.getElementById("hd5053Caption").innerHTML = document.getElementById("hd5053Image").alt;
};

function hd505Caption () {
  document.getElementById("hd505Caption").innerHTML = document.getElementById("hd505Image").alt;
};

function hd500Caption () {
  document.getElementById("hd500Caption").innerHTML = document.getElementById("hd500Image").alt;
};

function hd400jrCaption () {
  document.getElementById("hd400jrCaption").innerHTML = document.getElementById("hd400jrImage").alt;
};

function hd400Caption () {
  document.getElementById("hd400Caption").innerHTML = document.getElementById("hd400Image").alt;
};

function hd320Caption () {
  document.getElementById("hd320Caption").innerHTML = document.getElementById("hd320Image").alt;
};

function hd306Caption () {
  document.getElementById("hd306Caption").innerHTML = document.getElementById("hd306Image").alt;
};

// Football captions p13 //
function hd300Caption () {
  document.getElementById("hd300Caption").innerHTML = document.getElementById("hd300Image").alt;
};

function hd1500Caption () {
  document.getElementById("hd1500Caption").innerHTML = document.getElementById("hd1500Image").alt;
};

function hd150Caption () {
  document.getElementById("hd150Caption").innerHTML = document.getElementById("hd150Image").alt;
};

function hd130Caption () {
  document.getElementById("hd130Caption").innerHTML = document.getElementById("hd130Image").alt;
};

function hd104Caption () {
  document.getElementById("hd104Caption").innerHTML = document.getElementById("hd104Image").alt;
};

function hd200Caption () {
  document.getElementById("hd200Caption").innerHTML = document.getElementById("hd200Image").alt;
};

function sku10003Caption () {
  document.getElementById("sku10003Caption").innerHTML = document.getElementById("sku10003Image").alt;
};

function hr426Caption () {
  document.getElementById("hr426Caption").innerHTML = document.getElementById("hr426Image").alt;
};

function pur101rCaption () {
  document.getElementById("pur101rCaption").innerHTML = document.getElementById("pur101rImage").alt;
};

function pur102sCaption () {
  document.getElementById("pur102sCaption").innerHTML = document.getElementById("pur102sImage").alt;
};

function sd14Caption () {
  document.getElementById("sd14Caption").innerHTML = document.getElementById("sd14Image").alt;
};

function so4818dsCaption () {
  document.getElementById("so4818dsCaption").innerHTML = document.getElementById("so4818dsImage").alt;
};

function so4838Caption () {
  document.getElementById("so4838Caption").innerHTML = document.getElementById("so4838Image").alt;
};

function so4810Caption () {
  document.getElementById("so4810Caption").innerHTML = document.getElementById("so4810Image").alt;
};

// Football captions p14 //
function so488Caption () {
  document.getElementById("so488Caption").innerHTML = document.getElementById("so488Image").alt;
};

function so426Caption () {
  document.getElementById("so426Caption").innerHTML = document.getElementById("so426Image").alt;
};

function hr4212Caption () {
  document.getElementById("hr4212Caption").innerHTML = document.getElementById("hr4212Image").alt;
};

function hr488Caption () {
  document.getElementById("hr488Caption").innerHTML = document.getElementById("hr488Image").alt;
};

function hr428Caption () {
  document.getElementById("hr428Caption").innerHTML = document.getElementById("hr428Image").alt;
};

function sd15Caption () {
  document.getElementById("sd15Caption").innerHTML = document.getElementById("sd15Image").alt;
};

function sud4214Caption () {
  document.getElementById("sud4214Caption").innerHTML = document.getElementById("sud4214Image").alt;
};

function sud3813Caption () {
  document.getElementById("sud3813Caption").innerHTML = document.getElementById("sud3813Image").alt;
};

function hw70Caption () {
  document.getElementById("hw70Caption").innerHTML = document.getElementById("hw70Image").alt;
};

function hw65Caption () {
  document.getElementById("hw65Caption").innerHTML = document.getElementById("hw65Image").alt;
};

function hw60Caption () {
  document.getElementById("hw60Caption").innerHTML = document.getElementById("hw60Image").alt;
};

function hw45Caption () {
  document.getElementById("hw45Caption").innerHTML = document.getElementById("hw45Image").alt;
};

// Football captions p15 //
function hw40Caption () {
  document.getElementById("hw40Caption").innerHTML = document.getElementById("hw40Image").alt;
};

function hw35Caption () {
  document.getElementById("hw35Caption").innerHTML = document.getElementById("hw35Image").alt;
};

function sudx55Caption () {
  document.getElementById("sudx55Caption").innerHTML = document.getElementById("sudx55Image").alt;
};

function sud7516Caption () {
  document.getElementById("sud7516Caption").innerHTML = document.getElementById("sud7516Image").alt;
};

function sud5416Caption () {
  document.getElementById("sud5416Caption").innerHTML = document.getElementById("sud5416Image").alt;
};

function sud4816Caption () {
  document.getElementById("sud4816Caption").innerHTML = document.getElementById("sud4816Image").alt;
};

function sud4216Caption () {
  document.getElementById("sud4216Caption").innerHTML = document.getElementById("sud4216Image").alt;
};

function sud5414Caption () {
  document.getElementById("sud5414Caption").innerHTML = document.getElementById("sud5414Image").alt;
};

function sud4814Caption () {
  document.getElementById("sud4814Caption").innerHTML = document.getElementById("sud4814Image").alt;
};

function sku10145Caption () {
  document.getElementById("sku10145Caption").innerHTML = document.getElementById("sku10145Image").alt;
};

function sku10155Caption () {
  document.getElementById("sku10155Caption").innerHTML = document.getElementById("sku10155Image").alt;
};

function sku10172Caption () {
  document.getElementById("sku10172Caption").innerHTML = document.getElementById("sku10172Image").alt;
};

// Football captions p16 //
function sku10172wblCaption () {
  document.getElementById("sku10172wblCaption").innerHTML = document.getElementById("sku10172wblImage").alt;
};

function ar10000Caption () {
  document.getElementById("ar10000Caption").innerHTML = document.getElementById("ar10000Image").alt;
};

function ar10001Caption () {
  document.getElementById("ar10001Caption").innerHTML = document.getElementById("ar10001Image").alt;
};

function ar10002Caption () {
  document.getElementById("ar10002Caption").innerHTML = document.getElementById("ar10002Image").alt;
};

function ar10003Caption () {
  document.getElementById("ar10003Caption").innerHTML = document.getElementById("ar10003Image").alt;
};

function bla12hdCaption () {
  document.getElementById("bla12hdCaption").innerHTML = document.getElementById("bla12hdImage").alt;
};

function blasterCaption () {
  document.getElementById("blasterCaption").innerHTML = document.getElementById("blasterImage").alt;
};

function blaster12Caption () {
  document.getElementById("blaster12Caption").innerHTML = document.getElementById("blaster12Image").alt;
};

function bla12hd9002mCaption () {
  document.getElementById("bla12hd9002mCaption").innerHTML = document.getElementById("bla12hd9002mImage").alt;
};

function pf1011654Caption () {
  document.getElementById("pf1011654Caption").innerHTML = document.getElementById("pf1011654Image").alt;
};

function pf2031654Caption () {
  document.getElementById("pf2031654Caption").innerHTML = document.getElementById("pf2031654Image").alt;
};

function fhd1654Caption () {
  document.getElementById("fhd1654Caption").innerHTML = document.getElementById("fhd1654Image").alt;
};

// Football captions p17 //
function sm100Caption () {
  document.getElementById("sm100Caption").innerHTML = document.getElementById("sm100Image").alt;
};

function sb4822Caption () {
  document.getElementById("sb4822Caption").innerHTML = document.getElementById("sb4822Image").alt;
};

function sb5522Caption () {
  document.getElementById("sb5522Caption").innerHTML = document.getElementById("sb5522Image").alt;
};

function tn1812Caption () {
  document.getElementById("tn1812Caption").innerHTML = document.getElementById("tn1812Image").alt;
};

function fn4s1765Caption () {
  document.getElementById("fn4s1765Caption").innerHTML = document.getElementById("fn4s1765Image").alt;
};

function fn4s17100Caption () {
  document.getElementById("fn4s17100Caption").innerHTML = document.getElementById("fn4s17100Image").alt;
};

function ply36306Caption () {
  document.getElementById("ply36306Caption").innerHTML = document.getElementById("ply36306Image").alt;
};

function ply363012Caption () {
  document.getElementById("ply363012Caption").innerHTML = document.getElementById("ply363012Image").alt;
};

function ply363024Caption () {
  document.getElementById("ply363024Caption").innerHTML = document.getElementById("ply363024Image").alt;
};

function ply363018Caption () {
  document.getElementById("ply363018Caption").innerHTML = document.getElementById("ply363018Image").alt;
};

function ply3630Caption () {
  document.getElementById("ply3630Caption").innerHTML = document.getElementById("ply3630Image").alt;
};

function agboc24Caption () {
  document.getElementById("agboc24Caption").innerHTML = document.getElementById("agboc24Image").alt;
};

// Football captions p18 //
function agbox18Caption () {
  document.getElementById("agbox18Caption").innerHTML = document.getElementById("agbox18Image").alt;
};

function sd1454Caption () {
  document.getElementById("sd1454Caption").innerHTML = document.getElementById("sd1454Image").alt;
};

function amadj20Caption () {
  document.getElementById("amadj20Caption").innerHTML = document.getElementById("amadj20Image").alt;
};

function aglstl1913Caption () {
  document.getElementById("aglstl1913Caption").innerHTML = document.getElementById("aglstl1913Image").alt;
};

function am20Caption () {
  document.getElementById("am20Caption").innerHTML = document.getElementById("am20Image").alt;
};

function amrr20Caption () {
  document.getElementById("amrr20Caption").innerHTML = document.getElementById("amrr20Image").alt;
};

function agl4815Caption () {
  document.getElementById("agl4815Caption").innerHTML = document.getElementById("agl4815Image").alt;
};

function agl2420Caption () {
  document.getElementById("agl2420Caption").innerHTML = document.getElementById("agl2420Image").alt;
};

function agl1612Caption () {
  document.getElementById("agl1612Caption").innerHTML = document.getElementById("agl1612Image").alt;
};

function amadjrr20Caption () {
  document.getElementById("amadjrr20Caption").innerHTML = document.getElementById("amadjrr20Image").alt;
};

function tscb475Caption () {
  document.getElementById("tscb475Caption").innerHTML = document.getElementById("tscb475Image").alt;
};

function tscb4120Caption () {
  document.getElementById("tscb4120Caption").innerHTML = document.getElementById("tscb4120Image").alt;
};

// Football captions p19 //
function tscb4150Caption () {
  document.getElementById("tscb4150Caption").innerHTML = document.getElementById("tscb4150Image").alt;
};

function tscb4soCaption () {
  document.getElementById("tscb4soCaption").innerHTML = document.getElementById("tscb4soImage").alt;
};

function sttCaption () {
  document.getElementById("sttCaption").innerHTML = document.getElementById("sttImage").alt;
};

function tssoCaption () {
  document.getElementById("tssoCaption").innerHTML = document.getElementById("tssoImage").alt;
};

function ts1575Caption () {
  document.getElementById("ts1575Caption").innerHTML = document.getElementById("ts1575Image").alt;
};

function sttcCaption () {
  document.getElementById("sttcCaption").innerHTML = document.getElementById("sttcImage").alt;
};

function sttsoCaption () {
  document.getElementById("sttsoCaption").innerHTML = document.getElementById("sttsoImage").alt;
};

// Gym captions p1 //
function st10bCaption () {
  document.getElementById("st10bCaption").innerHTML = document.getElementById("st10bImage").alt;
};

function st10fCaption () {
  document.getElementById("st10fCaption").innerHTML = document.getElementById("st10fImage").alt;
};

function ep7215Caption () {
  document.getElementById("ep7215Caption").innerHTML = document.getElementById("ep7215Image").alt;
};

function gdc193Caption () {
  document.getElementById("gdc193Caption").innerHTML = document.getElementById("gdc193Image").alt;
};

function becsoCaption () {
  document.getElementById("becsoCaption").innerHTML = document.getElementById("becsoImage").alt;
};

function kbbr15Caption () {
  document.getElementById("kbbr15Caption").innerHTML = document.getElementById("kbbr15Image").alt;
};

function kbm100Caption () {
  document.getElementById("kbm100Caption").innerHTML = document.getElementById("kbm100Image").alt;
};

function kbsn1518Caption () {
  document.getElementById("kbsn1518Caption").innerHTML = document.getElementById("kbsn1518Image").alt;
};

function gfccfCaption () {
  document.getElementById("gfccfCaption").innerHTML = document.getElementById("gfccfImage").alt;
};

function gfc14Caption () {
  document.getElementById("gfc14Caption").innerHTML = document.getElementById("gfc14Image").alt;
};

//Facility Branding captions
function dpwallrCaption () {
  document.getElementById("dpwallrCaption").innerHTML = document.getElementById("dpwallrImage").alt;
};

function dpwallsCaption () {
  document.getElementById("dpwallsCaption").innerHTML = document.getElementById("dpwallsImage").alt;
};

function dpwinmeshCaption () {
  document.getElementById("dpwinmeshCaption").innerHTML = document.getElementById("dpwinmeshImage").alt;
};

function dpaw100Caption () {
  document.getElementById("dpaw100Caption").innerHTML = document.getElementById("dpaw100Image").alt;
};

function dpsmsoCaption () {
  document.getElementById("dpsmsoCaption").innerHTML = document.getElementById("dpsmsoImage").alt;
};

function st25bCaption () {
  document.getElementById("st25bCaption").innerHTML = document.getElementById("st25bImage").alt;
};

function st25fCaption () {
  document.getElementById("st25fCaption").innerHTML = document.getElementById("st25fImage").alt;
};

function tempsignCaption () {
  document.getElementById("tempsignCaption").innerHTML = document.getElementById("tempsignImage").alt;
};

function tempnameCaption () {
  document.getElementById("tempnameCaption").innerHTML = document.getElementById("tempnameImage").alt;
};

function np28Caption () {
  document.getElementById("np28Caption").innerHTML = document.getElementById("np28Image").alt;
};

function mb610Caption () {
  document.getElementById("mb610Caption").innerHTML = document.getElementById("mb610Image").alt;
};

function banrtv46Caption () {
  document.getElementById("banrtv46Caption").innerHTML = document.getElementById("banrtv46Image").alt;
};