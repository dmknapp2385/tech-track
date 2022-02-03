# Tech_track

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



## Description
An application that allows a user to keep track of e commerce products and associated tags within a SQL database

    
![](/sample-route.png)
  


## Table of Contents

* [Installation](#installation)
* [Built With](#built-with)
* [Usage](#usage)
* [Questions](#questions)

## Installation
Clone the repository to your local machine and run npm install. MySQL needs to be downloaded and installed on the local machine. In the command line, set up the database as ecommerce_db, make sure your username and password are put into a dotenv file. You can seed data by running npm run seed or post data through insomnia after starting up the server with npm start. 
    
## Usage
This application can only be used with an REST api design platform like Insomnia. Once the server is running, you can view categories with the api endpoint localhost:3001/api/categories, products through localhost:3001/api/products and tags through localhost:3001/api/tags. New categories, products and tags can be added, updated or deleted. 

[Example Walk Through Video](https://drive.google.com/file/d/16F5MSygSfhl6wY8Acij3DcRT6dA09vPg/view?usp=sharing)
  
## Built With

* NODE
* MYSQL
* SEQUELIZE
    
## Credits
Danielle Knapp and University of Arizona Bootcamp

## Questions
Please direct any questions to dmknapp2385@gmail.com or visit my [GitHub](https://wwww.github.com/dmknapp2385) for more information. 

## License
This projects is protected under [MIT](license.txt).
