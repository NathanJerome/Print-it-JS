/* Variable*/
var left = document.getElementById("left");
var right = document.getElementById("right");
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


//On teste si les élements sont detecté
console.log(left);
console.log(right);
console.log("il y'a dans le slider " + slides.length);


//On ajoute des evénement au clic
left.addEventListener("click", () => {alert('Bouton gauche')} );
right.addEventListener("click", () => {alert('Bouton droite')} );


// Fonction



function dot_generation(){
	for(let i = 0; i < slides.length; i++){
		// On crée notre balise dot
		let dot = document.createElement('span');
		//On ajoute a chacune la class dot
		dot.classList.add('dot');
		//On les ajotue dans notre page HTML
		document.getElementById('div_dots').appendChild(dot);
		console.log(i);
		//Condition
		if(i == 0){
			dot.classList.add('dot_selected')
		}
	}
	
	}

dot_generation();