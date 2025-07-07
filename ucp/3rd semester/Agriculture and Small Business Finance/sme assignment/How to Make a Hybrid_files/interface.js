/**
 * Interface Elements for jQuery
 * FX
 * 
 * http://interface.eyecon.ro
 * 
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses.
 *   
 *
 */

/**
 * Validates elements that can be animated
 */
jQuery.fxCheckTag = function(e)
{
	if (/^tr$|^td$|^tbody$|^caption$|^thead$|^tfoot$|^col$|^colgroup$|^th$|^body$|^header$|^script$|^frame$|^frameset$|^option$|^optgroup$|^meta$/i.test(e.nodeName) )
		return false;
	else 
		return true;
};

/**
 * Destroy the wrapper used for some animations
 */
jQuery.fx.destroyWrapper = function(e, old)
{
	var c = e.firstChild;
	var cs = c.style;
	cs.position = old.position;
	cs.marginTop = old.margins.t;
	cs.marginLeft = old.margins.l;
	cs.marginBottom = old.margins.b;
	cs.marginRight = old.margins.r;
	cs.top = old.top + 'px';
	cs.left = old.left + 'px';
	e.parentNode.insertBefore(c, e);
	e.parentNode.removeChild(e);
};

/**
 * Builds a wrapper used for some animations
 */
jQuery.fx.buildWrapper = function(e)
{
	if (!jQuery.fxCheckTag(e))
		return false;
	var t = jQuery(e);
	var es = e.style;
	var restoreStyle = false;
	
	if (t.css('display') == 'none') {
		oldVisibility = t.css('visibility');
		t.css('visibility', 'hidden').show();
		restoreStyle = true;
	}
	var oldStyle = {};
	oldStyle.position = t.css('position');
	oldStyle.sizes = jQuery.iUtil.getSize(e);
	oldStyle.margins = jQuery.iUtil.getMargins(e);
	
	var oldFloat = e.currentStyle ? e.currentStyle.styleFloat : t.css('float');
	oldStyle.top = parseInt(t.css('top'))||0;
	oldStyle.left = parseInt(t.css('left'))||0;
	var wid = 'w_' + parseInt(Math.random() * 10000);
	var wr = document.createElement(/^img$|^br$|^input$|^hr$|^select$|^textarea$|^object$|^iframe$|^button$|^form$|^table$|^ul$|^dl$|^ol$/i.test(e.nodeName) ? 'div' : e.nodeName);
	jQuery.attr(wr,'id', wid);
	var wrapEl = jQuery(wr).addClass('fxWrapper');
	var wrs = wr.style;
	var top = 0;
	var left = 0;
	if (oldStyle.position == 'relative' || oldStyle.position == 'absolute'){
		top = oldStyle.top;
		left = oldStyle.left;
	}
	
	wrs.top = top + 'px';
	wrs.left = left + 'px';
	wrs.position = oldStyle.position != 'relative' && oldStyle.position != 'absolute' ? 'relative' : oldStyle.position;
	wrs.height = oldStyle.sizes.hb + 'px';
	wrs.width = oldStyle.sizes.wb + 'px';
	wrs.marginTop = oldStyle.margins.t;
	wrs.marginRight = oldStyle.margins.r;
	wrs.marginBottom = oldStyle.margins.b;
	wrs.marginLeft = oldStyle.margins.l;
	wrs.overflow = 'hidden';
	if (jQuery.browser.msie) {
		wrs.styleFloat = oldFloat;
	} else {
		wrs.cssFloat = oldFloat;
	}
	if (jQuery.browser == "msie") {
		es.filter = "alpha(opacity=" + 0.999*100 + ")";
	}
	es.opacity = 0.999;
	//t.wrap(wr);
	e.parentNode.insertBefore(wr, e);
	wr.appendChild(e);
	es.marginTop = '0px';
	es.marginRight = '0px';
	es.marginBottom = '0px';
	es.marginLeft = '0px';
	es.position = 'absolute';
	es.listStyle = 'none';
	es.top = '0px';
	es.left = '0px';
	if (restoreStyle) {
		t.hide();
		es.visibility = oldVisibility;
	}
	return {oldStyle:oldStyle, wrapper:jQuery(wr)};
};

