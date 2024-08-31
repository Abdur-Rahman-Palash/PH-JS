/* 
js-array-tasks
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array*/
var fruits = ["mango","orange","banana","jackfruit","pineapple"];
var fruit = fruits[3];
console.log(fruit);
fruits[2] = "jambura";
console.log(fruits);

/*2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output */
var touristDestinations = ["Coxsbazar", "Bandarban", "Saintmartin"];
console.log(touristDestinations);
touristDestinations.push("Rangamati", "Chittagong","Sylhet");
touristDestinations.pop();
console.log(touristDestinations);

/*3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */
 var books = ["Bangla", "English" ,"Math", "Physics", "Chemistry", "Biology"];
 console.log(books)
 var subject = books.includes("Islam");
 console.log(subject);
/*4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.*/
var numbers = [1,2,3,4,5,6,7,8,9,"salam", "kalam", true]
console.log(Array.isArray(numbers));
var boys = ["salam", "kalam", true]
console.log(Array.isArray(boys));
var fraction = [6.6,7.7,8.8,9.9,"salam", "kalam"]
console.log(Array.isArray(fraction));
/*5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/
var devices = ["laptop", "computer","mobile","tablet","Television"];
console.log(devices)
var phonesName =["Samsung","Vivo","Infinix","Realme","Iphone"];
console.log(phonesName);
var twoParts =  devices.concat(phonesName);
console.log( twoParts );