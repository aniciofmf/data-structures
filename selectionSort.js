const numbers = [9, 40, 6, 2, 1, 5, 69, 87, 283, 600, 544, 704, 8, 4, 0];

function selectionSort(array) {
	const { length } = array;

	for (let i = 0; i < length; i++) {
		let min = i;
		let temp = array[i];
		for (let j = i + 1; j < length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		array[i] = array[min];
		array[min] = temp;
	}
}

selectionSort(numbers);
console.log(numbers);
