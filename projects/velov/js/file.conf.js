/*--------------------------------------
*		OPTIONS DE CONFIG. CARTE
--------------------------------------*/
// Zoom
var zoom_gmap_opt			=	13;

// Latitude
var lat_gmap_opt			=	45.7550757;

// Longitude
var lng_gmap_opt			=	4.8483385;	

// Type de carte affichée roadmap, satellite, terrain, hybrid
var map_type_opt 			=	'roadmap';


/*--------------------------------------
*	 CONFIG. SITE + VILLE + CLÉ API
--------------------------------------*/
// Adresse du site
var pathHttp				=	"https://api.jcdecaux.com/vls/v1/stations";

// Ville
var country					=	"Lyon";

// Clé API
var apiKey					=	"c59ad4cc6de0795c3cb0cdb186e4c5f9b5f3aed9";


/*--------------------------------------
*	  CONFIG. DES MARQUEURS ET ICONE
--------------------------------------*/
// Icône du marqueur par défaut fontawesome
var path_marker_opt 			=	ajac.gmarkers.MAP_PIN;

// Dimension du marqueur
var scale_marker_opt 			=	0.9;

// Contour du marqueur
var strokeWeight_marker_opt 	=	1;

// Couleur de son contour
var strokeColor_marker_opt 		=	'#272727';

// Opacité de son contour
var strokeOpacity_marker_opt 	=	1;

// Couleur par défaut du marqueur
var fillColor_marker_opt 		=	'#d0fe00';

// Opacité du marqueur
var fillOpacity_marker_opt		=	1;


// Couleurs des marqueurs suivant staut (Vert, orange, rouge)
var fillColor_icon_open			=	'#d0fe00';
var fillColor_icon_alert		=	'#ff6200';
var fillColor_icon_closed		=	'#ff0d00';

// Couleurs du marqueur selon statut
var path_icon_open				=	'';
var path_icon_alert				=	'';
var path_icon_closed			=	'';

// Nom de l'icône
var icon_labelContent			=	'<i class="material-icons">directions_bike</i>';

// Positionnement de l'icône dans le marqeur
var icon_labelAnchor			=	new google.maps.Point(12, 39);

// Classe utilisée pour l'icône (style.css)
var icon_labelClass				=	'icon-label';


/*--------------------------------------
*		 CONFIG. DU CANVAS
--------------------------------------*/
// Couleur du trait de la signature
var colorStrokeStyle			= "#272727";

// Epaisseur du trait
var signLineWidth				= 2;

// Forme de la jointure du trait
var signLineJoin				= "round";

/*--------------------------------------
*		 CONFIG. DU TIMER
--------------------------------------*/
// Durée du timer en secondes (ici:60sec x 20mns)
var setTimer					= 1200;