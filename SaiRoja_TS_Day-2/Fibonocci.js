function Fibonocci(n) {
    var n1 = 0;
    var n2 = 1;
    var n3;
    var i;
    console.log(n1);
    console.log(n2);
    for (i = 0; i < 10; i++) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
Fibonocci(10);
