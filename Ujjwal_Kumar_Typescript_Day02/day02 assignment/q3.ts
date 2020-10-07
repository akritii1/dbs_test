
function fib(n:number){
var num1:number=0;
var num2:number=1;
var i:number;

console.log(num1);
console.log(num2);
var temp:number;
for(i=1;i<=(n-2);i++)
{
    temp=num1+num2;

    console.log(temp);
    num1=num2;
    num2=temp;
}
}
fib(10);