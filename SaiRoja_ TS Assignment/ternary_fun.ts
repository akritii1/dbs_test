function Find_num(n:number):string
{
	if(n==0)
		return "zero";
	else if(n>0)
		return "positive";
	else
		return "negative";
}
console.log(Find_num(10));
