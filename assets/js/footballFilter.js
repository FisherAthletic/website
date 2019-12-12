//---------------------------------------------------------------------------------------------------------------------

// function to block scrolling
function noScroll() {
  window.scrollTo(0, 0);
};
// add listener to disable scroll
window.addEventListener("scroll", noScroll);

// var checkLoadingInt = setInterval(loadScreenOnOff, 100);

// // function that checks if loading screen should continue being shown
// function loadScreenOnOff() {
  
// };

// // function to stop interval
// function stopLoadingCheck() {
//   clearInterval(checkLoadingInt);
// };

// --------------------------------------------------------------------------------------------
// Football filter
var footballDropdownValue = document.getElementById("football-products-filter-selection").value;
var footballPagination = document.getElementsByClassName("football-pagination");
var footballSelectedPageValue = 1;
var footballProducts = document.getElementsByClassName("football-products-list");
var footballFilteredProducts = document.getElementsByClassName(footballDropdownValue);
var footballFilteredProductsAmount = footballFilteredProducts.length;
var footballNumberOfPagesNeeded = Math.ceil(footballFilteredProductsAmount / 12);
var footballFilteredProducts = document.getElementsByClassName(footballDropdownValue);

var doneLoading = null;

// main function that handles the filtering
function footballFiltering() {
  footballDropdownValue = document.getElementById("football-products-filter-selection").value;
  footballUpdateDropdownValue();
  footballUpdateNumberOfPagesNeeded();
  footballUpdateSelectedPageValue();
  footballDisplayPagesNeeded();
  footballDisplayProducts();
  footballDisplayAmount();
  if(footballDropdownValue == "All") {
    paginationFocus();
  }

  function loadOnOff() {
    var updateDoneLoadingInt = setInterval(updateDoneLoading, 100);
    function updateDoneLoading() {
      if (footballProducts[12].style.display == "none") {
        doneLoading = true;
        window.removeEventListener("scroll", noScroll);
        document.getElementById("loading-page").style.display = "none";
        stopLoadOnOffInt();
      } else {
        doneLoading = false;
      }
    };
    function stopLoadOnOffInt() {
      clearInterval(updateDoneLoadingInt);
    };
  }

  loadOnOff();

};

