var tableData = [{
        'work_title' : 'Aide menuisier plaquiste',
		'business_name': 'SARL DECAN',
        'work_location': '(Saint Hilaire de Chaléons-44)',
        'date': '02/09/2019 - 07/01/2021',
		'description' : 'Assemblage ossatures métalliques pour la création des cloisons.<br/>Isolation des cloisons, combles et rampants.<br/>Pose des plaques de placoplatre.',
    },
    {
        'work_title' : 'Responsable de parc machines Canon',
		'business_name': 'Canon France Business Serices',
        'work_location': '(Saint Nazaire-44)',
        'date': '02/09/2019 - 31/12/2020',
		'description' : 'Maintenance des photocopieurs pour le compte STX France (Chantier naval).<br/>Diagnostics des pannes et intervention sur site.<br/>Mise en œuvre de la préparation-livraison-installation sur site avec connexion au réseau client puis test du matériel.<br/>Gestion des appels techniciens sur les différents sites (Toulon, Lorient, Brest).<br/>Prise en charge de la gestion du serveur client (Windows 2008 R2) pour l’installation et la configuration des photocopieurs.<br/>Gestion des mouvements des photocopieurs sur le site client.<br/>Gestion de stock des pièces détachées.<br/>Développement d’une application web de gestion de stock avec génération de Qr-codes.<br/>Développement d’une application web pour le monitoring d’incidents sur les photocopieurs en lien avec le logiciel SiteAudit (Logiciel d’analyse de parc fonctionnant avec Microsoft SQL Server 2008).<br/>Développement d’une application web permettant le reporting mensuel des impressions de chaque utilisateur à partir du logiciel Diamand (Logiciel de gestion de production de documents fonctionnant avec une base de données Firebird).',
    },
    {
        'work_title' : 'Technicien déploiement',
		'business_name': 'Missions d\'intérim pour BNP-Cetelem',
        'work_location': '(Nantes-44)',
        'date': '01/03/2014 - 30/04/2014',
		'description' : 'Migration des données utilisateurs Windows XP vers Seven.<br/>Installation périphériques réseaux (imprimantes, lecteurs réseaux).<br/>Installation logiciels CITRIX, P-COM',
    },
    {
        'work_title' : 'Artisan / Développeur Web – Graphiste',
		'business_name': '',
        'work_location': '(Chéméré-44)',
        'date': '01/01/2012 - 31/12/2013',
		'description' : 'Utilisation des langages HTML5, CSS3, PHP, SQL<br/>Développement autour du framework jQuery<br/>Utilisation du support open source Wordpress<br/>Maintenance des sites internet<br/>Gestion du référencement des sites<br/>Gestion administrative des hébergements<br/>Création graphique de logos, cartes de visite et flyers<br/>Recherche et prise de contact clients',
    },
    {
        'work_title' : 'Artisan associé / Vente de stickers en ligne',
		'business_name': '',
        'work_location': '(La Montagne-44)',
        'date': '01/01/2010 - 31/12/2013',
		'description' : 'Utilisation des langages HTML5, CSS3, PHP, SQL<br/>Développement autour du framework jQuery<br/>Utilisation du support open source Wordpress<br/>Maintenance des sites internet<br/>Gestion du référencement des sites<br/>Gestion administrative des hébergements<br/>Création graphique de logos, cartes de visite et flyers<br/>Recherche et prise de contact clients',
    },
    {
        'work_title' : 'Artisan / Dépannage et maintenance informatique',
		'business_name': '',
        'work_location': '(Chéméré-44)',
        'date': '01/09/2004 - 31/12/2011',
		'description' : 'Développement d’un site e-commerce basé sur la solution open source Oscommerce.<br/>Assemblage et installation sur site d\'UC<br/>Installation et configuration de serveurs Windows<br/>Dépannage pour particuliers et professionnels<br/>Recherche et prise de contact clients<br/>Gestion du stock et achat de fournitures informatiques',
    },
    {
        'work_title' : 'Monteur / Ajusteur',
		'business_name': 'T.E.A.M.',
        'work_location': '(Bouguenais-44)',
        'date': '01/01/2001 - 31/12/2002',
		'description' : 'Assemblage mécanique et hydraulique de tapis télescopiques pour bétonnières.',
    },
    {
        'work_title' : 'Service Maintenance',
		'business_name': 'Brodard & Taupin',
        'work_location': '(La Flèche-72)',
        'date': '01/07/2000 - 30/11/2000',
		'description' : 'Travaux d\'entretien sur machines de production d\'imprimerie.<br/>Réorganisation du stock de pièces mécaniques avec identification des pièces et saisie informatique.',
    },
]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
    'querySet': tableData,

    'page': 1,
    'rows': 3,
    'window': 3,
}

buildTable()

function pagination(querySet, page, rows) {

    var trimStart = (page - 1) * rows
    var trimEnd = trimStart + rows

    var trimmedData = querySet.slice(trimStart, trimEnd)

    var pages = Math.round(querySet.length / rows);

    return {
        'querySet': trimmedData,
        'pages': pages,
    }
}

function pageButtons(pages) {
    var wrapper = document.getElementById('pagination-wrapper')

    wrapper.innerHTML = ''
	console.log('Pages:', pages)

    var maxLeft = (state.page - Math.floor(state.window / 2))
    var maxRight = (state.page + Math.floor(state.window / 2))

    if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)
        
        if (maxLeft < 1){
        	maxLeft = 1
        }
        maxRight = pages
    }
    
    

    for (var page = maxLeft; page <= maxRight; page++) {
    	wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
    }

    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info"><i class="fa fa-chevron-left"></i></button>` + wrapper.innerHTML
    }

    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info"><i class="fa fa-chevron-right"></i></button>`
    }

    $('.page').on('click', function() {
        $('#table-body').empty()

        state.page = Number($(this).val())

        buildTable()
    })

}


function buildTable() {
    var table = $('#table-body')

    var data = pagination(state.querySet, state.page, state.rows)
    var myList = data.querySet

    for (var i = 1 in myList) {
        //Keep in mind we are using "Template Litterals to create rows"
        var row = `<div class="resume-content">
				  <h6 class="uppercase"><span>${myList[i].work_title} - </span>${myList[i].business_name} ${myList[i].work_location}</h6>
				  <span class="date"><i class="fa fa-calendar-o"></i> ${myList[i].date}</span>
				  <p>${myList[i].description}</p>
                  </div>
				  <span class="separator"></span>`
                  
        table.append(row)
    }

    pageButtons(data.pages)
}
