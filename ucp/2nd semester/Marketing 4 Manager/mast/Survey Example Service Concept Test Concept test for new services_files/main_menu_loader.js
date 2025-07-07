/* HM_Loader.js
*  HierMenus Version 6
*  Copyright 2004 Jupitermedia Corporation
*/

HM_UserAgent = navigator.userAgent;
      HM_DOM = (document.getElementById) ? true : false;
      HM_NS4 = (document.layers) ? true : false;
       HM_IE = (document.all) ? true : false;
      HM_IE4 = HM_IE && !HM_DOM;
      HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
     HM_IE4M = HM_IE4 && HM_Mac;

HM_IsSafari = ((HM_DOM)&&
               (parseInt(navigator.productSub)>=20020000)&&
               (navigator.vendor.indexOf("Apple Computer")!=-1));
if(HM_IsSafari) {
	HM_BrowserPattern = /Safari\/(\d+)/;
	HM_Matches = HM_UserAgent.match(HM_BrowserPattern);
	if (HM_Matches&&HM_Matches[1]) HM_BrowserVersion = (HM_Matches[1]-0);
	else HM_BrowserVersion = 0;
}

HM_Opera = (window.opera) ? true : false;
if(HM_IsSafari||HM_Opera) {
	HM_IE=HM_NS4=HM_IE4=HM_IE4M=false;
	if(HM_IsSafari) HM_Mac=true;
}
HM_IE5M = (HM_IE&&HM_Mac&&HM_DOM);

if(HM_Opera) {
    HM_BrowserPattern = /Opera(\/| )(\d+.*)/;
    HM_VersionSupported = 7;
}

HM_Konqueror = (HM_UserAgent.indexOf("Konqueror")!=-1);
if(HM_Konqueror) {
    HM_BrowserPattern = /(Konqueror\/)(\d+.*)/;
    HM_VersionSupported = 3.2;
}

if(HM_Opera || HM_Konqueror) {
    if (HM_UserAgent.match) {
       HM_Matches = HM_UserAgent.match(HM_BrowserPattern);
       if (HM_Matches&&HM_Matches[2]) {
          HM_BrowserVersion = parseFloat(HM_Matches[2]);
       } else HM_BrowserVersion = 0;
       HM_IsMenu = (HM_BrowserVersion >= HM_VersionSupported);
    } else {
       HM_BrowserVersion = 0;
       HM_IsMenu = false;
    }
} else {
    HM_BrowserVersion = 0;
    HM_IsMenu = !HM_IE4M && !HM_IE5M && (HM_DOM || HM_NS4 || HM_IE4 );
}

if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;

// Configuration block. The following 6 variables should be configured 
// to match your default preferences. You can then override the settings
// on a page by page basis by providing values for the variables in any
// JavaScript segment that is loaded BEFORE this one. These variables 
// are the ONLY variables you should alter in this file. 

if(typeof(window.HM_ScriptDir)=="undefined")
	HM_ScriptDir = "/shared/hm/scripts/";
if(typeof(window.HM_ImageDir)=="undefined")
	HM_ImageDir = "/images/";
if(typeof(window.HM_ConfigDir)=="undefined")
	HM_ConfigDir = "/javascript/main_menu/";
if(typeof(window.HM_ConfigFiles)=="undefined")
	HM_ConfigFiles = "main_menu_config.js";
if(typeof(window.HM_ConfigType)=="undefined")
	HM_ConfigType = "default";
if(typeof(window.HM_FramesEnabled)!="boolean")
	HM_FramesEnabled = false;

// Custom functions. We recommend that you delete any of these
// that you have no use for, to reduce the overall download times
// of the scripts. (Be sure to save yourself a copy, in case 
// you decide you want to use them in the future!)

// The following function is included to illustrate the JS 
// expression handling of the MenuX and MenuY parameters. 
// It returns a centered horizontal position for the menu. 

function HM_f_CenterMenu(topmenuid) {
	var MinimumPixelLeft = 0;
	var TheMenu = HM_o_Menus[topmenuid];
	var TheMenuWidth = HM_DOM ? parseInt(TheMenu.eMenu.style.width) + ((HM_IEnoDTD || HM_OperaQuirk) ? 0 : TheMenu.BorderLeftWidth+TheMenu.BorderRightWidth) : HM_IE4 ? TheMenu.eMenu.style.pixelWidth : TheMenu.eMenu.clip.width;
	var TheWindowWidth = HM_IE ? (HM_DOM ? HM_Canvas.clientWidth : HM_MenusTarget.document.body.clientWidth) : (HM_MenusTarget.document.body&&HM_MenusTarget.document.body.clientWidth) ? HM_MenusTarget.document.body.clientWidth : HM_MenusTarget.innerWidth;
	return Math.max(parseInt((TheWindowWidth-TheMenuWidth) / 2),MinimumPixelLeft);
}