// function that only allows 5 pagination buttons to be shown at once
function paginationFocus() {
  var s = footballSelectedPageValue;
  var focusOn1 = [0,1,2,3,4];
  var focusOn2 = [0,1,2,3,4];
  var focusOn3 = [0,1,2,3,4];
  var focusOn4 = [1,2,3,4,5];
  var focusOn5 = [2,3,4,5,6];
  var focusOn6 = [3,4,5,6,7];
  var focusOn7 = [4,5,6,7,8];
  var focusOn8 = [5,6,7,8,9];
  var focusOn9 = [6,7,8,9,10];
  var focusOn10 = [7,8,9,10,11];
  var focusOn11 = [8,9,10,11,12];
  var focusOn12 = [9,10,11,12,13];
  var focusOn13 = [10,11,12,13,14];
  var focusOn14 = [11,12,13,14,15];
  var focusOn15 = [12,13,14,15,16];
  var focusOn16 = [13,14,15,16,17];
  var focusOn17 = [14,15,16,17,18];  
  var focusOn18 = [14,15,16,17,18];
  var focusOn19 = [14,15,16,17,18];
  var allPages = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  if(s == 1) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn1.length; i++) {
        footballPagination[focusOn1[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 2) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn2.length; i++) {
        footballPagination[focusOn2[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 3) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn3.length; i++) {
        footballPagination[focusOn3[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 4) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn4.length; i++) {
        footballPagination[focusOn4[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 5) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn5.length; i++) {
        footballPagination[focusOn5[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 6) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn6.length; i++) {
        footballPagination[focusOn6[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 7) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn7.length; i++) {
        footballPagination[focusOn7[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 8) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn8.length; i++) {
        footballPagination[focusOn8[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 9) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn9.length; i++) {
        footballPagination[focusOn9[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 10) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn10.length; i++) {
        footballPagination[focusOn10[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 11) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn11.length; i++) {
        footballPagination[focusOn11[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 12) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn12.length; i++) {
        footballPagination[focusOn12[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 13) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn13.length; i++) {
        footballPagination[focusOn13[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 14) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn14.length; i++) {
        footballPagination[focusOn14[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 15) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn15.length; i++) {
        footballPagination[focusOn15[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 16) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn16.length; i++) {
        footballPagination[focusOn16[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 17) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn17.length; i++) {
        footballPagination[focusOn17[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 18) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn18.length; i++) {
        footballPagination[focusOn18[i]].style.display = "flex";
        console.log("Page being loaded: " + focusOn18[i]);
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else if (s == 19) {
    for(i = 0; i < allPages.length; i++) {
      footballPagination[allPages[i]].style.display = "none";
    }
    try {
      for(i = 0; i < focusOn19.length; i++) {
        footballPagination[focusOn19[i]].style.display = "flex";
        console.log("Page being loaded: " + focusOn19[i]);
      }
    } catch(err) {
      console.log("Something went wrong...");
    }
  } else {
    console.log("Ooops! Something went wrong...");
  }
  console.log("Testing selected page value: " + footballSelectedPageValue);
};

// function checks how many pages are needed by checking the amount of products in the current filter selection and the product total by 12
function footballUpdateNumberOfPagesNeeded() {
  footballFilteredProducts = document.getElementsByClassName(footballDropdownValue);
  footballFilteredProductsAmount = footballFilteredProducts.length;
  footballNumberOfPagesNeeded = Math.ceil(footballFilteredProductsAmount / 12);
  console.log("Number of pages needed: " + footballNumberOfPagesNeeded);
};

// function updates the dropdown value state
function footballUpdateDropdownValue() {
  footballDropdownValue = document.getElementById("football-products-filter-selection").value;
  console.log("Dropdown selection: " + footballDropdownValue);
};

// function updates the selected page value state
function footballUpdateSelectedPageValue() {
  try {
    footballSelectedPageValue = event.target.attributes.value.value;
    console.log("Page selected: " + footballSelectedPageValue);
  } catch(err) {
    document.addEventListener("DOMContedLoaded", footballResetPageSelection);
    console.log("Page selected: " + footballSelectedPageValue);
  }
};

// function loops through pagination and displays any pages <= the number of pages needed
function footballDisplayPagesNeeded() {
  for(i = 0; i < (footballPagination.length); i++) {
    var loopCurrentPageValue = footballPagination[i].attributes.value.value;
    if(loopCurrentPageValue <= footballNumberOfPagesNeeded) {
      footballPagination[i].style.display = "flex";
    } else {
      footballPagination[i].style.display = "none";
    }
  }
};

// function that changes page1 to active and only runs whenever the filter selection changes
function footballResetPageSelection() { 
  console.log("Filter selection was changed. Reset function is now running...")
    for(i = 0; i < footballPagination.length; i++) {
    if(footballPagination[i].classList.contains("page1")) {
      footballPagination[i].classList.add("active");
      document.getElementById("page1").checked = true;
    } else {
      footballPagination[i].classList.remove("active");
    }
  }
  footballSelectedPageValue = 1;
};

// function decides if a product should be shown or hidden based on whether or not it matches the dropdown filter
function footballDisplayProducts() {
  for(i = 0; i < footballProducts.length; i++) {
    if(footballProducts[i].attributes.value.value == footballDropdownValue) {
      footballProducts[i].style.display = "flex";
    } else if(footballProducts[i].classList.contains("All") && footballDropdownValue == "All") {
      footballProducts[i].style.display = "flex";
    } else {
      footballProducts[i].style.display = "none";
    }
  }
};

// function updates the filtered products state
function footballUpdateFilteredProducts() {
  footballFilteredProducts = document.getElementsByClassName(footballDropdownValue);
};

// function decides which products to show based on page selection
function footballDisplayAmount() {
  for(i = 0; i < footballFilteredProducts.length; i++) {
    footballFilteredProducts[i].style.display = "none";
  }
  if(footballSelectedPageValue == 1) {
    footballShowPage1();
  } else if(footballSelectedPageValue == 2) {
    footballShowPage2();
  } else if(footballSelectedPageValue == 3) {
    footballShowPage3();
  } else if(footballSelectedPageValue == 4) {
    footballShowPage4();
  } else if(footballSelectedPageValue == 5) {
    footballShowPage5();
  } else if(footballSelectedPageValue == 6) {
    footballShowPage6();
  } else if(footballSelectedPageValue == 7) {
    footballShowPage7();
  } else if(footballSelectedPageValue == 8) {
    footballShowPage8();
  } else if(footballSelectedPageValue == 9) {
    footballShowPage9();
  } else if(footballSelectedPageValue == 10) {
    footballShowPage10();
  } else if(footballSelectedPageValue == 11) {
    footballShowPage11();
  } else if(footballSelectedPageValue == 12) {
    footballShowPage12();
  } else if(footballSelectedPageValue == 13) {
    footballShowPage13();
  } else if(footballSelectedPageValue == 14) {
    footballShowPage14();
  } else if(footballSelectedPageValue == 15) {
    footballShowPage15();
  } else if(footballSelectedPageValue == 16) {
    footballShowPage16();
  } else if(footballSelectedPageValue == 17) {
    footballShowPage17();
  } else if(footballSelectedPageValue == 18) {
    footballShowPage18();
  } else if(footballSelectedPageValue == 19) {
    footballShowPage19();
  } else {
    console.log("Unknown page selection.");
  }
};

// function used for footballDisplayAmount function, will only show products 1-12
function footballShowPage1() {
  var page1Products = [0,1,2,3,4,5,6,7,8,9,10,11];
  try {
    for(i = 0; i < page1Products.length; i++) {
      footballFilteredProducts[page1Products[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page1 has less than 12 products.");
  } finally {
    footballCheckPageOne();
  }
}

// function used for footballDisplayAmount function, will only show products 13-24
function footballShowPage2() {
  var page2Products = [12,13,14,15,16,17,18,19,20,21,22,23];
  try {
    for(i = 0; i < page2Products.length; i++) {
      footballFilteredProducts[page2Products[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page2 has less than 12 products.");
  }
};

// function used for footballDisplayAmount function, will only show products 25-36
function footballShowPage3() {
  var page3Products = [24,25,26,27,28,29,30,31,32,33,34,35];
  try {
    for(i = 0; i < page3Products.length; i++) {
      footballFilteredProducts[page3Products[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page3 has less than 12 products.")
  }
};

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage4() {
  var page4Products = [36,37,38,39,40,41,42,43,44,45,46,47];
  try {
    for(i = 0; i < page4Products.length; i++) {
      footballFilteredProducts[page4Products[i]].style.display = "flex";
    }
  } catch(err) {
    console.log("Page4 has less than 12 products.");
  }
};

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage5() {
    var page5Products = [48,49,50,51,52,53,54,55,56,57,58,59];
    try {
      for(i = 0; i < page5Products.length; i++) {
        footballFilteredProducts[page5Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page5 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage6() {
    var page6Products = [60,61,62,63,64,65,66,67,68,69,70,71];
    try {
      for(i = 0; i < page6Products.length; i++) {
        footballFilteredProducts[page6Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page6 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage7() {
    var page7Products = [72,73,74,75,76,77,78,79,80,81,82,83];
    try {
      for(i = 0; i < page7Products.length; i++) {
        footballFilteredProducts[page7Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page7 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage8() {
    var page8Products = [84,85,86,87,88,89,90,91,92,93,94,95];
    try {
      for(i = 0; i < page8Products.length; i++) {
        footballFilteredProducts[page8Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page8 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage9() {
    var page9Products = [96,97,98,99,100,101,102,103,104,105,106,107];
    try {
      for(i = 0; i < page9Products.length; i++) {
        footballFilteredProducts[page9Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page9 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage10() {
    var page10Products = [108,109,110,111,112,113,114,115,116,117,118,119];
    try {
      for(i = 0; i < page10Products.length; i++) {
        footballFilteredProducts[page10Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page10 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage11() {
    var page11Products = [120,121,122,123,124,125,126,127,128,129,130,131];
    try {
      for(i = 0; i < page11Products.length; i++) {
        footballFilteredProducts[page11Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page11 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage12() {
    var page12Products = [132,133,134,135,136,137,138,139,140,141,142,143];
    try {
      for(i = 0; i < page12Products.length; i++) {
        footballFilteredProducts[page12Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page12 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage13() {
    var page13Products = [144,145,146,147,148,149,150,151,152,153,154,155];
    try {
      for(i = 0; i < page13Products.length; i++) {
        footballFilteredProducts[page13Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page13 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage14() {
    var page14Products = [156,157,158,159,160,161,162,163,164,165,166,167];
    try {
      for(i = 0; i < page14Products.length; i++) {
        footballFilteredProducts[page14Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page14 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage15() {
    var page15Products = [168,169,170,171,172,173,174,175,176,177,178,179];
    try {
      for(i = 0; i < page15Products.length; i++) {
        footballFilteredProducts[page15Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page15 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage16() {
    var page16Products = [180,181,182,183,184,185,186,187,188,189,190,191];
    try {
      for(i = 0; i < page16Products.length; i++) {
        footballFilteredProducts[page16Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page16 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage17() {
    var page17Products = [192,193,194,195,196,197,198,199,200,201,202,203];
    try {
      for(i = 0; i < page17Products.length; i++) {
        footballFilteredProducts[page17Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page17 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage18() {
    var page18Products = [204,205,206,207,208,209,210,211,212,213,214,215];
    try {
      for(i = 0; i < page18Products.length; i++) {
        footballFilteredProducts[page18Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page18 has less than 12 products.");
    }
  };

// function used for footballDisplayAmount function, will only show products 37-48
function footballShowPage19() {
    var page19Products = [216,217,218,219,220,221,222,223,224,225,226,227];
    try {
      for(i = 0; i < page19Products.length; i++) {
        footballFilteredProducts[page19Products[i]].style.display = "flex";
      }
    } catch(err) {
      console.log("Page19 has less than 12 products.");
    }
  };

// function used for footballShowPageOne function, hides page 1 if it is the only page needed
function footballCheckPageOne() {
    if(footballPagination[1].style.display == "none") {
      footballPagination[0].style.display = "none";
    } else {
      footballPagination[0].style.display = "flex";
    }
  };

document.getElementById("football-pagination").addEventListener("click", footballFiltering);
document.getElementById("football-products-filter-selection").addEventListener("onchange", footballFiltering);