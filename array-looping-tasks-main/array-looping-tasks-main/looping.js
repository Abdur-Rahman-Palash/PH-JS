const colors = ['red', 'blue', 'green', 'yellow', 'orange']
for(let i = colors.length-1; i>=0; i--){
    const color = colors[i];
console.log(color);
}






const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
    even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);



var number = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatNumber = number.concat(" ");
console.log(concatNumber);