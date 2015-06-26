document.getElementById("foot01").innerHTML = 
	"<p>&copy; " + new Date().getFullYear() + " Wadams' website</p>";


document.getElementById("nav02").innerHTML = 
	"<div id='navbar'><ul>" +
	"<li><a href='index.html' class='index'>Home</a></li>" + 
	"<li><a href='sql.html' class='sql'>SQL</a></li>" +
	"<li><a href='javascript.html' class='javascript'>JavaScript</a></li>" +
	"<li><a href='#' class='contact'>Contact</a></li>"
	"</div></ul>";

/*document.getElementById("nav01").innerHTML = 
	"<ul id='menu'>" +
	"<li><a href='index.html'>Home</a></li>" +
	"<li><a href='customers.html'>Data</a></li>" +
	"<li><a href='about.html'>About</a></li>" +
	"</ul>";*/

// chagnes the backgound color on the javascript.html page
function changeBackground(c) {
	document.body.style.background = c;
	if (c != '#252526'){
		alert("Background color was chagned to " + c + ".");
	} else {
		alert("Background color has been reset.");
	}
}