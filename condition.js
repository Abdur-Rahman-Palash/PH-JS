// 1.
let burger = 500;
if(burger < 300 ){
    console.log("free coke")
}
else{
    console.log("30tk")
}
// 2.
let weight = 100;
let height = 1.5;
let BMI =  weight / (height * height);
if( BMI < 18.5){
    console.log(" you are underweight.")
}
else if(BMI >= 18.5 && BMI <= 24.9){
console.log("you are normal.")
}
else if(BMI >=25 && BMI <= 29.9){
    console.log("you are overweight.")
}
else{
    console.log("you are obese.")
}

// 3.
let score = 65;
if(score >=90 && score <=100){
    console.log("you got 'A'")
}
else if(score >=80 && score <=89){
    console.log("you got 'B'")
}
else if(score >=70 && score <=79){
    console.log("you got 'B'")
}
else if(score >=60 && score <=69){
    console.log("you got 'B'")
}
else if(score >=50 && score <=59){
    console.log("you got 'Fail'")
}
else{
    console.log("tomar jibon bekar")
}
// 4.
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore = 80;
let friendsScore = 75;

if(friendsScore > myScore){
    console.log("go for a lunch")
    if(friendsScore <= 80 && friendsScore >=60 ){
        console.log("good luck next time")
    }
    else if(friendsScore <= 60 && friendsScore >= 40){
console.log("friend's message unseen.")
    }
    else{
        console.log("block your friend")
    }
}
else{
    console.log("go to home and sleep and act sad")
}
// 5.

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
let num1 = 60;
let num2 =50;
let result = num1 + num2;
if(num1 > num2){
    result = num1*2
    console.log(result);
}
else{
    console.log(result);
}
let num3 = 70;
let num4 =60;
let totals = (num3 > num4) ?  num3*2 : num3 + num4 ;
console.log(totals);
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let ticketFare = 800;
let age = 20;
if(age < 10){
    console.log("free")
}
else if(age >= 48){
// 50% discount
let discount = ticketFare * 50 / 100;
let payAmount = ticketFare - discount;
console.log(payAmount);
}
else if(age <= 60){
    // 15% discount
    let discount = ticketFare * 15 / 100;
let payAmount = ticketFare - discount;
console.log(payAmount);
}
else{
    console.log("Regular ticket fare 800 tk");
}