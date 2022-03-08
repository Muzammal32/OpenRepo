/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-physical_icon': '&#xe922;',
		'icon-journal_icon': '&#xe91c;',
		'icon-content_icon': '&#xe91d;',
		'icon-flip_icon': '&#xe91e;',
		'icon-cart_icon': '&#xe91f;',
		'icon-Vector-5': '&#xe920;',
		'icon-home_icon': '&#xe921;',
		'icon-audio_icon': '&#xe900;',
		'icon-camera_icon-1': '&#xe901;',
		'icon-camera_icon': '&#xe902;',
		'icon-coffe_icon': '&#xe903;',
		'icon-delete_icon': '&#xe904;',
		'icon-email_open_icon': '&#xe905;',
		'icon-filter_icon': '&#xe906;',
		'icon-left_icon': '&#xe907;',
		'icon-notification_icon': '&#xe908;',
		'icon-image_icon': '&#xe909;',
		'icon-email_close_icon': '&#xe90a;',
		'icon-phone_icon': '&#xe90b;',
		'icon-plus_icon': '&#xe90c;',
		'icon-search_icon': '&#xe90d;',
		'icon-settings_icon': '&#xe90e;',
		'icon-shopping_cart_icon': '&#xe90f;',
		'icon-upload_icon': '&#xe910;',
		'icon-notes_icon': '&#xe911;',
		'icon-weekly_icon': '&#xe912;',
		'icon-day_icon': '&#xe913;',
		'icon-pdf_icon': '&#xe914;',
		'icon-add_icon': '&#xe915;',
		'icon-tick_icon': '&#xe916;',
		'icon-edit_icon': '&#xe917;',
		'icon-arrow_down_icon': '&#xe918;',
		'icon-arrow_left_icon': '&#xe919;',
		'icon-tick1_icon': '&#xe91a;',
		'icon-video_icon': '&#xe91b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
