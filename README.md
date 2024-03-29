# book-search-engine
MERN Stack App using React, MongoDB, Node.js, Express.js, and GraphQL API    

# Table of Contents   
- [User-Story](#user-story)   
- [Acceptance-Criteria](#acceptance-criteria)    
- [Description](#description)   
- [Installation](#installation)    
- [Usage](#usage)    
- [Deployed-App](#deployed-app)   
- [Credits](#credits)   
- [License](#license)   

## User Story  
AS AN avid reader    
I WANT to search for new books to read    
SO THAT I can keep a list of books to purchase     
  
## Acceptance Criteria    
GIVEN a book search engine    
WHEN I load the search engine    
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button    
WHEN I click on the Search for Books menu option    
THEN I am presented with an input field to search for books and a submit button    
WHEN I am not logged in and enter a search term in the input field and click the submit button    
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site    
WHEN I click on the Login/Signup menu option    
THEN a modal appears on the screen with a toggle between the option to log in or sign up   
WHEN the toggle is set to Signup   
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button    
WHEN the toggle is set to Login   
THEN I am presented with two inputs for an email address and a password and login button    
WHEN I enter a valid email address and create a password and click on the signup button    
THEN my user account is created and I am logged in to the site   
WHEN I enter my account’s email address and password and click on the login button   
THEN the modal closes and I am logged in to the site   
WHEN I am logged in to the site    
THEN the menu options change to Search for Books, an option to see my saved books, and Logout    
WHEN I am logged in and enter a search term in the input field and click the submit button     
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account    
WHEN I click on the Save button on a book    
THEN that book’s information is saved to my account    
WHEN I click on the option to see my saved books    
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account    
WHEN I click on the Remove button on a book    
THEN that book is deleted from my saved books list    
WHEN I click on the Logout button    
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button     

## Description     
This project refactored code that had a fully functioning Google Books API search engine built with a RESTful API, and restructured it to be a GraphQL API built with the Apollo Server. The application uses the MERN stack, with React on the front end, MongoDB, Node.js and Express.js on the back end.    

Users can search for books and browse titles without needing to create an account or log in. After creating an account, users also have the option to save their favorite book titles, or to remove specific books from their favorites list, displayed on a separate page.     

## Installation   
Clone the repository in GitHub. Install Node.js and MongoDB. Import Express.js and Mongoose.                 

## Usage    
To use this application, open the integrated terminal and run npm i (install).    
Next, run npm run develop, which will launch `http://localhost:3000/` in the browser.    
Open `localhost:3000/graphql` in the browser to launch the Apollo Sandbox and test the application query and mutations.             

## Deployed app   
[Book-Search Engine](http://books.workbytes.net/)

## Credits   
University of Arizona Coding Bootcamp resources (starter code, class activities and examples).    

## License  

MIT License   

Copyright (c) 2023 anistone9    

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:    

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.   



