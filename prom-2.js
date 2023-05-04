const addOne = (number) => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve(number + 1), 800);
	});

	return promise;
};

addOne(10)
	.then(addOne)
	.then(addOne)
	.then((result) => console.log({ result }));
