fetch('not-found.html')
	.then((response) => response.text())
	.then((html) => {
		const body = document.querySelector('body');
		body.innerHTML = html;
	})
	.catch((error) => console.log({ error }));
