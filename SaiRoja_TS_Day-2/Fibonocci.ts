function Fibonocci(n:number):void
{
	var n1:number=0;
	var n2:number=1;
	var n3:number;
	var i:number;
	console.log(n1);
	console.log(n2);
	for(i=0;i<10;i++){
		n3=n1+n2;
		console.log(n3);
		n1=n2;
		n2=n3;
	}
}
Fibonocci(10);