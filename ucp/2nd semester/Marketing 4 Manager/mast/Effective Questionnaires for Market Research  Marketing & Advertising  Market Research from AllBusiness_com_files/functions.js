// JavaScript Document

// WINDOW EVENT MANAGEMENT FUNCTIONS
// <function name="addLoadEvent">
function addLoadEvent(func) 
{
	var oldOnload = window.onload;
	if (typeof(func) == 'string')
	{
		eval("func = function(){"+func+";}");
	}
	if( typeof(oldOnload) != 'function' )
	{
		window.onload = func;
	}
	else 
	{
		window.onload = function() 
		{
			oldOnload();
			func();
	  	}
	}
}
// </function>

// <function name="addUnloadEvent">
function addUnloadEvent(func) 
{
	var oldUnload = window.onunload;
	if (typeof(func) == 'string')
	{
		eval("func = function(){"+func+";}");
	}
	if( typeof(oldUnload) != 'function' )
	{
		window.onunload = func;
	}
	else 
	{
		window.onunload = function() 
		{
			oldUnload();
			func();
	  	}
	}
}
// </function>

// <function name="addResizeEvent">
function addResizeEvent(func) 
{
	var oldResize = window.onresize;
	if (typeof(func) == 'string')
	{
		eval("func = function(){"+func+";}");
	}
	if( typeof(oldResize) != 'function' )
	{
		window.onresize = func;
	}
	else 
	{
		window.onresize = function() 
		{
			oldResize();
			func();
	  	}
	}
}
// </function>


//ADDS ALLBUSINESS.COM TO THE USERS FIREFOX SEARCH BAR (AKA installing Sherlock plugin)
function addABEngine(engineURL, iconURL, suggestedName, suggestedCategory)
{
	if ((typeof window.sidebar == "object") && (typeof window.sidebar.addSearchEngine == "function"))
	{ 
		window.sidebar.addSearchEngine(engineURL, iconURL, suggestedName, suggestedCategory);
	}
	else
	{
		alert("Sorry, you need a Mozilla-based browser to add AllBusiness.com to your Internet Search Bar.");
	} 
}
//ADDS ALLBUSINESS.COM TO THE USERS IE7 SEARCH BAR (AKA installing OpenSearch plugin)
function addABOpenEngine(engineURL)
{
	if ((typeof window.external == "object"))
	{ 
		window.external.AddSearchProvider(engineURL);
	}
	else
	{
		alert("Sorry, you need Internet Explorer v7 or any OpenSearch compliant browser,\nto add AllBusiness.com to your Internet Search Bar.");
	} 
}

function openNewWindow(theUrl,winParams)
{
	var theWin = window.open(theUrl,'', winParams);
	theWin.focus();
}

function formPostPrep(formId,compId,nextStep)
{
	var form = document.getElementById("formWrapper_"+formId);
	var compIdInput = form["formPostCompId"];
	var nextInput = form["formPostNext"];
	compIdInput.value = compId;
	nextInput.value = nextStep;
}

function changeDisplay( elementId, setTo ) {
	if( document.getElementById ) { var theElement = document.getElementById( elementId ); } else {
		if( document.all ) { var theElement = document.all[ elementId ]; } else { var theElement = new Object(); } }
	if( !theElement ) { return; }
	if( theElement.style ) { theElement = theElement.style; }
	if( typeof( theElement.display ) == 'undefined' && !( window.ScriptEngine && ScriptEngine().indexOf( 'InScript' ) + 1 ) ) { window.alert( 'Nothing works in this browser.' ); return; }
	theElement.display = setTo;
}

SS_CHANGE_HANDLERS = new Array();
function addStyleSheetChangeHandler(theFunc)
{
	if(typeof(theFunc) == "string")
	{
		eval("theFunc = function(){"+theFunc+";}");
	}
	if(typeof(theFunc) == "function")
	{
		SS_CHANGE_HANDLERS[SS_CHANGE_HANDLERS.length] = theFunc;
	}
}
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")  && a.getAttribute("title") != 'Paginator') 
	{
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
  for(i=0;i<SS_CHANGE_HANDLERS.length;i++)
  	SS_CHANGE_HANDLERS[i]();
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function getStylesheetFromCookie(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);

  if(document.getElementsByTagName)
  { 
  	// evens column heights
    matchColumns();			 
  } 

}
addLoadEvent(getStylesheetFromCookie);