// The following three functions can be used in combination to 
// produce "sliding" menus; menus that slide in and out to their
// desired locations. The "SetSlide" and "KillSlide" functions 
// are the required interface functions for HierMenus, and the 
// SlideMoveTo function does the actual work. To activate these
// routines on a menu, you would add (as an example)
// "ScrollEnabled:1,setTrans:HM_f_SetSlide,killTrans:HM_f_KillSlide,SlideInFrom:'left'" 
// to the menu definitions, in addition to the SlideIn/SlideOutInterval, 
// and SlideIn/SlideOutPercent variables (all of which will assume 
// defaults if not set). Note that for these particular transitions
// to work, ScrollEnabled must be true on the menu.

HM_NoSliding=(HM_DOM&&((navigator.productSub&&(navigator.productSub<20021130))||((/^Netscape/.test(navigator.vendor))&&(navigator.vendorSub==7.02))||(navigator.vendor=="Camino"&&(navigator.vendorSub<=.7))));

function HM_f_SetSlide(on) {
	this.killTrans();
        if(HM_NoSliding||(on&&!this.SlideInFrom)||(!on&&!this.SlideOutTo)) {
		this.visibilityToggle(on);
		return;
	}
	else {
		var moveDir=(on?this.SlideInFrom:this.SlideOutTo);
		var SlideInt=(on?this.SlideInInterval:this.SlideOutInterval);
		if(!SlideInt) SlideInt=(HM_Opera)?20:10;
		var SlidePerc=(on?this.SlideInPercent:this.SlideOutPercent);
		if(!SlidePerc) SlidePerc=20;
	}
	if(HM_Opera) {
		if(this.eMenu.HasChildVisible) this.hideChildren(null,1);
	}
	else {
		if(this.HasChildVisible) this.hideChildren(null,1);
	}
	this.eMenu.SlideVars={SlideTo:0,SlideDim:0,SlidePixels:0,SlideEl:"scrollParent",SlideWH:"width",SlideTL:"left",SlideOrig:(HM_Opera)?parseInt(this.eMenu.scrollParent.style.left):parseInt(this.scrollParent.style.left),SlideInterval:SlideInt};
	var SlideVars=this.eMenu.SlideVars;
	this.eMenu.SlideStatus=(on?1:2);
	if((moveDir=="top")||(moveDir=="bottom")) {
		SlideVars.SlideWH="height";
		SlideVars.SlideTL="top";
		SlideVars.SlideOrig=(HM_Opera)?parseInt(this.eMenu.scrollParent.style.top):parseInt(this.scrollParent.style.top);
		SlideVars.SlideDim=parseInt(this.eMenu.style.height);
	}
	else SlideVars.SlideDim=parseInt(this.eMenu.style.width);
	if((moveDir=="right")||(moveDir=="bottom")) SlideVars.SlideEl="eMenu";
	SlidePerc=SlidePerc/100;
	SlideVars.SlidePixels=Math.round((SlideVars.SlideDim)*SlidePerc);
	if(SlideVars.SlideEl=="eMenu") {
		if(SlideVars.SlideTL=="left") SlideVars.SlideTo=(on)?this.xPos:this.xPos+SlideVars.SlideDim;
		else SlideVars.SlideTo=(on)?this.yPos:this.yPos+SlideVars.SlideDim;
	}
	else SlideVars.SlideTo=(on)?SlideVars.SlideOrig:SlideVars.SlideDim*(-1);
	if(on) {
		this.eMenu.style[SlideVars.SlideWH]="0px";
		var TempElement = (SlideVars.SlideEl=="eMenu")?this.eMenu:(HM_Opera)?this.eMenu.scrollParent:this.scrollParent;
		TempElement.style[SlideVars.SlideTL]=((SlideVars.SlideEl=="eMenu")?SlideVars.SlideTo+SlideVars.SlideDim:SlideVars.SlideOrig-SlideVars.SlideDim)+"px";
	}
	else SlideVars.SlidePixels*=(-1);
	HM_f_SlideMoveTo(this.MenuID);
}

