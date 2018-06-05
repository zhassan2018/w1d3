function countLetters(input){
	
	var input1 = input.split(" ").join('').toLowerCase();
	console.log(input1);

	var final={};

	for (var i=0; i<input1.length; i++){
		
		if (input1[i] in final){
			final[input1[i]]["count"]+=1;
			final[input1[i]]["index"].push(i) 
		}

		else{
			final[input1[i]] = {count:1, index:[i]}
		}


	}



	return final
}

console.log(countLetters("Lighthouse in the house"))

