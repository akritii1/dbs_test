function checknum (n1: number) :string
{
    if (n1 == 0)
        return "zero";
    else if ( n1 > 0 )
        return "positive";   
	else
        return "negative";
}

console.log("The Given Number is : " + checknum(57));