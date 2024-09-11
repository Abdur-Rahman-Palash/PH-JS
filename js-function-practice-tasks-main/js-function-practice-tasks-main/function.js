function multiply(num1,num2,num3,num4){
    const multiplication = (num1 * num2 * num3 * num4);
    return multiplication;
}
const goon = multiply(2,4,6,8);
console.log(goon);
 function math(number){
    if(number%2===0){
        console.log("even number");
        return number /2;
    }
    else{
        console.log("odd number");
        return number *2;
    }
 }
 console.log(math(8));
 console.log(math(7));


 function calculateDailyMoneyRemaining(foodsBillAmount){
    
    let price =150;
    let totalSell = price *50;
    let expense = 500;
    let breakfast = 60;
    let totalBreak = breakfast *10;
    let inTotal = expense + totalBreak;
    let result = totalSell - inTotal;
    return result;
 }
 console.log(calculateDailyMoneyRemaining(10));
 console.log(calculateDailyMoneyRemaining(-10));
 




 const heights =[34,56,33,24,57,89,83,78];
 function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(max > num){
            max = num;
        }
    }
    return max;
 }
 let max = getMax(heights);
 console.log(max);