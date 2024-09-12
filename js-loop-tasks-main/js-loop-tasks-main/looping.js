const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversedColors= [];
for(let i = colors.length-1; i>=0; i--){
    const color = colors[i];
    reversedColors.push(color);
}
console.log(reversedColors);





const numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];
for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
    even.push(numbers[i]);
}
console.log(`Even numbers in an array are: ${even}`);





const cartoons = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = "";
for (const cartoon of cartoons) {
    result += cartoon; 
}
console.log(result); 



const sentence = 'I am a hard working person';
const reversedSentence = sentence.split(" ").reverse(" ").join(' ');
console.log(reversedSentence);



