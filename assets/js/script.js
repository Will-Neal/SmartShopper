fetch("https://amazon24.p.rapidapi.com/api/product/B07CRG94G3?country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon24.p.rapidapi.com",
		"x-rapidapi-key": "2fe7923d20msh849834e2d765975p110705jsnd39259dc0189"
	}
})
.then(response => {
	console.log(response.json());
})
.catch(err => {
	console.error(err);
});