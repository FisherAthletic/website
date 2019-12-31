//---------------------------------------------------------------------------------------------------------------------
// Strength and Conditioning filter
var strDropdownValue = document.getElementById("strength-products-filter-selection").value;
var strPagination = document.getElementsByClassName("strength-pagination");
var strSelectedPageValue = 1;
var strProducts = document.getElementsByClassName("strength-products-list");
var strFilteredProducts = document.getElementsByClassName(strDropdownValue);
var strFilteredProductsAmount = strFilteredProducts.length;
var strNumberOfPagesNeeded = Math.ceil(strFilteredProductsAmount / 12);
var strFilteredProducts = document.getElementsByClassName(strDropdownValue);

// function to block scrolling
function noScroll() {
  window.scrollTo(0, 0);
};
// // add listener to disable scroll
// window.addEventListener("scroll", noScroll);
// add listener to disable scroll on touch screens
window.addEventListener("touchmove", noScroll);
// adds the class no-scroll to body in css
document.body.classList.add("no-scroll");

// main function that handles the filtering
function strengthConditioningFiltering() {
  strDropdownValue = document.getElementById("strength-products-filter-selection").value;
  strUpdateDropdownValue();
  strUpdateNumberOfPagesNeeded();
  strUpdateSelectedPageValue();
  strDisplayPagesNeeded();
  strDisplayProducts();
  strDisplayAmount();

  function loadOnOff() {
    var updateDoneLoadingInt = setInterval(updateDoneLoading, 50);
    function updateDoneLoading() {
      for(i = 0; i < strProducts.length; i++) {
        if (strProducts[i].style.display == "none") {
          // window.removeEventListener("scroll", noScroll);
          window.removeEventListener("touchmove", noScroll);
          document.body.classList.remove("no-scroll");
          document.getElementById("loading-page").style.display = "none";
          stopLoadOnOffInt();
        }
      }
    };
    function stopLoadOnOffInt() {
      clearInterval(updateDoneLoadingInt);
    };
  }
  loadOnOff();
};

// function checks how many pages are needed by checking the amount of products in the current filter selection and the product total by 12
function strUpdateNumberOfPagesNeeded() {
  strFilteredProducts = document.getElementsByClassName(strDropdownValue);
  strFilteredProductsAmount = strFilteredProducts.length;
  strNumberOfPagesNeeded = Math.ceil(strFilteredProductsAmount / 12);
  console.log("Number of pages needed: " + strNumberOfPagesNeeded);
};

// function updates the dropdown value state
function strUpdateDropdownValue() {
  strDropdownValue = document.getElementById("strength-products-filter-selection").value;
  console.log("Dropdown selection: " + strDropdownValue);
};

// function updates the selected page value state
function strUpdateSelectedPageValue() {
  try {
    strSelectedPageValue = event.target.attributes.value.value;
    console.log("Page selected: " + strSelectedPageValue);
  } catch(err) {
    document.addEventListener("DOMContentLoaded", strResetPageSelection);
    console.log("Page selected: " + strSelectedPageValue);
  }
};

// function loops through pagination and displays any pages <= the number of pages needed
function strDisplayPagesNeeded() {
  for(i = 0; i < (strPagination.length); i++) {
    var loopCurrentPageValue = strPagination[i].attributes.value.value;
    if(loopCurrentPageValue <= strNumberOfPagesNeeded) {
      strPagination[i].style.display = "flex";
    } else {
      strPagination[i].style.display = "none";
    }
  }
};

// function that changes page1 to active and only runs whenever the filter selection changes
function strResetPageSelection() { 
  console.log("Filter selection was changed. Reset function is now running...")
    for(i = 0; i < strPagination.length; i++) {
    if(strPagination[i].classList.contains("page1")) {
      strPagination[i].classList.add("active");
      document.getElementById("page1").checked = true;
    } else {
      strPagination[i].classList.remove("active");
    }
  }
  strSelectedPageValue = 1;
};

// function decides if a product should be shown or hidden based on whether or not it matches the dropdown filter
function strDisplayProducts() {
  for(i = 0; i < strProducts.length; i++) {
    if(strProducts[i].attributes.value.value == strDropdownValue) {
      strProducts[i].style.display = "flex";
    } else if(strProducts[i].classList.contains("All") && strDropdownValue == "All") {
      strProducts[i].style.display = "flex";
    } else {
      strProducts[i].style.display = "none";
    }
  }
};

// function updates the filtered products state
function strUpdateFilteredProducts() {
  strFilteredProducts = document.getElementsByClassName(strDropdownValue);
};

// function decides which products to show based on page selection
function strDisplayAmount() {
  for(i = 0; i < strFilteredProducts.length; i++) {
    strFilteredProducts[i].style.display = "none";
  }
  if(strSelectedPageValue == 1) {
    strShowPageOne();
  } else if(strSelectedPageValue == 2) {
    strShowPageTwo();
  } else if(strSelectedPageValue == 3) {
    strShowPageThree();
  } else if(strSelectedPageValue == 4) {
    strShowPageFour();
  } else {
    console.log("Unknown page selection.");
  }
};

