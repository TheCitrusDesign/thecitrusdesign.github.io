/*------------------------------------------
*
*   		OPTIONS DU SLIDESHOW
*
------------------------------------------*/
var options = function() {
	this.interval;				// Variable utilisé pour le setInterval
	this.speed 		=	800;	// Variable utilisé pour la vitesse de déplacement des slides
	this.autoPlay 	=	true;	// Variable utilisé pour le lancement automatique du slideshow
	this.keyPress 	=	true;	// Variable utilisé pour naviguer avec les flèches droite-gauche du clavier
	this.anchorNav	=	true;	// Variable d'affichage des flèches droite/gauche pour navigation manuel
	this.progress 	=	4200;	// Variable de temps en ms pour la progressBar
}
	
var opt = new options();		// Réuni les variables options dans un array


/*------------------------------------------
*
*		CONFIGURATION DU SLIDESHOW
*
------------------------------------------*/
var cfgSlide = function() {
	this.position = 0;		// Position du 1er slide
	this.img = $('.slider figure');
	this.indexImg = this.img.length - 1;
	this.currentImg = this.img.eq(this.position);
}

var cfg = new cfgSlide();


/*------------------------------------------
*
*	 GESTION MEDIA QUERIES DU SLIDESHOW
*
------------------------------------------*/
if (window.matchMedia("(max-width: 1024px)").matches) {
  opt.anchorNav = false;
}
else {
  opt.anchorNav = true;
}


