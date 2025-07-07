
function SafariDetect() 
{
	var ua = navigator.userAgent.toLowerCase();
	this.isSafari = (ua.indexOf('safari') != - 1);
	this.versionMinor = parseFloat(navigator.appVersion);
	this.isSafari10 = ((this.isSafari) && (this.versionMinor < 87));
	if (this.isSafari10 == true) 
	{
		document.write('<link rel="stylesheet" type="text/css" href="/stylesheets/3472196.css" media="all" />');
	}
}
SafariDetect();
