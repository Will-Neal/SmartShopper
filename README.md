# SmartShopper Application

## Description
SmartShopper is a price comparison website that takes in a user search and returns the top listing from two of the most popular marketplaces on the web - Amazon and eBay. The user is presented with a photo from each listing, the name, price and rating on the respective marketplaces as well as a description from the Amazon listing (eBay descriptions are not provided as they are user-generated, since it is auction based). The site focuses on simplicity, prompting the user to search while displaying the logos and a placeholder image showing the user where their information will be displayed.

## Background
Amazon and eBay are two of the largest global marketplaces with 213 million and 182 million unique users, respectively. An absolutely massive number of people search both of these sites on a daily basis and our application serves to save them time every day. Visiting our site first allows users to compare the same item on both sites and then navigate directly to those listings without wasting time opening multiple tabs and going to multiple webpages. Our site is a necessary quality of life improvement for the average consumer. 

## User Story
This is an application for the modern shopper. They are generally between the ages of 16 and 40 and turn to digital mediums for all of their shopping needs. They exist in a fast pace environment and prefer all of their information in a central location. They are students and professionals who appreciate a clean and simple user interface and want to get their information in the fewest clicks possible. Our app eliminates the tedious process of checking multiple shopping sites to find the best bargain, making it a breeze to find the best price with just one click.

## Functionality 
Our site uses multiple API calls to get relevant information for users. On the Amazon side, an initial call is necessary to get the product number to make a subsequent API call to get more in-depth information. On the eBay side, a single API call is sufficient. The page then uses JavaScript to inject this information dynamically into the HTML and display it to the user. Included with this information is an image as well as a link that is made active over a button so that the user can navigate directly to the product page on the desired site. We use a set of conditional statements to avoid undesirable results from appearing. We also utilized client-side local storage to display the user's search history. This functionality also works when the user refreshes or reopens the page in the same browser. 

## Features
<ul>
 <li>Multiple API calls to Amazon and eBay</li>
 <li>Bootstrap Framework</li>
 <li>Dynamically update HTML using JavaScript</li>
 <li>Live links to marketplace pages</li>
 <li>Sweet Alert Framework for server errors</li>
 <li>Search History</li>
</ul>

## Deployment
[Deployment Link](https://will-neal.github.io/SmartShopper-Application)

![Screenshot](https://github.com/Will-Neal/SmartShopper-Application/blob/main/assets/img/screenshot.png?raw=true)

![Action-Screenshot](https://github.com/Will-Neal/SmartShopper-Application/blob/main/assets/img/action-screenshot.png?raw=true)

## Development
SmartShopper is the submission for the first major project of the Columbia Engineering Coding Bootcamp from the winter of 2022. It is an application that utilizes HTML, CSS, Javascript, and two Server-Side APIs. The final product represents the continued learning of three student developers.

The front-end was designed with a simple and clean interface, making it easy for end users to to compare Amazon & eBay prices for a given product.

## Future Development
First and foremost, we would love to have access to the official APIs for Amazon and eBay for speed performance. Currently, we are using three free-to-use APIs and while they work for our purposes, in practice, they are very slow. Accordingly, our application is functioning in its current state, but a faster API would be an immediate quality of life improvement for our users.

## Testing
There are no tests associated with the project.

## License

<img src="https://img.shields.io/badge/license-MIT-red">
  
This project is licensed under the MIT License.

For more information on this license, please visit [their website](https://www.mit.edu/~amini/LICENSE.md).
  
## Contributors
SmartShopper is a collaboration between three dedicated developers. If you have any questions, you can find us on our GitHub pages.
- Will is [here](https://github.com/Will-Neal).
- Yaakov is [here](https://github.com/yyb613).
- Colin is [here](https://github.com/GundamMosi10).