function HM_f_SlideMoveTo(menuname) {
	if(HM_IsReloading||!HM_f_DocumentCheck()) return;
	var SlideMenu=HM_o_Menus[menuname];
	if(!SlideMenu.eMenu.SlideStatus) return;
	var SlideVars=SlideMenu.eMenu.SlideVars;
	var TempElement=(SlideVars.SlideEl=="eMenu")?SlideMenu.eMenu:(HM_Opera)?SlideMenu.eMenu.scrollParent:SlideMenu.scrollParent;
	var oldPos=parseInt(TempElement.style[SlideVars.SlideTL]);
	var newPos=(oldPos+(SlideVars.SlidePixels*(SlideVars.SlideEl=="eMenu"?(-1):1)));
	if((Math.abs(newPos-SlideVars.SlideTo))<Math.abs(SlideVars.SlidePixels)) newPos=SlideVars.SlideTo;
	if(newPos==SlideVars.SlideTo) SlideMenu.killTrans();
	else {
		var oldDim=parseInt(SlideMenu.eMenu.style[SlideVars.SlideWH]);
		SlideMenu.visibilityToggle(0);
		SlideMenu.eMenu.style[SlideVars.SlideWH]=(oldDim+SlideVars.SlidePixels)+"px";
		TempElement.style[SlideVars.SlideTL]=newPos+"px";
		SlideMenu.visibilityToggle(1);
		HM_MenusTarget.clearTimeout(SlideMenu.eMenu.MoveTimer);
		SlideMenu.eMenu.MoveTimer=null;
		var TimeoutCommand="HM_f_SlideMoveTo('"+SlideMenu.MenuID+"')";
		if(HM_Opera) SlideMenu.eMenu.MoveTimer=HM_MenusTarget.setTimeout(TimeoutCommand,SlideVars.SlideInterval);
		else SlideMenu.eMenu.MoveTimer=setTimeout(TimeoutCommand,SlideVars.SlideInterval);
	}
}

function HM_f_KillSlide() {
	if(!this.eMenu||!this.eMenu.SlideStatus) return;
	if(HM_Opera) HM_MenusTarget.clearTimeout(this.eMenu.MoveTimer);
	else clearTimeout(this.eMenu.MoveTimer);
	this.eMenu.MoveTimer=null;
	this.visibilityToggle(0);
	var SlideVars=this.eMenu.SlideVars;
	this.eMenu.style[SlideVars.SlideWH]=SlideVars.SlideDim+"px";
	if(SlideVars.SlideEl=="eMenu") this.eMenu.style[SlideVars.SlideTL]=SlideVars.SlideTo+"px";
	else {
		if(HM_Opera) this.eMenu.scrollParent.style[SlideVars.SlideTL]=SlideVars.SlideOrig+"px";
		else this.scrollParent.style[SlideVars.SlideTL]=SlideVars.SlideOrig+"px";
	}
	this.visibilityToggle(this.eMenu.SlideStatus==1);
	this.eMenu.SlideStatus=0;
}

// The following variables and the GetElementXY function can 
// be used to position a menu relative to the current position 
// of another element on the page. 

HM_NS6 = ((navigator.product == "Gecko")||(HM_IsSafari));
if(HM_NS6||HM_Opera) HM_IE = HM_Konqueror = false;
else if (HM_Konqueror) HM_IE = HM_NS6 = HM_IsSafari = false;
HM_IECSS = (HM_IE&&document.compatMode)?document.compatMode=="CSS1Compat":false;

