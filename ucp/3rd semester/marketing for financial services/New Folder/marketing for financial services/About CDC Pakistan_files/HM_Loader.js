/*HM_Loader.js
* by Peter Belesis. v4.0.3 010123
* Copyright (c) 2001 Peter Belesis. All Rights Reserved.
*/

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;
HM_IsMenu = (HM_DOM || HM_NS4 || (HM_IE4 && !HM_IE4M));

HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";

if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;


HM_GL_MenuWidth          = 157;
HM_GL_FontFamily         = "Tahoma,Verdana,Arial,sans-serif";
HM_GL_FontSize           = 7;
HM_GL_FontBold           = false;
HM_GL_FontItalic         = false;
HM_GL_FontColor          = "black";
HM_GL_FontColorOver      = "white";
HM_GL_BGColor            = "white";
HM_GL_BGColorOver        = "black";
HM_GL_ItemPadding        = 3;

HM_GL_BorderWidth        = 1;
HM_GL_BorderColor        = "navy";
HM_GL_BorderStyle        = "solid";
HM_GL_SeparatorSize      = 1;
HM_GL_SeparatorColor     = "white";
HM_GL_ImageSrc           = "images/arrow.gif";
HM_GL_ImageSrcLeft       = "images/arrow.gif";
HM_GL_ImageSize          = 5;
HM_GL_ImageHorizSpace    = 0;
HM_GL_ImageVertSpace     = 3;

HM_GL_KeepHilite         = false;
HM_GL_ClickStart         = false;
HM_GL_ClickKill          = true;
HM_GL_ChildOverlap       = 40;
HM_GL_ChildOffset        = 8;
HM_GL_ChildPerCentOver   = null;
HM_GL_TopSecondsVisible  = .5;
HM_GL_StatusDisplayBuild = 0;
HM_GL_StatusDisplayLink  = 1;
HM_GL_UponDisplay        = null;
HM_GL_UponHide           = null;

HM_GL_RightToLeft        = false;
//HM_GL_CreateTopOnly    = false;
HM_GL_ShowLinkCursor     = true;


if(HM_IsMenu) {
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='HM_Arrays.js' TYPE='text/javascript'><\/SCR" + "IPT>");
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='HM_Script"+ HM_BrowserString +".js' TYPE='text/javascript'><\/SCR" + "IPT>");
}


//end