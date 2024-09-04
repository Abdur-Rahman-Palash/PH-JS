/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
const text = "I will invest at least 6 hrs every single day for next 60 days!";
const totalCount = 60;
let beginCount = 0;
let output = "";
while(beginCount<=totalCount){
    output+=text;
    beginCount++;
}
console.log(output);

for(let i = 0; i<=totalCount; i++){
    output+=text;
    console.log(output);
}
