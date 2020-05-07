
//products is coming from the file products.js
let prodList = products

// map through the prodList array and for each item, run the following function
// this will basically go through our list of products
// and create a product card for each product and display it

let prodDiv = document.querySelector(".fb-categories-grid")

prodList.map(item => {
    var div = document.createElement("div")
    div.className = "prod-card"
    var prodImage = document.createElement("img")
    prodImage.setAttribute("src", item.image)
    prodImage.setAttribute("alt", item.name)
    prodImage.setAttribute("style", "width:100%")
    var prodTitle = document.createElement("h2")
    prodTitle.innerHTML = item.name
    var paragraph = document.createElement("p")
    paragraph.innerHTML = `${item.description}`
    var prodPrice = document.createElement("p")
    prodPrice.innerHTML = `Price: $${item.price}`
    prodPrice.className = "prod-card-price"
    var quoteBtn = document.createElement("button")
    quoteBtn.innerHTML = "Get Quote"

    div.appendChild(prodImage)
    div.appendChild(prodTitle)
    div.appendChild(prodPrice)
    div.appendChild(paragraph)
    div.appendChild(quoteBtn)
    prodDiv.appendChild(div)
})

console.log(document.querySelector(".prod-card"))