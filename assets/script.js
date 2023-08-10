/* Variable*/
var left = document.getElementById("left");
var right = document.getElementById("right");
var img = document.getElementById("img-banner")
var p = document.getElementById("p-banner")
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

//


// Fonction
left.addEventListener("click", () => dotChange("left"));
right.addEventListener("click", () => dotChange("right"));


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

function dotChange(direction){
	let dot = document.getElementsByClassName('dot')
	console.log(dot)
	for (var i = 0; i < dot.length; i++) {
		if (dot[i].classList.contains("dot_selected")) {
			selectedIndex = i;
			dot[i].classList.remove("dot_selected")
			console.log("Avant le +" + selectedIndex)
			if(direction == "left"){
				if(selectedIndex == 0){
					
					selectedIndex = dot.length -1
				}
				else{
					selectedIndex--
				}
			}
			else{
				if(selectedIndex == dot.length -1){
					console.log("Dans la boucle")
					selectedIndex = 0
				}
				else{
					selectedIndex++
				}
				
			}
			dot[selectedIndex].classList.add('dot_selected')
			img.src = "./assets/images/slideshow/" + slides[selectedIndex].image
			p.innerHTML = slides[selectedIndex].tagLine
			console.log("Apres " +selectedIndex)
			break; // Sortir de la boucle une fois que l'élément a été trouvé
		}
	}
}
	