/**
 * named colors
 */
jQuery.fx.namedColors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0]
};

/**
 * parses a color to an object for reg, green and blue
 */
jQuery.fx.parseColor = function(color, notColor)
{
	if (jQuery.fx.namedColors[color]) 
		return {
			r: jQuery.fx.namedColors[color][0],
			g: jQuery.fx.namedColors[color][1],
			b: jQuery.fx.namedColors[color][2]
		};
	else if (result = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(color))
		return {
			r: parseInt(result[1]),
			g: parseInt(result[2]),
			b: parseInt(result[3])
		};
	else if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(color)) 
		return {
			r: parseFloat(result[1])*2.55,
			g: parseFloat(result[2])*2.55,
			b: parseFloat(result[3])*2.55
		};
	else if (result = /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(color))
		return {
			r: parseInt("0x"+ result[1] + result[1]),
			g: parseInt("0x" + result[2] + result[2]),
			b: parseInt("0x" + result[3] + result[3])
		};
	else if (result = /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(color))
		return {
			r: parseInt("0x" + result[1]),
			g: parseInt("0x" + result[2]),
			b: parseInt("0x" + result[3])
		};
	else
		return notColor == true ? false : {r: 255, g: 255, b: 255};
};
/**
 * CSS rules that can be animated
 */
jQuery.fx.cssProps = {
	borderBottomWidth:1,
	borderLeftWidth:1,
	borderRightWidth:1,
	borderTopWidth:1,
	bottom:1,
	fontSize:1,
	height:1,
	left:1,
	letterSpacing:1,
	lineHeight:1,
	marginBottom:1,
	marginLeft:1,
	marginRight:1,
	marginTop:1,
	maxHeight:1,
	maxWidth:1,
	minHeight:1,
	minWidth:1,
	opacity:1,
	outlineOffset:1,
	outlineWidth:1,
	paddingBottom:1,
	paddingLeft:1,
	paddingRight:1,
	paddingTop:1,
	right:1,
	textIndent:1,
	top:1,
    width:1,
	zIndex:1
};
/**
 * CSS color rules that can be animated
 */
jQuery.fx.colorCssProps = {
	backgroundColor:1,
	borderBottomColor:1,
	borderLeftColor:1,
	borderRightColor:1,
	borderTopColor:1,
	color:1,
	outlineColor:1
};

jQuery.fx.cssSides = ['Top', 'Right', 'Bottom', 'Left'];
jQuery.fx.cssSidesEnd = {
	'borderWidth': ['border', 'Width'],
	'borderColor': ['border', 'Color'],
	'margin': ['margin', ''],
	'padding': ['padding', '']
};

/**
 * Overwrite animation to use new FX function
 */
jQuery.fn.extend({
	
	animate: function( prop, speed, easing, callback ) {
		return this.queue(function(){
			var opt = jQuery.speed(speed, easing, callback);
			var e = new jQuery.fxe( this, opt, prop );
			
		});
	},
	pause: function(speed, callback) {
		return this.queue(function(){
			var opt = jQuery.speed(speed, callback);
			var e = new jQuery.pause( this, opt );
		});
	},
	stop : function(step) {
		return this.each(function(){
			if (this.animationHandler)
				jQuery.stopAnim(this, step);
			
		});
	},
	stopAll : function(step) {
		return this.each(function(){
			if (this.animationHandler)
				jQuery.stopAnim(this, step);
			if ( this.queue && this.queue['fx'] )
				this.queue.fx = [];
		});
	}
});
/**
 * Improved FXC function that aniamtes collection of properties per timer. Accepts inline styles and class names to animate
 */
