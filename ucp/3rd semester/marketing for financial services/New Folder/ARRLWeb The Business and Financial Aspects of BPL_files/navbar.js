// Copyright (c) 2000-2001, ARRL
function ShowM(menu) {
	ShowForms('hidden');
	if (document.all)
		l = document.all[menu];
	else if (document.layers)
		l = document.layers[menu];
	else
		l = document.getElementById(menu);
	if (!document.layers) {
		w = l.offsetWidth;
		h = l.offsetHeight;
		ww = l.offsetParent.offsetWidth;
		wh = l.offsetParent.offsetHeight;
	} else {
		w = l.clip.width;
		h = l.clip.height;
		ww = window.innerWidth;
		wh = window.innerHeight;
//		window.cursorX = e.pageX;
//		window.cursorY = e.pageY;
	}
	ww -= window.AmenuXTrim;
	l.y = window.cursorY + window.AmenuYOffset;
	
	if (window.Amenus.length == 0) {
		l.x = window.cursorX;
	} else {
		pm = Amenus[window.Amenus.length-1];
		if (document.all) {
			pl = document.all[pm];
			l.x = pl.offsetLeft + pl.offsetWidth - window.AmenuOverlap;
		} else if (document.layers) {
			pl = document.layers[pm];
			l.x = pl.left + pl.clip.right - window.AmenuOverlap;
		} else {
			pl = document.getElementById(pm);
			l.x = pl.offsetLeft + pl.offsetWidth - window.AmenuOverlap;
		}
	}
	if (document.layers) {
		l.y = l.y - window.pageYOffset;
		l.x = l.x - window.pageXOffset;
	} else if (!document.all) {
		l.y = l.y + window.pageYOffset;
		l.x = l.x + window.pageXOffset;
	}
	if (l.x + w > ww)
		l.x = ww - w - 20;
	if (l.x < 0)
		l.x = 0;
	if (l.y + h > wh)
		l.y = wh - h - 20;
	if (l.y < 0)
		l.y = 0;
	if (document.all) {
		l.style.left = l.x + l.offsetParent.scrollLeft;
		l.style.top = l.y + l.offsetParent.scrollTop;
		l.style.visibility = "inherit";
	} else if (document.layers) {
		l.y += window.pageYOffset;
		l.x += window.pageXOffset;
		l.visibility='show';
//		document.captureEvents(Event.MOUSEUP);
//		document.onmouseup=ClickHide;
	} else {
		l.style.left = l.x;
		l.style.top = l.y;
		l.style.visibility = "inherit";
//		l.style.position = "fixed";
	}
	window.Amenus[window.Amenus.length] = menu;
}

function Launch(url) {
	HideAll(1);
	ShowForms('inherit');
	window.location = url;
}

function HideMenu(menu) {
	if (document.all)
		document.all[menu].style.visibility='hidden';
	else if (document.layers)
		document.layers[menu].visibility='hide';
	else
		document.getElementById(menu).style.visibility='hidden';
}

function inMenu(x, y, menu) {
	if (document.all) {
		layer = document.all[menu];
		y += layer.offsetParent.scrollTop;
		x += layer.offsetParent.scrollLeft;
	} else if (document.layers) {
		layer = document.layers[menu];
	} else {
		layer = document.getElementById(menu);
		y += layer.offsetParent.scrollTop;
		x += layer.offsetParent.scrollLeft;
	}
	if (!layer)
		return false;
	if (!document.layers) {
		l = layer.offsetLeft;
		r = l + layer.offsetWidth;
		t = layer.offsetTop;
		b = t + layer.offsetHeight;
	} else {
		l = layer.left;
		r = l + layer.clip.right;
		t = layer.top;
		b = t + layer.clip.bottom;
	}
	if (x >= l && x <= r) {
		if (y >= t && y <= b) {
			return true;
		}
	}
	return false;
}

function HideAll(force) {
//	if (document.layers)
//		document.releaseEvents(Event.MOUSEUP);
	while (window.Amenus.length > 0) {
		m = window.Amenus[window.Amenus.length -1];
		if (force || !inMenu(window.cursorX, window.cursorY, m)) {
			HideMenu(m);
			window.Amenus.length = window.Amenus.length-1;
		} else
			return;
	}
}

