/*-----------------------------------------
*
*		  CONFIG. FENETRE STATION
*
-----------------------------------------*/
// Variable de la fenêtre
var station_infos = document.getElementById('station-infos');
var station_infos_body = document.getElementsByClassName('station-infos-body')[0];
var booking_infos_body = document.getElementsByClassName('booking-infos-body')[0];
var booking_btn = document.getElementById('booking-btn');
var booking_btn_confirm = document.getElementById('booking-btn-confirm');
var clear_modal_alert = document.getElementById('modal-alert');
var clear_canvas = document.getElementById('clearCanvas');
clear_canvas.className = 'text-primary-color accent-lime-color';

	
// Variable de l'élément qui ferme la fenêtre
var station_infos_close = document.getElementsByClassName('station-infos-close-btn')[0];

// Fermeture de la fenêtre
station_infos_close.onclick = function() {
	overlay.style.display = 'none';
	station_infos.style.display = 'none';
	station_infos_body.style.display = 'block';
		
	booking_infos_body.style.display = 'none';
	booking_btn.style.display = 'block';
	booking_btn_confirm.style.display = 'none';
	
	clear_modal_alert.style.display = 'none';
}
	

/*-------------------------------------------------------------------
*
*					SESSION STORAGE VALIDE
*
-------------------------------------------------------------------*/
// Vérification si navigateur supporte le HTML5 storage
if (typeof(Storage) == 'undefined' ) {
	alert('Votre navigateur ne supporte pas le stockage de données. Merci de mettre à jour votre navigateur.');
} 
else {
	console.log('localStorage et sessionStorage sont supportés.');
}

	
/*-------------------------------------------------------------------
*
*			CONSTRUCTION DU CANVAS ET ÉVÉNEMENT RÉSERVATION
*
-------------------------------------------------------------------*/
// Intervale régulier pour dessiner via l'écran mobile et tablette
window.requestAnimFrame = (function (callback) {
	return window.requestAnimationFrame || 
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimaitonFrame ||
		function (callback) {
		 	window.setTimeout(callback, 1000/60);
		};
})();

// Déclaration des variables pour le canvas
var canvas = document.getElementById('sign-in');
var canvas_blank = document.getElementById('blank');
var sign = canvas.getContext("2d");
sign.strokeStyle = colorStrokeStyle;
sign.lineWidth = signLineWidth;
sign.lineJoin = signLineJoin;

// Déclaration des variables UI
var sign_text = document.getElementById("sign-dataUrl");
// Effacer le canvas
var clear_btn = document.getElementById('clearCanvas');
// Initialise une variable vide pour comparaison
var empty_canvas = canvas.toDataURL();


// Efface le canvas et reset du textarea fictif
clear_btn.addEventListener("click", function (e) {
	clearCanvas();
	sign_text.innerHTML = '';
}, false);
	
	
/*-------------------------------------------------------------------
*	   DÉCLARATION DES ÉVÉNEMENTS SOURIS, MOBILE ET TABLETTE
*********************************************************************
*
* mousedown : Evenement pour l'activation du mode dessiner
* mouseup   : Désactivation du mode dessiner
* mousemove : L'utilisateur dessine tant que mousedown est actif
* drawing   : Variable pour activer le mode dessiner
*
*------------------------------------------------------------------*/
var drawing = false;
var mousePos = { x:0, y:0 };
var lastPos = mousePos;


/*-------- SOURIS --------*/
canvas.addEventListener("mousedown", function (e) {
	drawing = true;
	lastPos = getMousePos(canvas, e);
}, false);

canvas.addEventListener("mouseup", function (e) {
	drawing = false;
}, false);

canvas.addEventListener("mousemove", function (e) {
	mousePos = getMousePos(canvas, e);
}, false);

