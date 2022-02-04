$(document).ready(loading());

function loading(){
	setTimeout(function(){
		document.getElementById('loader').style.visibility="hidden";
	},1000);   
}