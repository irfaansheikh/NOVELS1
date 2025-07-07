//This script detects the following:
//Flash
//Windows Media Player
//Java
//Shockwave
//RealPlayer
//QuickTime
//Acrobat Reader
//SVG Viewer

var agt=navigator.userAgent.toLowerCase();
var opera  = (agt.indexOf("opera") != -1);
var ie  = (agt.indexOf("msie") != -1);
var ns  = (navigator.appName.indexOf("Netscape") != -1);
var win = ((agt.indexOf("win")!=-1) || (agt.indexOf("32bit")!=-1));
var mac = (agt.indexOf("mac")!=-1);

if (ie && win) {	pluginlist = detectIE("Adobe.SVGCtl","SVG Viewer") + detectIE("SWCtl.SWCtl.1","Shockwave Director") + detectIE("ShockwaveFlash.ShockwaveFlash.1","Shockwave Flash") + detectIE("rmocx.RealPlayer G2 Control.1","RealPlayer") + detectIE("QuickTimeCheckObject.QuickTimeCheck.1","QuickTime") + detectIE("MediaPlayer.MediaPlayer.1","Windows Media Player"); }
if ((ns || opera) || !win) {
		nse = ""; for (var i=0;i<navigator.mimeTypes.length;i++) nse += navigator.mimeTypes[i].type.toLowerCase();
		pluginlist = detectNS("image/svg-xml","SVG Viewer") + detectNS("application/x-director","Shockwave Director") + detectNS("application/x-shockwave-flash","Shockwave Flash") + detectNS("audio/x-pn-realaudio-plugin","RealPlayer") + detectNS("video/quicktime","QuickTime") + detectNS("application/x-mplayer2","Windows Media Player") + detectNS("application/pdf","Acrobat Reader");
}

function detectIE(ClassID,name) { result = false; document.write('<SCRIPT LANGUAGE=VBScript>\n on error resume next \n result = IsObject(CreateObject("' + ClassID + '"))</SCRIPT>\n'); if (result) return name+','; else return ''; }
function detectNS(ClassID,name) { n = ""; if (nse.indexOf(ClassID) != -1) if (navigator.mimeTypes[ClassID].enabledPlugin != null) n = name+","; return n; }

pluginlist += navigator.javaEnabled() ? "Java," : "";
if (pluginlist.length > 0) pluginlist = pluginlist.substring(0,pluginlist.length-1);


//Browser Detection
//    * Browser name: BrowserDetect.browser
//    * Browser version: BrowserDetect.version
//    * OS name: BrowserDetect.OS


var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();


function switchOnQR(url) {
	document.getElementById('qrimg').src="/shared/script/qr_img_inpage.html?adr="+url;
	document.getElementById('qrcode').style.display='block';
}
function switchOffQR() {
	document.getElementById('qrcode').style.display='none';
}

function FACTS_slide_ON () {
	winsize=browserContentWindow();

	if (winSize['width']<930) {
		winSize['width']=winSize['width']-128;
		document.getElementById('slide_facts_HR').style.width=winSize['width']+'px';
		document.getElementById('slide_facts_HR').style.height=winSize['width']*2./3.+'px';
	}
	else {
		document.getElementById('slide_facts_HR').style.width='800px';
		document.getElementById('slide_facts_HR').style.height='600px';
	}

/*
	if (navigator.appVersion.search('MSIE 7')){			
		document.getElementById('slide_facts_HR').style.marginTop='-260px';
	}
*/
	//$('#slide_facts_HR').BlindDown(1000,document.getElementById('dock-container').style.display='none')
	document.getElementById('dock-container').style.display='none';
	document.getElementById('slide_facts_HR').style.display='block'
}




function FACTS_slide_OFF () {

	//$('#slide_facts_HR').BlindUp(1000,document.getElementById('dock-container').style.display='block');
	document.getElementById('slide_facts_HR').style.display=''
	document.getElementById('dock-container').style.display='block';
		
}


function browserContentWindow () {

		   if (navigator.appName=="Netscape" || navigator.appName=="Opera") {
			winW = window.innerWidth;
			winH = window.innerHeight;
		   }
		   else if (navigator.appName.indexOf("Microsoft")!=-1) {
			winW = document.body.offsetWidth;
			winH = document.body.offsetHeight;
		   }
		   else {
			winW = 1280;
			winH = 1024;
		   }
		   
		   winW = winW-180-167;
		   winH = winH-132;
		   
		   winSize=new Array;
		   winSize['height']=winH;
		   winSize['width']=winW;
		   		   
		   return winSize;
		   
}
//
// tjpzoom 2005.11.29 - 2005.12.02.
// details/usage: http://valid.tjp.hu/zoom/
//
// updated by P. Ferrari - 2007.01.19

