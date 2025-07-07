function popupon(text, event) { 
  borderColor = '#000000';
  bgColor = '#ffcc66';
  border = 1;
  padding = 3;
	
  if (!(document.getElementById || document.layers)) return;

  var tableWidth = 250;
  var textTable = "<table" + " id='definition'" + " width=" + tableWidth + " cellpadding="+ padding +" border="+ border +" cellspacing=0 bordercolor="+ borderColor +">";
  textTable += "<tr><td bgcolor="+ bgColor +"><span class=\"definition\">" + text + "</span></td></tr></table>";
  
	//stupid hack to make this work in Mac IE 5.0 Only
	if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.platform == "MacPPC") && (navigator.userAgent.indexOf("MSIE 5.0") != -1)) {
		textTable = text
		document.getElementById('glossary').style.backgroundColor = "#ffcc66"
	}

  var posX=0;
  var posY=0;

  if (document.getElementById) { // for IE 4.0 or above & NS 6.0
    document.getElementById('glossary').innerHTML = textTable;
	
	document.getElementById('glossary').style.height = document.getElementById('glossary').offsetHeight

    posX = event.clientX + 10;
	var windowWidth = (document.all) ? document.body.clientWidth : window.innerWidth;
	var layerWidth = document.getElementById('glossary').offsetWidth;
	var tableRightX = posX + layerWidth;
	if (tableRightX > windowWidth) posX = windowWidth - layerWidth - 5;
	if (posX < 0) posX = 0;

    posY = event.clientY + 15;
	var windowHeight = (document.all) ? document.body.clientHeight:window.innerHeight;
	var layerHeight = document.getElementById('glossary').offsetHeight;
	var tableBottomY = posY + layerHeight;
	if (tableBottomY > windowHeight) posY = posY - 20 - layerHeight; 
	if (posY < 0) posY = 0;

	var Xoffset = (document.all) ? document.body.scrollLeft:pageXOffset
	var Yoffset = (document.all) ? document.body.scrollTop:pageYOffset

    document.getElementById('glossary').style.left = posX + Xoffset;
    document.getElementById('glossary').style.top = posY + Yoffset
	document.getElementById('glossary').style.visibility = 'visible';
	
  } 
  else { // for Netscape 4.0 or above

	document.glossary.document.open();
    document.glossary.document.write(textTable);
	document.glossary.document.close();
	
	posX = event.pageX - pageXOffset + 10;
	var windowWidth = window.innerWidth;
	var tableRightX = posX + document.layers.glossary.clip.width; 
	if (tableRightX > windowWidth) posX -=  tableRightX - windowWidth;
	if (posX < 0) posX = 0;

	posY = event.pageY - pageYOffset + 10;
	var windowHeight = window.innerHeight;
	var tableBottomY = posY + document.layers.glossary.clip.height;
 	if (tableBottomY > windowHeight) posY = posY - 20 - document.layers.glossary.clip.height;
	if (posY < 0) posY = 0;

	document.layers.glossary.moveTo(posX + pageXOffset,posY + pageYOffset)
	document.layers.glossary.visibility="show"
  }
}

function popupoff() 
{ 
  if (!(document.getElementById || document.layers)) return;
  if (document.getElementById) document.getElementById('glossary').style.visibility = 'hidden';
  else document.glossary.visibility = "hidden";
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}
// functions below this line were added 6/7/01 2pm by Aaron Dietrich
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}
