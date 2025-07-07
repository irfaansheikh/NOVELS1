var __referer = document.referrer;

var __title = "";
var __url = "";

var __base_dir="http://am1.activemeter.com/webtracker/track.html";

var __am_debug = (document.URL.indexOf('amtest=1') >= 0);
var __am_image = new Image();
var __am_removed = 0;

__referer = escape(__referer);
__title = escape(document.title);
__url = escape(document.location);

var __tracking_url = __base_dir+"?method=track&pid="+__pid+"&ref="+__referer+"&pageUrl="+__url+"&pageTitle="+__title+"&java=1"+"&amcs="+Math.random();

var __vip;
var __roi;
var __akw;
var __cvt;


function __am_parseArgs () {
	sArgs = location.search.slice(1).split('&');
    for (var i = 0; i < sArgs.length; i++) {
        argName  = sArgs[i].slice(0,sArgs[i].indexOf('='));
        argValue = sArgs[i].slice(sArgs[i].indexOf('=')+1);
        __am_setupArgs(argName, argValue);
    }
}

function __am_setupArgs (argName, argValue) {
    if ('source'==argName) {
        __roi = (argValue.length > 0 ? unescape(argValue).split(',') : '');
    } else if ('akw'==argName) {
        __akw = (argValue.length > 0 ? unescape(argValue).split(',') : '');
    } else if ('vip'==argName) {
        __vip = (argValue.length > 0 ? unescape(argValue).split(',') : '');
    } else if ('acvt'==argName) {
        __cvt = (argValue.length > 0 ? unescape(argValue).split(',') : '');
    }
}

if (__pid==6736 || __pid==6748 || __pid==6749 || __pid==6750 || __pid==25931) {
  __am_removed=1;
}

__am_parseArgs();

if (__vip != null && __vip.length > 0) {
    if (__am_debug) { alert('vip: ' + __vip); }
    __tracking_url=__tracking_url+"&vip="+__vip;
}

if (__roi != null && __roi.length > 0) {
    if (__am_debug) { alert('roi: ' + __roi); }
    __tracking_url=__tracking_url+"&source="+__roi;
}


if (__akw != null && __akw.length > 0) {
    if (__am_debug) { alert('keyword: ' + __akw); }
    __tracking_url=__tracking_url+"&keyword="+__akw;
}

if (window.__am_convert) {
    __tracking_url=__tracking_url+"&actn="+__am_convert;
} else if (__cvt != null && __cvt.length > 0) {
    __tracking_url=__tracking_url+"&actn="+__cvt;
}

if (__am_removed==1) {
    document.writeln("<b>ActiveMeter cannot track a high volume website like yours for free. Please remove the code ASAP.</b>");
} else if (window.__am_invisible) {
    if(window.__am_invisible==1) {
        __am_image.src = __tracking_url;
    }
} else {
    document.writeln("<A HREF=\"http://www.activemeter.com/\" TARGET=\"_blank\"><IMG SRC=\""+__tracking_url+"\" ALT=\"Active Meter\" BORDER=\"0\"><\/A>");
}
