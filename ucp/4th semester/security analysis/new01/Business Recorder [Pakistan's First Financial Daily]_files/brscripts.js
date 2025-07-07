ie=(document.addEventListener)?false:true; 
function indexLinksSwitch(v1, v2){ v1.style.backgroundColor=(v2==1)?"#FFFFFF":document.body.style.backgroundColor; }
function getSelectedRadio(buttonGroup) { if (buttonGroup[0]) { for (var i=0; i<buttonGroup.length; i++) { if (buttonGroup[i].checked) { return i; } } } else { if (buttonGroup.checked) { return 0; } } return -1; }
function openCenteredWindow(url, height, width, name, parms) {
   var left = Math.floor( (screen.width - width) / 2);
   var top = Math.floor( (screen.height - height) / 2);
   var winParms = "top=" + top + ",left=" + left + ",height=" + height + ",width=" + width;
   if (parms) { winParms += "," + parms; }
   var win = window.open(url, name, winParms);
   if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
   return win;
}
//---------------------------------------------------
function popup(e, t){
	d = document.getElementById("tip1");
	d.innerHTML=t;
	if(!ie){ mx=e.pageX; my=e.pageY; }
	else   { e = window.event; mx=e.clientX; my=e.clientY; }
	v=document.body;
	leftSpace=mx; rightSpace=v.clientWidth-mx;
	topSpace =my-v.scrollTop; bottomSpace=v.clientHeight-my;
	if(topSpace+5>d.offsetHeight){
		d.style.top=my-5-d.offsetHeight;
		d.style.left=(mx-(d.offsetWidth/2))>2?mx-(d.offsetWidth/2):3;
		if(rightSpace<d.offsetWidth/2){ d.style.left=parseInt(d.style.left)-(d.offsetWidth/2-rightSpace)-3; }
		d.style.visibility="visible";
	} else {
		if(ie){ d.style.top=v.scrollTop+my+9; } else { d.style.top=my+5; }
		d.style.left=(mx-(d.offsetWidth/2))>2?mx-(d.offsetWidth/2):3;
		if(rightSpace<d.offsetWidth/2){ d.style.left=parseInt(d.style.left)-(d.offsetWidth/2-rightSpace)-3; }
		d.style.visibility="visible";
	}
}
function popop(e, d){ document.getElementById(d).style.visibility="hidden"; }
//---------------------------------------------------
function stocksector(v1){
	if(v1.options[v1.selectedIndex].value=="none"){ return; }
	t=document.location+"&currNIndex="+v1.options[v1.selectedIndex].value+"&currPageNo=1";
	document.location=t;
}
//---------------------------------------------------
function suppliment(v1){
	if(v1.options[v1.selectedIndex].value=="none"){ return; }
	v1 = v1.options[v1.selectedIndex].value.split("|");
	document.location='/index.php?currDate='+v1[3]+'&currMIndex='+v1[0]+'&currSIndex='+v1[2]+'&supDate='+v1[1]+'&currPageNo=1';
}
//---------------------------------------------------
function logwin(){
msg ='<HTML><HEAD><TITLE>Please Login</TITLE></HEAD><BODY BGCOLOR="#ffffe0" style="font-family:arial;color:#660000;text-align:center;">';
msg+='<h3 style="font-size:14px;font-family:arial;color:#660000;">Entry is for Registered Users only.<br><br>If you have registered already, please enter your email address and password to log in.<br><br>If you are not a Registered User, please register.<BR><br>REGISTRATION IS FREE!</h3>';
msg+='<h3 style="font-size:14px;font-family:arial;color:#660000;"><a href="javascript:window.self.close()"> Close</a></h3></body></html>';
height=225; width=300; parms=""; name="Please Login!";
var left = Math.floor( (screen.width - width) / 2);
var top  = Math.floor( (screen.height - height) / 2);

if(ie){
	var oPopup = window.createPopup();
	var oPopBody = oPopup.document.body;
	oPopBody.style.backgroundColor = "lightyellow";
	oPopBody.style.border = "solid black 1px";
	oPopBody.innerHTML = msg;
	oPopup.show(100, 100, width, height, document.body);
	return
}
	var winParms = "top=" + top + ",left=" + left + ",height=" + height + ",width=" + width;
	if (parms) { winParms += "," + parms; }
	var win = window.open("", null, winParms);
	win.document.write('<HTML><HEAD><TITLE>Please Login</TITLE></HEAD><BODY BGCOLOR="#ffffe0" style="font-family:arial;color:#660000;text-align:center;">');
	win.document.write('<h3 style="font-size:14px;font-family:arial;color:#660000;">Entry is for Registered Users only.<br><br>If you have registered already, please enter your email address and password to log in.<br><br>If you are not a Registered User, please register.<BR><br>REGISTRATION IS FREE!</h3>');
	win.document.write('<h3 style="font-size:14px;font-family:arial;color:#660000;"><a href="javascript:window.self.close()"> Close</a></h3></body></html>');
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}
//-----------------------
function TindexLinksSwitch(v1, v2){
//	if(v1.style.backgroundColor=="#d3ffa7" || v1.style.backgroundColor=="rgb(211,255,167)"){ return; };
	if(v1.style.backgroundImage.length>0){ return; };
	v1.style.backgroundColor=(v2==1)?"#FFFFFF":document.body.style.backgroundColor; 
}
function TchangebgColor(v){
	for(i=0; i<v.parentNode.childNodes.length; i++){ if(v.parentNode.childNodes[i].style){ v.parentNode.childNodes[i].style.backgroundColor="#ffffFF"; } }
	v.style.backgroundColor="#d3ffa7";
}
function TindexMenuBG(v){ o = v.parentNode.childNodes;
	for(i=0; i<o.length; i++){ if(o[i].style && o[i].style.backgroundImage.length>0){ o[i].style.backgroundImage='url(none)'; o[i].style.backgroundColor="#ffffe2"; } }
	v.style.backgroundImage='url(images/background.jpg)';
	v.hideFocus=true; v = document.getElementById("a1"); v.focus();
}
//-------------------
function selectValue(o, v) { for(i=0; i<o.length; i++){ if(o[i].value==v){ o[i].selected=true; i=o.length; } } }
//-----------------------------
function dumpProps(obj, o) {
	r="";
	var r = "";	for (var i in obj) { r += o + i + " = " + obj[i] + "\n" ; }

//   for (var i in obj) {
//      msg = parent + "." + i + "\n" + obj[i];
      //if (!confirm(msg)) { return; }
      //if (typeof obj[i] == "object") { if (parent) { dumpProps(obj[i], parent + "." + i); } else { dumpProps(obj[i], i); } }
//   }
   return r;
}

function trim(inputString) {
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString; var ch = retValue.substring(0, 1);
   while (ch == " ") { retValue = retValue.substring(1, retValue.length); ch = retValue.substring(0, 1); }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { retValue = retValue.substring(0, retValue.length-1); ch = retValue.substring(retValue.length-1, retValue.length); }
   while (retValue.indexOf("  ") != -1) { retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); }
   return retValue;
}

function isEmail (s){
	if (isEmpty(s)) 
	if (isEmail.arguments.length == 1){ return false; } else { return (isEmail.arguments[1] == true); }
	if (isWhitespace(s)) { return false; }
	var i = 1; var sLength = s.length;
	while ((i < sLength) && (s.charAt(i) != "@")){ i++; }
	if ((i >= sLength) || (s.charAt(i) != "@")){ return false; } else { i += 2; }
	while ((i < sLength) && (s.charAt(i) != ".")){ i++; }
	if ((i >= sLength - 1) || (s.charAt(i) != ".")){ return false; } else { return true; }
}
var whitespace = " \t\n\r";
function isWhitespace (s){ var i; if (isEmpty(s)) return true; for (i = 0; i < s.length; i++){   var c = s.charAt(i); if (whitespace.indexOf(c) == -1){ return false; } } return true; }
function isEmpty(s){   return ((s == null) || (s.length == 0)); }
