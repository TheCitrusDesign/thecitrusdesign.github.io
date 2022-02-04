/*------------------------------------------------------------
*			INIT. DE LA CARTE ET STATIONS					 *
**************************************************************
*															 *
* Options de configurations : Voir fichier ./js/file.conf.js *
*															 *
------------------------------------------------------------*/
function initMap() {
  
	// Variable de la map
	var map;
	
	// Variable des markers
	var gmarkers = [];
		
	// options de la carte
	var gmapOptions = {
		zoom: zoom_gmap_opt,
		center: new google.maps.LatLng(lat_gmap_opt, lng_gmap_opt),
		mapTypeId: map_type_opt
	};
    
	// Variables utilisées pour featureStation
	var overlay = document.getElementById('overlay');
	var station_infos = document.getElementById('station-infos');
	var station_infos_body = document.getElementsByClassName('station-infos-body')[0];
	var booking_infos_body = document.getElementsByClassName('booking-infos-body')[0];

	// Construction de la carte
	map = new google.maps.Map(document.getElementById("map"), gmapOptions);
	
	// Variable utilisée pour translateStatus
	var status_station_text = document.getElementById('status-station');
	
	// Variables utilisées pour bookingBike
	var booking_btn = document.getElementById('booking-btn');
	var booking_btn_confirm = document.getElementById('booking-btn-confirm');
	booking_btn_confirm.className = 'text-primary-color accent-lime-color';
	booking_btn_confirm.style.display = 'none';
	
	var access_bike = document.getElementById('available-bikes-station');
	
	
	// Récupération des informations de chaque station
	$.getJSON(pathHttp + "?contract=" + country + "&apiKey=" + apiKey, function(data_stations) {	
		
		/*------------------- CONSTRUCTION DES STATIONS --------------------*/    
		var stations = {
            
			featureMarker: function (name, position, address, status, bike_stands, available_bike_stands, available_bikes) {
                this.name_station = name.split('-')[1]; // Enlève le N° de la station
                this.position_station = position;
                this.address_station = address;
                this.status_station = status;
                this.bike_stands_station = bike_stands;
                this.available_bike_stands_station = available_bike_stands;
				this.available_bikes_station = available_bikes;
            },
            translateStatus: function (status_station) {				
				// Traduction des mots anglais 'OPEN' et 'CLOSED' en français
                if (status_station === 'OPEN') {
                    status_station = 'OUVERTE';
					status_station_text.className = 'access-text-color';
                }
				else {
                    status_station = 'FERMÉE';
					status_station_text.className = 'no-access-text-color';
                }
                return status_station;
            },
			bookingBike: function(available_bikes_station, status_station) {
				// Si 0 : Affiche bouton réservation et nb vélos en rouge
				if( (available_bikes_station === 0) || (status_station === 'FERMÉE') ){
					booking_btn.className = 'text-primary-color no-access-color';
					booking_btn.value = 'réservation impossible';
					booking_btn.disabled = true;
					access_bike.className = 'no-access-text-color';
				}
				// Sinon affichage en vert
				else {
					booking_btn.disabled = false;
					booking_btn.value = 'réserver';
					booking_btn.className = 'text-primary-color accent-lime-color';
					access_bike.className = 'secondary-text-color';
				}
			},
            featureStation: function () {
				// Rend visible la div et affiche les infos de la station
				overlay.style.display = 'block';
                station_infos.style.display = 'block';
				
				// Affichage des textes dans chaque div
				$('#name-station').text(this.name_station);
				$('#status-station').text(stations.translateStatus(this.status_station));
				$('#bike-stands-station').text(this.bike_stands_station);
				$('#available-bike-stands-station').text(this.available_bike_stands_station);
				$('#available-bikes-station').text(this.available_bikes_station);

				// Affiche si vélo dispo
				stations.bookingBike(this.available_bikes_station);
				
				// Stockage des infos station et adresse
				var bookingInfos = {
					station: this.name_station,
				};
				sessionStorage.setItem('booking', JSON.stringify(bookingInfos));
				
				// Action si click bouton réservation
				booking_btn.onclick = function() {					
					station_infos_body.style.display = 'none';
					
					booking_infos_body.style.display = 'block';
					booking_btn.style.display = 'none';
					booking_btn_confirm.style.display = 'block';
					booking_btn_confirm.value = 'confirmer';
				}				
            }
			
        };// Fin Variable 'stations'


		/*------------------- CONSTRUCTION DES MARKERS --------------------*/    
        data_stations.forEach(function (markers) {
			marker = new MarkerWithLabel({
				map:				map,
				title:				markers.name.split('-')[1],
				position:			markers.position,
				labelContent:		icon_labelContent,
				labelAnchor:		icon_labelAnchor,
				labelClass:			icon_labelClass,
				icon: {
					path:			path_marker_opt,
					scale:			scale_marker_opt,
					strokeWeight:	strokeWeight_marker_opt,
					strokeColor:	strokeColor_marker_opt,
					strokeOpacity:	strokeOpacity_marker_opt,
					fillColor:		fillColor_marker_opt,
					fillOpacity:	fillOpacity_marker_opt
				}
			});
			
			if (markers.available_bikes >= 1) {
				marker.icon.fillColor = fillColor_icon_open;
			}
				
			if (markers.available_bikes === 0) {
				marker.icon.fillColor = fillColor_icon_alert;
			}
				
			if (markers.status === 'CLOSED') {
				marker.icon.fillColor = fillColor_icon_closed;
			}

            marker.addListener('click', function () {
                
                var newMarker = Object.create(stations);
                newMarker.featureMarker(markers.name , markers.position, markers.address, markers.status, markers.bike_stands, markers.available_bike_stands, markers.available_bikes);
            
                newMarker.featureStation();
                //console.log(newMarker);
            });
			
			// Insertion des marqueurs
			gmarkers.push(marker);
			
        });// Fin 'forEach'
		
		// Utilisation du regroupement des marqueurs
		var markerCluster = new MarkerClusterer(map, gmarkers, {imagePath: './img/markers/m'});

		
		/*------------------- SEARCH BOX --------------------*/    

		// Construction de la barre de recherche input
		var input = document.getElementById('modal-search');
		var searchBox = new google.maps.places.SearchBox(input);
		
		// Résultats de recherche en rapport avec la vue carte actuelle
		map.addListener('bounds_changed', function() {
			searchBox.setBounds(map.getBounds());
		});
		
		// Événement déclenché lorsque l'utilisateur sélectionne un lieu trouvé
		searchBox.addListener('places_changed', function() {
			var places = searchBox.getPlaces();

			if (places.length == 0) {
				return;
			}

			// Pour chaque lieu, on ajoute l'icône, le nom et la position
			var bounds = new google.maps.LatLngBounds();
		
			places.forEach(function(place) {
        
				if (!place.geometry) {
					console.log("Returned place contains no geometry");
					return;
				}
            
				if (place.geometry.viewport) {
					bounds.union(place.geometry.viewport);
				}
				else {
					bounds.extend(place.geometry.location);
				}
			});
		
			map.fitBounds(bounds);
			
		});// Fin searchBox.addListener
		
		/*------------------- FIN SEARCH BOX -------------------*/    


	});// Fin getJSON

}// Fin fonction InitMap

initMap();

/* Scroll bottom sur carte	*/
$('a[href="#map"]').click(function(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
	return false;
});