jQuery.extend({
	pause: function(elem, options)
	{
		var z = this, values;
		z.step = function()
		{
			if ( jQuery.isFunction( options.complete ) )
				options.complete.apply( elem );
		};
		z.timer=setInterval(function(){z.step();},options.duration);
		elem.animationHandler = z;
	},
	easing :  {
		linear: function(p, n, firstNum, delta, duration) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * delta + firstNum;
		}
	},
	fxe: function( elem, options, prop ){
		var z = this, values;

		// The styles
		var y = elem.style;
		var oldOverflow = jQuery.css(elem, "overflow");
		var oldDisplay= jQuery.css(elem, "display");
		var props = {};
		z.startTime = (new Date()).getTime();
		options.easing = options.easing && jQuery.easing[options.easing] ? options.easing : 'linear';
		
		z.getValues = function(tp, vp)
		{
			if (jQuery.fx.cssProps[tp]) {
				if (vp == 'show' || vp == 'hide' || vp == 'toggle') {
					if ( !elem.orig ) elem.orig = {};
					var r = parseFloat( jQuery.curCSS(elem, tp) );
					elem.orig[tp] = r && r > -10000 ? r : (parseFloat( jQuery.css(elem,tp) )||0);
					vp = vp == 'toggle' ? ( oldDisplay == 'none' ? 'show' : 'hide') : vp;
					options[vp] = true;
					props[tp] = vp == 'show' ? [0, elem.orig[tp]] : [elem.orig[tp], 0];
					if (tp != 'opacity')
						y[tp] = props[tp][0] + (tp != 'zIndex' && tp != 'fontWeight' ? 'px':'');
					else
						jQuery.attr(y, "opacity", props[tp][0]);
				} else {
					props[tp] = [parseFloat( jQuery.curCSS(elem, tp) ), parseFloat(vp)||0];
				}
			} else if (jQuery.fx.colorCssProps[tp])
				props[tp] = [jQuery.fx.parseColor(jQuery.curCSS(elem, tp)), jQuery.fx.parseColor(vp)];
			else if(/^margin$|padding$|border$|borderColor$|borderWidth$/i.test(tp)) {
				var m = vp.replace(/\s+/g, ' ').replace(/rgb\s*\(\s*/g,'rgb(').replace(/\s*,\s*/g,',').replace(/\s*\)/g,')').match(/([^\s]+)/g);
				switch(tp){
					case 'margin':
					case 'padding':
					case 'borderWidth':
					case 'borderColor':
						m[3] = m[3]||m[1]||m[0];
						m[2] = m[2]||m[0];
						m[1] = m[1]||m[0];
						for(var i = 0; i < jQuery.fx.cssSides.length; i++) {
							var nmp = jQuery.fx.cssSidesEnd[tp][0] + jQuery.fx.cssSides[i] + jQuery.fx.cssSidesEnd[tp][1];
							props[nmp] = tp == 'borderColor' ?
								[jQuery.fx.parseColor(jQuery.curCSS(elem, nmp)), jQuery.fx.parseColor(m[i])]
								: [parseFloat( jQuery.curCSS(elem, nmp) ), parseFloat(m[i])];
						}
						break;
					case 'border':
						for(var i = 0; i< m.length; i++) {
							var floatVal = parseFloat(m[i]);
							var sideEnd = !isNaN(floatVal) ? 'Width' : (!/transparent|none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/i.test(m[i]) ? 'Color' : false);
							if (sideEnd) {
								for(var j = 0; j < jQuery.fx.cssSides.length; j++) {
									nmp = 'border' + jQuery.fx.cssSides[j] + sideEnd;
									props[nmp] = sideEnd == 'Color' ?
								[jQuery.fx.parseColor(jQuery.curCSS(elem, nmp)), jQuery.fx.parseColor(m[i])]
								: [parseFloat( jQuery.curCSS(elem, nmp) ), floatVal];
								}
							} else {
								y['borderStyle'] = m[i];
							}
						}
						break;
				}
			} else {
				y[tp] = vp;
			}
			return false;
		};
		
		for(p in prop) {
			if (p == 'style') {
				var newStyles = jQuery.parseStyle(prop[p]);
				for (np in newStyles) {
					this.getValues(np, newStyles[np]);
				}
			} else if (p == 'className') {
				if (document.styleSheets)
					for (var i=0; i<document.styleSheets.length; i++){
						var cssRules = document.styleSheets[i].cssRules||document.styleSheets[i].rules||null;
						if (cssRules) {
							for (var j=0; j<cssRules.length; j++) {
								if(cssRules[j].selectorText == '.' + prop[p]) {
									var rule = new RegExp('\.' + prop[p] + ' {');
									var styles = cssRules[j].style.cssText;
									var newStyles = jQuery.parseStyle(styles.replace(rule, '').replace(/}/g, ''));
									for (np in newStyles) {
										this.getValues(np, newStyles[np]);
									}
								}
							}
						}
					}
			} else {
				this.getValues(p, prop[p]);
			}
		}
		y.display = oldDisplay == 'none' ? 'block' : oldDisplay;
		y.overflow = 'hidden';
		
		/*if (options.show)
			y.display = "";*/
		
		z.step = function(){
			var t = (new Date()).getTime();
			if (t > options.duration + z.startTime) {
				clearInterval(z.timer);
				z.timer = null;
				for (p in props) {
					if ( p == "opacity" )
						jQuery.attr(y, "opacity", props[p][1]);
					else if (typeof props[p][1] == 'object')
						y[p] = 'rgb(' + props[p][1].r +',' + props[p][1].g +',' + props[p][1].b +')';
					else 
						y[p] = props[p][1] + (p != 'zIndex' && p != 'fontWeight' ? 'px':'');
				}
				if ( options.hide || options.show )
					for ( var p in elem.orig )
						if (p == "opacity")
							jQuery.attr(y, p, elem.orig[p]);
						else
							y[p] = "";
				y.display = options.hide ? 'none' : (oldDisplay !='none' ? oldDisplay : 'block');
				y.overflow = oldOverflow;
				elem.animationHandler = null;
				if ( jQuery.isFunction( options.complete ) )
					options.complete.apply( elem );
			} else {
				var n = t - this.startTime;
				var pr = n / options.duration;
				for (p in props) {
					if (typeof props[p][1] == 'object') {
						y[p] = 'rgb('
						+ parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].r, (props[p][1].r-props[p][0].r), options.duration))
						+ ','
						+ parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].g, (props[p][1].g-props[p][0].g), options.duration))
						+ ','
						+ parseInt(jQuery.easing[options.easing](pr, n,  props[p][0].b, (props[p][1].b-props[p][0].b), options.duration))
						+')';
					} else {
						var pValue = jQuery.easing[options.easing](pr, n,  props[p][0], (props[p][1]-props[p][0]), options.duration);
						if ( p == "opacity" )
							jQuery.attr(y, "opacity", pValue);
						else 
							y[p] = pValue + (p != 'zIndex' && p != 'fontWeight' ? 'px':'');
					}
				}

			}
		};
	z.timer=setInterval(function(){z.step();},13);
	elem.animationHandler = z;
	},
	stopAnim: function(elem, step)
	{
		if (step)
			elem.animationHandler.startTime -= 100000000;
		else {
			window.clearInterval(elem.animationHandler.timer);
			elem.animationHandler = null;
			jQuery.dequeue(elem, "fx");
		}
	}
}
);

