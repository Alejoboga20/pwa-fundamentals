const url = 'https://reqres.in/api/users/1';

fetch(url)
	.then((response) => {
		// Check if the response is OK (200)
		if (response.ok) response.json().then((data) => console.log({ data }));

		throw new Error('Network response was not ok.');
	})
	.catch((error) => console.log({ error }));
