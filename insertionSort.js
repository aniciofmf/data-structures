const numbers = [9, 40, 10, 2, 1, 5, 69, 87, 283, 0, 600, 544, 704, 8, 4];

function insertionSort(array) {
	const { length } = array;

	for (let i = 1; i < length; i++) {
		let pos = i - 1;

		if (array[i] < array[pos]) {
			let elem = array[i];
			array[i] = null;
			for (var j = pos; elem < array[j] && j >= 0; j--) {
				array[j + 1] = array[j];
			}

			array[j + 1] = elem;
		}
	}
}

insertionSort(numbers);
console.log(numbers);
