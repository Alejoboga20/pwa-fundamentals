const addOne = (number) => {
	let promise = new Promise((resolve, reject) => {
		if (number >= 12) reject(`Number is: ${number}`);

		setTimeout(() => resolve(number + 1), 800);
	});

	return promise;
};

addOne(10)
	.then(addOne)
	.then(addOne)
	.then((result) => console.log({ result }))
	.catch((error) => console.log({ error }));
