
//products is coming from the file products.js
let prodList = products

let prodDiv = document.querySelector(".prod-card-grid")

//"item" is technically elements from the prodList array because it is being used with the filter method with prodList
over400 = (item) => {
    return item.price >= 400
}

// creates new array with only elements that return true according to the over400 function
let prodOver400 = prodList.filter(over400)

// map through the prodList array and for each item, run the following function
// this will basically go through our list of products
// and create a product card for each product and display it
prodOver400.map(item => {
    var div = document.createElement("div")
    div.className = "prod-card"
    var prodImage = document.createElement("img")
    prodImage.setAttribute("src", item.image)
    prodImage.setAttribute("alt", item.name)
    prodImage.setAttribute("style", "width:100%")
    var imagesBtn = document.createElement("button")
    imagesBtn.innerHTML = `View more images <i class="fas fa-images"></i>`
    imagesBtn.setAttribute("class", "prod-images-btn")
    var prodTitle = document.createElement("h2")
    prodTitle.innerHTML = item.name
    var paragraph = document.createElement("p")
    paragraph.innerHTML = `${item.description}`
    var prodPrice = document.createElement("p")
    prodPrice.innerHTML = `Price: $${item.price}`
    prodPrice.className = "prod-card-price"
    var quoteBtn = document.createElement("button")
    quoteBtn.innerHTML = "Get Quote"
    quoteBtn.setAttribute("class", "prod-quote-btn")
    div.appendChild(prodImage)
    div.appendChild(prodTitle)
    div.appendChild(prodPrice)
    div.appendChild(paragraph)
    div.appendChild(imagesBtn)
    div.appendChild(quoteBtn)
    prodDiv.appendChild(div)
})