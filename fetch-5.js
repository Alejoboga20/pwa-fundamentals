const url = 'https://reqres.in/api/users/1';

fetch(url).then((response) => {
	response
		.clone()
		.json()
		.then((data) => console.log({ data }));

	response.json().then((data) => console.log({ data }));
});
