/* Callback */
const addOne = (number, callback) => {
	setTimeout(() => {
		callback(number + 1);
	}, 800);
};

addOne(10, (result) => console.log({ result }));

/* callback hell */
const restOne = (number, callback) => {
	if (number <= 1) return callback('invalid number');

	setTimeout(() => {
		callback(number - 1);
	}, 800);
};

restOne(2, (result) => {
	restOne(result, (result) => {
		restOne(result, (result) => console.log({ result }));
	});
});
