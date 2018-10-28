const sumOfOther = (arr) => {
	if (arr.length === 0) {
		alert("массив пуст!");
		return;
	}
	let sum = arr.reduce((acc, elem) => acc + elem);
	return arr.map( elem => sum - elem );
};
