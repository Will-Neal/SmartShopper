# SmartShopper Application

## Description
SmartShopper is a price comparison website that takes a user search and returns the top listing from two of the most popular marketplaces on the web - Amazon and Ebay. The user is presented with a photo from each listing, the name, price and rating on the respective marketplaces as well as a description from the Amazon listing(eBay descriptions are not provided as they are user generated since it is auction based). The site focuses on simplicity prompting users to search while displaying the logos and a placeholder image telling the user where their information will be displayed.

## Background
Amazon and Ebay are two of the largest global market places with 213 million and 182 million unique users respectively. An absolutely massive number of people search both of these sites on a daily basis and our application serves to save them some time every day. Travelling to our site first allows the users to compare the same item on both sites and then navigate directly to those listings without wasting time opening multiple tabs and going to multiple webpages. Our site is a necessary quality of life improvement for the average consumer. 

## User Story
This is an application for the modern shopper. They are generally between the ages of 16 and 40 and turn to digital mediums for all of their shopping needs. They exist in a fast pace environment and prefer all of their information in a central location. They are students and professionals who appreciate a clean and simple user interface and want to get their information in the fewest clicks possible. Our app eliminates the tedious process of checking multiple shopping sites to find the best bargain, making it a breeze to find the best price with just one click.

## Functionality 
Our site makes use of multiple API calls to get the relevant information for users. On the amazon side an initial call is necessary to get the product number to make a subsequent API call to get more in depth information. On the Ebay side a single API call is sufficient. The page then uses JavaScript to inject this information dynamically into the HTML and display it to the user. Included with this information is an image as well as a link that is made active over a button so that the user can navigate directly to the product page on the desire site. We use a set of conditional statements to avoid undesirable results from searching. 

## Features
<ul>
 <li>Multiple API calls to Amazon and Ebay API</li>
 <li>Bootstrap Framework</li>
 <li>Dynamically update HTML using JavaScript</li>
 <li>Live links to marketplace pages</li>
</ul>

## Deployment
[Deployment Link](https://will-neal.github.io/SmartShopper-Application)

![Screenshot](assets/images/screenshot.png?raw=true)

## Development
SmartShopper is the submission for the first major project of the Columbia Engineering Coding Bootcamp from the winter of 2022. It is an application that utilizes two different APIs, based on concepts in HTML, CSS, Javascript, and Server-Side APIs. The final product represents the continued learning of three student developers.

The front-end was designed with a simple and clean interface, making it easy for end users to to compare Amazon & eBay prices for a given product.

## Future Development
First and foremost we would love to have access to the official APIs for Amazon and Ebay for speed purposes. Currently we are using three free to use APIs and while they work for our purposes, in practice they are very slow. This would be an easy fix since our application is functioning in its current state but it would be an immediate and large quality of life improvement.

## Testing
There are no tests associated with the project.

## Contributors
SmartShopper is a collaboration between three dedicated developers. If you have any questions, you can find us on our GitHub pages.
- Will is [here](https://github.com/Will-Neal).
- Yaakov is [here](https://github.com/yyb613).
- Colin is [here](https://github.com/GundamMosi10).
