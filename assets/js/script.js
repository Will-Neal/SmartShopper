var searchBtn = document.querySelector("#searchBtn")

function getAmazon(event){
    event.preventDefault()
    console.log("you clicked the search button")
    fetch("https://wolf-amazon-data-scraper.p.rapidapi.com/search/applewatch?api_key=59ef84be287bba26357f5519b0058332", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response){
        console.log('you hit the response section');
        // console.log(response.json())
        return response.json();
    })
    .then(function(data) {
        // console.log(data)
        console.log("image: " + data.results[0].image)
        // console.log(data.results[0].name)
        console.log("price: $" + data.results[0].price)
        console.log("Ratings: " + data.results[0].stars)
        console.log("url: " + data.results[0].url)
        var urlSplit = data.results[0].url.split("/")
        var productId = urlSplit[5]
        console.log(productId)
        fetch("https://wolf-amazon-data-scraper.p.rapidapi.com/products/" + productId + "?api_key=59ef84be287bba26357f5519b0058332", {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-host": "wolf-amazon-data-scraper.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	    }
        })
        .then(function(response){
            console.log("you have called 2nd API")
            return response.json();
        }).then(function(data) {
            console.log(data)
            console.log("Name: " + data.name)
            console.log("Description: " + data.full_description)
        })
    })

    
}

searchBtn.addEventListener("click", getAmazon)