function getActiveStyleSheetTitle(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}
addLoadEvent(getActiveStyleSheetTitle);

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);


var IsABLink = false; 
function ab_click(cid,lid)//[linkType]
{
	var linkType = "media";
	if(arguments.length >= 3)
		linkType = arguments[2];
	if(fc_click && fc_track1)
	{
		fc_click(fc_track1+"-"+cid, linkType);
	}
	eraseCookie("COMPONENTID");
	createCookie("COMPONENTID", cid, 1);
	
	try {
		if (lid > 0) {
			IsABLink = true;
			if (ShowExitSurvey) ShowExitSurvey();
		}
	} catch (e) {}
	return true;
}

function enableField()
{
document.form1.address2.disabled=false;
}

// to enable: <a href="javascript:enableField()">Click here to enable the element<a/> //


var toggledDisplay = new Object();
    toggledDisplay['lyr1'] = true;
    toggledDisplay['lyr2'] = true;
    toggledDisplay['lyr3'] = true;
	toggledDisplay['lyr4'] = true;
	toggledDisplay['lyr5'] = true;
	toggledDisplay['lyr10'] = true;
	toggledDisplay['lyr11'] = true;
	toggledDisplay['lyr12'] = true;
	toggledDisplay['lyr13'] = true;
	toggledDisplay['lyr14'] = true;
	toggledDisplay['lyr15'] = true;
	toggledDisplay['lyr16'] = true;

function toggleDisplay(bDisplayed)
{
  if(!document.getElementById || toggleDisplay.arguments.length < 2) return;
  var displayed = new Object();
      displayed['true'] = 'block';
      displayed['false'] = 'none';
  for(var i = 1; i < toggleDisplay.arguments.length; i++)
  {
    oDisplay = document.getElementById(toggleDisplay.arguments[i]);
    if(oDisplay)
    {
      oDisplay.style.display = displayed[bDisplayed];
      // mozilla is the only browser out of the lot that can't get this right.  so, if we're
      // setting an object's display style to block, we gotta reload any images contained
      // within that block.  mozilla won't do it for you like every other browser that
      // supports the functionality of changing the display style dynamically.
      // begin crap browser hack
      if(bDisplayed)
      {
        oImages = oDisplay.getElementsByTagName('IMG');
        for(var j = 0; j < oImages.length; j++)
          oImages[j].src = oImages[j].src;
      }
      // end mozilla, err, crap browser hack
       if(typeof toggledDisplay[toggleDisplay.arguments[i]] != 'undefined')
        toggledDisplay[toggleDisplay.arguments[i]] = !bDisplayed;
    }
  }
}


function toggleSCCClass(className)
{
  if(!document.getElementById || toggleSCCClass.arguments.length < 2) return;
  for(var i = 1; i < toggleSCCClass.arguments.length; i++)
  {
    oDisplay = document.getElementById(toggleSCCClass.arguments[i]);
    if(oDisplay)
    {
      oDisplay.className = className;
    }
  }
}

// This is our email obfuscation script
// Here is an example of what you would put in place of your "mailto" link:
//
//	Spamtastic ('sdrace', 'Email', 'Contact%20Us')
//
// For images, use Spimtastic and you will need to close the A tag manually
function Spamtastic (username, linktext, subject)
{
	var hostname = "allbusiness.com";
	document.write("<a href=\"" + "mail" + "to:" + username + "@" + hostname + "?subject=" + subject + "\">" + linktext + "</a>");
}

function Spimtastic	(username, subject)
{
	var hostname = "allbusiness.com";
	document.write("<a href=\"" + "mail" + "to:" + username + "@" + hostname + "?subject=" + subject + "\">");
}




function closePopupWindow(redirectURI)
{
	if (window.opener)
	{
		if (redirectURI != '')
			window.opener.location.href = redirectURI;
		window.opener.focus();
	}
	window.close();
}


function loadIFrameSrc(framename, framesrc)
{
	frames[framename].location.href = framesrc;
}

memetrics_cpc_timeout = null;
memetrics_cpc = 0;
function cpcHover(compId,isOver){
	if(isOver)
		memetrics_cpc = compId;
	else
		memetrics_cpc = 0;
}