/*-------- MOBILE ET TABLETTE --------*/
canvas.addEventListener("touchstart", function (e) {
	mousePos = getTouchPos(canvas, e);
	var touch = e.touches[0];
	var mouseEvent = new MouseEvent("mousedown", {
		clientX: touch.clientX,
		clientY: touch.clientY
	});
	canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchend", function (e) {
	var mouseEvent = new MouseEvent("mouseup", {});
	canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener("touchmove", function (e) {
	var touch = e.touches[0];
	var mouseEvent = new MouseEvent("mousemove", {
		clientX: touch.clientX,
		clientY: touch.clientY
	});
	canvas.dispatchEvent(mouseEvent);
}, false);

// Empêche le défilement en touchant l'écran
canvas.addEventListener("touchstart", function (e) {
	if (e.target == canvas) {
		e.preventDefault();
	}
}, false);

canvas.addEventListener("touchend", function (e) {
	if (e.target == canvas) {
		e.preventDefault();
	}
}, false);

canvas.addEventListener("touchmove", function (e) {
	if (e.target == canvas) {
		e.preventDefault();
	}
}, false);

// Position de la souris par rapport au canvas
function getMousePos(canvasDom, mouseEvent) {
	var rect = canvasDom.getBoundingClientRect();
	return {
		x: mouseEvent.clientX - rect.left,
		y: mouseEvent.clientY - rect.top
	};
}

// Position lors du toucher par rapport au canvas
function getTouchPos(canvasDom, touchEvent) {
	var rect = canvasDom.getBoundingClientRect();
	return {
		x: touchEvent.touches[0].clientX - rect.left,
		y: touchEvent.touches[0].clientY - rect.top
	};
}

// Dessine dans le canvas
function renderCanvas() {
	if (drawing) {
		sign.moveTo(lastPos.x, lastPos.y);
		sign.lineTo(mousePos.x, mousePos.y);
		sign.stroke();
		lastPos = mousePos;
	}
}

// Effacer le canvas
function clearCanvas() {
	canvas.width = canvas.width;
}

// Autorise les animations
(function drawLoop () {
	requestAnimFrame(drawLoop);
	renderCanvas();
})();
	
	
	
/*-----------------------------------------
*
*		  CONFIG. MINUTERIE
*
-----------------------------------------*/
countdown = function(){
	
	// Vérifie si une session est présente au chargement de la page ou au refresh
	var checkStorageUser = sessionStorage.getItem('user');
	var checkStorageTime = sessionStorage.getItem('Elapse Time');
	
	window.onload = function() {

		// Si variables présentes, on affiche les infos station et on continue le timer
		if ( (checkStorageUser !== null) && (checkStorageTime !== null) ) {
			startCountDown();
			booking_btn_reset.style.display = 'block';
		};

	}	
	
	
	var cfg = {

		initialText:{
			label: 'Vous n\'avez aucune réservation pour le moment.'
		},
		expiredText: {
			label: 'Votre réservation est expirée.'
		},
		seconds:{
			value: setTimer,
		}
	};

	/* Presets */
	var seconds		= cfg.seconds.value;
	var interval	= null;
	var secs		= null;
	var startTime	= null;
	var realsecs	= null;
	var stocksecs	= null;

	/* Affichage initial */
	var display = document.getElementById('footer-count-down');
	display.innerHTML = cfg.initialText.label;
	
	// Bouton confirmation
	var booking_btn_confirm = document.getElementById('booking-btn-confirm');
	booking_btn_confirm.addEventListener("click", function() {
		confirmation();
	});
	
	// Bouton annulation résa. + clear sessionStorage
	var booking_btn_reset = document.getElementById('booking-btn-reset');
	booking_btn_reset.style.display = 'none';
	booking_btn_reset.addEventListener("click", function() {
		resetCountDown();
		sessionStorage.clear();
	});
	
	/* Démarrage du countdown */
	function startCountDown(){
		startTime = new Date();
		interval = setInterval(countdown.doCountDown, 100);
	}
	
	/* Construction du countdown */
	function doCountDown(){
		// Récup infos station
		var getStorage = sessionStorage.getItem('booking');
		var session = JSON.parse(getStorage);
		
		// Si tps écoulé après refresh n'est pas nul
		if (checkStorageTime !== null) {
			stocksecs = Math.ceil(checkStorageTime - (new Date() - startTime) / 1000);
			var mins = parseInt(stocksecs / 60);
			var secs = stocksecs % 60;
			
			// Stockage du temps restant après chaque refresh
			sessionStorage.setItem('Elapse Time', stocksecs);
			
		}
		// Sinon le compteur se base sur la valeur par défaut
		else {
			realsecs = Math.ceil(seconds - (new Date() - startTime) / 1000);
			var mins = parseInt(realsecs / 60);
			var secs = realsecs % 60;
			// Stockage du temps restant réservation
			sessionStorage.setItem('Elapse Time', realsecs);
		}
		
		// Affichage de la réservation
		display.innerHTML = '1 vélo de réservé station ' + session.station + '<br />Votre réservation expire dans ' + parseInt(mins) + ':'+ (secs < 10 ? '0' : '') +(secs % 60);
		
		// Si temps écoulé
		if( (realsecs === 0) || (stocksecs === 0) ){
			display.innerHTML = cfg.expiredText.label;
			window.clearTimeout(interval);
		}
	}

	/* Reset du countdown */
	function resetCountDown(){
		window.clearTimeout(interval);
		interval = null;
		seconds = cfg.seconds.value;
		stocksecs = null;
		checkStorageTime = null;
		display.innerHTML = cfg.initialText.label;
		booking_btn_reset.style.display = 'none';
	}
	
	// Événement sur le bouton confirmation
	function confirmation() {
		var dataUrl = canvas.toDataURL();
		sign_text.innerHTML = dataUrl;
		
		var getStorage = sessionStorage.getItem('booking');
		var session = JSON.parse(getStorage);
			
		// Variable utilisée pour sessionStorage
		var userInfos = {
			canvas: dataUrl,
			station: session.station,
		};		
		
		// Si le canvas est vide : affiche une erreur
		if (dataUrl === empty_canvas) {
			clear_modal_alert.style.display = 'block';
			resetCountDown();
		}
		else {
			
			startCountDown();
			
			overlay.style.display = 'none';
			station_infos.style.display = 'none';
			station_infos_body.style.display = 'block';
			
			booking_infos_body.style.display = 'none';
			booking_btn.style.display = 'block';
			booking_btn_confirm.style.display = 'none';
			
			booking_btn_reset.style.display = 'block';

			// Stockage des infos saisies en chaîne de texte
			sessionStorage.setItem('user', JSON.stringify(userInfos));
												
			clearCanvas();
			
		}
	}
	
	return {doCountDown:doCountDown};
}();
