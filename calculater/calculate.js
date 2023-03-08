
	function sum(a, b) {
		return a + b;
	}
	function sub(a, b){
		return a - b;
	}
	function mult(a, b){
		return a * b;
	}
	function dev(a, b){
		return a / b;
	}

	const operations = {
		sum: `+`,
		sub: `-`,
		mult: `*`,
		dev: `/`
	};

	function calculate (a, b, operation){
		let result = null;

	switch (operation){
		case operations.sum:
			result = sum(a, b);
			break;
			case operations.sub:
			result = sub(a, b);
			break;
			case operations.mult:
			result = mult(a, b);
			break;
			case operations.dev:
			result = dev(a, b);
			break;
	}	


	return result;
}
console.log(calculate(1, 3, `+`));