function HM_f_GetElementXY(elId,xory) {
	var eElement = document.images[elId];
	if(!eElement) eElement = document.anchors[elId];
	if(!eElement) {
		eElement = (document.getElementById) ? document.getElementById(elId) :
		           (document.all) ? document.all(elId) :
		           (document.layers) ? document.layers[elId] :
		           null;
	}

	if(!eElement) return 0;

	if (HM_NS4) {
		if(typeof(eElement[xory])=="number") return eElement[xory];
		else return 0;
	}

	var bAdjustGeckoBorder=((navigator.productSub&&(navigator.productSub<20021130)) ||
	                        ((/^Netscape/.test(navigator.vendor))&&(navigator.vendorSub==7.02)) ||
	                        (navigator.vendor=="Camino"&&(navigator.vendorSub<=.7)));
	var bIsNetscape6=((/^Netscape/.test(navigator.vendor))&&(parseInt(navigator.vendorSub)==6));
	var bIsNetscape60=((bIsNetscape6)&&(navigator.vendorSub<6.1));
	if((HM_Konqueror)||(HM_Opera)||(HM_IsSafari)) bAdjustGeckoBorder = bIsNetscape6 = bIsNetscape60 = false;
	var bAdjustIEMargin=((!HM_Mac)&&(HM_IE)&&(!document.getElementById));

	var sOffsetXY=(xory=="x")?"offsetLeft":"offsetTop";
	var sClientXY=(xory=="x")?"clientLeft":"clientTop";
	var sClientWHXY=(xory=="x")?"clientWidth":"clientHeight";
	var sMarginXY=(xory=="x")?"marginLeft":"marginTop";
	var sPaddingXY=(xory=="x")?"paddingLeft":"paddingTop";
	var sBorderXY=(xory=="x")?"borderLeftWidth":"borderTopWidth";

	var eElStyle=(eElement.currentStyle)?eElement.currentStyle:eElement.style;
	if(window.getComputedStyle&&HM_Opera) eElStyle=window.getComputedStyle(eElement,null);
	var bAbsolutePos=(eElStyle&&(eElStyle.position=="absolute"));
	var bPositionedObject=(eElStyle&&eElStyle.position&&(eElStyle.position!="static"));
	var bAdjustBodyOffset=((bAbsolutePos&&HM_IsSafari)||(HM_Opera&&bPositionedObject&&(HM_BrowserVersion>=7.2)))?false:true;

	var nRetPos=eElement[sOffsetXY];
	var nWidth=0;

	if(bAdjustIEMargin) {
		nWidth=eElStyle[sMarginXY];
		if(!isNaN(parseInt(nWidth))) {
			if((nWidth.indexOf("%")!=-1)&&(eElement.parentElement)){
				var nElSize=eElement.parentElement[sClientWHXY];
				if(isNaN(nElSize)) nElSize=0;
				nWidth=Math.round((parseInt(nWidth)/100)*nElSize);
			}
			else nWidth=parseInt(nWidth);
			nRetPos+=nWidth;
		}
	}
	if(bIsNetscape60&&eElement.tagName!="TABLE") {
		nWidth=eElStyle[sBorderXY];
		if(!/\d/.test(nWidth)) nWidth=eElement.getAttribute('border');
		nWidth=parseInt(nWidth);
		if(!isNaN(nWidth)) nRetPos-=nWidth;
	}

	var eParElement = eElement.offsetParent;
	var bAdjustBodyClient=true;
	if(HM_Opera&&eParElement&&(eParElement.tagName=="BODY")&&(HM_BrowserVersion>=7.2)) {
		if(!/^(FORM|P|DIV|TD|TR|TABLE|DL|OL|UL)$/.test(eElement.tagName)) bAdjustBodyClient=false;
	} else if(HM_Opera&&(HM_BrowserVersion<7.2)) {
		bAdjustBodyClient=false;
	}

	while (eParElement) {
		eElStyle=(eParElement.currentStyle)?eParElement.currentStyle:eParElement.style;
		if(window.getComputedStyle&&HM_Opera) eElStyle=window.getComputedStyle(eParElement,null);
		if(eElStyle&&(eElStyle.position=="absolute")) bAbsolutePos=true;
		if(eElStyle&&eElStyle.position&&(eElStyle.position!="static")) bPositionedObject=true;
		if(bAbsolutePos&&HM_IsSafari) bAdjustBodyOffset=false;
		if(HM_Opera&&bPositionedObject&&(HM_BrowserVersion>=7.2)) bAdjustBodyOffset=false;

		if(HM_IE) {
			if((!HM_Mac)&&(eParElement.tagName!="TABLE")&&(eParElement.tagName!=((HM_IECSS)?"HTML":"BODY"))) nRetPos += eParElement[sClientXY];
			if(bAdjustIEMargin) {
				nWidth=eElStyle[sMarginXY];
				if(!isNaN(parseInt(nWidth))) {
					if((nWidth.indexOf("%")!=-1)&&(eParElement.parentElement)){
						var eParent=eParElement.parentElement;
						var nElSize=eParent[sClientWHXY];
						if(isNaN(nElSize)) nElSize=0;
						nWidth=Math.round((parseInt(nWidth)/100)*nElSize);
					}
					else nWidth=parseInt(nWidth);
					nRetPos+=nWidth;
				}
			}
	         } 
		else if(HM_NS6&&!HM_IsSafari) {
			nWidth=eElStyle[sBorderXY];
			var sPosition = eElStyle.position;

			if(window.getComputedStyle&&!bIsNetscape6) {
				eElStyle=window.getComputedStyle(eParElement,null);
				nWidth=(xory=="x")?eElStyle.getPropertyValue('border-left-width'):eElStyle.getPropertyValue('border-top-width');
				sPosition=eElStyle.getPropertyValue('position');
			}
			nWidth=(isNaN(parseInt(nWidth)))?0:parseInt(nWidth);
			if(sPosition=="absolute") bAbsolutePos=true;

			if(((eParElement.tagName=="BODY")&&(!bIsNetscape60))||
			   ((sPosition)&&(sPosition!="static")&&(eParElement.tagName!="TABLE"))) {
				nRetPos+=nWidth;
			} else if((eParElement.tagName=="TABLE")&&(bAdjustGeckoBorder)) {
				if(nWidth==0) {
					var sFrame=eParElement.getAttribute('frame');
					if(sFrame!=null) nRetPos += 1;
				}
				else if(nWidth > 0) nRetPos+=nWidth;
			}
		}

		if(HM_NS6&&!bIsNetscape60&&!HM_IsSafari&&(eParElement.tagName=="BODY")&&!bAbsolutePos) bAdjustBodyOffset=false;
		if((eParElement.tagName!="BODY")||bAdjustBodyOffset) {
			nRetPos+=eParElement[sOffsetXY];
			if(HM_Opera&&(eParElement.tagName=="BODY")&&bAdjustBodyClient) nRetPos+=eParElement[sClientXY];
		}

		eParElement = eParElement.offsetParent;
	}

	eElStyle=(document.body.currentStyle)?document.body.currentStyle:document.body.style;

	if(HM_Konqueror&&!bAbsolutePos&&(HM_BrowserVersion<3.2)) {
		nWidth=eElStyle[sMarginXY];
		if(!isNaN(parseInt(nWidth))) {
			if(nWidth.indexOf("%")!=-1){
				var nElSize=document.documentElement.offsetWidth;
				if(isNaN(nElSize)) nElSize=0;
				nWidth=parseInt((parseInt(nWidth)/100)*nElSize);
			}
			else nWidth=parseInt(nWidth); 
		}
		else nWidth = 10;
		nRetPos+=nWidth;
	}
	return nRetPos;
}

