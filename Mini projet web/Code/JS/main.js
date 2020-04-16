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
window.onscroll = function() {  myFunction();};   /* Ajout sitcky ou non*/
function sendMail() {


	var input = document.getElementById('mail_texte');
	texte = input.value;
	var input = document.getElementById('mail_sujet');
	sujet = input.value;
	var input = document.getElementById('mail_nom');
	nom = input.value;

	window.location.href = "mailto:beldjilali.ilies@gmail.com?subject=" + sujet + "&body=" + texte + "%0A%0AMail envoyé par " + nom + " sur destineo voyage.";

}

// When the user scrolls the page, execute myFunction



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

window.onlo



function ancreFct() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}