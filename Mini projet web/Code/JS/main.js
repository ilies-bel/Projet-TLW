/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function sendMail() {


	var input = document.getElementById('mail_texte');
	texte = input.value;
	var input = document.getElementById('mail_sujet');
	sujet = input.value;
	var input = document.getElementById('mail_nom');
	nom = input.value;


	window.location.href = "mailto:beldjilali.ilies@gmail.com?subject=" + sujet + "&body=" + texte + "%0A%0AMail envoyé par " + nom + " sur destineo voyage.";


}

