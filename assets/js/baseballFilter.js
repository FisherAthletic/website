//---------------------------------------------------------------------------------------------------------------------
// Track and Field filter
var baseballDropdownValue = document.getElementById("baseball-products-filter-selection").value;
var baseballPagination = document.getElementsByClassName("baseball-pagination");
var baseballSelectedPageValue = 1;
var baseballProducts = document.getElementsByClassName("baseball-products-list");
var baseballFilteredProducts = document.getElementsByClassName(baseballDropdownValue);
var baseballFilteredProductsAmount = baseballFilteredProducts.length;
var baseballNumberOfPagesNeeded = Math.ceil(baseballFilteredProductsAmount / 12);
var baseballFilteredProducts = document.getElementsByClassName(baseballDropdownValue);

// function to block scrolling
function noScroll() {
  window.scrollTo(0, 0);
};
// add listener to disable scroll
window.addEventListener("scroll", noScroll);

// main function that handles the filtering
function baseballFiltering() {
  baseballDropdownValue = document.getElementById("baseball-products-filter-selection").value;
  baseballUpdateDropdownValue();
  baseballUpdateNumberOfPagesNeeded();
  baseballUpdateSelectedPageValue();
  baseballDisplayPagesNeeded();
  baseballDisplayProducts();
  baseballDisplayAmount();

  function loadOnOff() {
    var updateDoneLoadingInt = setInterval(updateDoneLoading, 50);
    function updateDoneLoading() {
      if (baseballProducts[12].style.display == "none") {
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
function baseballUpdateNumberOfPagesNeeded() {
  baseballFilteredProducts = document.getElementsByClassName(baseballDropdownValue);
  baseballFilteredProductsAmount = baseballFilteredProducts.length;
  baseballNumberOfPagesNeeded = Math.ceil(baseballFilteredProductsAmount / 12);
  console.log("Number of pages needed: " + baseballNumberOfPagesNeeded);
};

// function updates the dropdown value state
function baseballUpdateDropdownValue() {
  baseballDropdownValue = document.getElementById("baseball-products-filter-selection").value;
  console.log("Dropdown selection: " + baseballDropdownValue);
};

// function updates the selected page value state
function baseballUpdateSelectedPageValue() {
  try {
    baseballSelectedPageValue = event.target.attributes.value.value;
    console.log("Page selected: " + baseballSelectedPageValue);
  } catch(err) {
    document.addEventListener("DOMContentLoaded", baseballResetPageSelection);
    console.log("Page selected: " + baseballSelectedPageValue);
  }
};

// function loops through pagination and displays any pages <= the number of pages needed
function baseballDisplayPagesNeeded() {
  for(i = 0; i < (baseballPagination.length); i++) {
    var loopCurrentPageValue = baseballPagination[i].attributes.value.value;
    if(loopCurrentPageValue <= baseballNumberOfPagesNeeded) {
      baseballPagination[i].style.display = "flex";
    } else {
      baseballPagination[i].style.display = "none";
    }
  }
};

// function that changes page1 to active and only runs whenever the filter selection changes
function baseballResetPageSelection() { 
  console.log("Filter selection was changed. Reset function is now running...")
    for(i = 0; i < baseballPagination.length; i++) {
    if(baseballPagination[i].classList.contains("page1")) {
      baseballPagination[i].classList.add("active");
      document.getElementById("page1").checked = true;
    } else {
      baseballPagination[i].classList.remove("active");
    }
  }
  baseballSelectedPageValue = 1;
};

// function decides if a product should be shown or hidden based on whether or not it matches the dropdown filter
function baseballDisplayProducts() {
  for(i = 0; i < baseballProducts.length; i++) {
    if(baseballProducts[i].attributes.value.value == baseballDropdownValue) {
      baseballProducts[i].style.display = "flex";
    } else if(baseballProducts[i].classList.contains("All") && baseballDropdownValue == "All") {
      baseballProducts[i].style.display = "flex";
    } else {
      baseballProducts[i].style.display = "none";
    }
  }
};

// function updates the filtered products state
function baseballUpdateFilteredProducts() {
  baseballFilteredProducts = document.getElementsByClassName(baseballDropdownValue);
};

// function decides which products to show based on page selection
function baseballDisplayAmount() {
  for(i = 0; i < baseballFilteredProducts.length; i++) {
    baseballFilteredProducts[i].style.display = "none";
  }
  if(baseballSelectedPageValue == 1) {
    baseballShowPageOne();
  } else if(baseballSelectedPageValue == 2) {
    baseballShowPageTwo();
  } else if(baseballSelectedPageValue == 3) {
    baseballShowPageThree();
  } else if(baseballSelectedPageValue == 4) {
    baseballShowPageFour();
  } else if(baseballSelectedPageValue == 5) {
    baseballShowPageFive();
  } else {
    console.log("Unknown page selection.");
  }
};

// function used for baseballDisplayAmount function, will only show products 1-12
function baseballShowPageOne() {
  var pageOneProducts = [0,1,2,3,4,5,6,7,8,9,10,11];
  try {
    for(i = 0; i < pageOneProducts.length; i++) {
      baseballFilteredProducts[pageOneProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page1 has less than 12 products.");
  } finally {
    baseballCheckPageOne();
  }
}

// function used for baseballDisplayAmount function, will only show products 13-24
function baseballShowPageTwo() {
  var pageTwoProducts = [12,13,14,15,16,17,18,19,20,21,22,23];
  try {
    for(i = 0; i < pageTwoProducts.length; i++) {
      baseballFilteredProducts[pageTwoProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page2 has less than 12 products.");
  }
};

// function used for baseballDisplayAmount function, will only show products 25-36
function baseballShowPageThree() {
  var pageThreeProducts = [24,25,26,27,28,29,30,31,32,33,34,35];
  try {
    for(i = 0; i < pageThreeProducts.length; i++) {
      baseballFilteredProducts[pageThreeProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page3 has less than 12 products.")
  }
};

// function used for baseballDisplayAmount function, will only show products 37-48
function baseballShowPageFour() {
  var pageFourProducts = [36,37,38,39,40,41,42,43,44,45,46,47];
  try {
    for(i = 0; i < pageFourProducts.length; i++) {
      baseballFilteredProducts[pageFourProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page4 has less than 12 products.");
  }
};

// function used for baseballDisplayAmount function, will only show products 37-48
function baseballShowPageFive() {
    var pageFiveProducts = [48,49,50,51,52,53,54,55,56,57,58,59];
    try {
      for(i = 0; i < pageFiveProducts.length; i++) {
        baseballFilteredProducts[pageFiveProducts[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page5 has less than 12 products.");
    }
  };

// function used for baseballShowPageOne function, hides page 1 if it is the only page needed
function baseballCheckPageOne() {
  if(baseballPagination[1].style.display == "none") {
    baseballPagination[0].style.display = "none";
  } else {
    baseballPagination[0].style.display = "flex";
  }
};

document.getElementById("baseball-pagination").addEventListener("click", baseballFiltering);
document.getElementById("baseball-products-filter-selection").addEventListener("onchange", baseballFiltering);