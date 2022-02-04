$(window).load(function() {
	jQuery('#ts_panel').animate({opacity:1},400); 
});

/* Cookie setting
-----------------------------------------------*/
$.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


jQuery(function(){

	/*========== T H E M E    P A N E L =============*/
	
	/* Show/Hide Panel
	-----------------------------------------------*/
	ts_panel_width = jQuery('#ts_menu').outerWidth();
	
	jQuery('#ts_panel').css('left', 0);
	jQuery('#ts_panel').animate({left: -ts_panel_width}, 400);
	
	jQuery('#toggle_button').click(function() {

		var ts_panel = jQuery(this).parent();
		ts_panel.animate({
		  left: parseInt(ts_panel.css('left'),10) == 0 ? -ts_panel_width : 0
		}, 400);
		
		return false;
	});
	
	
	
	
	/*========== A P P L Y    C L A S S E S =============*/
	
	/* Theme Colors From Cookie
	-----------------------------------------------*/
	if ($.cookie('skin') != null)	{
		$.cookie('skin',$.cookie('skin'),{ expires: 0, path: '/'});
		jQuery('.teo_all_wrap').attr('data-color', $.cookie('skin'));				
    }
	
	
	
	
	/*========== S E T T I N G    U P    =============*/
	
	/* Theme Colors
	-----------------------------------------------*/
	jQuery('#ts_panel ul.theme.colors li a').click(function(){
		var c_skin = jQuery(this).attr('title');
		$.cookie('skin', c_skin, { expires: 0, path: '/'});		
		jQuery('.teo_all_wrap').attr('data-color', c_skin);				
	  	return false;
    });	


	/*========== R E S E T    S E T T I N G S =============*/
	
	jQuery('.reset').click(function(){
		$.cookie('skin', null, { expires: 0, path: '/'});
		location.reload();
	});	
	
});