function fib(n:number):void
{
	//var n=10;
var a=0,b=1;
var c=0;
console.log("fibnocii series");
console.log(a);
console.log(b);
for(var i=0;i<=n;i++)
{
	c=a+b;
	a=b;
	b=c;
	console.log(c);
}
}
//function prime(n)
function fact(n:number):void
{
	//var n=5;
var fact=1;
if (n < 0)
        console.log("Error!");
    else {
        for (var i = 1; i <= n; ++i) {
            fact *= i;
        }
        console.log("factorial:" + fact);
    }
}
fact(10);
fib(10);