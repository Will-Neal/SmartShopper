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
        console.log('you hit the response section');
        // console.log(response.json())
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.app_sale_price);
        console.log(data.product_details.Customer_Reviews)
    })
        // return response.json()
    
//     .catch(err => {
// 	console.error(err);
// }); 
}

searchBtn.addEventListener("click", getAmazon)