// function used for strDisplayAmount function, will only show products 1-12
function strShowPageOne() {
  var pageOneProducts = [0,1,2,3,4,5,6,7,8,9,10,11];
  try {
    for(i = 0; i < pageOneProducts.length; i++) {
      strFilteredProducts[pageOneProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page1 has less than 12 products.");
  } finally {
    strCheckPageOne();
  }
}

// function used for strDisplayAmount function, will only show products 13-24
function strShowPageTwo() {
  var pageTwoProducts = [12,13,14,15,16,17,18,19,20,21,22,23];
  try {
    for(i = 0; i < pageTwoProducts.length; i++) {
      strFilteredProducts[pageTwoProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page2 has less than 12 products.");
  }
};

// function used for strDisplayAmount function, will only show products 25-36
function strShowPageThree() {
  var pageThreeProducts = [24,25,26,27,28,29,30,31,32,33,34,35];
  try {
    for(i = 0; i < pageThreeProducts.length; i++) {
      strFilteredProducts[pageThreeProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page3 has less than 12 products.")
  }
};

// function used for strDisplayAmount function, will only show products 37-48
function strShowPageFour() {
  var pageFourProducts = [36,37,38,39,40,41,42,43,44,45,46,47];
  try {
    for(i = 0; i < pageFourProducts.length; i++) {
      strFilteredProducts[pageFourProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page4 has less than 12 products.");
  }
};

// function used for strShowPageOne function, hides page 1 if it is the only page needed
function strCheckPageOne() {
  if(strPagination[1].style.display == "none") {
    strPagination[0].style.display = "none";
  } else {
    strPagination[0].style.display = "flex";
  }
};

document.getElementById("strength-pagination").addEventListener("click", strengthConditioningFiltering);
document.getElementById("strength-products-filter-selection").addEventListener("onchange", strengthConditioningFiltering);

// pagination next
function strPaginationNext() {
  strSelectedPageValue = (Number(strSelectedPageValue) + 1);
  if(strSelectedPageValue == strNumberOfPagesNeeded) {
    document.getElementById("paginationNextBtn").classList.add("disabled");
    document.getElementById("paginationNextBtn").removeEventListener("click", strPaginationNext);
  }
  for(i = 0; i < strPagination.length; i++) {
    if(strPagination[i].attributes.value.value == strSelectedPageValue) {
      strPagination[i].classList.add("active");
    } else {
      strPagination[i].classList.remove("active");
    }
  }
  if(strSelectedPageValue != 1) {
    document.getElementById("paginationPrevBtn").classList.remove("disabled");
    document.getElementById("paginationPrevBtn").addEventListener("click", strPaginationPrev);
  } else {
    document.getElementById("paginationPrevBtn").classList.add("disabled");
    document.getElementById("paginationPrevBtn").removeEventListener("click", strPaginationPrev);
  }
  strengthConditioningFiltering();
};

function strPagNextOnOff() {
  if(strSelectedPageValue != strNumberOfPagesNeeded) {
    document.getElementById("paginationNextBtn").classList.remove("disabled");
    document.getElementById("paginationNextBtn").addEventListener("click", strPaginationNext);
  } else {
    document.getElementById("paginationNextBtn").classList.add("disabled");
    document.getElementById("paginationNextBtn").removeEventListener("click", strPaginationNext);
  }
};

document.getElementById("paginationNextBtn").addEventListener("click", strPaginationNext);
document.getElementById("strength-pagination").addEventListener("click", strPagNextOnOff);

document.getElementById("paginationPrevBtn").addEventListener("click", strPaginationPrev);
document.getElementById("strength-pagination").addEventListener("click", strPagPrevOnOff);

// pagination previous
// This if statement disables the prev btn if page 1 is selected
if(strSelectedPageValue == 1) {
  document.getElementById("paginationPrevBtn").classList.add("disabled");
  document.getElementById("paginationPrevBtn").removeEventListener("click", strPaginationPrev);
};

function strPaginationPrev() {
  strSelectedPageValue = (Number(strSelectedPageValue) - 1);
  if(strSelectedPageValue == 1) {
    document.getElementById("paginationPrevBtn").classList.add("disabled");
    document.getElementById("paginationPrevBtn").removeEventListener("click", strPaginationPrev);
  }
  for(i = 0; i < strPagination.length; i++) {
    if(strPagination[i].attributes.value.value == strSelectedPageValue) {
      strPagination[i].classList.add("active");
    } else {
      strPagination[i].classList.remove("active");
    }
    if(strSelectedPageValue != strNumberOfPagesNeeded) {
      document.getElementById("paginationNextBtn").classList.remove("disabled");
      document.getElementById("paginationNextBtn").addEventListener("click", strPaginationNext);
    }
  }
  strengthConditioningFiltering();
};

function strPagPrevOnOff() {
  if(strSelectedPageValue != 1) {
    document.getElementById("paginationPrevBtn").classList.remove("disabled");
    document.getElementById("paginationPrevBtn").addEventListener("click", strPaginationPrev);
  } else {
    document.getElementById("paginationPrevBtn").classList.add("disabled");
    document.getElementById("paginationPrevBtn").removeEventListener("click", strPaginationPrev);
  }
};

function resetPagPrevNextBtn() {
  document.getElementById("paginationNextBtn").addEventListener("click", strPaginationNext);
  document.getElementById("paginationNextBtn").classList.remove("disabled");

  document.getElementById("paginationPrevBtn").removeEventListener("click", strPaginationPrev);
  document.getElementById("paginationPrevBtn").classList.add("disabled");

  if(strNumberOfPagesNeeded == 1) {
    document.getElementById("paginationPrevBtn").style.display = "none";
    document.getElementById("paginationNextBtn").style.display = "none";
  } else {
    document.getElementById("paginationPrevBtn").style.display = "flex";
    document.getElementById("paginationNextBtn").style.display = "flex";
  }
};
document.getElementById("strength-products-filter-selection").addEventListener("change", resetPagPrevNextBtn);