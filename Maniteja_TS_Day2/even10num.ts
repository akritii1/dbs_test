function printEven(num) {
  for (var i=1; i<=num; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}
printEven(20);