function CurPos(e) {
	if (!e)
		e = window.event;
	if (!document.layers) {
		window.cursorX = e.clientX;
		window.cursorY = e.clientY;
	} else {
		window.cursorX = e.pageX;
		window.cursorY = e.pageY;
	}
	if (document.layers) document.routeEvent(e);
}

function ClickHide(e) {
	CurPos(e);
	HideAll();
	if (window.Amenus.length == 0) ShowForms('inherit');
	if (document.layers) document.routeEvent(e);
}

function doresize() {
	if (!document.layers) return;
	if (window.innerWidth==origWidth && window.innerHeight==origHeight) return;
	origWidth = window.innerWidth;
	origHeight = window.innerHeight;
	window.location.reload();
}

function ShowForms(show) {
	if (!document.layers) {
		for (var i=0; i<window.document.forms.length; i++) {
//			if (window.document.forms[i].name=='' || window.document.forms[i].name.indexOf('navform')==-1)
			window.document.forms[i].style.visibility=show;
		}
	} else {
		for (var i=0; i<window.document.layers.length; i++) {
			if (window.document.layers[i].name.indexOf('hide')!=-1)
				window.document.layers[i].visibility=(show=='hidden')?'hide':show;
		}
	}
}

window.Amenus = new Array(0);
window.Amenus.length = 0;
window.AmenuOverlap = 10;
window.AmenuYOffset = 5;
window.AmenuXTrim = 20;
if (!document.all) {
	document.captureEvents(Event.MOUSEUP);
	document.onmouseup=ClickHide;
	document.captureEvents(Event.CLICK);
	document.onclick=ClickHide;
} else
	document.onclick=ClickHide;
