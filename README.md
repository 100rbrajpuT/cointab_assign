# cointab_assign
Developer - Assignment 
Overview 
Please understand the business requirement below and try to solve the assignment. 

Business Requirements
Create a simple 2-page website using Node.js and SQL database.

Synopsis

Create a simple 2-Page website using Node.js and SQL database, Page 1 will have three buttons namely Fetch Users, Delete Users, User Details, on clicking the Fetch Users button the application should fetch data from the (https://randomuser.me/) api and store it in a table of any name in the database, the data fetch should be in bulk for e.g., if the api returns a single record then the application should be such a way that it will fetch around 50 or 100 records on a single click. 

On clicking on the Delete Users button the application should remove all the entries in the database. On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.
 
 
 
Page 1: Home Page
 
Use-Case ID
1
User-Case Name
Home Page
Use-Case Description
Page will have three buttons namely Fetch Users, Delete Users, User Details,
 
1.       On clicking the Fetch Users button the application should fetch data in bulk around 50 – 100 records from the (https://randomuser.me/) api and store it in a table of any name in the database

2.       The Delete Users button the application should remove all the entries in the database.
 
3.       On clicking on the User Details the application should open the Page 2 where it will display the data in the database as a table view with pagination feature as well as some filter option to filter the data in the table.
 
Inputs
Buttons
1.       Fetch Users
2.       Delete Users
3.       User Details
Validations
 
1.       The Fetch Users button click should throw an error alert if already some data fetch is going on.
 
2.       The Delete Users button click should throw an error alert before deleting all the records.
 
3.       The Users Details button click should take the user to Page 2.
 
 