var zoomw=160;
var zoomh=120;
var defzoomamount=1;

var zoomamountstep=0.5;
var zoomsizemin=1000;
var zoomsizemax=100000;
var zoomsizestep=1.2;
var zoomamountmin=1;
var zoomamountmax=5;

function zoom_plus() {

	zoomamount += zoomamountstep; if(zoomamount>zoomamountmax) {zoomamount=zoomamountmax;} zoom_init(); 
	zoom_move(); 
	return;
}

function zoom_set(evt) {
 var evt = evt?evt:window.event?window.event:null; if(!evt){ return;}
 if(zoomid=='' || parseInt(document.getElementById(zoomid+'_container').style.width) == 0) {return true;}
 if(evt.keyCode==37 || evt.keyCode==100) {zoomw/=zoomsizestep; zoomh/=zoomsizestep; if(zoomw*zoomh<zoomsizemin) {zoomh=Math.sqrt(zoomsizemin/zoomratio); zoomw=zoomh*zoomratio;} zoom_init(); zoom_move(); return;} //left
 if(evt.keyCode==39 || evt.keyCode==102) {
  zoomw*=zoomsizestep; zoomh*=zoomsizestep;
  if(zoomw*zoomh>zoomsizemax) {zoomh=Math.sqrt(zoomsizemax/zoomratio); zoomw=zoomh*zoomratio;}
  if(zoomw>objw) {zoomw=objw; zoomh=objw/zoomratio;}
  else if(zoomh>objh) {zoomh=objh; zoomw=objh*zoomratio}
  zoom_init(); zoom_move(); return;
 } //right

if(evt.keyCode==40 || evt.keyCode==98)  {zoomamount-=zoomamountstep; if(zoomamount<zoomamountmin) {zoomamount=zoomamountmin;} zoom_init(); zoom_move(); return;} //down

 if(evt.keyCode==38 || evt.keyCode==104) {zoomamount+=zoomamountstep; if(zoomamount>zoomamountmax) {zoomamount=zoomamountmax;} zoom_init(); zoom_move(); return;} //up

 return;
}

function zoom_init() {
 document.getElementById(zoomid+'_clip').style.width=objw*zoomamount+'px';
 document.getElementById(zoomid+'_clip').style.height=objh*zoomamount+'px';
 setTimeout("document.getElementById('"+zoomid+"_trigger').focus();",0);
}

function zoom_move(evt) {
 if(typeof(evt) == 'object') {
  var evt = evt?evt:window.event?window.event:null; if(!evt){ return;}
  if(evt.pageX) {
   xx=evt.pageX - ffox;
   yy=evt.pageY - ffoy;
  } else {
   if(typeof(document.getElementById(zoomid)+1) == 'number') {return true;} //mert az ie egy ocska kurva
   xx=evt.clientX - ieox;
   yy=evt.clientY - ieoy;
  }
 } else {
  xx=lastxx; yy=lastyy;
 }
 lastxx=xx; lastyy=yy;
 document.getElementById(zoomid+'_clip').style.margin=((yy-zoomh/2 > 0)?(zoomh/2-yy*zoomamount):(yy*(1-zoomamount)))+'px 0px 0px '+((xx-zoomw/2 > 0)?(zoomw/2-xx*zoomamount):(xx*(1-zoomamount)))+'px';
 document.getElementById(zoomid+'_container').style.margin=((yy-zoomh/2 > 0)?(yy-zoomh/2):(0))+'px 0px 0px '+((xx-zoomw/2 > 0)?(xx-zoomw/2):(0))+'px';

 w2=((xx+zoomw/2<objw)?((zoomw/2<xx)?(zoomw):(zoomw/2+xx)):(zoomw/2+objw-xx)); if(w2<0) {w2=0;} document.getElementById(zoomid+'_container').style.width=w2+'px';
 h2=((yy+zoomh/2<objh)?((zoomh/2<yy)?(zoomh):(zoomh/2+yy)):(zoomh/2+objh-yy)); if(h2<0) {h2=0;} document.getElementById(zoomid+'_container').style.height=h2+'px';
 return false;
}

