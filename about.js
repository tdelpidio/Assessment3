console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector('img')

img.addEventListener('mouseover', () =>{
	alert('You are awesome!')
});

