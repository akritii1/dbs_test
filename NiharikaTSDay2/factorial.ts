
function factorial(
	n: number,
	value: number = 1
): number {
	if(n === 1)
		return value

	return factorial(n - 1, n * value)
}

console.log(factorial(5)) //  yields 120