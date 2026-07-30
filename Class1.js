const num=[1,2,3,4,5,6,7,8,9,10];
const evenNum=num.filter((n)=>n%2==0);
console.log("Even Numbers are:",evenNum);

const oddNum=num.filter((n)=>n%2!=0);
console.log("Odd Numbers are:",oddNum);

const squareNum=num.map((n)=>n*n);
console.log("Square of Numbers are:",squareNum)