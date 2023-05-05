const img = document.querySelector('img');

fetch('images/superman.png')
	.then((response) => response.blob())
	.then((myBlob) => {
		const imgPath = URL.createObjectURL(myBlob);
		img.src = imgPath;
	});