/*************************************************************************
  This code is from Dynamic Web Coding at www.dyn-web.com
  Copyright 2003-4 by Sharon Paine 
  See Terms of Use at www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

/*
  dw_lib.js - used with dw_glide.js, dw_glider.js, ...
  version date July 2004 
*/

dynObj.holder = {}; 
// constructor
function dynObj(id,x,y,w,h) {
  var el = dynObj.getElemRef(id);
  if (!el) return;  this.id = id; 
  dynObj.holder[this.id] = this; this.animString = "dynObj.holder." + this.id;
  var px = window.opera? 0: "px";
	this.x = x || 0;	if (x) el.style.left = this.x + px;
	this.y = y || 0;	if (y) el.style.top = this.y + px;
	this.w = w || el.offsetWidth || 0;	this.h = h || el.offsetHeight || 0;
	// if w/h passed, set style width/height
	if (w) el.style.width = w + px; if (h) el.style.height = h + px;
}

dynObj.getElemRef = function(id) { 
  var el = document.getElementById? document.getElementById(id): null;
  return el;
} 

dynObj.getInstance = function(id) {
  var obj = dynObj.holder[id];
  if (!obj) obj = new dynObj(id);
  else if (!obj.el) obj.el = dynObj.getElemRef(id);
  return obj;
}

dynObj.prototype.shiftTo = function(x,y) {
  var el = this.el? this.el: dynObj.getElemRef(this.id)? dynObj.getElemRef(this.id): null;
  if (el) {
    if (x != null) el.style.left = (this.x = x) + "px";
    if (y != null) el.style.top = (this.y = y) + "px";
  }
}

dynObj.prototype.shiftBy = function(x,y) { this.shiftTo(this.x+x, this.y+y); }

dynObj.prototype.show = function() { 
  var el = this.el? this.el: dynObj.getElemRef(this.id)? dynObj.getElemRef(this.id): null;
  if (el) el.style.visibility = "visible"; 
}
dynObj.prototype.hide = function() { 
  var el = this.el? this.el: dynObj.getElemRef(this.id)? dynObj.getElemRef(this.id): null;
  if (el) el.style.visibility = "hidden"; 
}


// for time-based animations
// resources: www.13thparallel.org and www.youngpup.net (accelimation)
var dw_Bezier = {
  B1: function (t) { return t*t*t },
  B2: function (t) { return 3*t*t*(1-t) },
  B3: function (t) { return 3*t*(1-t)*(1-t) },
  B4: function (t) { return (1-t)*(1-t)*(1-t) },
  // returns current value based on percentage of time passed
  getValue: function (percent,startVal,endVal,c1,c2) {
    return endVal * this.B1(percent) + c2 * this.B2(percent) + c1 * this.B3(percent) + startVal * this.B4(percent);
  }
}

// adapted from accelimation.js by Aaron Boodman of www.youngpup.net
dw_Animation = {
  instances: [],
  add: function(fp) {
    this.instances[this.instances.length] = fp;
  	if (this.instances.length == 1) this.timerID = window.setInterval("dw_Animation.control()", 10);
  },
  
  remove: function(fp) {
    for (var i = 0; this.instances[i]; i++) {
  		if (fp == this.instances[i]) {
  			this.instances = this.instances.slice(0,i).concat( this.instances.slice(i+1) );
  			break;
  		}
  	}
  	if (this.instances.length == 0) {
  		window.clearInterval(this.timerID);	this.timerID = null;
  	}
  },
  
  control: function() {
    for (var i = 0; this.instances[i]; i++) {
  		if (typeof this.instances[i] == "function" ) this.instances[i]();
      else eval(this.instances[i]);
    }
  }
}

function toggleBox(szDivID, iState) // 1 visible, 0 hidden
{
    if(document.layers)	   //NN4+
    {
       document.layers[szDivID].visibility = iState ? "show" : "hide";
    }
    else if(document.getElementById)	  //gecko(NN6) + IE 5+
    {
        var obj = document.getElementById(szDivID);
        obj.style.visibility = iState ? "visible" : "hidden";
    }
    else if(document.all)	// IE 4
    {
        document.all[szDivID].style.visibility = iState ? "visible" : "hidden";
    }
}

