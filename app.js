document.write("<h1>Javascript_Arrays-Assignment</h1>")
document.write("<h3>Array</h3>")
document.write("<hr>");
//Q1: Write a program to create a single string from the below 
//mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)
document.write("<h3>Question:1 (join method)</h3>");
var arr = ["This ", " is ", " my ", " cat"];
document.write("The Array: "+ arr);
document.write("<br>")
var singleString = arr.join("");
// Result 
document.write("After conversion into string: " + singleString); 
document.write("<hr>");


//Q2:Declare an empty array using JS literal notation to store 
//student names in future

document.write("<h3>Question:2 (literal notation)</h3>");
var studentNames = []; //array

// Students names
studentNames.push(" Nimra ");
studentNames.push(" Faizan ");
studentNames.push(" Maha ");

document.write(studentNames);
document.write("<hr>");


//Q3: Declare an empty array using JS object notation to store 
//student names in future

document.write("<h3>Question:3 (object notation)</h3>");
var studentNames2 = new Array();

// Students names
studentNames2.push(" Atka ");
studentNames2.push(" Azka ");
studentNames2.push(" Talha ");

document.write(studentNames2);
document.write("<hr>");

//Q4:. Declare and Initialize an array and store available mobile 
//networks in Pakistan.
document.write("<h3>Question:4 (select some device using slice</h3>");


// Array of devices
var devices = ["zong", "warid", "Telenor", "ufone",];

// Select the first 3 devices
var selectedDevices = devices.slice(0, 2); // Selects devices at index 0, 1, 2

// Display selected devices
document.write("<h3>Selected Devices:</h3>");
document.write(selectedDevices);
document.write("<hr>");


//Q5:Write a program to store student scores in an array & sort 
//the array in ascending order using Arrays sort method.

document.write("<h3>Question:5 (sort ascending order)</h3>");
var studentScoring = [85 , 92 , 78 , 65 , 88 , 73 , 91];

document.write("Laiba scroing:" +" "+ studentScoring + "<br>");
//sort method for ascending order
studentScoring.sort(function(a, b) {
    return a - b;  
});
document.write("Sorted Laiba Scoring in Ascending Order:" +" "+studentScoring);