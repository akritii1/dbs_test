function pnz(num:number) :string{
    var pnz1 = (num > 0) ? "Positive" : (num == 0 ? "zero" : "Negative");
    return pnz1;
}
console.log(pnz(0));