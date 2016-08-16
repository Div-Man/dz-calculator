var calculator = function(firstNumber){
	this.firstNumber = firstNumber

	this.sum = function(){
		var result = 0;
		for(var i = 0; i < arguments.length; i++){
			result = result+arguments[i]
		}
		return firstNumber+result
	}

	this.dif = function(){
		var result = 0;
		for(var i = 0; i < arguments.length; i++){
			result = result-arguments[i]
		}
		return firstNumber+result
	}


	this.div = function(){
		var result = firstNumber;
		for(var i = 0; i < arguments.length; i++){
			if(arguments[i] === 0){
				console.error('На нуль делить нельзя')
				return;
			}
			else{
				result = result/arguments[i]
			}
		}
		 return result
	}

	this.mul = function(){
		var result = firstNumber;
		for(var i = 0; i < arguments.length; i++){
			result = result*arguments[i]
		}
		return result
	}
}

var myCalculator = new calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log(myCalculator.div(0, 2))






