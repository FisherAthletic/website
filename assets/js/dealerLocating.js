// find nearest rep
// object containing dealer information
var dealerInfo = [
    dlr0 = {
      name: "NC Dealer",
      zipcode: 28147
    },
    dlr1 = {
      name: "SC Dealer",
      zipcode: 29201
    }
  ]

// get input bar
var locationInput = document.getElementById("dealer-search");



// calculate distance
function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
};

// M is statute miles; K is kilometers; N is nautical miles
console.log(distance(35.727609, -80.482010, 35.662553, -80.460966, "K"));
console.log("Distance calculated: " + distance(35.727609, -80.482010, 35.662553, -80.460966, "K") + "km!");