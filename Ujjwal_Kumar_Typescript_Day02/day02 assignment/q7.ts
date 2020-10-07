

 function dataType(data: string|number): boolean
{
    var data1:string=data.toString();
	return data1.split('').reverse().join('') === data1;	  
}
console.log(dataType (8976));
console.log(dataType("parrap"));

console.log(dataType (8976798));
console.log(dataType("pgjkgfk"));