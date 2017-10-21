var numbers = [1,2,3,4,5,6,7,8,9,10];
function filtered(numbers){
	result = [];
	for(var i = 0; i < numbers.length;i++){
	 	if (numbers[i] % 2 ==0){
			result.push(numbers[i]);
		}
	}
	return result;
}
console.log(filtered(numbers));
