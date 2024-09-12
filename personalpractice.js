const numbers = [1,2,3,4,5,6,7,8,9,834,456,324545,44,4];
for(const num of numbers){
    console.log(num);
}
const fruits = [ " orange", "apple","banana","jackfruit","pineapple","water-melon"];
for(const fruit of fruits){
    console.log(fruit);
}
let num = 0;
let sum =0;
while(num<=10){
    console.log(num);
    sum = sum + num;
    console.log('sum is:' , sum);
    num++;
    if(num% 2 ===0){
        console.log('even number is:', num);
    }
    if(num% 2 ===1){
        console.log('0dd number is:', num);
    }
}

for(let i =0; i <=20; i++){
   
    if(i> 12){
        break;
    }
    console.log(i);
}

let n =50;
while(n>30){
    console.log(n);
    if(n<22){
        break;
    }
    n--;
}
for(let i =0; i<10; i++){
    if(i % 2 ===0){
        continue;
    }
    console.log(i);
}