// The following function retrieves the current height or 
// width of a menu. Use it to position menus based on their
// bottom or right edges, among other possibilities.

function HM_f_GetMenuDimension(menuname,width) {
	var TempMenu=HM_o_Menus[menuname];
	var eMenu=(TempMenu)?TempMenu.eMenu:null;
	if(eMenu) {
		if (!HM_NS4&&
		    ((HM_Opera&&!eMenu.SizeFixed)||(!HM_Opera&&!TempMenu.SizeFixed))) TempMenu.fixSize(false);
		if (HM_DOM) {
			return ((width)?
			        ((HM_IEnoDTD||HM_OperaQuirk)?0:(TempMenu.BorderLeftWidth+TempMenu.BorderRightWidth))+parseInt(eMenu.style.width):
			        ((HM_IEnoDTD||HM_OperaQuirk)?0:(TempMenu.BorderTopWidth+TempMenu.BorderBottomWidth))+parseInt(eMenu.style.height));
		}
		else if (HM_IE) {
			return ((width) ? eMenu.style.pixelWidth : 
			        eMenu.style.pixelHeight);
		}
		else {
			return ((width) ? eMenu.clip.width : eMenu.clip.height);
		}
	}
	else return 0;
}

// In many (and especially older) browsers, select boxes and other form
// elements as well as flash or java applets will cover menu elements
// when they popup. The following function can be used to hide select 
// elements (or any other elements of your choosing) when the menus 
// appear or restore them when the menus are hidden. This function works
// well in all HM supported browsers except NS4, which will only work
// if the HTML of the page is structured in a specific way. For IE5.5 and
// IE6.0, an alternate technique is presented lower in this script which
// does not require element hiding. 

