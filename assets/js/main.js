function tackleWheelOption28 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw2814.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW2814";
    document.getElementById("tackleWheelSpecs").innerHTML = '28" Outside Diam. x 14" Inside Diam. 8" thick | 21 lbs | Rebond Foam';
    document.getElementById("tackleWheelPrice").innerHTML = "$152.00";
}

function tackleWheelOption36 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw3616.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW3616";
    document.getElementById("tackleWheelSpecs").innerHTML = '36" Outside Diam. x 16" Inside Diam. 8" thick | 32 lbs | Rebond Foam';
    document.getElementById("tackleWheelPrice").innerHTML = "$249.00";
}

function tackleWheelOption42 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw4220.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW4220";
    document.getElementById("tackleWheelSpecs").innerHTML = '42" Outside Diam. x 20" Inside Diam. 9" thick | 15 lbs | PolyFoam';
    document.getElementById("tackleWheelPrice").innerHTML = "$325.00";
}

function tackleWheelOption48 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw4825.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW4825";
    document.getElementById("tackleWheelSpecs").innerHTML = '48" Outside Diam. x 25" Inside Diam. 11" thick | 21 lbs | PolyFoam';
    document.getElementById("tackleWheelPrice").innerHTML = "$357.00";
}

function tackleWheelOption54 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw5428.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW5428";
    document.getElementById("tackleWheelSpecs").innerHTML = '54" Outside Diam. x 28" Inside Diam. 12" thick | 24 lbs | PolyFoam';
    document.getElementById("tackleWheelPrice").innerHTML = "$407.00";
}

function tackleWheelOption60 () {
    document.getElementById("productDetailsImage").src = "../assets/images/football/tw6030.jpg";
    document.getElementById("tackleWheelTitle").innerHTML = "Tackle Wheel TW6030";
    document.getElementById("tackleWheelSpecs").innerHTML = '60" Outside Diam. x 30" Inside Diam. 12" thick | 27 lbs | PolyFoam';
    document.getElementById("tackleWheelPrice").innerHTML = "$425.00";
}

// Click functions that link to pages //
function footballGridClick () {
    document.getElementById("footballGrid").addEventListener('click', function() {
        location.href = "./pages/football.html"
    }, false);
}

function baseballGridClick () {
    document.getElementById("baseballGrid").addEventListener('click', function() {
        location.href = "./pages/baseball.html"
    }, false);
}

function trackGridClick () {
    document.getElementById("trackGrid").addEventListener('click', function() {
        location.href = "./pages/track.html"
    }, false);
}

function chairsGridClick () {
    document.getElementById("chairsGrid").addEventListener('click', function() {
        location.href = "./pages/chairs.html"
    }, false);
}

function paddingGridClick () {
    document.getElementById("paddingGrid").addEventListener('click', function() {
        location.href = "./pages/padding.html"
    }, false);
}

function windscreenGridClick () {
    document.getElementById("windscreenGrid").addEventListener('click', function() {
        location.href = "./pages/windscreen.html"
    }, false);
}