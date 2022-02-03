var searchBtn = document.querySelector("#searchBtn")
var amazonImg = document.querySelector("#amazonCardImage")
var amazonDescription = document.querySelector("#amazonCardText")
var amazonItemName = document.querySelector("#amazonItemName")
var amazonPrice = document.querySelector("#amazonPrice")
var amazonRating = document.querySelector("#amazonRating")
var amazonButton = document.querySelector("#goToAmazon")
var ebayImg = document.querySelector("#ebayImage")
var ebayItemName = document.querySelector("#ebayItemName")
var ebayPrice = document.querySelector("#ebayPrice")
var ebayRating = document.querySelector("#ebayRating")
var ebayButton = document.querySelector("#goToEbay")



function getAmazon(event){
    var userInput = document.querySelector("#userInput").value
    // console.log(userInput)
    event.preventDefault()
    // console.log("you clicked the search button")
    var searchURL = "https://wolf-amazon-data-scraper.p.rapidapi.com/search/"+ userInput +"?api_key=59ef84be287bba26357f5519b0058332"
    fetch(searchURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response){
        // console.log('you hit the response section');
        // console.log(response.json())
        return response.json();
    })
    .then(function(data) {
        // console.log("data: " + data)
        // console.log("image: " + data.results[0].image)
        // console.log(data.results[0].name)
        // console.log("price: $" + data.results[0].price)
        // console.log("Ratings: " + data.results[0].stars)
        // console.log("url: " + data.results[0].url)
        amazonImg.src = data.results[0].image
        amazonPrice.textContent = "$" + data.results[0].price
        amazonRating.textContent = data.results[0].stars + " ⭐"
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
            // console.log("you have called 2nd API")
            return response.json();
        }).then(function(data) {
            // console.log("data: " + data);
            // console.log("Name: " + data.name);
            // console.log("Description: " + data.full_description);
            amazonDescription.textContent = data.full_description;
            amazonItemName.textContent = data.name;
        })
    })
    

    
}

function getEbay(event){
    event.preventDefault();
    var userInput = document.querySelector("#userInput").value
    // console.log("running getEbay Function")
    fetch("https://ebay-products-search-scraper.p.rapidapi.com/products?query=" + userInput + "&page=1&Item_Location=north_america", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ebay-products-search-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        // console.log(data)
        shortRating = data.products[0].rating.split("")
        console.log(shortRating[0])
        console.log(shortRating[0] === undefined)
        ebayImg.src = data.products[0].image;
        ebayPrice.textContent = data.products[0].price;
        if (shortRating[0] === undefined) {
            ebayRating.textContent = "No reviews yet"
        } else {
            ebayRating.textContent = shortRating[0] + "⭐";
        }
        // console.log("Rating: " + data.products[0].rating);
        // console.log("Price: " + data.products[0].price);
        // console.log("Shipping: " + data.products[0].shipping);
        ebayItemName.textContent = data.products[0].title;
        // console.log("Link: " + data.products[0].productLink);
        ebayButton.addEventListener("click", function(){
            window.open(data.products[0].productLink, "newPage");
        })
    })

}

searchBtn.addEventListener("click", getEbay)
searchBtn.addEventListener("click", getAmazon)
searchBtn.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        getEbay();
        getAmazon();
    }
})

