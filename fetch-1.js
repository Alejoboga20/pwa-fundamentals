console.log('here');
const request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = (state) => {
	if (request.readyState === 4) {
		console.log(JSON.parse(request.responseText));
	}
};
