/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lorriecustom\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-starampersand' : '&#xe000;',
			'icon-stararrow-down' : '&#xe001;',
			'icon-starpoint-down' : '&#xe002;',
			'icon-starpoint-right' : '&#xe003;',
			'icon-starpoint-up' : '&#xe004;',
			'icon-starpoint-left' : '&#xe005;',
			'icon-starplay' : '&#xe006;',
			'icon-starquotes-left' : '&#xe007;',
			'icon-starthumbs-up' : '&#xe008;',
			'icon-starinfo' : '&#xe009;',
			'icon-starquestion' : '&#xe00a;',
			'icon-starpin' : '&#xe00b;',
			'icon-starstar' : '&#xe00c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-star[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};