// Initialize Variables
// GENERAL
var searchBtn = document.querySelector("#searchBtn"); // Search Button
var card = document.getElementsByClassName("card");   // Info Card
var spinner = document.querySelector(".spinner-border"); // Spinner
// AMAZON
var amazonImg = document.querySelector("#amazonCardImage"); // Amazon Card Image
var amazonItemName = document.querySelector("#amazonItemName"); // Amazon item number
var amazonPrice = document.querySelector("#amazonPrice"); // Amazon Price
var amazonRating = document.querySelector("#amazonRating"); // Amazon Rating
var amazonDescription = document.querySelector("#amazonCardText"); // Amazon Description
var amazonButton = document.querySelector("#goToAmazon"); // Buy on Amazon
// EBAY
var ebayImg = document.querySelector("#ebayCardImage"); // eBay Card Image
var ebayItemName = document.querySelector("#ebayItemName"); // eBay item number
var ebayPrice = document.querySelector("#ebayPrice"); // eBay Price
var ebayRating = document.querySelector("#ebayRating"); // eBay Rating
var ebayButton = document.querySelector("#goToEbay"); // Buy on eBay

// Amazon API Function
function getAmazon(event){
    event.preventDefault()            // Prevent Default
    card[0].style.display = "none";   // Hide card
    spinner.style.display = "inline"; // Show spinner

    var userInput = document.querySelector("#userInput").value; // Get User Input
    var searchURL = "https://wolf-amazon-data-scraper.p.rapidapi.com/search/"+ userInput +"?api_key=59ef84be287bba26357f5519b0058332"; // URL

    fetch(searchURL, { // Call the Amazon API
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
        amazonImg.src = data.results[0].image;                 // Amazon Image
        amazonPrice.textContent = "$" + data.results[0].price; // Amazon Price

        // REVIEWS
        if (data.results[0].stars === undefined) {          // if no reviews...
            amazonRating.textContent = "No reviews yet ⭐"; // print 'no reviews'
        } else {                                                      // otherwise...
            amazonRating.textContent = data.results[0].stars + " ⭐"; // display reviews
        }
        amazonButton.addEventListener("click", function() {    // if click 'Buy on Amazon'...
            window.open(data.results[0].url, 'newAmazonPage'); // open in new page
        })

        var urlSplit = data.results[0].url.split("/"); // Split Amazon URL
        var productId = urlSplit[5];                   // Store Amazon Product ID

        fetch("https://wolf-amazon-data-scraper.p.rapidapi.com/products/" + productId + "?api_key=59ef84be287bba26357f5519b0058332", { // Call Amazon API w/Product ID
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	    }
        })
        .then(function(response){
            if (response.status === 200) {        // after content loads...
                card[0].style.display = "inline"; // Show card
                spinner.style.display = "none";   // Hide spinner
                return response.json();
            } else if (response.status >= 500) {  // if error...
                Swal.fire('Error Try Again');     // Display error message
                spinner.style.display = "none";   // Hide spinner
                return;
            }
            
        }).then(function(data) {
            amazonDescription.textContent = data.full_description; // Display Amazon Description
            amazonItemName.textContent = data.name;                // Display Amazon Title
        })
    })
}

// eBay API Function
function getEbay(event){
    event.preventDefault();           // Prevent Default
    card[1].style.display = "none";   // Hide card
    spinner.style.display = "inline"; // Show spinner

    var userInput = document.querySelector("#userInput").value; // Get User Input

    fetch("https://ebay-products-search-scraper.p.rapidapi.com/products?query=" + userInput + "&page=1&Item_Location=north_america", { // Call eBay API
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ebay-products-search-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response) {
        if (response.status === 200) {        // after content loads...
            card[1].style.display = "inline"; // Show card
            return response.json()
        } else if (response.status >= 500) {  // if error...
            Swal.fire('Error Try Again')      // Display error message
            spinner.style.display = "none"    // Hide spinner
            return
        }  
    })
    .then(function(data){
        ebayImg.src = data.products[0].image;              // eBay Image
        ebayPrice.textContent = data.products[0].price;    // eBay Price
        ebayItemName.textContent = data.products[0].title; // eBay Title
        shortRating = data.products[0].rating.split('');   // eBay Rating

        if (shortRating[0] === undefined) {                  // if no reviews...
            ebayRating.textContent = "No reviews yet ⭐";    // print 'no reviews'
        } else {                                             // otherwise...
            ebayRating.textContent = shortRating[0] + " ⭐"; // display reviews
        }

        ebayButton.addEventListener("click", function () {        // if click 'Buy on eBay'...
            window.open(data.products[0].productLink, "newPage"); // open in new page
        })
    })
}

// When user clicks 'Search'
searchBtn.addEventListener("click", getEbay)   // Call eBay API Function
searchBtn.addEventListener("click", getAmazon) // Call Amazon API Function
searchBtn.addEventListener("keypress", function (event) { // Press Enter to 🔎
    if (event.key === "Enter") {
        getEbay();
        getAmazon();
    }
})