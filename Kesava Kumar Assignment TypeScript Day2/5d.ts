function prime(n:number){
//var n:number =0;

for(var i=2;i<30;i++){
	
	var h:boolean=false;
	for(var j=2;j<=i/2; ++j){
	
		if(i%j==0){
			h=true;
			break;
			}
	}
	if(h==false){
		console.log(i);
		n--;
	}
	if(n==0){
		break;
	}
}
}
prime(10);
	