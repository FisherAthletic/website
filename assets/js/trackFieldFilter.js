//---------------------------------------------------------------------------------------------------------------------
// Track and Field filter
var trkDropdownValue = document.getElementById("track-field-products-filter-selection").value;
var trkPagination = document.getElementsByClassName("track-field-pagination");
var trkSelectedPageValue = 1;
var trkProducts = document.getElementsByClassName("track-field-products-list");
var trkFilteredProducts = document.getElementsByClassName(trkDropdownValue);
var trkFilteredProductsAmount = trkFilteredProducts.length;
var trkNumberOfPagesNeeded = Math.ceil(trkFilteredProductsAmount / 12);
var trkFilteredProducts = document.getElementsByClassName(trkDropdownValue);

// function to block scrolling
function noScroll() {
  window.scrollTo(0, 0);
};
// add listener to disable scroll
window.addEventListener("scroll", noScroll);

// main function that handles the filtering
function trackFieldFiltering() {
  trkDropdownValue = document.getElementById("track-field-products-filter-selection").value;
  trkUpdateDropdownValue();
  trkUpdateNumberOfPagesNeeded();
  trkUpdateSelectedPageValue();
  trkDisplayPagesNeeded();
  trkDisplayProducts();
  trkDisplayAmount();

  function loadOnOff() {
    var updateDoneLoadingInt = setInterval(updateDoneLoading, 50);
    function updateDoneLoading() {
      if (trkProducts[12].style.display == "none") {
        window.removeEventListener("scroll", noScroll);
        document.getElementById("loading-page").style.display = "none";
        stopLoadOnOffInt();
      } else {
        console.log("loading...")
      }
    };
    function stopLoadOnOffInt() {
      clearInterval(updateDoneLoadingInt);
    };
  }
  loadOnOff();
};

// function checks how many pages are needed by checking the amount of products in the current filter selection and the product total by 12
function trkUpdateNumberOfPagesNeeded() {
  trkFilteredProducts = document.getElementsByClassName(trkDropdownValue);
  trkFilteredProductsAmount = trkFilteredProducts.length;
  trkNumberOfPagesNeeded = Math.ceil(trkFilteredProductsAmount / 12);
  console.log("Number of pages needed: " + trkNumberOfPagesNeeded);
};

// function updates the dropdown value state
function trkUpdateDropdownValue() {
  trkDropdownValue = document.getElementById("track-field-products-filter-selection").value;
  console.log("Dropdown selection: " + trkDropdownValue);
};

// function updates the selected page value state
function trkUpdateSelectedPageValue() {
  try {
    trkSelectedPageValue = event.target.attributes.value.value;
    console.log("Page selected: " + trkSelectedPageValue);
  } catch(err) {
    document.addEventListener("DOMContentLoaded", trkResetPageSelection);
    console.log("Page selected: " + trkSelectedPageValue);
  }
};

// function loops through pagination and displays any pages <= the number of pages needed
function trkDisplayPagesNeeded() {
  for(i = 0; i < (trkPagination.length); i++) {
    var loopCurrentPageValue = trkPagination[i].attributes.value.value;
    if(loopCurrentPageValue <= trkNumberOfPagesNeeded) {
      trkPagination[i].style.display = "flex";
    } else {
      trkPagination[i].style.display = "none";
    }
  }
};

// function that changes page1 to active and only runs whenever the filter selection changes
function trkResetPageSelection() { 
  console.log("Filter selection was changed. Reset function is now running...")
    for(i = 0; i < trkPagination.length; i++) {
    if(trkPagination[i].classList.contains("page1")) {
      trkPagination[i].classList.add("active");
      document.getElementById("page1").checked = true;
    } else {
      trkPagination[i].classList.remove("active");
    }
  }
  trkSelectedPageValue = 1;
};

// function decides if a product should be shown or hidden based on whether or not it matches the dropdown filter
function trkDisplayProducts() {
  for(i = 0; i < trkProducts.length; i++) {
    if(trkProducts[i].attributes.value.value == trkDropdownValue) {
      trkProducts[i].style.display = "flex";
    } else if(trkProducts[i].classList.contains("All") && trkDropdownValue == "All") {
      trkProducts[i].style.display = "flex";
    } else {
      trkProducts[i].style.display = "none";
    }
  }
};

// function updates the filtered products state
function trkUpdateFilteredProducts() {
  trkFilteredProducts = document.getElementsByClassName(trkDropdownValue);
};

// function decides which products to show based on page selection
function trkDisplayAmount() {
  for(i = 0; i < trkFilteredProducts.length; i++) {
    trkFilteredProducts[i].style.display = "none";
  }
  if(trkSelectedPageValue == 1) {
    trkShowPageOne();
  } else if(trkSelectedPageValue == 2) {
    trkShowPageTwo();
  } else if(trkSelectedPageValue == 3) {
    trkShowPageThree();
  } else if(trkSelectedPageValue == 4) {
    trkShowPageFour();
  } else if(trkSelectedPageValue == 5) {
    trkShowPageFive();
  } else {
    console.log("Unknown page selection.");
  }
};

// function used for trkDisplayAmount function, will only show products 1-12
function trkShowPageOne() {
  var pageOneProducts = [0,1,2,3,4,5,6,7,8,9,10,11];
  try {
    for(i = 0; i < pageOneProducts.length; i++) {
      trkFilteredProducts[pageOneProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page1 has less than 12 products.");
  } finally {
    trkCheckPageOne();
  }
}

// function used for trkDisplayAmount function, will only show products 13-24
function trkShowPageTwo() {
  var pageTwoProducts = [12,13,14,15,16,17,18,19,20,21,22,23];
  try {
    for(i = 0; i < pageTwoProducts.length; i++) {
      trkFilteredProducts[pageTwoProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page2 has less than 12 products.");
  }
};

// function used for trkDisplayAmount function, will only show products 25-36
function trkShowPageThree() {
  var pageThreeProducts = [24,25,26,27,28,29,30,31,32,33,34,35];
  try {
    for(i = 0; i < pageThreeProducts.length; i++) {
      trkFilteredProducts[pageThreeProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page3 has less than 12 products.")
  }
};

// function used for trkDisplayAmount function, will only show products 37-48
function trkShowPageFour() {
  var pageFourProducts = [36,37,38,39,40,41,42,43,44,45,46,47];
  try {
    for(i = 0; i < pageFourProducts.length; i++) {
      trkFilteredProducts[pageFourProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page4 has less than 12 products.");
  }
};

// function used for trkDisplayAmount function, will only show products 37-48
function trkShowPageFive() {
    var pageFiveProducts = [48,49,50,51,52,53,54,55,56,57,58,59];
    try {
      for(i = 0; i < pageFiveProducts.length; i++) {
        trkFilteredProducts[pageFiveProducts[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page5 has less than 12 products.");
    }
  };

// function used for trkShowPageOne function, hides page 1 if it is the only page needed
function trkCheckPageOne() {
  if(trkPagination[1].style.display == "none") {
    trkPagination[0].style.display = "none";
  } else {
    trkPagination[0].style.display = "flex";
  }
};

document.getElementById("track-field-pagination").addEventListener("click", trackFieldFiltering);
document.getElementById("track-field-products-filter-selection").addEventListener("onchange", trackFieldFiltering);