window.IE4 = ((document.all) && navigator.appVersion.indexOf("4.")!=-1);
origWidth = window.innerWidth;
origHeight = window.innerHeight;
w=window;
tb1=w.IE4?'':'<DIV ID="navMenu1" CLASS="navmenu">';
ti1=w.IE4?' ID="navMenu1" CLASS="navmenu"':'';
tb2=w.IE4?'':'<DIV ID="navMenu2" CLASS="navmenu">';
ti2=w.IE4?' ID="navMenu2" CLASS="navmenu"':'';
tb3=w.IE4?'':'<DIV ID="navMenu3" CLASS="navmenu">';
ti3=w.IE4?' ID="navMenu3" CLASS="navmenu"':'';
tb4=w.IE4?'':'<DIV ID="navMenu4" CLASS="navmenu">';
ti4=w.IE4?' ID="navMenu4" CLASS="navmenu"':'';
tb5=w.IE4?'':'<DIV ID="navMenu5" CLASS="navmenu">';
ti5=w.IE4?' ID="navMenu5" CLASS="navmenu"':'';
tb6=w.IE4?'':'<DIV ID="navMenu6" CLASS="navmenu">';
ti6=w.IE4?' ID="navMenu6" CLASS="navmenu"':'';
tb7=w.IE4?'':'<DIV ID="navMenu7" CLASS="navmenu">';
ti7=w.IE4?' ID="navMenu7" CLASS="navmenu"':'';
tb8=w.IE4?'':'<DIV ID="navMenu8" CLASS="navmenu">';
ti8=w.IE4?' ID="navMenu8" CLASS="navmenu"':'';
tb9=w.IE4?'':'<DIV ID="navMenu9" CLASS="navmenu">';
ti9=w.IE4?' ID="navMenu9" CLASS="navmenu"':'';
tb22=w.IE4?'':'<DIV ID="navMenu22" CLASS="navmenu">';
ti22=w.IE4?' ID="navMenu22" CLASS="navmenu"':'';
tb23=w.IE4?'':'<DIV ID="navMenu23" CLASS="navmenu">';
ti23=w.IE4?' ID="navMenu23" CLASS="navmenu"':'';
tb24=w.IE4?'':'<DIV ID="navMenu24" CLASS="navmenu">';
ti24=w.IE4?' ID="navMenu24" CLASS="navmenu"':'';
tb26=w.IE4?'':'<DIV ID="navMenu26" CLASS="navmenu">';
ti26=w.IE4?' ID="navMenu26" CLASS="navmenu"':'';
tb27=w.IE4?'':'<DIV ID="navMenu27" CLASS="navmenu">';
ti27=w.IE4?' ID="navMenu27" CLASS="navmenu"':'';
tb28=w.IE4?'':'<DIV ID="navMenu28" CLASS="navmenu">';
ti28=w.IE4?' ID="navMenu28" CLASS="navmenu"':'';
tb29=w.IE4?'':'<DIV ID="navMenu29" CLASS="navmenu">';
ti29=w.IE4?' ID="navMenu29" CLASS="navmenu"':'';
tb31=w.IE4?'':'<DIV ID="navMenu31" CLASS="navmenu">';
ti31=w.IE4?' ID="navMenu31" CLASS="navmenu"':'';
tb33=w.IE4?'':'<DIV ID="navMenu33" CLASS="navmenu">';
ti33=w.IE4?' ID="navMenu33" CLASS="navmenu"':'';
tb34=w.IE4?'':'<DIV ID="navMenu34" CLASS="navmenu">';
ti34=w.IE4?' ID="navMenu34" CLASS="navmenu"':'';
tb35=w.IE4?'':'<DIV ID="navMenu35" CLASS="navmenu">';
ti35=w.IE4?' ID="navMenu35" CLASS="navmenu"':'';
tb37=w.IE4?'':'<DIV ID="navMenu37" CLASS="navmenu">';
ti37=w.IE4?' ID="navMenu37" CLASS="navmenu"':'';
tb39=w.IE4?'':'<DIV ID="navMenu39" CLASS="navmenu">';
ti39=w.IE4?' ID="navMenu39" CLASS="navmenu"':'';
tb42=w.IE4?'':'<DIV ID="navMenu42" CLASS="navmenu">';
ti42=w.IE4?' ID="navMenu42" CLASS="navmenu"':'';
tb43=w.IE4?'':'<DIV ID="navMenu43" CLASS="navmenu">';
ti43=w.IE4?' ID="navMenu43" CLASS="navmenu"':'';
tb44=w.IE4?'':'<DIV ID="navMenu44" CLASS="navmenu">';
ti44=w.IE4?' ID="navMenu44" CLASS="navmenu"':'';
tb46=w.IE4?'':'<DIV ID="navMenu46" CLASS="navmenu">';
ti46=w.IE4?' ID="navMenu46" CLASS="navmenu"':'';
tb47=w.IE4?'':'<DIV ID="navMenu47" CLASS="navmenu">';
ti47=w.IE4?' ID="navMenu47" CLASS="navmenu"':'';
tb48=w.IE4?'':'<DIV ID="navMenu48" CLASS="navmenu">';
ti48=w.IE4?' ID="navMenu48" CLASS="navmenu"':'';
te=w.IE4 ? '' : '</DIV>'
document.writeln(tb1+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti1+'<tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu22\')">Awards</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu23\')">Contests</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/spev.html\')">Special Events</a></td></tr><tr><td><a href="javascript:Launch(\'/qst/worldabove/\')">World Above 50 MHz</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu24\')">Amateur Bands</a></td></tr></TABLE>'+te+tb2+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti2+'<tr><td><a href="javascript:Launch(\'/hamradio.html\')">Getting Started in Amateur Radio</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/ead/classes.html\')">FAQs about Licensing</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu26\')">Call Signs</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu27\')">Exams</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu28\')">FCC Licenses</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu29\')">Reciprocal (International) Licensing</a></td></tr></TABLE>'+te+tb3+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti3+'<tr><td><a href="javascript:Launch(\'/arrlletter/audio/\')">ARRL Audio News</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu31\')">ARRL Bulletins</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlletter\')"><i>The ARRL Letter</i></a></td></tr><tr><td><a href="javascript:Launch(\'/news/enforcement_logs/\')">FCC Enforcement Actions</a></td></tr><tr><td><a href="javascript:Launch(\'/news/bandthreat/\')">Band Threats</a></td></tr><tr><td><a href="javascript:Launch(\'/announce/\')">Announcements</a></td></tr><tr><td><a href="javascript:Launch(\'/pio/\')">Public Relations</a></td></tr><tr><td><a href="javascript:Launch(\'/govrelations/\')">Government Relations</a></td></tr></TABLE>'+te+tb4+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti4+'<tr><td><a href="javascript:Launch(\'/benefits.html\')">Member Benefits</a></td></tr><tr><td><a href="javascript:Launch(\'/tis/\')">Technical Information</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu33\')">Regulatory Information</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu34\')">QSL Service</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/insurance/equipment.html\')">Equipment Insurance</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/arbitration.html\')">Mediation Service/Arbitration Service</a></td></tr><tr><td><a href="javascript:Launch(\'/RadiosOnline/\')"><i>Radios Online</i> (Classifieds)</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu35\')">Publications</a></td></tr><tr><td><a href="javascript:Launch(\'/brochures/\')">Event Materials</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw.html\')">W1AW</a></td></tr></TABLE>'+te+tb5+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti5+'<tr><td><a href="javascript:Launch(\'/FandES/tbp/\')">Grants and Curriculum for Schools</a></td></tr><tr><td><a href="javascript:Launch(\'http://www.arrl.org/FandES/tbp/ti.html\')">Teachers Institute on Wireless Technology</a></td></tr><tr><td><a href="javascript:Launch(\'/cce/\')">Certification/Continuing Education</a></td></tr><tr><td><a href="javascript:Launch(\'/sarex/\')">Ham Radio in Space (SAREX/ARISS)</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu37\')">Teaching Ham Radio</a></td></tr><tr><td><a href="javascript:Launch(\'/hamradio.html\')">Getting Started in Amateur Radio</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/ead/classes.html\')">FAQs about Licensing</a></td></tr><tr><td><a href="javascript:Launch(\'/scouts/\')">Scouting Activities</a></td></tr><tr><td><a href="javascript:Launch(\'http://www.arrl.org/arrlf/scholgen.html\')">Scholarships</a></td></tr></TABLE>'+te+tb6+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti6+'<tr><td><a href="javascript:Launch(\'/FandES/field/emergency/\')">Emergency Communications</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/nets/\')">ARRL Net Directory</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/pscm/\')">Public Service Communications Manual</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/PublicServiceStories/\')">Public Service Stories</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu39\')">Amateur Radio Emergency Service (ARES)</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/pscm/sec2-ch1.html\')">National Traffic System</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/pubservice.html\')">Other Topics</a></td></tr></TABLE>'+te+tb7+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti7+'<tr><td><a href="javascript:Launch(\'/services.html\')">Membership/<i>QST</i></a></td></tr><tr><td><a href="javascript:Launch(\'/catalog/cathelp.html\')">Orders</a></td></tr><tr><td><a href="javascript:Launch(\'/tis/\')">Technical Information</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu33\')">Regulatory Information</a></td></tr><tr><td><a href="javascript:Launch(\'/notes/\')">Product Notes and Updates</a></td></tr></TABLE>'+te+tb8+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti8+'<tr><td><a href="javascript:Launch(\'/development/#top\')">ARRL Development Overview</a></td></tr><tr><td><a href="javascript:Launch(\'https://www.arrl.org/forms/development/donations/basic/\')">Donation Form</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu42\')">Annual Giving</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu43\')">ARRL Funds</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu44\')">Estate Planning</a></td></tr><tr><td><a href="javascript:Launch(\'/development/ppa.html#top\')">Donate from your IRA</a></td></tr><tr><td><a href="javascript:Launch(\'http://www.arrlf.org/\')">ARRL Foundation</a></td></tr><tr><td><a href="javascript:Launch(\'/development/memorial.html#top\')">Memorial Gifts</a></td></tr><tr><td><a href="javascript:Launch(\'/development/matching-gifts.html#top\')">Corporate Matching Gifts</a></td></tr><tr><td><a href="javascript:Launch(\'/development/contact.html#top\')">Contact Us</a></td></tr></TABLE>'+te+tb9+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti9+'<tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu46\')">General Information</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu47\')">Contacting ARRL</a></td></tr><tr><td><a href="javascript:Launch(\'/announce/jobs/\')">Employment at ARRL</a></td></tr><tr><td><a href="javascript:Launch(\'/visithq.html\')">Visiting HQ</a></td></tr><tr><td><a href="javascript:Launch(\'/divisions/\')">ARRL Divisions</a></td></tr><tr><td><a href="javascript:Launch(\'/sections/\')">ARRL Sections</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/org/\')">ARRL Field Organization</a></td></tr><tr><td><a href="javascript:Launch(\'http://www.arrlf.org/\')">ARRL Foundation</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw.html\')">W1AW</a></td></tr><tr><td><a href="javascript:Launch(\'/logos/\')">Logos and Photos</a></td></tr><tr><td><a href="javascript:Launch(\'/locate/\')">Location Service</a></td></tr><tr><td><IMG SRC="/graphics/tri.gif" WIDTH=10 HEIGHT=10 ALIGN="right"><a href="javascript:ShowM(\'navMenu48\')">ARRL Web Site</a></td></tr></TABLE>'+te+tb22+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti22+'<tr><td><a href="javascript:Launch(\'/awards/\')">Main Page</a></td></tr><tr><td><a href="javascript:Launch(\'/awards/dxcc/\')">DXCC</a></td></tr><tr><td><a href="javascript:Launch(\'/awards/was/\')">WAS</a></td></tr><tr><td><a href="javascript:Launch(\'/awards/vucc/\')">VUCC</a></td></tr></TABLE>'+te+tb23+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti23+'<tr><td><a href="javascript:Launch(\'/contests/\')">Main Page</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/calendar.html\')">Calendar</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/results/\')">Results</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/soapbox/\')">Soapbox</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/rate-sheet/\')"><I>Rate Sheet</i> Newsletter</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/forms/\')">Rules</a></td></tr><tr><td><a href="javascript:Launch(\'/contests/options.html\')">Log submissions</a></td></tr></TABLE>'+te+tb24+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti24+'<tr><td><a href="javascript:Launch(\'/FandES/field/regulations/bands.html\')">Frequency Chart</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/bandplan.html\')">Band Plans</a></td></tr></TABLE>'+te+tb26+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti26+'<tr><td><a href="javascript:Launch(\'/arrlvec/vanity.html\')">Vanity Call Signs</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlvec/1x1.html\')">1 &times; 1 Call Signs</a></td></tr><tr><td><a href="javascript:Launch(\'/fcc/fcclook.php3\')">Look up by call or name</a></td></tr></TABLE>'+te+tb27+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti27+'<tr><td><a href="javascript:Launch(\'/arrlvec/\')">ARRL/VEC</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlvec/examsearch.phtml\')">Find Upcoming Exams</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlvec/pools.html\')">Exam Question Pools</a></td></tr></TABLE>'+te+tb28+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti28+'<tr><td><a href="javascript:Launch(\'/arrlvec/renewals.html\')">License Renewal</a></td></tr><tr><td><a href="javascript:Launch(\'/fcc/forms.html\')">Licensing Forms</a></td></tr><tr><td><a href="javascript:Launch(\'/fcc/uls101.html\')">Universal Licensing System (ULS)</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlvec/vanity.html\')">Vanity Call Signs</a></td></tr><tr><td><a href="javascript:Launch(\'/arrlvec/605ins.html#club\')">Club Call Signs</a></td></tr><tr><td><a href="javascript:Launch(\'/fcc/fcclook.php3\')">Look up by call or name</a></td></tr></TABLE>'+te+tb29+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti29+'<tr><td><a href="javascript:Launch(\'/FandES/field/regulations/io/#us\')">US Amateurs Operating Overseas</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/io/#foreign\')">Foreign Amateurs Operating in the US</a></td></tr></TABLE>'+te+tb31+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti31+'<tr><td><a href="javascript:Launch(\'/w1aw/\')">General/Special Bulletins</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw/dx/\')">DX Bulletins</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw/prop/\')">Propagation Bulletins</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw/kep/\')">Keplerian Bulletins</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw.html#w1awsked\')">Transmission Schedule</a></td></tr><tr><td><a href="javascript:Launch(\'/w1aw.html#email\')">Via Email</a></td></tr></TABLE>'+te+tb33+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti33+'<tr><td><a href="javascript:Launch(\'/FandES/field/regulations/rules-regs.html\')">FCC Rules</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/antenna-restrictions.html\')">Antenna Restrictions</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/rfi-legal/\')">RFI</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/io/\')">International Operating</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/bands.html\')">US Frequency Allocations</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/bandplan.html\')">Band Plans</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/freqcoord.html\')">Frequency Coordinators</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/licensing.html\')">License Renewal/Changes</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/insurance/equipment.html\')">Equipment Insurance</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/insurance/club_liability.html\')">Club Liability Insurance</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/faq.html\')">FAQ</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/regulations/additional.html\')">Additional Information</a></td></tr></TABLE>'+te+tb34+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti34+'<tr><td><a href="javascript:Launch(\'/qsl/qslin.html\')">Incoming</a></td></tr><tr><td><a href="javascript:Launch(\'/qsl/qslout.html\')">Outgoing</a></td></tr></TABLE>'+te+tb35+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti35+'<tr><td><a href="javascript:Launch(\'/qst/\')"><i>QST</i></a></td></tr><tr><td><a href="javascript:Launch(\'/qex\')"><i>QEX</i></a></td></tr><tr><td><a href="javascript:Launch(\'/ncj/\')"><i>NCJ</i></a></td></tr><tr><td><a href="javascript:Launch(\'/catalog/\')">Online Store</a></td></tr></TABLE>'+te+tb37+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti37+'<tr><td><a href="javascript:Launch(\'/FandES/ead/teacher/\')">School Teacher Support</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/ead/instructor/\')">Volunteer Instructor Support</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/ead/award/\')">Educational Awards</a></td></tr></TABLE>'+te+tb39+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti39+'<tr><td><a href="javascript:Launch(\'/FandES/field/pscm/sec1-ch1.html\')">General Information</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/pubservice.html#resources\')">Field Resources Manual</a></td></tr><tr><td><a href="javascript:Launch(\'/ares-el/\')"><i>ARES E-Letter</i></a></td></tr></TABLE>'+te+tb42+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti42+'<tr><td><a href="javascript:Launch(\'https://www.arrl.org/forms/development/donations/diamondclub/\')">ARRL Diamond Club</a></td></tr><tr><td><a href="javascript:Launch(\'/development/maxim.html#top\')">ARRL Maxim Society</a></td></tr></TABLE>'+te+tb43+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti43+'<tr><td><a href="javascript:Launch(\'https://www.arrl.org/forms/fdefense/\')">Defense of Frequencies</a></td></tr><tr><td><a href="javascript:Launch(\'https://www.arrl.org/forms/development/donations/education/\')">Education &amp; Technology</a></td></tr><tr><td><a href="javascript:Launch(\'/endoww1aw.html\')">W1AW Endowment</a></td></tr><tr><td><a href="javascript:Launch(\'/development/funds.html#top\')">Other ARRL Funds</a></td></tr></TABLE>'+te+tb44+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti44+'<tr><td><a href="javascript:Launch(\'/development/planned-giving.html#top\')">Making Estate Gifts</a></td></tr><tr><td><a href="javascript:Launch(\'/development/will.html#top\')">Your Will and ARRL</a></td></tr><tr><td><a href="javascript:Launch(\'/development/legacy.html#top\')">ARRL Legacy Circle</a></td></tr></TABLE>'+te+tb46+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti46+'<tr><td><a href="javascript:Launch(\'/aarrl.html\')">About ARRL</a></td></tr><tr><td><a href="javascript:Launch(\'/aabl.html\')">Articles of Association &amp; Bylaws</a></td></tr><tr><td><a href="javascript:Launch(\'/announce/annualreport/\')">Annual Reports</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/org/\')">Field Organization</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/club/\')">Affiliated Clubs</a></td></tr><tr><td><a href="javascript:Launch(\'/announce/board.html\')">Board Meeting Minutes/Reports</a></td></tr></TABLE>'+te+tb47+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti47+'<tr><td><a href="javascript:Launch(\'/officers.html\')">Officers</a></td></tr><tr><td><a href="javascript:Launch(\'/divisions/\')">Directors</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/org/smlist.html\')">Section Managers</a></td></tr><tr><td><a href="javascript:Launch(\'/honoraries.html\')">Honorary Officials</a></td></tr><tr><td><a href="javascript:Launch(\'/FandES/field/club/clubsearch.phtml\')">Affiliated Clubs</a></td></tr><tr><td><a href="javascript:Launch(\'/contact.html\')">Headquarters</a></td></tr><tr><td><a href="javascript:Launch(\'/quick.html#arrlfiles\')">FTP Information</a></td></tr></TABLE>'+te+tb48+'<table nowrap border="1" cellspacing="0" cellpadding="4" bgcolor="#00FFFF"'+ti48+'<tr><td><a href="javascript:Launch(\'/privacy.html\')">Privacy Policy</a></td></tr><tr><td><a href="javascript:Launch(\'/aarrlweb.html\')">Facts and Stats</a></td></tr><tr><td><a href="javascript:Launch(\'/ads/banners.html\')">Advertising</a></td></tr></TABLE>'+te);
