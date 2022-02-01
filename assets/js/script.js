var searchBtn = document.querySelector("#searchBtn")

function getAmazon(event){
    event.preventDefault()
    console.log("you clicked the search button")
    fetch("https://amazon24.p.rapidapi.com/api/product/B07CRG94G3?country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon24.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
    })
    .then(function(response){
        console.log(response);
	    console.log(response.json());
        return response.json();
    })
    .catch(err => {
	    console.error(err);
});
} 

searchBtn.addEventListener("click", getAmazon)