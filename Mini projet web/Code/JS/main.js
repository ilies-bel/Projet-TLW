


//----------------------------------------------------Chargement APi Page d'accueil



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

//-----------------------------------------------------------------------------Grille CSS page d'accueil

let xhttp = [];
let dest = [];



function gridGen() {
	fetch("http://127.0.0.1:5500/data.json")
		.then(function (resp) {
			resp.json().then(function (data) {
				dest = data.destination;




				document.getElementsByTagName("body").onload = buildDestination();

				function buildDestination() {
					let template = document.querySelector("#destination");
					var cTemp;

					for (const v of dest) {// itère sur le tableau

						let clone = document.importNode(template.content, true);      // clone le template


						xhttp[v] = new XMLHttpRequest();
						xhttp[v].onreadystatechange = function () {
							if (this.readyState == 4 && this.status == 200) {
								var data = JSON.parse(this.responseText);
								var kTemp = data.main.temp;

								cTemp = (kTemp - 273.15).toFixed(1);
								newContent = clone.firstElementChild.innerHTML

									.replace(/{{ville}}/g, v.ville)
									.replace(/{{pays}}/g, v.pays)
									.replace(/{{image}}/g, v.image)
									.replace(/{{idDestination}}/g, v.idDestination)
									.replace(/{{cTemp}}/g, cTemp);

								clone.firstElementChild.innerHTML = newContent;

								document.querySelector("#grille").appendChild(clone);		// On ajoute le clone créé


							}

						}
						xhttp[v].open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=' + v.ville + '&appid=b86d21440d8c9a110912a2eb0845abb4', true);
						xhttp[v].send();


					}



				}


			})
		})
}


window.onscroll = function () { myFunction(); };   /* Ajout sitcky ou non*/

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
jQuery(function () {
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#ancre').css('right', '4%');
			} else {
				$('#ancre').css('right', '-100px');
			}

		});
	});
});



function contact() {
	location.reload();
}


var onglet = document.querySelector("meta").getAttribute("name");
window.onload = function () {

	this.buildPage();

	switch (this.onglet) {
		case "Accueil":
			this.gridGen();
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
		case "Recapitulatif":
			this.recapitulatif();
			break;
		default:
			break;
	}

}

function scrollToTop(scrollDuration) {
	var scrollStep = -window.scrollY / (scrollDuration / 15),
		scrollInterval = setInterval(function () {
			if (window.scrollY != 0) {
				window.scrollBy(0, scrollStep);
			}
			else clearInterval(scrollInterval);
		}, 15);
	document.body.scrollTop = 0;
}


function fctTransfert(x) {
	var id = x.id;
	switch (id) {
		case "A1":
			window.location.href = "Reservation.html" + "?test=valeur1";
			break;
		case "A2":
			window.location.href = "Reservation.html" + "?test=valeur2";
			break;
		case "A3":
			window.location.href = "Reservation.html" + "?test=valeur3";
			break;
		case "A4":
			window.location.href = "Reservation.html" + "?test=valeur4";
			break;
		case "A5":
			window.location.href = "Reservation.html" + "?test=valeur5";
			break;
		case "A6":
			window.location.href = "Reservation.html" + "?test=valeur6";
			break;
		default:
			break;
	}

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

	return ("Prix total: " + parseInt(nbJours * ((nbEnfants + nbAdulte) * res_dejeuner * 12) + (Math.round((nbEnfants * 0.4 + nbAdulte) * basePrix))) + " EUR");
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


//--------------------------------------------------------Builder de page pour afficher le header et footer automatiquement

function buildPage() {
	var header = '<div class="background-image"><div class="layer"><div class="topnav" id="myTopnav"><!--<span id="logo" class="logo"></span>--><span id="contenuMenu" class="menu "><a href="Accueil.html" id="1a">Accueil</a><a href="QuiSommesNous.html" id="2a">Qui sommes-nous</a><a href="contact.html" id="3a" onclick="">Contact</a><a href="javascript:void(0);"class="icon" onclick="myFunction()"><i class="fa fa-bars"></i> </a></span></div><div class="homepage-title"><h1>Découvrez le Monde</h1><h1>Découvrez-vous</h1></div></div></div>';
	var footer = '<div class="foot"><div class="footer-wrapper"><div class="social-icons-wrapper"><div class="social-footer-icon"><a href="https://www.facebook.com/" target="_blank"><span class="social-footer-facebook"></span></a></div><div class="social-footer-icon"><a href="https://www.instagram.com/" target="_blank"><span class="social-footer-instagram"></span></a></div><div class="social-footer-icon"><a href="https://www.pinterest.com/" target="_blank"><span class="social-footer-pinterest"></span></a></div></div><div class="links"><p class="footerLink"><a href="Accueil.html">Accueil</a></p><p class="footerLink"><a href="contact.html">Contactez-nous</a></p><p class="footerLink"><a href="QuiSommesNous.html">A propos</a></p><p class="footerLink"><a href="politique-de-confidentialite">Politique de confidentialité</a></p></div><div class="copyrights"><span>DestiNeo © 2020</span><br><span>Tous droits réservés</span></div></div></div>';
	var ancre = ' <div id="ancre" class="ancre" onclick="scrollToTop(500)"><a href="#haut"><img src="Ressources/top.png" /></a></div>'

	$("#header").append(header);
	$("#footer").append(footer);
	$("#buildAncre").append(ancre);
	//document.getElementById("buildAncre").innerHTML = ancre;

}


//------------------------------------------------------
//-------------------------------------------------------



function recapitulatif() {
	var nom;
	var prenom;
	var datearrivee;
	var datedepart;
	var nbA;
	var nbE;

	var infos = location.search;
	var teste = location.search;
	infos = decodeURI(infos);
	infos = infos.split('&');

	nom = infos[0].split('=');
	nom = nom[1].split('?nom,');
	nom = nom[0].replace("+", "");

	prenom = infos[1].split('=');
	prenom = prenom[1].split('prenom,');
	prenom = prenom[0].replace("+", "");

	nbA = infos[4].split('=');
	nbA = nbA[1].split('nbAdulte,');

	nbE = infos[5].split('=');
	nbE = nbE[1].split('nbEnfant,');

	datedepart = infos[6].split('=');
	datedepart = datedepart[1].split('depart,');

	datearrivee = infos[7].split('=');
	datearrivee = datearrivee[1].split('arrivee,');


	console.log(teste);



	document.getElementById('paraRecap').innerHTML = 'Merci de nous faire confiance ! Voici un récapitulatif de votre réservation.<br>Vous le recevrez également par mail.';
	document.getElementById('paraRecap2').innerHTML = 'La réservation est au nom de : ' + nom.toString() + ' ' + prenom.toString() + '<br>pour ' + nbA + ' adulte(s) et ' + nbE + ' enfant(s),' + '<br>pour un depart le : ' + datedepart + '<br> et un retour le : ' + datearrivee;
	document.getElementById('paraRecap3').innerHTML = '<br> Veuillez-nous contacter pour toute autre question.';
}