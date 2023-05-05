const url = 'https://reqres.in/api/users';

const user = {
	name: 'test',
	job: 'engineer',
};

fetch(url, {
	method: 'POST',
	body: JSON.stringify(user),
	headers: {
		'Content-Type': 'application/json',
	},
})
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => console.error('Error:', error));
