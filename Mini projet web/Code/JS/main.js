

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
*/

let destination = [
	{ pays: "Bali", dejeune: "oui" , animaux : "oui", basePrix : "1200"},
	{ pays: "Paris", dejeune: "non" , animaux : "oui", basePrix : "760"},
	{ pays: "ffff", dejeune: "oui" , animaux : "non", basePrix : "890"},
	{ pays: "dddd", dejeune: "non" , animaux : "non", basePrix : "500"},

];





window.onscroll = function() {  myFunction();};   /* Ajout sitcky ou non*/

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	// Get the header
	var header = document.getElementById('myTopnav');
	// Get the offset position of the navbar
	var sticky = myTopnav.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
}



//fonction d'envoie de mail dans la page contacte
function sendMail() {
	var input = document.getElementById('mail_texte');
	texte = input.value;
	var input = document.getElementById('mail_sujet');
	sujet = input.value;
	var input = document.getElementById('mail_nom');
	nom = input.value;

	window.location.href = "mailto:beldjilali.ilies@gmail.com?subject=" + sujet + "&body=" + texte + "%0A%0AMail envoyé par " + nom + " sur destineo voyage.";

}








//fonction de mise en place de l'ancre de retour en haut de page
jQuery(function(){
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100 ) { 
				$('#ancre').css('right','4%');
			} else { 
				$('#ancre').css('right','-100px');
			}

		});
	});
});



function contact(){
	location.reload();
} 


var onglet = document.querySelector("meta").getAttribute("name");
window.onload = function(){

	switch (this.onglet){
		case "Accueil":
			document.getElementById("1a").classList.add("active");
			break;
		case "QuiSommesNous":
			document.getElementById("2a").classList.add("active");
			this.document.getElementById("plan").classList.remove("contenu");
			this.document.getElementById("plan").classList.add("contenu1");
			break;
		case "Contact":
			document.getElementById("3a").classList.add("active");
			break;
		default:
			break;
	}

}

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
	},15);
	document.body.scrollTop = 0;
}


function fctTransfert(x){
	var id = x.id;
	switch(id){
		case "A1":
			window.location.href = "Reservation.html"+"?test=valeur1";
		break;
		case "A2":
			window.location.href = "Reservation.html"+"?test=valeur2";
		break;
		case "A3":
			window.location.href = "Reservation.html"+"?test=valeur3";
		break;
		case "A4":
			window.location.href = "Reservation.html"+"?test=valeur4";
		break;
		case "A5":
			window.location.href = "Reservation.html"+"?test=valeur5";
		break;
		case "A6":
			window.location.href = "Reservation.html"+"?test=valeur6";
		break;
		default:
			break;
	}
	
}



//-------------------------------------------------------------------------------------------calcule dynamique du prix


var basePrix = 40;
var prixAvion = 120;



function getPrice() {
	// récupération des variables
	var nbEnfants = parseInt(document.getElementById('res_nbEnfant').value) || 0;
	var nbAdulte = parseInt(document.getElementById('res_nbAdulte').value) || 0;
	var res_dejeuner = document.getElementById('res_dejeuner').checked || 0;
	var startDt = new Date(document.getElementById("res_depart").value);
	var endDt = new Date(document.getElementById("res_arrive").value);

	nbJours = Math.round((endDt - startDt) / (24 * 3600 * 1000)) || 0;

	var selectorParticipants = document.querySelectorAll("#participants > * ");
	// on verifie si les enfants sont accompagnes
	if (nbAdulte == 0 && nbEnfants > 0) {
		selectorParticipants[0].classList.add('has-error');
		selectorParticipants[1].classList.add('has-error');
		return ("Les enfants doivent êtres accompagnés");
	} else {
		selectorParticipants[0].classList.remove('has-error');
		selectorParticipants[1].classList.remove('has-error');
	}

	// verification des dates
	var selectorDate = document.querySelectorAll("#dates > * ");
	if (nbJours < 0) {

		selectorDate[0].classList.add('has-error');
		selectorDate[1].classList.add('has-error');

		//document.getElementById('totalPrice').classList.add('error'); a mettre en rouge

		return ("Veuillez choisir une date posterieur au départ");
	} else {
		selectorDate[0].classList.remove('has-error');
		selectorDate[1].classList.remove('has-error');
	}

	return ("Prix total: " + parseInt(nbJours * (nbEnfants + nbAdulte) * res_dejeuner * 12 + Math.round((nbEnfants * 0.4 + nbAdulte) * basePrix)) + " EUR");
}

function calculateTotal() {
	var total = getPrice();

	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = total;
	totalEl.style.display = 'block';
}

//------------------------------------------------------------------------recherche de destination page d'accueil


var basePrix = 40;
var prixAvion = 120;



function getPrice() {
	// récupération des variables

	var recherchePetitDejeuner = document.getElementById('recherchePetitDejeuner').checked || 0;
	var rechercheAnimaux = document.getElementById('rechercheAnimaux').checked || 0;
	var rechercheDate = new Date(document.getElementById("rechercheDate").value);

	nbJours = Math.round((endDt - startDt) / (24 * 3600 * 1000)) || 0;

	var selectorParticipants = document.querySelectorAll("#participants > * ");
	// on verifie si les enfants sont accompagnes
	if (nbAdulte == 0 && nbEnfants > 0) {
		selectorParticipants[0].classList.add('has-error');
		selectorParticipants[1].classList.add('has-error');
		return ("Les enfants doivent êtres accompagnés");
	} else {
		selectorParticipants[0].classList.remove('has-error');
		selectorParticipants[1].classList.remove('has-error');
	}

	// verification des dates
	var selectorDate = document.querySelectorAll("#dates > * ");
	if (nbJours < 0) {

		selectorDate[0].classList.add('has-error');
		selectorDate[1].classList.add('has-error');

		//document.getElementById('totalPrice').classList.add('error'); a mettre en rouge

		return ("Veuillez choisir une date posterieur au départ");
	} else {
		selectorDate[0].classList.remove('has-error');
		selectorDate[1].classList.remove('has-error');
	}

	return ("Prix total: " + parseInt(nbJours * (nbEnfants + nbAdulte) * res_dejeuner * 12 + Math.round((nbEnfants * 0.4 + nbAdulte) * basePrix)) + " EUR");
}

function calculateTotal() {
	var total = getPrice();

	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = total;
	totalEl.style.display = 'block';
}



//----------------------------------------------------------------------------------Validation formulaire de contact



function validateForm()                                    
{ 
var name = document.forms["myForm"]["name"];               
var email = document.forms["myForm"]["email"];    
var message = document.forms["myForm"]["message"];   

if (name.value == "")                                  
{ 
	document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
	name.focus(); 
	return false; 
}else{
	document.getElementById('errorname').innerHTML="";  
}
   
if (email.value == "")                                   
{ 
	document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
	email.focus(); 
	return false; 
}else{
	document.getElementById('erroremail').innerHTML="";  
}

if (email.value.indexOf("@", 0) < 0)                 
{ 
	document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
	email.focus(); 
	return false; 
} 

if (email.value.indexOf(".", 0) < 0)                 
{ 
	document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide"; 
	email.focus(); 
	return false; 
} 

if (message.value == "")                           
{
	document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
	message.focus(); 
	return false; 
}else{
	document.getElementById('errormsg').innerHTML="";  
}

return true; 
}