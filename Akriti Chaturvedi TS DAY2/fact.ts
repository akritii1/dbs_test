function fact(n : number) : number  {
console.log("factorial of a",n,"is");
var fact :number =1;
var num :number;
for (num=2; num <= n; ++num){
    fact = fact * num;
}
return fact;
}
console.log(fact(5));
  