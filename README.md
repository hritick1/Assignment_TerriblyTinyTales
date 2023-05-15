TerriblyTinyTales is a React application that analyzes text data and displays the frequency of each word using a histogram. The application also provides a tabular view of the data and allows users to export the data in an Excel file.

Installation
To install the application, you need to clone this repository and run the following command:
npm install
This will install all the required dependencies for the application.

Usage
To start the application, run the following command:
npm start
This will start the application and open it in your default browser.

Data Module
Using Axios fetches the data and returns to App component

Hash Class
Hash class is used for hashing the words and counting their frequency

Algo Component
Here the data is used from app component and converted to array and then using Hash class we count the frquency of each words and top 20 are returned back to App js along with their frequency.

Home Component
The Home component is the first page of the application. Here, the user needs to enter their name and email and click on the submit button to view the next component.

Main Component
The Main component is the main page of the application. Here, the user can view the frequency of each word in the provided text data using a histogram and a tabular view.

Histogram
The Histogram component takes in an array of words and their frequency and converts it into a histogram using React Chart.js.

Excel
The Excel component is provided with an array of words and their frequency. It uses the xlsx and file-saver libraries to convert the data into an Excel file and export it.

Libraries Used
The following libraries were used to develop this application:

React Material UI
Axios
Chart.js
SheetJS-style
XLSX
React Toastify
File-saver

Deployment
The application is deployed on Vercel and can be accessed at https://terriblytales.vercel.app/

Contributing
Contributions are welcome! Please create a pull request or an issue if you want to contribute to the application.
