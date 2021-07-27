function snakeToCamel(input) {
	let output = "";
	// for (let i = 0; i < input.length; i++) {
	// 	if (input[i] == "_") {
	// 		i++;
	// 		output += input[i].toUpperCase();
	// 	} else {
	// 		output += input[i];
	// 	}
	// }

	let space = false;
	for (let char of input) {
		if (char == "_") {
			space = true;
		} else if (space) {
			output += char.toUpperCase();
			space = false;
		} else {
			output += char;
		}
	}

	return output;
}
