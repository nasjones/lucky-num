function starOutGrid(grid) {
	let stars = [];
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == "*") {
				stars.push([i, j]);
			}
		}
	}

	let output = grid;
	for (let star of stars) {
		for (let i = 0; i < output.length; i++) {
			for (let j = 0; j < output[i].length; j++) {
				if (i == star[0] || j == star[1]) {
					output[i][j] = "*";
				}
			}
		}
	}
	return output;
}
