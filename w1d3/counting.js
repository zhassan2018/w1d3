function countLetters(input){
	
	var input1 = input.split(" ").join('').toLowerCase();
	console.log(input1);

	var final={};

	for (var i=0; i<input1.length; i++){
		
		if (input1[i] in final){
			final[input1[i]]+= 1 
		}

		else{
			final[input1[i]] = 1
		}


	}
	return final
}

console.log(countLetters("Lighthouse in the house"))