/*------------------------------------------
*
*  		  CONSTRUCTEUR DU SLIDESHOW
*
------------------------------------------*/
var slider = {
	
	// Éléments constructeur du slideshow
	sliderElm: {
		slideshow: $('.slider'),
		slides: $('.slide'),
		sliderNav: $('.slideshow-nav'),
		sliderNavButtons: $('.slideshow-nav > a'),
		pauseBtnElm: document.getElementById('pause'),
		progress: $('.progressBar')
	},
	  	
	// Initialisation des fonctions
	init: function() {
		this.bindUIEvents();
		this.startInterval();
	},
			
	// Événements utilisateur
	bindUIEvents: function() {		
		// Action lors du clic sur thumbnail
		this.sliderElm.sliderNav.on('click', 'a', function(event) {
			slider.slideNavLink(event, this);
		});
				
		// Actions via touches du clavier
		if(opt.keyPress == true) {
			$('body').keydown(function (e) {
				switch (e.keyCode) {
					// Flèche gauche
					case 37:
						slider.slideNavAnchorLeft();
						break;
					// Flèche droite
					case 39:
						slider.slideNavAnchorRight();
						break;
				}
			});
		}
		else {
			otp.keyPress = false;
		}
		
		// Actions via boutons radio droite/gauche
		if(opt.anchorNav == true) {
			$('#button-1').on('click', function(){
				slider.slideNavAnchorLeft();
			});
			
			$('#button-2').on('click', function(){
				slider.slideNavAnchorRight();
			});
		}
		else {
			// Si pas activé : pas d'affichage
			$('#slideshow label').css({'display':'none'});
		}
		
		$('#slideshow-navigation').on('click', 'a', function(){
			if(opt.autoPlay == true) {
				slider.stopInterval();
			}
			else {
				opt.autoPlay = true;
				slider.progressBar();
				slider.startInterval();
			}
		});
		
	},
	
	// Démarrage en mode auto du slideshow
	startSlideshow: function(){	
		// Etat activer du thumbnail
		slider.activeNavigation();

		// Si autoPlay = true
		if(opt.autoPlay == true) {
						
			if (cfg.position <= cfg.indexImg) {		
				
				// Incrémentation variable position
				cfg.position++;

				// Calcul du déplacement à faire par rapport à la position
				var dpl = (cfg.position * 100)-100;
				
				// Déplacement du slide avec progressbar
				slider.sliderElm.slideshow.animate({ 'right' : dpl+'%' }, opt.speed, function() {
					slider.progressBar();
				});
								
			}
			else {
				// Retour au slide 0
				cfg.position = 0;
			}
			
		}
		else {
			slider.stopInterval();
		}
	},
	
	// Redémarrage du slideshow suite pause
	startInterval: function() {
		opt.interval = setInterval(this.startSlideshow, 5000); // Utilisé pour le démarrage auto du slideshow
		// Bouton en position pause
		this.sliderElm.pauseBtnElm.innerHTML = '<i class="material-icons">pause</i>';
	},
	
	// Arrêt du slideshow
	stopInterval: function() {
		clearInterval(opt.interval);
		opt.autoPlay = false;
		// Bouton en position lecture
		this.sliderElm.pauseBtnElm.innerHTML = '<i class="material-icons">play_arrow</i>';
		this.sliderElm.pauseBtnElm.className = 'active-controls';
		this.sliderElm.progress.stop().css({width: 0});
	},
		
	// Déplacement des slides via thumbnails
	slideNavLink: function(event, sliderElm) {
		
		// Incrémentation variable position
		cfg.position++;
		
		// Ajout de la classe "active" selon position slide
		this.activeNavigation();
				
		// Largeur en % d'un slide
		var slideWidth = 100;
		
		// Prend le N° data-index du lien
		var state = $(sliderElm).attr("data-index");
		
		// Calcul du déplacement réel :
		// (N° du slide * largeur d'un slide) - largeur d'un slide pour compenser un déplacement trop "grand"
		var slideIn = (state * slideWidth) - slideWidth;
		
		// Au clic, déplace le slide par rapport au numéro retourné par la position du href
		// et on multiplie ce chiffre par la largeur d'un slide.
		this.sliderElm.slideshow.animate({ 'right' : slideIn+"%" }, opt.speed, function() {
			opt.autoPlay = false;
			slider.stopInterval();
		});
		
		// Supprime l'activation du lien
		event.preventDefault();
	},
	
	// Déplacement slides vers droite
	slideNavAnchorRight: function() {		
		if ( cfg.position < cfg.indexImg ) {			
			// Incrémentation
			cfg.position++;
			
			// Calcul du déplacement à faire par rapport à la position
			var dpl = cfg.position * 100;
			
			// Animation du déplacement du slide vers la droite
			this.sliderElm.slideshow.animate({ 'right' : dpl+'%' }, opt.speed);
			
			// Etat activer du thumbnail
			slider.activeNavigation();
			
			// Arrêt du slide auto
			slider.stopInterval();
		}
		else {
			cfg.position = 0;
		}
	},
	
	// Déplacement slides vers gauche
	slideNavAnchorLeft: function() {
		if ( cfg.position > 0 ) {
			// Décrémentation
			cfg.position--;
			
			// Calcul du déplacement à faire par rapport à la position
			var dpl = cfg.position * 100;
			
			// Animation du déplacement du slide vers la gauche
			this.sliderElm.slideshow.animate({ 'right' : dpl+'%' }, opt.speed);
			
			// Etat activer du thumbnail
			slider.activeNavigation();
			
			// Arrêt du slide auto
			slider.stopInterval();
		}
		else {
			cfg.position = cfg.indexImg;
		}
	},
	
	// Effet liens navigation
	activeNavigation: function() {
		// Supprime la classe "active" de tous les liens
		$(".slideshow-nav a").removeClass(" active");
		// Ajout de la classe "active" sur le lien en cours
		// cfg.position 0 + 1 pour correspondance au data-index (1,2,3)
		$(".slideshow-nav [data-index='"+(cfg.position+1)+"']").addClass(" active");
	},
	  
	// Animation de la ProgressBar
	progressBar: function () {
		// opt.progress(4200ms) + opt.speed(800ms) = 5000ms --> interval de tps pour 1 slide
		this.sliderElm.progress.animate({ width: '100%'	}, opt.progress, function() {
			// Animation retour à 0
			slider.sliderElm.progress.animate({ width: 0 }, opt.speed);
		});
	}
	
};

// Initialisation du slideshow
slider.init();