// Initialize Variables
var searchBtn = document.querySelector("#searchBtn");
var card = document.getElementsByClassName("card");
var amazonImg = document.querySelector("#amazonCardImage");
var amazonDescription = document.querySelector("#amazonCardText");
var amazonItemName = document.querySelector("#amazonItemName");
var amazonPrice = document.querySelector("#amazonPrice");
var amazonRating = document.querySelector("#amazonRating");
var amazonButton = document.querySelector("#goToAmazon");
var ebayImg = document.querySelector("#ebayImage");
var ebayItemName = document.querySelector("#ebayItemName");
var ebayPrice = document.querySelector("#ebayPrice");
var ebayRating = document.querySelector("#ebayRating");
var ebayButton = document.querySelector("#goToEbay");
var spinner = document.querySelector(".spinner-border");

// Call Amazon API
function getAmazon(event){
    event.preventDefault() // Prevent Default

    card[0].style.display = "none"; // Hide card
    spinner.style.display = "inline"; // Show spinner

    var userInput = document.querySelector("#userInput").value
    var searchURL = "https://wolf-amazon-data-scraper.p.rapidapi.com/search/"+ userInput +"?api_key=59ef84be287bba26357f5519b0058332"
    fetch(searchURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        amazonImg.src = data.results[0].image
        amazonPrice.textContent = "$" + data.results[0].price
        if (data.results[0].stars === undefined) {
            amazonRating.textContent = "No reviews yet ⭐"
            console.log("There were no stars")
        } else {
            console.log("There were stars")
            amazonRating.textContent = data.results[0].stars + " ⭐"
        }
        amazonButton.addEventListener("click", function(){
            window.open(data.results[0].url, 'newAmazonPage');
        })
        var urlSplit = data.results[0].url.split("/")
        var productId = urlSplit[5]
        // console.log(productId)
        fetch("https://wolf-amazon-data-scraper.p.rapidapi.com/products/" + productId + "?api_key=59ef84be287bba26357f5519b0058332", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	    }
        })
        .then(function(response){
            if (response.status === 200) { // after content loads...
                card[0].style.display = "inline"; // Show card
                spinner.style.display = "none"; // Hide spinner
            }
            return response.json();
        }).then(function(data) {
            amazonDescription.textContent = data.full_description;
            amazonItemName.textContent = data.name;
        })
    })
}

// Call eBay API
function getEbay(event){
    event.preventDefault(); // Prevent Default

    card[1].style.display = "none"; // Hide card
    spinner.style.display = "inline"; // Show spinner

    var userInput = document.querySelector("#userInput").value
    fetch("https://ebay-products-search-scraper.p.rapidapi.com/products?query=" + userInput + "&page=1&Item_Location=north_america", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ebay-products-search-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response) {
        if (response.status === 200) { // after content loads...
            card[1].style.display = "inline"; // Show card
        }
        return response.json()
    })
    .then(function(data){
        shortRating = data.products[0].rating.split("")
        ebayImg.src = data.products[0].image;
        ebayPrice.textContent = data.products[0].price;
        if (shortRating[0] === undefined) {
            ebayRating.textContent = "No reviews yet ⭐"
        } else {
            ebayRating.textContent = shortRating[0] + "⭐";
        }
        ebayItemName.textContent = data.products[0].title;
        ebayButton.addEventListener("click", function(){
            window.open(data.products[0].productLink, "newPage");
        })
    })
}

// When user clicks 'Search'
searchBtn.addEventListener("click", getEbay)
searchBtn.addEventListener("click", getAmazon)
searchBtn.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        getEbay();
        getAmazon();
    }
})