function initGlide(glideDivId, xstart, ystart, xend, yend) {
  var winWd = getWinWidth();
  // arguments: id, x, y
  var glideLyr = new dynObj(glideDivId, xstart, ystart);
  glideLyr.show();
  // slideTo arguments: destination x, destination y, duration of slide,
  // acceleration/deceleration factor (can be -1 to 1) 0 is linear, i.e., steady slide
  glideLyr.slideTo(xend, yend, 1200, -.8); 
  _getGUIObjectInstanceById("searchboxfilter").style.display = "none"
}

function _getGUIObjectInstanceById(id) {
		var obj = -1;
		obj = ((document.getElementById) ? document.getElementById(id) : ((document.all) ? document.all[id] : ((document.layers) ? document.layers[id] : null)));
		return obj;
		}

function getWinWidth() {
	var winWd = 0;
	if (document.documentElement && document.documentElement.clientWidth) 
		winWd = document.documentElement.clientWidth;
	else if (document.body && document.body.clientWidth) 
		winWd = document.body.clientWidth;
	else if (document.body && document.body.offsetWidth) 
		winWd = document.body.offsetWidth; // ns6
	else if (window.innerWidth) winWd = window.innerWidth-18;
	return winWd;
}

/*************************************************************************
  This code is from Dynamic Web Coding at www.dyn-web.com
  Copyright 2003-4 by Sharon Paine 
  See Terms of Use at www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

/*
  dw_glide.js - requires dw_lib.js
  version date July 2004 
*/

// acc is number between -1 and 1 ( -1 full decelerated, 1 full accelerated, 0 linear, i.e. no acceleration)
dynObj.prototype.slideTo = function (destX,destY,slideDur,acc,endFn) {
  if (!document.getElementById) return;
  this.slideDur = slideDur || .0001; var acc = -acc || 0;
  if (endFn) this.onSlideEnd = endFn;
  // hold destination values (check for movement on 1 axis only)
 	if (destX == null) this.destX = this.x;	else this.destX = destX;
  if (destY == null) this.destY = this.y; else this.destY = destY;
  this.startX = this.x; this.startY = this.y;
	this.st = new Date().getTime();
	// control points for bezier-controlled slide (see www.youngpup.net accelimation)
  this.xc1 = this.x + ( (1+acc) * (this.destX-this.x)/3 );
	this.xc2 = this.x + ( (2+acc) * (this.destX-this.x)/3 );
  this.yc1 = this.y + ( (1+acc) * (this.destY-this.y)/3 );
	this.yc2 = this.y + ( (2+acc) * (this.destY-this.y)/3 );
	this.sliding = true;
  this.onSlideStart();
  dw_Animation.add(this.animString + ".doSlide()");
}

dynObj.prototype.doSlide = function() {
	if (!this.sliding) return;	
	var elapsed = new Date().getTime() - this.st;
	if (elapsed < this.slideDur) {
    var x = dw_Bezier.getValue(elapsed/this.slideDur, this.startX, this.destX, this.xc1, this.xc2);
    var y = dw_Bezier.getValue(elapsed/this.slideDur, this.startY, this.destY, this.yc1, this.yc2);
		this.shiftTo( Math.round(x) ,Math.round(y) );
		this.onSlide();
	} else {	// if time's up
    dw_Animation.remove(this.animString + ".doSlide()");
		this.shiftTo(this.destX,this.destY);
		this.onSlide();
		this.sliding = false;
		this.onSlideEnd();
	}
}

dynObj.prototype.slideBy = function(dx,dy,slideDur,acc,endFn) {
	var destX=this.x+dx; var destY=this.y+dy;
	this.slideTo(destX,destY,slideDur,acc,endFn);
}

dynObj.prototype.onSlideStart = function () {}
dynObj.prototype.onSlide = function () {}
dynObj.prototype.onSlideEnd = function () { if (this.el) this.el = null; }



