var fact =1;

function factorial(num){

if (num <0)
	console.log("Factorial doesn't exist");
else if(num==0)
	console.log("Factorial of 0 is 1");
else {
	for (var i=num;i>0;--i){
	fact = fact*i;
	}
	console.log("Factorial of the number is: " + fact);
}
}

factorial(3);
