# AKAN NAME GENERATOR
#### A web application that generates an Akan Name based on the day of the week that one was born in and their gender.
#### By **Lynn Nyangon**
## Description
The Akan Name Generator records a user's birthday and gender, then computes the day of the week that the user was born using a predefined formula and finally generates an Akan Name taking into account the computed day of the week and their gender. Aside from these, it includes form validation to validate user's input.
The picture used in the landing page has been retrieved from the internet; <br>
* ghanaian-people.png - [Link to image's website](https://thumbs.dreamstime.com/b/ghanaian-national-clothes-flag-man-woman-traditional-costume-cute-cartoon-characters-travel-to-republic-ghana-122376153.jpg) <br>

## Setup/Installation Requirements
* Using a mobile device/laptop ensure you have access to internet connection
* To get the web application's code on your GitHub repository, you can fork the repository from the main branch; by pressing the 'Fork' button
* To get the web application's code on your local machine, you can clone the repository from the main branch or download the ZIP folder; by navigating to the 'Code' button
* After you can view or edit the code locally via a text editor 
* Otherwise to view the web application in a browser, navigate to the link below <br>
  [Link to live site](https://annal001.github.io/akan-name-generator/)
## Behavior Driven Development(BDD)
| **Behavior**                              | **Input Example**                           | **Output**                                                         |
|-------------------------------------------|:--------------------------------------------|:-------------------------------------------------------------------|
| When nothing is entered on the form       | Birthday = undefined, Gender = undefined    | HTML5 Form validation tooltips display, informing user to enter input    |
| When an invalid day is entered            | Birthday = 40-03-2020                       | Error alert displays, informing user of the valid day renge     |
| When an invalid month is entered          | Birthday = 12-13-2020                       | Error alert displays, informing user of the valid month range   |
| When the incorrect date format is entered | Birthday = ggggh                            | Error alert displays, informing user of the correct date format |
| When valid inputs are provided            | Birthday = 12-12-2020, Gender = Female      | Success alert displays with the corresponding Akan Name for the day of the week and gender     |   
## Technologies Used
* HTML - For structuring the website
* CSS - For custom styling the website
* Bootstrap - For predefined styles that take into account responsiveness and speed development time
* JavaScript - For implementation of business logic
## Support and contact details
Incase of any queries, you can reach me via email: lynn.nyangon@gmail.com
### License
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2022 **Lynn Nyangon**