/*************************************************************************
  This code is from Dynamic Web Coding at www.dyn-web.com
  Copyright 2003-4 by Sharon Paine 
  See Terms of Use at www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

matchColumns=function()
{ 
     var divs,contDivs_a,maxHeight_a,contDivs_b,maxHeight_b,divHeight,d; 
     // get all <div> elements in the document 
     divs=document.getElementsByTagName('div'); 

     contDivs_a=[]; 
     contDivs_b=[]; 

     // initialize maximum height value 
     maxHeight_a=0; 
     maxHeight_b=0; 

     // iterate over all <div> elements in the document 
     for(var i = 0; i < divs.length; i++){ 
			
          d=divs[i]; 
	 
          // make collection with <div> elements with class attribute 'container' 
			
          if(/\bleft_nav\b|\bcontent_2col\b|\bcontent_3col\b|\bthird_col\b/.test(d.className))
		  { 

                contDivs_a[contDivs_a.length]=d; 
				d.style.height = "";
                // determine height for <div> element 
                if(d.offsetHeight)
				{ 
                     divHeight=d.offsetHeight; 					
                } 
                else if(d.style.pixelHeight)
				{ 
                     divHeight=d.style.pixelHeight;					 
                } 
                // calculate maximum height 
                maxHeight_a=Math.max(maxHeight_a,divHeight); 
          } 
          else if(/\bfaux_3col_left\b|\bfaux_3col_right\b|\bfaux_3col_right_home\b|\bfaux_3col_right_low\b/.test(d.className))
		  { 

                contDivs_b[contDivs_b.length]=d; 
				d.style.height = "";
                // determine height for <div> element 
                if(d.offsetHeight)
				{ 
                     divHeight=d.offsetHeight; 					
                } 
                else if(d.style.pixelHeight)
				{ 
                     divHeight=d.style.pixelHeight;					 
                } 
                // calculate maximum height 
                maxHeight_b=Math.max(maxHeight_b,divHeight); 
          } 
     } 


	
	//if internal is taller than external, reassign external height;
		 
	if (maxHeight_b > maxHeight_a)
		maxHeight_a = maxHeight_b + 20;
	 
     // assign maximum height value to all of container <div> elements 
     for(var i=0;i<contDivs_a.length;i++)
	 { 
          contDivs_a[i].style.height=maxHeight_a + "px"; 
     } 
     for(var i=0;i<contDivs_b.length;i++)
	 { 
          contDivs_b[i].style.height=maxHeight_b + "px"; 
     } 
} 

//This code is adapted from...
//Chrome Drop Down Menu v2.01- Author: Dynamic Drive (http://www.dynamicdrive.com)
//Last updated: November 14th 06- added iframe shim technique
//Converted to a self-referential object by Don Kaiser for AllBusiness.com (http://www.allbusiness.com)
function CSSDropDown(referenceName, hideDelay, disableMenu, adjustVertical, adjustHorizontal)
{
	this.selfname = referenceName; // this is the name of the variable being used to hold the reference to this object
	this.disappeardelay = hideDelay; //set delay in miliseconds before menu disappears onmouseout
	this.disablemenuclick = disableMenu; //when user clicks on a menu item with a drop down menu; disable menu item's link?
	// new settings to control relocation of menus
	this.adjustvertical = adjustVertical;
	this.adjusthorizontal = adjustHorizontal;
	
	this.enableswipe = 1; //enable swipe effect? 1 for yes; 0 for no
	this.enableiframeshim = 1; //enable "iframe shim" technique to get drop down menus to correctly appear on top of controls such as form objects in IE5.5/IE6? 1 for yes; 0 for no
	
	//No need to edit beyond here////////////////////////
	this.dropmenuobj = null; 
	this.ie = document.all; 
	this.firefox = document.getElementById&&!document.all; 
	this.swipetimer = undefined; 
	this.bottomclip = 0;
	
	this.getposOffset = function(what, offsettype)
	{
		var totaloffset = (offsettype == "left")? what.offsetLeft : what.offsetTop;
		var parentEl = what.offsetParent;
		while (parentEl!= null)
		{
			totaloffset = (offsettype == "left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
			parentEl = parentEl.offsetParent;
		}
		return totaloffset;
	}
	
	this.swipeeffect = function()
	{
		if (this.bottomclip<parseInt(this.dropmenuobj.offsetHeight))
		{
			this.bottomclip+= 10+(this.bottomclip/10) //unclip drop down menu visibility gradually
			this.dropmenuobj.style.clip = "rect(0 auto "+this.bottomclip+"px 0)";
		}
		else
			return;
		this.swipetimer = setTimeout(this.selfname+".swipeeffect()", 10);
	}
	
	this.showhide = function(obj, e)
	{
		if (this.ie || this.firefox)
			this.dropmenuobj.style.left = this.dropmenuobj.style.top = "-500px";
		if (e.type == "click" && obj.visibility == hidden || e.type == "mouseover")
		{
			if (this.enableswipe == 1)
			{
				if (typeof this.swipetimer!= "undefined")
					clearTimeout(this.swipetimer);
				obj.clip = "rect(0 auto 0 0)"; //hide menu via clipping
				this.bottomclip = 0;
				this.swipeeffect();
			}
			obj.visibility = "visible";
		}
		else if (e.type == "click")
			obj.visibility = "hidden";
	}
	
	this.iecompattest = function()
	{
		return (document.compatMode && document.compatMode!= "BackCompat")? document.documentElement : document.body
	}
	
	this.clearbrowseredge = function(obj, whichedge)
	{
		var edgeoffset = 0;
		if (whichedge == "rightedge")
		{
			var windowedge = this.ie && !window.opera? this.iecompattest().scrollLeft+this.iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15;
			this.dropmenuobj.contentmeasure = this.dropmenuobj.offsetWidth;
			if (windowedge-this.dropmenuobj.x < this.dropmenuobj.contentmeasure) //move menu to the left?
				edgeoffset = this.dropmenuobj.contentmeasure-obj.offsetWidth;
		}
		else
		{
			var topedge = this.ie && !window.opera? this.iecompattest().scrollTop : window.pageYOffset;
			var windowedge = this.ie && !window.opera? this.iecompattest().scrollTop+this.iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18;
			this.dropmenuobj.contentmeasure = this.dropmenuobj.offsetHeight;
			if (windowedge-this.dropmenuobj.y < this.dropmenuobj.contentmeasure)
			{ //move up?
			edgeoffset = this.dropmenuobj.contentmeasure+obj.offsetHeight;
			if ((this.dropmenuobj.y-topedge)<this.dropmenuobj.contentmeasure) //up no good either?
				edgeoffset = this.dropmenuobj.y+obj.offsetHeight-topedge;
			}
		}
		return edgeoffset;
	}
	
	this.dropit = function(obj, e, dropmenuID)
	{
		var self = eval(this.selfname);
		if (this.dropmenuobj!= null) //hide previous menu
			this.dropmenuobj.style.visibility = "hidden"; //hide menu
		this.clearhidemenu();
		if (this.ie||this.firefox)
		{
			obj.onmouseout = function()
			{
				self.delayhidemenu();
			}
			obj.onclick = function()
			{
				return !this.disablemenuclick; //disable main menu item link onclick?
			}
			this.dropmenuobj = document.getElementById(dropmenuID);
			this.dropmenuobj.onmouseover = function()
			{
				self.clearhidemenu();
			}
			this.dropmenuobj.onmouseout = function(e)
			{
				self.dynamichide(e);
			}
			this.dropmenuobj.onclick = function()
			{
				self.delayhidemenu();
			}
			this.showhide(this.dropmenuobj.style, e);
			this.dropmenuobj.x = this.getposOffset(obj, "left");
			this.dropmenuobj.y = this.getposOffset(obj, "top");
			var horizoffset = this.adjusthorizontal ? this.clearbrowseredge(obj, "rightedge") : 0;
			var vertoffset = this.adjustvertical ? this.clearbrowseredge(obj, "bottomedge") : 0;
			this.dropmenuobj.style.left = this.dropmenuobj.x-horizoffset+"px";
			this.dropmenuobj.style.top = this.dropmenuobj.y+obj.offsetHeight+1-vertoffset+"px";
			this.positionshim(); //call iframe shim function
		}
	}
	
	this.positionshim = function()
	{ //display iframe shim function
		if (this.enableiframeshim && typeof this.shimobject!= "undefined")
		{
			if (this.dropmenuobj.style.visibility == "visible")
			{
				this.shimobject.style.width = this.dropmenuobj.offsetWidth+"px";
				this.shimobject.style.height = this.dropmenuobj.offsetHeight+"px";
				this.shimobject.style.left = this.dropmenuobj.style.left;
				this.shimobject.style.top = this.dropmenuobj.style.top;
			}
			this.shimobject.style.display = (this.dropmenuobj.style.visibility == "visible")? "block" : "none";
		}
	}
	
	this.hideshim = function()
	{
		if (this.enableiframeshim && typeof this.shimobject!= "undefined")
			this.shimobject.style.display = 'none';
	}
	
	this.contains_firefox = function(a, b) 
	{
		while (b.parentNode)
			if ((b = b.parentNode) == a)
				return true;
		return false;
	}
	
	this.dynamichide = function(e)
	{
		var evtobj = window.event? window.event : e;
		if (this.ie&&!this.dropmenuobj.contains(evtobj.toElement))
			this.delayhidemenu();
		else if (this.firefox&&e.currentTarget!= evtobj.relatedTarget&& !this.contains_firefox(evtobj.currentTarget, evtobj.relatedTarget))
			this.delayhidemenu();
	}
	
	this.delayhidemenu = function()
	{
		this.delayhide = setTimeout(this.selfname+".dropmenuobj.style.visibility = 'hidden'; "+this.selfname+".hideshim()",this.disappeardelay); //hide menu
	}
	
	this.clearhidemenu = function()
	{
		if (this.delayhide!= "undefined")
			clearTimeout(this.delayhide);
	}
	
	this.startchrome = function()
	{
		var self = eval(this.selfname);
		for (var ids = 0; ids<arguments.length; ids++)
		{
			var menuitems = document.getElementById(arguments[ids]).getElementsByTagName("a")
			for (var i = 0; i<menuitems.length; i++)
			{
				if (menuitems[i].getAttribute("rel"))
				{
					var relvalue = menuitems[i].getAttribute("rel");
					menuitems[i].onmouseover = function(e)
					{
						//debugger;
						var event = typeof e!= "undefined"? e : window.event;
						self.dropit(this,event,this.getAttribute("rel"));
					}
				}
			}
		}
		if (window.createPopup && !window.XmlHttpRequest)
		{ //if IE5.5 to IE6, create iframe for iframe shim technique
			document.write('<IFRAME id = "iframeshim" src = "/blank.htm" style = "display: none; left: 0; top: 0; z-index: 90; position: absolute; filter: progid:DXImageTransform.Microsoft.Alpha(style = 0,opacity = 0)" frameBorder = "0" scrolling = "no"></IFRAME>');
			this.shimobject = document.getElementById("iframeshim"); //reference iframe object
		}
	}
	return this;
}


// This function snaps the border to the size of the ad coming in the iFrame
function adIframeBorderSizer(ifrmId, divId)
{	
	var adHolder = document.getElementById(divId);
	adHolder.style.display = '';
	adHolder.style.backgroundColor = 'transparent';
	var adIframe = window.frames[ifrmId];
	var adHeight = adIframe.document.getElementById('adBox').offsetHeight;
	var adWidth = adIframe.document.getElementById('adBox').offsetWidth;
	
	if (adHeight < 30 || adWidth < 30)
	{	
		adHolder.style.display = 'none';
	}
	else
	{	
		document.getElementById(ifrmId).style.height = adHeight + 'px';
		document.getElementById(ifrmId).style.width = adWidth + 'px';
	}
} 

/* #################################### */
/* Google custom adsense */
/* #################################### */
function google_ad_request_done(google_ads) 
{
	/*
	* This function is required and is used to display
	* the ads that are returned from the JavaScript
	* request. You should modify the document.write
	* commands so that the HTML they write out fits
	* with your desired ad layout.
	*/
	var s = '';

	var i;
	
	/*
	* Verify that there are actually ads to display.
	*/
	if (google_ads.length == 0) {
		return;
	}
	
	if (google_ads.length == 1) {
		/*
		* Partners should adjust text sizes
		* so ads occupy the majority of ad space.
		*/
		s += '<div class="goog_one_ad"><div><a href=\"' + 
		google_info.feedback_url + '\" class="google_ads_by">Ads by Google</a></div><a href="' +
		google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		google_ads[0].visible_url + '\';return true" ' +
		' style="text-decoration: none;">' +
		'<span class="goog_title">' + google_ads[0].line1 + '<br></span>' +
		'<span class="goog_desc">' +
		google_ads[0].line2 + '&nbsp;' +
		google_ads[0].line3 + '<br></span><span><a class="goog_url" href="'+
		google_ads[0].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		google_ads[0].visible_url + '\';return true">' + 
		google_ads[0].visible_url + '</span></a></div><br>';
	
	} 
	else if (google_ads.length > 1) {
	
		s += '<div><a href=\"' + google_info.feedback_url + '\" class="google_ads_by">Ads by Google</a></div>';
		
		/*
		* For text ads, append each ad to the string.
		*/
		
		for(i = 0; i < google_ads.length; ++i) {
			
			s += '<br><a href="' +
			google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
			google_ads[i].visible_url + '\';return true" ' +
			'class="bd_googad">' +
			'<span class="goog_title">' + google_ads[i].line1 + '<br></span>' +
			'<span class="goog_desc">' +
			google_ads[i].line2 + 
			google_ads[i].line3 + '<br></span><span><a class="goog_url" href="'+
			google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
			google_ads[i].visible_url + '\';return true">' + 
			google_ads[i].visible_url + '</span></a><br>';
		}
	}
	
	document.write(s);
	return;
}