jQuery.parseStyle = function(styles) {
	var newStyles = {};
	if (typeof styles == 'string') {
		styles = styles.toLowerCase().split(';');
		for(var i=0; i< styles.length; i++){
			rule = styles[i].split(':');
			if (rule.length == 2) {
				newStyles[jQuery.trim(rule[0].replace(/\-(\w)/g,function(m,c){return c.toUpperCase();}))] = jQuery.trim(rule[1]);
			}
		}
	}
	return newStyles;
};



/**
 * Interface Elements for jQuery
 * utility function
 *
 * http://interface.eyecon.ro
 *
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 *
 */

jQuery.iUtil = {
	getPosition : function(e)
	{
		var x = 0;
		var y = 0;
		var es = e.style;
		var restoreStyles = false;
		if (jQuery(e).css('display') == 'none') {
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			restoreStyles = true;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
		}
		var el = e;
		while (el){
			x += el.offsetLeft + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderLeftWidth)||0:0);
			y += el.offsetTop + (el.currentStyle && !jQuery.browser.opera ?parseInt(el.currentStyle.borderTopWidth)||0:0);
			el = el.offsetParent;
		}
		el = e;
		while (el && el.tagName  && el.tagName.toLowerCase() != 'body')
		{
			x -= el.scrollLeft||0;
			y -= el.scrollTop||0;
			el = el.parentNode;
		}
		if (restoreStyles == true) {
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {x:x, y:y};
	},
	getPositionLite : function(el)
	{
		var x = 0, y = 0;
		while(el) {
			x += el.offsetLeft || 0;
			y += el.offsetTop || 0;
			el = el.offsetParent;
		}
		return {x:x, y:y};
	},
	getSize : function(e)
	{
		var w = jQuery.css(e,'width');
		var h = jQuery.css(e,'height');
		var wb = 0;
		var hb = 0;
		var es = e.style;
		if (jQuery(e).css('display') != 'none') {
			wb = e.offsetWidth;
			hb = e.offsetHeight;
		} else {
			var oldVisibility = es.visibility;
			var oldPosition = es.position;
			es.visibility = 'hidden';
			es.display = 'block';
			es.position = 'absolute';
			wb = e.offsetWidth;
			hb = e.offsetHeight;
			es.display = 'none';
			es.position = oldPosition;
			es.visibility = oldVisibility;
		}
		return {w:w, h:h, wb:wb, hb:hb};
	},
	getSizeLite : function(el)
	{
		return {
			wb:el.offsetWidth||0,
			hb:el.offsetHeight||0
		};
	},
	getClient : function(e)
	{
		var h, w, de;
		if (e) {
			w = e.clientWidth;
			h = e.clientHeight;
		} else {
			de = document.documentElement;
			w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
			h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
		}
		return {w:w,h:h};
	},
	getScroll : function (e)
	{
		var t=0, l=0, w=0, h=0, iw=0, ih=0;
		if (e && e.nodeName.toLowerCase() != 'body') {
			t = e.scrollTop;
			l = e.scrollLeft;
			w = e.scrollWidth;
			h = e.scrollHeight;
			iw = 0;
			ih = 0;
		} else  {
			if (document.documentElement) {
				t = document.documentElement.scrollTop;
				l = document.documentElement.scrollLeft;
				w = document.documentElement.scrollWidth;
				h = document.documentElement.scrollHeight;
			} else if (document.body) {
				t = document.body.scrollTop;
				l = document.body.scrollLeft;
				w = document.body.scrollWidth;
				h = document.body.scrollHeight;
			}
			iw = self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			ih = self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
		}
		return { t: t, l: l, w: w, h: h, iw: iw, ih: ih };
	},
	getMargins : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('marginTop') || '';
		var r = el.css('marginRight') || '';
		var b = el.css('marginBottom') || '';
		var l = el.css('marginLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPadding : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('paddingTop') || '';
		var r = el.css('paddingRight') || '';
		var b = el.css('paddingBottom') || '';
		var l = el.css('paddingLeft') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getBorder : function(e, toInteger)
	{
		var el = jQuery(e);
		var t = el.css('borderTopWidth') || '';
		var r = el.css('borderRightWidth') || '';
		var b = el.css('borderBottomWidth') || '';
		var l = el.css('borderLeftWidth') || '';
		if (toInteger)
			return {
				t: parseInt(t)||0,
				r: parseInt(r)||0,
				b: parseInt(b)||0,
				l: parseInt(l)||0
			};
		else
			return {t: t, r: r,	b: b, l: l};
	},
	getPointer : function(event)
	{
		var x = event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)) || 0;
		var y = event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop)) || 0;
		return {x:x, y:y};
	},
	traverseDOM : function(nodeEl, func)
	{
		func(nodeEl);
		nodeEl = nodeEl.firstChild;
		while(nodeEl){
			jQuery.iUtil.traverseDOM(nodeEl, func);
			nodeEl = nodeEl.nextSibling;
		}
	},
	purgeEvents : function(nodeEl)
	{
		jQuery.iUtil.traverseDOM(
			nodeEl,
			function(el)
			{
				for(var attr in el){
					if(typeof el[attr] === 'function') {
						el[attr] = null;
					}
				}
			}
		);
	},
	centerEl : function(el, axis)
	{
		var clientScroll = jQuery.iUtil.getScroll();
		var windowSize = jQuery.iUtil.getSize(el);
		if (!axis || axis == 'vertically')
			jQuery(el).css(
				{
					top: clientScroll.t + ((Math.max(clientScroll.h,clientScroll.ih) - clientScroll.t - windowSize.hb)/2) + 'px'
				}
			);
		if (!axis || axis == 'horizontally')
			jQuery(el).css(
				{
					left:	clientScroll.l + ((Math.max(clientScroll.w,clientScroll.iw) - clientScroll.l - windowSize.wb)/2) + 'px'
				}
			);
	},
	fixPNG : function (el, emptyGIF) {
		var images = jQuery('img[@src*="png"]', el||document), png;
		images.each( function() {
			png = this.src;				
			this.src = emptyGIF;
			this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + png + "')";
		});
	}
};