function HM_f_ToggleElementList(show,elList,toggleBy) {
	if(HM_NS4&&(toggleBy=="tag")) return true;
	for(var i=0; i<elList.length; i++) {
		var ElementsToToggle = [];
		switch(toggleBy) {
		case "tag":
			ElementsToToggle=(HM_DOM)?HM_MenusTarget.document.getElementsByTagName(elList[i]):HM_MenusTarget.document.all.tags(elList[i]);
			break;
		case "id":
			ElementsToToggle[0]=(HM_DOM)?HM_MenusTarget.document.getElementById(elList[i]):(HM_IE)?HM_MenusTarget.document.all(elList[i]):HM_MenusTarget.document.layers[elList[i]];
			break;
		}
		for(var j=0; j<ElementsToToggle.length; j++) {
			var theElement = ElementsToToggle[j];
			if(!theElement) continue;
			if(HM_DOM||HM_IE) theElement.style.visibility=show?"inherit":"hidden";
			else if (HM_NS4) theElement.visibility=show?"inherit":"hide";
		}
	}
	return true;
}

// The following functions are intended for use with the HM_OnVisibilityToggle,
// HM_OnMove, and HM_OnMenuCreated menu triggers. For Internet Explorer version 5.5 
// and 6, they utilize an IFrame based masking method that allows menus to cover 
// drop-down select boxes, Flash movies, and other windowed elements on pages 
// that have them.

function HM_f_IEMaskMove(menuEl,xPos,yPos) {
	if (this.IEMask) {
		this.IEMask.style.left=xPos+"px";
		this.IEMask.style.top=yPos+"px";
	}
}

function HM_f_IEMaskToggle(menuEl,bVisible) {
	if (window.HM_IE55) {
		if (bVisible) {
			this.IEMask.style.left=this.eMenu.style.left;
			this.IEMask.style.top=this.eMenu.style.top;
			this.IEMask.style.width=this.eMenu.offsetWidth;
			this.IEMask.style.height=this.eMenu.offsetHeight;
		}
		if(this.IEMask) this.IEMask.style.visibility=(bVisible)?"visible":"hidden";
	}
}

function HM_f_IEMaskCreate(menuEl) {
	if(window.HM_IE55) {
		this.IEMask = HM_MenusTarget.document.createElement("IFRAME");
		//Nate Manley - 4/13/05
		//Due to mixed content errors when under https
		//HM support suggested the commenting out of this line and replacing it with the one below it
		//this.IEMask.src="javascript:void(0)";
		this.IEMask.src=HM_ImageDir+"js_dummy.gif";

		this.IEMask.frameBorder=0;
		this.IEMask.style.position="absolute";
		this.IEMask.style.visibility="hidden";
		this.IEMask.style.left=(HM_f_RTLCheck()) ? "0px" : "-500px";
		this.IEMask.style.top="-2000px";
		this.IEMask.style.width="100px";
		this.IEMask.style.height="100px";
		this.IEMask.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=0)";
		this.IEMask.allowTransparency=false;
		if(this.UseInsert) HM_MenusTarget.document.body.insertBefore(this.IEMask,HM_MenusTarget.document.body.firstChild);
		else HM_MenusTarget.document.body.appendChild(this.IEMask);
	}
}

// End custom functions

HM_IsMenu=(HM_Konqueror&&HM_FramesEnabled)?false:HM_IsMenu;
if(HM_IsMenu) {
	HM_BrowserString = HM_NS4 ? "NS4" : HM_Opera ? "OPR" : HM_DOM ? "DOM" : "IE4";
	HM_aConfigs = HM_ConfigFiles.split(',');
	//HM_WriteString = '<scr'+'ipt src=main_menu_script_dom.js"' + HM_ScriptDir + 'HM_Script' + HM_BrowserString + '.js" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n";
	HM_WriteString = '<scr'+ "ipt src=\"/javascript/main_menu/main_menu_script_dom.js\"" + ' type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n";
	//alert("HM_WriteString: " + HM_WriteString);
	document.write(HM_WriteString);
	for(var i=0; i<HM_aConfigs.length; i++) {
		HM_WriteString = '<scr'+'ipt src="' + HM_ConfigDir + HM_aConfigs[i] + '" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n";
		if(HM_aConfigs[i]) document.write(HM_WriteString);
	}
	if(HM_ConfigType=="arrays") {
		HM_WriteString = '<scr'+'ipt src="' + HM_ScriptDir + 'HM_ConvertArrays.js" type="text/javascript">'+"\n"+'<\/scr'+'ipt>'+"\n"
		alert("HM_WriteString: " + HM_WriteString);
		document.write(HM_WriteString);
	}
}
