const url = 'https://reqres.in/api/users';

fetch(url)
	.then((response) => response.json())
	.then((data) => console.log({ data }));

fetch('https://www.wikipedia.org')
	.then((response) => response.text())
	.then((data) => {
		document.open();
		document.write(data);
		document.close();
	});