function zoom_off() {
 if(zoomid != '') {
  document.getElementById(zoomid+'_container').style.width='0px';
  document.getElementById(zoomid+'_container').style.height='0px';

  document.getElementById(zoomid+'_container').style.cursor='default';
 }
 zoomid='';
 
 
}

function countoffset() {
 ieox=0;ieoy=0;
 for(zmi=0;zmi<50;zmi++) {
  zme='document.getElementById(zoomid)';
  for(zmj=1;zmj<=zmi;zmj++) {
   zme+='.offsetParent';
  }
  if(eval(zme)+1 == 1) {zmi=100} else {ieox+=eval(zme+'.offsetLeft'); ieoy+=eval(zme+'.offsetTop');}
 }
 ffox=ieox;
 ffoy=ieoy;
 ieox-=document.body.scrollLeft;
 ieoy-=document.body.scrollTop;
}

function zoom_on(evt,ow,oh,lowres,highres) {
 thisid=lowres+highres+ow+oh;
 thisid='zoom_'+thisid.replace(/[^a-z0-9]/ig,'')
 if(zoomid==thisid) {return;}
 if(typeof(highres) == typeof(nemistudom)) {highres=lowres;}
 var evt = evt?evt:window.event?window.event:null; if(!evt){ return;}
 zoomamount=defzoomamount;
 objw=ow;
 objh=oh;
 zoomid=thisid;
 if(evt.pageX) {
  evt.target.parentNode.id=thisid;
  countoffset();
  lastxx=evt.pageX - ffox; 
  lastyy=evt.pageY - ffoy;
 } else {
  evt.srcElement.parentNode.id=thisid;
  countoffset();
  lastxx=evt.clientX - ieox;
  lastyy=evt.clientY - ieoy; 
 }
 document.getElementById(thisid).style.width=ow+'px';
 document.getElementById(thisid).style.height=oh+'px';
 document.getElementById(thisid).style.overflow='hidden';
 document.getElementById(thisid).style.cursor='url(/shared/js/magnify.cur), crosshair;';

 document.getElementById(thisid).innerHTML='<div style="position:absolute; overflow:hidden; width:0; height:0;" id="'+thisid+'_container" onmousemove="zoom_move(event);" onmouseout="zoom_off()"><img src="'+highres+'" alt="" id="'+thisid+'_clip" style="padding:0;margin:0;border:0;" /></div><img src="'+lowres+'" id="'+thisid+'_pic" alt="" style="padding:0;margin:0;border:0;width:'+ow+'px; height: '+oh+'px"/><input type="text" id="'+thisid+'_trigger"  style="width:0;height:0;border:0;margin:0; padding:0;overflow:hidden;"/>';
 if(zoomw>objw) {zoomw=objw; zoomh=objw/zoomratio;}
 else if(zoomh>objh) {zoomh=objh; zoomw=objh*zoomratio}
 zoom_init();
 zoom_move('');
 if(document.all) {
  document.onkeydown=zoom_set;
 } else {
  window.captureEvents(Event.KEYDOWN);
  window.onkeydown = zoom_set;
 }
 return false;
}


function tabOnOff (obj,id) {


	document.getElementById('t_'+selid).style.display='none';
	
	if (document.getElementById('t_'+id).style.display == 'none') {
		document.getElementById('t_'+id).style.display='block';
	}
	else {
		document.getElementById('t_'+id).style.display='none';		
	}
	document.getElementById('tab'+selid).className='unselected';
	document.getElementById('tab'+id).className='selected';

	selid=id;			
}
function tabOnOff2 (obj,id) {


	document.getElementById('t_'+selid2).style.display='none';
	
	if (document.getElementById('t_'+id).style.display == 'none') {
		document.getElementById('t_'+id).style.display='block';
	}
	else {
		document.getElementById('t_'+id).style.display='none';		
	}
	document.getElementById('tab'+selid2).className='unselected';
	document.getElementById('tab'+id).className='selected';

	selid2=id;			
}


var zoomamount = defzoomamount;
var objw;var objh;
var zoomid=''; 
var zoomratio=zoomw/zoomh; 
var ieox=0; 
var ieoy=0; 
var ffox=0; 
var ffoy=0;