/* #################################### */
/* Google AFS - Adsense search function */
/* #################################### */
/*
* This function retrieves the search query from the URL.
*/

function GetParam(name)
{

		var match = new RegExp(name + "=(.+)[&]","i").exec(location.search);
		if (match==null)
		{
				match = new RegExp(name + "=(.+)","i").exec(location.search);
		}

		if (match==null)
		{
				return null;
		}

		match = match + "";
		result = match.split(",");
		try {	
			var resultString=result[1];
			var resultArr=resultString.split("&");
			resultString=resultArr[0];
			return resultString;
		}
		catch(err)
		{
			return null;
		}
		
}


/*
 * This function is required. It processes the google_ads JavaScript object,
 * which contains AFS ads relevant to the user's search query. The name of
 * this function <i>must</i> be <b>google_afs_request_done</b>. If this
 * function is not named correctly, your page will not display AFS ads.
 */

function google_afs_request_done(google_ads)
{
		/*
		 * Verify that there are actually ads to display.
		 */
		var google_num_ads = google_ads.length;
		if (google_num_ads <= 0)
		{
				return;
		}

		var wideAds = "";   // wide ad unit html text
		var narrowAds = "";   // narrow ad unit html text

		for(i = 0; i < google_num_ads; i++)
		{
				if (google_ads[i].type=="text/wide")
				{
						// render a wide ad
						wideAds+='<a style="text-decoration: none;" onmouseover="javascript:window.status=\'' +
										google_ads[i].url + '\';return true;" ' +
										'onmouseout="javascript:window.status=\'\';return true;" ' +
										'href="' + google_ads[i].url + ' " class="goog_url">' +
										'<span class="goog_title">' + google_ads[i].line1 + '</span><br>' +
										'<span class="goog_desc">' + google_ads[i].line2 + '</span><br>' +
										'<div>' + google_ads[i].visible_url + '</div></a><br />';
				}

				else
				{
						// render a narrow ad
						narrowAds+='<a style="text-decoration: none;" onmouseover="javascript:window.status=\'' +
										google_ads[i].url + '\';return true;" ' +
										'onmouseout="javascript:window.status=\'\';return true;" ' +
										'href="' + google_ads[i].url + ' " class="goog_url">' +
										'<span class="goog_title">' + google_ads[i].line1 + '</span><br>' +
										'<span class="goog_desc">' + google_ads[i].line2 + '</span><br>' +
										'<span class="goog_desc">' + google_ads[i].line3 + '</span><br>' +
										'<div>' + google_ads[i].visible_url + '</div></a><br />';
				}
		}

		if (narrowAds != "")
		{
				narrowAds = '<div><a class="google_ads_by" ' +
										'href="http://services.google.com/feedback/online_hws_feedback">' +
										'Ads by Google</a></div><br />' + narrowAds;
		}

		if (wideAds != "")
		{
				wideAds = '<div><a class="google_ads_by" ' +
									'href="http://services.google.com/feedback/online_hws_feedback">' +
									'Ads by Google</a></div><br />' + wideAds;
		}

		// Write HTML for wide and narrow ads to the proper <div> elements
		document.getElementById("wide_ad_unit").innerHTML = wideAds;
		document.getElementById("narrow_ad_unit").innerHTML = narrowAds;
}

