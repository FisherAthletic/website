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

// Caption inserts //
var msdpCaption = document.getElementById("msdpCaption");
var msdpImage = document.getElementById("msdpImage");
msdpImage.onclick = function(){
  msdpCaption.innerHTML = this.alt;
}

var tmwsxxCaption = document.getElementById("tmwsxxCaption");
var tmwsxxImage = document.getElementById("tmwsxxImage");
tmwsxxImage.onclick = function(){
  tmwsxxCaption.innerHTML = this.alt;
}

var dmwsCaption = document.getElementById("dmwsCaption");
var dmwsImage = document.getElementById("dmwsImage");
dmwsImage.onclick = function(){
  dmwsCaption.innerHTML = this.alt;
}

var dbpsoCaption = document.getElementById("dbpsoCaption");
var dbpsoImage = document.getElementById("dbpsoImage");
dbpsoImage.onclick = function(){
  dbpsoCaption.innerHTML = this.alt;
}

var pcaps223Caption = document.getElementById("pcaps223Caption");
var pcaps223Image = document.getElementById("pcaps223Image");
pcaps223Image.onclick = function(){
  pcaps223Caption.innerHTML = this.alt;
}

var rpg184Caption = document.getElementById("rpg184Caption");
var rpg184Image = document.getElementById("rpg184Image");
rpg184Image.onclick = function(){
  rpg184Caption.innerHTML = this.alt;
}

var rpsg184Caption = document.getElementById("rpsg184Caption");
var rpsg184Image = document.getElementById("rpsg184Image");
rpsg184Image.onclick = function(){
  rpsg184Caption.innerHTML = this.alt;
}

var bspCaption = document.getElementById("bspCaption");
var bspImage = document.getElementById("bspImage");
bspImage.onclick = function(){
  bspCaption.innerHTML = this.alt;
}

var bsp46Caption = document.getElementById("bsp46Caption");
var bsp46Image = document.getElementById("bsp46Image");
bsp46Image.onclick = function(){
  bsp46Caption.innerHTML = this.alt;
}

var bbc100Caption = document.getElementById("bbc100Caption");
var bbc100Image = document.getElementById("bbc100Image");
bbc100Image.onclick = function(){
  bbc100Caption.innerHTML = this.alt;
}

var bfc250Caption = document.getElementById("bfc250Caption");
var bfc250Image = document.getElementById("bfc250Image");
bfc250Image.onclick = function(){
  bfc250Caption.innerHTML = this.alt;
}

var trpg10Caption = document.getElementById("trpg10Caption");
var trpg10Image = document.getElementById("trpg10Image");
trpg10Image.onclick = function(){
  trpg10Caption.innerHTML = this.alt;
}