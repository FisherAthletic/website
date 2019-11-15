//---------------------------------------------------------------------------------------------------------------------
// Padding filter
var paddingDropdownValue = document.getElementById("padding-products-filter-selection").value;
var paddingPagination = document.getElementsByClassName("padding-pagination");
var paddingSelectedPageValue = 1;
var paddingProducts = document.getElementsByClassName("padding-products-list");
var paddingFilteredProducts = document.getElementsByClassName(paddingDropdownValue);
var paddingFilteredProductsAmount = paddingFilteredProducts.length;
var paddingNumberOfPagesNeeded = Math.ceil(paddingFilteredProductsAmount / 12);
var paddingFilteredProducts = document.getElementsByClassName(paddingDropdownValue);

// main function that handles the filtering
function paddingFiltering() {
  paddingDropdownValue = document.getElementById("padding-products-filter-selection").value;
  paddingUpdateDropdownValue();
  paddingUpdateNumberOfPagesNeeded();
  paddingUpdateSelectedPageValue();
  paddingDisplayPagesNeeded();
  paddingDisplayProducts();
  paddingDisplayAmount();
};

// function checks how many pages are needed by checking the amount of products in the current filter selection and the product total by 12
function paddingUpdateNumberOfPagesNeeded() {
  paddingFilteredProducts = document.getElementsByClassName(paddingDropdownValue);
  paddingFilteredProductsAmount = paddingFilteredProducts.length;
  paddingNumberOfPagesNeeded = Math.ceil(paddingFilteredProductsAmount / 12);
  console.log("Number of pages needed: " + paddingNumberOfPagesNeeded);
};

// function updates the dropdown value state
function paddingUpdateDropdownValue() {
  paddingDropdownValue = document.getElementById("padding-products-filter-selection").value;
  console.log("Dropdown selection: " + paddingDropdownValue);
};

// function updates the selected page value state
function paddingUpdateSelectedPageValue() {
  try {
    paddingSelectedPageValue = event.target.attributes.value.value;
    console.log("Page selected: " + paddingSelectedPageValue);
  } catch(err) {
    document.addEventListener("DOMContedLoaded", paddingResetPageSelection);
    console.log("Page selected: " + paddingSelectedPageValue);
  }
};

// function loops through pagination and displays any pages <= the number of pages needed
function paddingDisplayPagesNeeded() {
  for(i = 0; i < (paddingPagination.length); i++) {
    var loopCurrentPageValue = paddingPagination[i].attributes.value.value;
    if(loopCurrentPageValue <= paddingNumberOfPagesNeeded) {
      paddingPagination[i].style.display = "flex";
    } else {
      paddingPagination[i].style.display = "none";
    }
  }
};

// function that changes page1 to active and only runs whenever the filter selection changes
function paddingResetPageSelection() { 
  console.log("Filter selection was changed. Reset function is now running...")
    for(i = 0; i < paddingPagination.length; i++) {
    if(paddingPagination[i].classList.contains("page1")) {
      paddingPagination[i].classList.add("active");
      document.getElementById("page1").checked = true;
    } else {
      paddingPagination[i].classList.remove("active");
    }
  }
  paddingSelectedPageValue = 1;
};

// function decides if a product should be shown or hidden based on whether or not it matches the dropdown filter
function paddingDisplayProducts() {
  for(i = 0; i < paddingProducts.length; i++) {
    if(paddingProducts[i].attributes.value.value == paddingDropdownValue) {
      paddingProducts[i].style.display = "flex";
    } else if(paddingProducts[i].classList.contains("All") && paddingDropdownValue == "All") {
      paddingProducts[i].style.display = "flex";
    } else {
      paddingProducts[i].style.display = "none";
    }
  }
};

// function updates the filtered products state
function paddingUpdateFilteredProducts() {
  paddingFilteredProducts = document.getElementsByClassName(paddingDropdownValue);
};

// function decides which products to show based on page selection
function paddingDisplayAmount() {
  for(i = 0; i < paddingFilteredProducts.length; i++) {
    paddingFilteredProducts[i].style.display = "none";
  }
  if(paddingSelectedPageValue == 1) {
    paddingShowPageOne();
  } else if(paddingSelectedPageValue == 2) {
    paddingShowPageTwo();
  } else {
    console.log("error");
  }
};

// function used for strDisplayAmount function, will only show products 1-12
function paddingShowPageOne() {
  var pageOneProducts = [0,1,2,3,4,5,6,7,8,9,10,11];
  try {
    for(i = 0; i < pageOneProducts.length; i++) {
      paddingFilteredProducts[pageOneProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page1 has less than 12 products.");
  } finally {
    paddingCheckPageOne();
  }
}

// function used for strDisplayAmount function, will only show products 13-24
function paddingShowPageTwo() {
  var pageTwoProducts = [12,13,14,15,16,17,18,19,20,21,22,23];
  try {
    for(i = 0; i < pageTwoProducts.length; i++) {
      paddingFilteredProducts[pageTwoProducts[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page2 has less than 12 products.");
  }
};

// function used for strShowPageOne function, hides page 1 if it is the only page needed
function paddingCheckPageOne() {
  if(paddingPagination[1].style.display == "none") {
    paddingPagination[0].style.display = "none";
  } else {
    paddingPagination[0].style.display = "flex";
  }
};

document.getElementById("padding-pagination").addEventListener("click", paddingFiltering);
document.getElementById("padding-products-filter-selection").addEventListener("onchange", paddingFiltering);

