const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');

color.addEventListener('click', () => {
    alert("My fave color is black, but I'm not evil")
})

place.addEventListener('click', () => {
    alert("My favorite place is Lake Placid.")
})

ritual.addEventListener('click', () => {
    alert("Walking my dogs!")
})

const meatloaf = document.querySelector('#Meatloaf')
const bigsby = document.querySelector('#Bigsby')
const oliver = document.querySelector('#Oliver')

meatloaf.addEventListener('click', () => {
    alert('Meatloaf is a silly 10 year old tan and white kitty. He LOVES to eat, sleep and jumping out to scare Bigsby and Oliver. He has the sweetest little kitty soul.')
})

bigsby.addEventListener('click', () => {
    alert('Bigsby is a sweet 8 year old white and silver mini schnauzer. He is the sweetest and most loyal pup ever! He loves pets, walks and snacks.')
})

oliver.addEventListener('click', () => {
    alert('Oliver is a crazy 4 year old black mini schnauzer. He is the wild child. He loves to play, play, run, bark and play. Although he appears wild, he is scared of absolutely everyone except his parents and hides when people come over his house')
})