// Helper function to support older browsers!
[].indexOf || (Array.prototype.indexOf = function(v, n){
	n = (n == null) ? 0 : n;
	var m = this.length;
	for (var i=n; i<m; i++)
		if (this[i] == v)
			return i;
	return -1;
});



/**
 * Interface Elements for jQuery
 * FX - slide
 * 
 * http://interface.eyecon.ro
 * 
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses.
 *   
 *
 */

/**
 * Slides the element
 */
jQuery.fn.extend(
	{
		/**
		 * @name SlideInUp
		 * @description slides the element in up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideInUp : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'up', 'in', easing);
			});
		},
		
		/**
		 * @name SlideOutUp
		 * @description slides the element out up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideOutUp : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'up', 'out', easing);
			});
		},
		
		/**
		 * @name SlideToggleUp
		 * @description slides the element in/out up
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideToggleUp : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'up', 'toggle', easing);
			});
		},
		
		/**
		 * @name SlideInDown
		 * @description slides the element in down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideInDown : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'down', 'in', easing);
			});
		},
		
		/**
		 * @name SlideOutDown
		 * @description slides the element out down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideOutDown : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'down', 'out', easing);
			});
		},
		
		/**
		 * @name SlideToggleDown
		 * @description slides the element in/out down
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideToggleDown : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'down', 'toggle', easing);
			});
		},
		
		/**
		 * @name SlideInLeft
		 * @description slides the element in left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideInLeft : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'left', 'in', easing);
			});
		},
		
		/**
		 * @name SlideOutLeft
		 * @description slides the element out left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideOutLeft :  function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'left', 'out', easing);
			});
		},
		
		/**
		 * @name SlideToggleLeft
		 * @description slides the element in/out left
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideToggleLeft : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'left', 'toggle', easing);
			});
		},
		
		/**
		 * @name SlideInRight
		 * @description slides the element in right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideInRight : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'right', 'in', easing);
			});
		},
		
		/**
		 * @name SlideOutRight
		 * @description slides the element out right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideOutRight : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'right', 'out', easing);
			});
		},
		
		/**
		 * @name SlideToggleRight
		 * @description slides the element in/out right
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param Function callback (optional) A function to be executed whenever the animation completes.
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		SlideToggleRight : function (speed,callback, easing)
		{
			return this.queue('interfaceFX', function(){
				new jQuery.fx.slide(this, speed, callback, 'right', 'toggle', easing);
			});
		}
	}
);

jQuery.fx.slide = function(e, speed, callback, direction, type, easing)
{
	if (!jQuery.fxCheckTag(e)) {
		jQuery.dequeue(e, 'interfaceFX');
		return false;
	}
	var z = this;
	z.el = jQuery(e);
	z.easing = typeof callback == 'string' ? callback : easing||null;
	z.callback = typeof callback == 'function' ? callback : null;
	if ( type == 'toggle') {
		type = z.el.css('display') == 'none' ? 'in' : 'out';
	}
	if (!e.ifxFirstDisplay)
		e.ifxFirstDisplay = z.el.css('display');
	z.el.show();
	
	z.speed = speed;
	z.fx = jQuery.fx.buildWrapper(e);
	
	z.type = type;
	z.direction = direction;
	z.complete = function()
	{
		if(z.type == 'out')
			z.el.css('visibility', 'hidden');
		jQuery.fx.destroyWrapper(z.fx.wrapper.get(0), z.fx.oldStyle);
		if(z.type == 'in'){
			z.el.css('display', z.el.get(0).ifxFirstDisplay == 'none' ? 'block' : z.el.get(0).ifxFirstDisplay);
		} else {
			z.el.css('display', 'none');
			z.el.css('visibility', 'visible');
		}
		if (z.callback && z.callback.constructor == Function) {
			z.callback.apply(z.el.get(0));
		}
		jQuery.dequeue(z.el.get(0), 'interfaceFX');
	};
	switch (z.direction) {
		case 'up':
			z.ef = new jQuery.fx(
				z.el.get(0), 
				jQuery.speed(
					z.speed,
					z.easing,
					z.complete
				),
				'top'
			);
			z.efx = new jQuery.fx(
				z.fx.wrapper.get(0), 
				jQuery.speed(
					z.speed,
					z.easing
				),
				'height'
			);
			if (z.type == 'in') {
				z.ef.custom (-z.fx.oldStyle.sizes.hb, 0);
				z.efx.custom(0, z.fx.oldStyle.sizes.hb);
			} else {
				z.ef.custom (0, -z.fx.oldStyle.sizes.hb);
				z.efx.custom (z.fx.oldStyle.sizes.hb, 0);
			}
		break;
		case 'down':
			z.ef = new jQuery.fx(
				z.el.get(0), 
				jQuery.speed(
					z.speed,
					z.easing,
					z.complete
				),
				'top'
			);
			if (z.type == 'in') {
				z.ef.custom (z.fx.oldStyle.sizes.hb, 0);
			} else {
				z.ef.custom (0, z.fx.oldStyle.sizes.hb);
			}
		break;
		case 'left':
			z.ef = new jQuery.fx(
				z.el.get(0), 
				jQuery.speed(
					z.speed,
					z.easing,
					z.complete
				),
				'left'
			);
			z.efx = new jQuery.fx(
				z.fx.wrapper.get(0), 
				jQuery.speed(
					z.speed,
					z.easing
				),
				'width'
			);
			if (z.type == 'in') {
				z.ef.custom (-z.fx.oldStyle.sizes.wb, 0);
				z.efx.custom (0, z.fx.oldStyle.sizes.wb);
			} else {
				z.ef.custom (0, -z.fx.oldStyle.sizes.wb);
				z.efx.custom (z.fx.oldStyle.sizes.wb, 0);
			}
		break;
		case 'right':
			z.ef = new jQuery.fx(
				z.el.get(0), 
				jQuery.speed(
					z.speed,
					z.easing,
					z.complete
				),
				'left'
			);
			if (z.type == 'in') {
				z.ef.custom (z.fx.oldStyle.sizes.wb, 0);
			} else {
				z.ef.custom (0, z.fx.oldStyle.sizes.wb);
			}
		break;
	}
};



/**
 * Interface Elements for jQuery
 * FX - scroll to
 * 
 * http://interface.eyecon.ro
 * 
 * Copyright (c) 2006 Stefan Petre
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses.
 *   
 *
 */
/**
 * Applies a scrolling effect to document until the element gets into viewport
 */
jQuery.fn.extend (
	{
		/**
		 * @name ScrollTo
		 * @description scrolls the document until the lement gets into viewport
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		ScrollTo : function(speed, axis, easing) {
			o = jQuery.speed(speed);
			return this.queue('interfaceFX',function(){
				new jQuery.fx.ScrollTo(this, o, axis, easing);
			});
		},
		/**
		 * @name ScrollToAnchors
		 * @description all links to '#elementId' will animate scroll
		 * @param Mixed speed animation speed, integer for miliseconds, string ['slow' | 'normal' | 'fast']
		 * @param String axis (optional) whatever to scroll on vertical, horizontal or both axis ['vertical'|'horizontal'|null]
		 * @param String easing (optional) The name of the easing effect that you want to use.
		 * @type jQuery
		 * @cat Plugins/Interface
		 * @author Stefan Petre
		 */
		/*inspired by David Maciejewski www.macx.de*/
		ScrollToAnchors : function(speed, axis, easing) {
			return this.each(
				function()
				{
					jQuery('a[@href*="#"]', this).click(
						function(e)
						{
							parts = this.href.split('#');
							jQuery('#' + parts[1]).ScrollTo(speed, axis, easing);
							return false;
						}
					);
				}
			)
		}
	}
);

jQuery.fx.ScrollTo = function (e, o, axis, easing)
{
	var z = this;
	z.o = o;
	z.e = e;
	z.axis = /vertical|horizontal/.test(axis) ? axis : false;
	z.easing = easing;
	p = jQuery.iUtil.getPosition(e);
	s = jQuery.iUtil.getScroll();
	z.clear = function(){clearInterval(z.timer);z.timer=null;jQuery(z.e).dequeue('interfaceFX');};
	z.t=(new Date).getTime();
	s.h = s.h > s.ih ? (s.h - s.ih) : s.h;
	s.w = s.w > s.iw ? (s.w - s.iw) : s.w;
	z.endTop = p.y > s.h ? s.h : p.y;
	z.endLeft = p.x > s.w ? s.w : p.x;
	z.startTop = s.t;
	z.startLeft = s.l;
	z.step = function(){
		var t = (new Date).getTime();
		var n = t - z.t;
		var p = n / z.o.duration;
		if (t >= z.o.duration+z.t) {
			z.clear();
			setTimeout(function(){z.scroll(z.endTop, z.endLeft)},13);
		} else {
			if (!z.axis || z.axis == 'vertical') {
				if (!jQuery.easing || !jQuery.easing[z.easing]) {
					st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endTop-z.startTop) + z.startTop;
				} else {
					st = jQuery.easing[z.easing](p, n, z.startTop, (z.endTop - z.startTop), z.o.duration);
				}
			} else {
				st = z.startTop;
			}
			if (!z.axis || z.axis == 'horizontal') {
				if (!jQuery.easing || !jQuery.easing[z.easing]) {
					sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.endLeft-z.startLeft) + z.startLeft;
				} else {
					sl = jQuery.easing[z.easing](p, n, z.startLeft, (z.endLeft - z.startLeft), z.o.duration);
				}
			} else {
				sl = z.startLeft;
			}
			z.scroll(st, sl);
		}
	};
	z.scroll = function (t, l){window.scrollTo(l, t);};
	z.timer=setInterval(function(){z.step();},13);
};