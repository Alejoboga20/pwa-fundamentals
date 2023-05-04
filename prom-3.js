const addSlowlly = (number) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(number + 1), 800);
	});

const addFast = (number) =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(number + 1), 300);
	});

Promise.all([addSlowlly(10), addFast(15)]).then((result) => console.log({ result }));
