//--------------------------------------------------------Builder de page pour afficher le header et footer automatiquement

function buildPage() {
	var header = '<div class="background-image"><div class="layer"><div class="topnav" id="myTopnav"><!--<span id="logo" class="logo"></span>--><span id="contenuMenu" class="menu "><a href="Accueil.html" id="1a">Accueil</a><a href="QuiSommesNous.html" id="2a">Qui sommes-nous</a><a href="contact.html" id="3a" onclick="">Contact</a><a href="javascript:void(0);"class="icon" onclick="myFunction()"><i class="fa fa-bars"></i> </a></span></div><div class="homepage-title"><h1>Découvrez le Monde</h1><h1>Découvrez-vous</h1></div></div></div>' ;
	var footer = '<div class="foot"><div class="footer-wrapper"><div class="social-icons-wrapper"><div class="social-footer-icon"><a href="https://www.facebook.com/" target="_blank"><span class="social-footer-facebook"></span></a></div><div class="social-footer-icon"><a href="https://www.instagram.com/" target="_blank"><span class="social-footer-instagram"></span></a></div><div class="social-footer-icon"><a href="https://www.pinterest.com/" target="_blank"><span class="social-footer-pinterest"></span></a></div></div><div class="links"><p class="footerLink"><a href="Accueil.html">Accueil</a></p><p class="footerLink"><a href="contact.html">Contactez-nous</a></p><p class="footerLink"><a href="QuiSommesNous.html">A propos</a></p><p class="footerLink"><a href="politique-de-confidentialite">Politique de confidentialité</a></p></div><div class="copyrights"><span>DestiNeo © 2020</span><br><span>Tous droits réservés</span></div></div></div>' ;
	var ancre = ' <div id="ancre" class="ancre" onclick="scrollToTop(500)"><a href="#haut"><img src="Ressources/top.png" /></a></div>'

	$("#header").append(header);
	$("#footer").append(footer);

	document.getElementById("buildAncre").innerHTML = ancre ;
}













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



//fonction d'envoie de mail dans la page contact
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

	this.buildPage();

	switch (this.onglet){
		case "Accueil":
			document.getElementById("1a").classList.add("active");
			break;
		case "QuiSommesNous":
			document.getElementById("2a").classList.add("active");
			//this.document.getElementById("plan").classList.remove("contenu");
			//this.document.getElementById("plan").classList.add("contenu1");
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

//--------------------------------------------------------------------------- Fonction de transfert du formulaire a la page récapitulatif


function recapitulatif(){

	window.location.href = "Contact.html";

}




//-------------------------------------------------------------------------------------------calcule dynamique du prix


var basePrix = 500;
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

	return ("Prix total: " + parseInt(nbJours * ((nbEnfants + nbAdulte) * res_dejeuner * 12 ) + (Math.round((nbEnfants * 0.4 + nbAdulte) * basePrix) )) + " EUR");
}

function calculateTotal() {
	var total = getPrice();

	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = total;
	totalEl.style.display = 'block';
}

//------------------------------------------------------------------------recherche de destination page d'accueil
/*

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


function verificateur(){
	window.location.href = "Recapitulatif.html";
}
*/

