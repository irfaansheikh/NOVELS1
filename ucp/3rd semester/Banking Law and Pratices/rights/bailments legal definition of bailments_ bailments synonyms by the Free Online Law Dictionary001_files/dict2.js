var click_block=0;
var IsTFD=0, isForeign=0;
var word='';
var Domain='thefreedictionary.com';
var Sources,sources=[];
var AdResults=0;var OResults='';var GResults='';var IsG=false;
var AdsNum=3;var Ads=[];var RAd;var kw='';var g_kw=1;var CurrentAd=0;
google_ad_client = "ca-pub-2694630391511205";google_kw_type="broad";google_ad_output = "js";
var ImgAd='<IFRAME FRAMEBORDER=0 MARGINWIDTH=0 MARGINHEIGHT=0 SCROLLING=NO WIDTH=300 HEIGHT=70 SRC="http://a.thefreedictionary.com/get.aspx?site=dictionary&size=120x60"></IFRAME>';
var ad_channel='';
var OriginalURL=document.location;
var loc=encodeURIComponent(document.location);
var IE=(navigator.appName=='Microsoft Internet Explorer' && navigator.userAgent.indexOf("Opera")==-1?1:0);
function ById(id){return document.getElementById(id)}
function dictionary(){
if (click_block){
click_block=0;
return;
}
if (!IE){
t = document.getSelection();
opennewdictwin(t);
}
else {
t = document.selection.createRange();
if(document.selection.type == 'Text' && t.text != ''){
document.selection.empty();
opennewdictwin(t.text);
}}}
function opennewdictwin(text){
while (text.substr(text.length-1,1)==' ') text=text.substr(0,text.length-1)
while (text.substr(0,1)==' ') text=text.substr(1)
if (text > ''){
if (isForeign) var newloc='/'+encodeURIComponent(text);
else var newloc='http://www.'+Domain+'/'+encodeURIComponent(text);
if (document.location.toString().toLowerCase()!=newloc.toLowerCase()) document.location=newloc;
}}
function dw(t){document.write(t)}
function wiki(){sources.push('wiki')}
function foldoc(){sources.push('foldoc');dw('<br><div class=brand_copy>This article is provided by FOLDOC - Free Online Dictionary of Computing (<a target=_blank href="http://www.foldoc.org">www.foldoc.org</a>)</div><br>')};
function cde(){sources.push('cde');dw('<br><div class=brand_copy>Computer Desktop Encyclopedia copyright &copy;1981-2008 by <a target=_blank href=http://www.computerlanguage.com/tfd.html>The Computer Language Company Inc</a>. All Right reserved. THIS DEFINITION IS FOR PERSONAL USE ONLY. All other reproduction is strictly prohibited without permission from the publisher.</div><br>')}
function law(){sources.push('hills');dw('<div class=brand_copy>Copyright &copy; 1981-2005 by <a target=_blank href=http://www.farlex.com/hills.htm>Gerald N. Hill and Kathleen T. Hill</a>. All Right reserved.</div>')};
function hm(){sources.push('hm');dw('<p class=brand_copy>The American Heritage&reg; Dictionary of the English Language, Fourth Edition copyright &copy;2000 by Houghton Mifflin Company. Updated in 2003. Published by <a target=_blank href="http://www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</p>')}
function hut(f){
var t=' please sign-in or <a href="https://secure.farlex.com/protected/subscribe.aspx?url='+loc+'">register</a> for a free trial.</p>'
if (!SignedIn)
	switch(f){
	case 1:dw('<p><b><font color=red>This article is available to subscribers only.</font></b> To read this article'+t);break;
	case 3:dw('<p><b><font color=red>Only a portion of this article is shown. The entire article is available to subscribers.</font></b> To read this article in its entirety'+t);break;
	}
hutch();
}
function hutch(){sources.push('hutch');dw('<div class=brand_copy>This article is &copy; Research Machines plc 2004. All rights reserved. <a target=_blank href=http://www.helicon.co.uk>Helicon Publishing</a> is a division of Research Machines plc.</div>')};
function columbia(){sources.push('columbia');dw('<br><div class=brand_copy>The Columbia Electronic Encyclopedia&reg; Copyright &copy; 2007, Columbia University Press. Licensed from Columbia University Press. All rights reserved. <A target=_blank href="http://www.cc.columbia.edu/cu/cup/">www.cc.columbia.edu/cu/cup/</A></div>')}
function harvey(){sources.push('harvey');dw('<p class=brand_copy>Copyright &copy; 2004, <A target=_blank href="http://www.duke.edu/~charvey/">Campbell R. Harvey</A>. All Rights Reserved.</p>')};
function hm_med(){sources.push('hm_med');dw('<div class=brand_copy>The American Heritage&reg; Medical Dictionary Copyright &copy; 2007, 2004 by Houghton Mifflin Company. Published by <a target=_blank href="http://www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</div>')}
function investopedia(){sources.push('investopedia');dw('<p class=brand_copy>Powered by <a target=_blank href="http://www.investopedia.com">Investopedia.com</a>. Copyright &copy; 1999-2005 - All rights reserved. Owned and Operated by Investopedia Inc.</p>')}
function dorland(){sources.push('dorland');dw('<br><div class=brand_copy>Dorland\'s Medical Dictionary for Health Consumers. &copy; 2007 by Saunders, an imprint of Elsevier, Inc. All rights reserved.</div>')};
function acr(){sources.push('af');dw('<p><a target=_blank href="http://www.acronymfinder.com/add.asp?acronym='+encodeURIComponent(word)+'">submit new definition</a></p>');
acr_copy();};
function acr_copy(){sources.push('af');dw('<div class=brand_copy>Powered by <a target=_blank href="http://www.acronymfinder.com">AcronymFinder.com</a> &copy; 1988-2008, Mountain Data Systems, All rights reserved.</div>')};
function IdiI(){sources.push('IdiI');dw('<p class=brand_copy><i><a target=_blank href="http://www.cambridge.org/elt/elt_projectpage.asp?id=2501153">Cambridge International Dictionary of Idioms</a></i> &copy; Cambridge University Press 1998</p>')}
function IdiA(){sources.push('IdiA');dw('<p class=brand_copy><i><a target=_blank href="http://www.cambridge.org/elt/elt_projectpage.asp?id=2500256">Cambridge Dictionary of American Idioms</a></i> &copy; Cambridge University Press 2003</p>')}
function aboutAskALawyer(){dw('<span onmouseover="t_i(1)" onmouseout="t_o(1)" style="margin-left:12pt;font-size:8pt;font-weight:normal;text-decoration:underline;cursor:help">what\'s this?</span>');}
function wld_ask(){dw('<div style="margin-top:18pt">Do you have a legal question? <a href="http://www.farlex.com/asklawyer.html">Ask a lawyer now</a>.</div>')};//<div><a href="/_/gr.aspx?url=http://www.uslegalforms.com/?auslf=thefreedict">Download legal forms for all your legal needs</a>.  Wills, Power of Attorney, Living Will, Real Estate, Landlord Tenant, Corporate and more!</div>')}
function wld(){wld_ask();sources.push('wld');dw('<div class=brand_copy style="margin-top:18pt">These questions and answers are provided by WORLDLawDirect.com. &copy;2000 - 2007 by WORLDLawDirect.com, Inc.</div>');
dw('<span ID=Tp1 class=hint>This is a sample question from the WORLDLawDirect database. WLD is the leading interactive provider of U.S.and international legal solutions. WLD has resolved legal issues for over 110,000 clients. Click the link below to ask your own question. Experienced attorneys will personally answer and advise you--within hours.</span>')};
function vet(){sources.push('vet');dw('<div class=brand_copy>Saunders Comprehensive Veterinary Dictionary, 3 ed. &copy; 2007 Elsevier, Inc. All rights reserved</div>')}
function hm_sci(){sources.push('hm_sci');dw('<p class=brand_copy>The American Heritage&reg; Science Dictionary Copyright &copy; 2005 by Houghton Mifflin Company. Published by <a target=_blank href="http://www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</p>')}
function hm_wsw(){sources.push('hm_wsw');dw('<div class=brand_copy>Wall Street Words: An A to Z Guide to Investment Terms for Today\'s Investor by David L. Scott. Copyright &copy; 2003 by Houghton Mifflin Company. Published by <a target=_blank href="http://www.eref-trade.hmco.com/">Houghton Mifflin Company</a>. All rights reserved.</div>')}
function mosby(){sources.push('mosby');dw('<div class=brand_copy>Mosby\'s Dental Dictionary, 2nd edition. &copy; 2008 Elsevier, Inc. All rights reserved.</div>')};
function mosbyCAM(){sources.push('mosbyCAM');dw('<div class=brand_copy>Jonas: Mosby\'s Dictionary of Complementary and Alternative Medicine. (c) 2005, Elsevier.</div>')};
function weal(){sources.push('weal');dw('<div class=brand_copy>West\'s Encyclopedia of American Law, edition 2. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>')};
function bouvier(){sources.push('bouvier');dw('<p class=brand_copy>A Law Dictionary, Adapted to the Constitution and Laws of the United States. By John Bouvier. Published 1856.</p>')};
function mili(){sources.push('mili');dw('<div class=brand_copy>Dictionary of Military and Associated Terms. US Department of Defence 2005.</div>')}
function webster(){sources.push('webster');dw('<div class=brand_copy>Webster\'s Revised Unabridged Dictionary, published 1913 by C. & G. Merriam Co.</div>')}
function wn(){sources.push('wn');dw('<div class=brand_copy>Based on WordNet 3.0, Farlex clipart collection. &copy; 2003-2008 Princeton University, Farlex Inc.</div>')}
function gem(){sources.push('gem');dw('<div class=brand_copy>Gale Encyclopedia of Medicine. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>')}
function dcng(){sources.push('dcng');dw('<div class=brand_copy>Dictionary of Collective Nouns and Group Terms. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>')}
function allusions(){sources.push('allusions');dw('<div class=brand_copy>Allusions&#x2014;Cultural, Literary, Biblical, and Historical: A Thematic Dictionary. Copyright 2008 The Gale Group, Inc. All rights reserved.</div>')}
function ologies(){sources.push('ologies');dw('<p class=brand_copy>-Ologies & -Isms. Copyright 2008 The Gale Group, Inc. All rights reserved.</p>')}
function hc_dict(){sources.push('hc_dict');dw('<p class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?English">Collins Essential English Dictionary</a> 2nd Edition 2006 &copy; HarperCollins Publishers 2004, 2006</p>')}
function hc_thes(){sources.push('hc_thes');dw('<p class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?EnglishThesaurus">Collins Essential Thesaurus</a> 2nd Edition 2006 &copy; HarperCollins Publishers 2005, 2006</p>')}
function hc_En_Es(){sources.push('hc_Es');dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?Spanish">Collins Spanish Dictionary & Grammar</a> 4th Edition 2006 &copy; HarperCollins Publishers 1997, 2000, 2004, 2006 </div>')}
function hc_En_Fr(){sources.push('hc_Fr');dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?French">Collins French Dictionary & Grammar</a> 5th Edition 2007 &copy; HarperCollins Publishers 1997, 2000, 2004, 2006, 2007</div>')}
function hc_En_De(){sources.push('hc_De');dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?German">Collins German Dictionary & Grammar</a> 5th Edition 2007&copy; HarperCollins Publishers 1997, 1999, 2004, 2006, 2007 </div>')}
function hc_En_It(){sources.push('hc_It');dw('<div class=brand_copy><a href="/_/misc/HarperCollinsProducts.aspx?Italian">Collins Italian Dictionary & Italian in Action</a> 3rd Edition 2006 &copy; HarperCollins Publishers 2000, 2005, 2006</div>')}
var hc_Es_En=hc_En_Es;
var hc_Fr_En=hc_En_Fr;
var hc_De_En=hc_En_De;
var hc_It_En=hc_En_It;
function eb(l,w){sources.push('eb');dw('<p class=brand_copy>For more information on <a href="/_/gr.aspx?url='+encodeURIComponent(l)+'&source=Britannica">'+w+'</a>, visit Britannica.com. Britannica Concise Encyclopedia. Copyright &copy; 1994-2008 Encyclop&aelig;dia Britannica, Inc.</p>')}
function cabio(){sources.push('cabio');dw('<p class=brand_copy><a target=_blank href="http://www.cambridge.org/us/catalogue/catalogue.asp?isbn=9780521402583">The Cambridge Dictionary of American Biography</a>, by John S. Bowman. Copyright &copy; Cambridge University Press 1995. Reproduced with permission.</p>')}

var nsx;
var nsy;
if (!document.all){
	document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove=get_mouse;
}
function get_mouse(e){
	nsx=e.pageX-10;
	nsy=e.pageY+5;
}
function t_i(id){
	var hlp=ById('Tp'+id);
	if (hlp){
	if (document.all){
	 nsy=event.y+document.body.scrollTop;
	 nsx=event.x+document.body.scrollLeft;
	}
	hlp.style.top=nsy+20;
	hlp.style.left=(nsx>610?nsx-470:140);
	hlp.style.visibility='visible';
}}
function t_o(id){
	var hlp=ById('Tp'+id);
	if(hlp) hlp.style.visibility='hidden';
}
function el(a){
if (a.substr(0,3)!='ftp') a='http://'+a;
window.open(a, '_blank');
}
function eml2(p,n){
	if (! p && document.location.href.indexOf('medical-dictionary')>0) p='dorland';
	var url='/_/viewer.aspx?path='+encodeURIComponent(p)+'&name='+encodeURIComponent(n);
	if (document.location.href.substr(0,9)=='/_/viewer')
		location=url;
	else
		open(url,'img','');
};
function eml(p,n){eml2(p,n)};
function hil(n){eml2('hut',n)};
function hmil(n){eml2('hm',n)};
function hmil_med(n){eml2('hm/med',n)};
function hmil_wsw(n){eml2('hm/wsw',n)};
function hmil_sci(n){eml2('hm/sci',n)};
function openerlink(l){
opener.location='http://encyclopedia.'+Domain+'/'+l;
self.close();
return false;
}
var g_kw=0;
function g_attr(){
var g_fburl='http://www.google.com/ads_by_google.html';
return '<a onMouseOver="return m_over(\''+g_fburl+'\')" onMouseOut="m_out()" href="/_/gr.aspx?url='+encodeURIComponent(g_fburl)+'">Ads by Google</a>';
}
function google_radlink_request_done(radlinks) {if (radlinks.length) RAd=radlinks};
function google_ad_request_done(google_ads, g_afs){
	if (google_ads.length==0 && !g_afs) {
		if (g_kw && Ads.length==0){
			google_ad_channel =ad_channel+"+8922314704";
			google_ad_output="js";
			google_prev_ad_formats_by_region=null;
			google_encoding="iso-8859-1";
			google_page_url=OriginalURL;
			dw('<script language="JavaScript1.1" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>');
		}
		g_kw=0;
		return;
	}
	if (google_ads[0].type.substring(0,4)=='text' && Ads.length==0) {
		Ads=google_ads;
		IsG=true;
		if (g_kw && !g_afs) GResults=google_ads.length;
	}
	else if (google_ads[0].type == 'image')
		ImgAd='<a href="'+google_ads[0].url+'"><img src="'+google_ads[0].image_url+'" height="'+google_ads[0].image_height+'" width="'+google_ads[0].image_width+'" border="0"></a>';
	else if (google_ads[0].type == "flash") 
		ImgAd='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+google_ad.image_width+'" HEIGHT="'+google_ad.image_height+'"><PARAM NAME="movie" VALUE="'+google_ad.image_url+'"><PARAM NAME="quality" VALUE="high"><PARAM NAME="AllowScriptAccess" VALUE="never"><EMBED src="'+google_ad.image_url+'" WIDTH="'+google_ad.image_width+'" HEIGHT="'+google_ad.image_height+'" TYPE="application/x-shockwave-flash" AllowScriptAccess="never" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';
	if (!g_afs) g_kw=0;
}
function google_afs_request_done(a) {google_ad_request_done(a,1)}
function ad(url,visible_url,line1,line2,line3){this.url=url;this.visible_url=visible_url;this.line1=line1;this.line2=line2;this.line3=line3;}
function write_ad(ad){
	var t1=ad.line1, t2=ad.line2+' '+ad.line3;
	if (IsG) {t1=highlight(t1);t2=highlight(t2)};
	 dw('<a href="http://www.thefreedictionary.com/_/gr.aspx?source='+encodeURIComponent(top.location)+'&url='+encodeURIComponent(ad.url)+'" onMouseOver="return m_over(\''+(IsG?'go to ':'http://')+ad.visible_url+'\')" onMouseOut="m_out()">');
	 dw('<span class=OvTitle>'+t1+'</span><br><span class=OvDescr>'+t2+'</span><br><span class=OvURL>'+ad.visible_url+'</span></a>');
}
function write_ads(AdsNum, Br){
	if (Ads.length && Ads.length>CurrentAd){
	dw('<div class=Ov><div class=OvBorder><span class=by>'+(IsG?g_attr():'<a href="#" onclick="open(\'/_/gr.aspx?url=\'+escape(\'/_/about-sponsored-results.html\'), \'w\',\'width=600,height=330,resizable=1\');return false">Sponsored links</a>')+'</span>');
	for (i=0;CurrentAd<Ads.length && i<AdsNum;i++){
		if (i) dw('<div class=AdSep></div>');
		write_ad(Ads[CurrentAd]);
		CurrentAd+=1;
		}
	dw('</div></div>');
	if (Br) dw('<br>');
	}
}
function myerror(){
//dw('<iframe src="/_/deftopad.aspx" border=0 frameborder=0 width="95%" height=90 scrolling=no></iframe><br>');
window.onerror=null;
return true;
}
function highlight(t){
if (word) {
	var h=word.toUpperCase();
	var i=t.toUpperCase().indexOf(h);
	var j=0;
	while (i>=0 && j<10) {
		if ((t.substr(i-1, 1)<'0' || i==0) && t.substr(i+h.length,1)<'0') {
			t=t.substr(0, i)+'<b>'+t.substr(i,h.length)+'</b>'+t.substr(i+h.length);
			i+=7;
		}
		i=t.toUpperCase().indexOf(h, i+1+h.length);
		j++;
	}
}
return t;
}
function WriteRAd1(){
	if (RAd && RAd.length){
	dw('<table width="100%" class=sbox1 cellspacing=0><tr><th nowrap align=left>Related Ads</th></tr><tr><td><table cellpadding=0 cellspacing=0 width="100%"><tr><td width=50% valign=top>');
	var cnt=Math.min(10,RAd.length)
	for(i=0;i<cnt;++i) {
		if (i>0 && i==Math.ceil(cnt/2)) dw('</td><td width=50% valign=top>');
		dw('&#x25AA; <a href="/_/related-ads.aspx?w='+encodeURIComponent(word)+'&q='+RAd[i].term+'&c='+encodeURIComponent(ad_channel)+'&google_page_url='+encodeURIComponent(window.location)+'" onmouseout="window.status=\'\'" onmouseover="window.status=\'\';return true;">'+highlight(RAd[i].term)+'</a><br>');
	}
	dw('</td></tr></table></td></tr></table>');
}}
function m_over(url){
window.status=url;
return true;
}
function m_out(){
window.status = '';
}
var sound_timeout=null;
function play(File){
var s=File.replace('/mp3/','/prons/')+'.wav';
if (sound_timeout) clearTimeout(sound_timeout);
if (IE && navigator.platform=='Win32'){
	document.all.bgsound.src=s;
	sound_timeout=setTimeout('document.all.bgsound.src="about:blank"', 8000);
} else if(ById("sound_frame")) {
	var snd=ById("sound_frame");
	snd.src='about:blank';
	snd.src=s;
	sound_timeout=setTimeout('ById("sound_frame").src="about:blank"', 8000);
} else 
	window.location=s;
window.status='';
}
function play_w(snd){
if (snd.indexOf('/')<0)	snd='hm/mp3/'+snd;
snd='http://img.tfd.com/'+snd;
if(flashInstalled())
dw('<object style="margin:3px;margin-bottom:5px" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="10" height="13"><param name="movie" value="http://img.tfd.com/play.swf"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="FlashVars" value="soundpath='+snd+'"><embed style="margin-bottom:4px" src="http://img.tfd.com/play.swf"  FlashVars="soundpath='+snd+'" menu="false" width="10" height="13" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>');
else {
dw('<a href="javascript:play(\''+snd+'\')" onMouseOver="return m_over(\'Click to hear pronunciation\')" onMouseOut="m_out()"><img alt="Pronunciation" width="13" align=absbottom style="margin-bottom:2px" height="21" border="0" src="http://img.tfd.com/hm/pron.gif"></a>');
if (typeof(window["sound_frame"])=="undefined") dw('<iframe id=sound_frame style="position:absolute" frameborder=0 width=1 height=1></iframe>');
if (typeof(window["bgsound"])=="undefined") dw('<bgsound id=bgsound></bgsound>');
}}
play_w2=play_w;
function playV2(snd){
var t=snd.substr(3,2);
if (t!='UK' && t!='US') t='plain';
if(flashInstalled())
dw('<object style="margin:0 0 0 3px;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="28" height="18"><param name="movie" value="http://img.tfd.com/m/flags/play18.swf"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="FlashVars" value="soundpath=http://img.tfd.com/pron/mp3/'+snd+'&flag=http://img.tfd.com/m/flags/18_'+t+'"><embed style="margin:0 0 0 3px;" src="http://img.tfd.com/m/flags/play18.swf"  FlashVars="soundpath=http://img.tfd.com/pron/mp3/'+snd+'&flag=http://img.tfd.com/m/flags/18_'+t+'" menu="false" width="28" height="18" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object>');
else {
if (typeof(window["InstallFlash"])=="undefined") dw('<a id=InstallFlash href="http://www.macromedia.com/go/getflash" onclick="return confirm(\'Flash is required to play sound. Would you like to install flash?\')" style="margin:0 0 0 3px;"><img border=0 src="http://img.tfd.com/m/flags/no-flash.png"></a>');
}}
function flashInstalled(){
if(navigator.plugins && navigator.mimeTypes.length){
	var x=navigator.plugins["Shockwave Flash"];
	if(x) return true;
}else{
	try{
	var x=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
	if(x) return true;
	}catch(e){}
}
return false;
}
function pron_key(t){
var pkw=open('/_/pk.htm','pk','width=630,height=675,statusbar=0,menubar=0');
return false;
}
var SignedIn=0;
function homepage(root){
var ua=navigator.userAgent;
if (IE && ua.indexOf("Win")!=-1 && !eval('shp.is'+'Homepage(\'http://www.'+Domain+'/\')')){
	dw('<a href="/" title="Set as home page" onMouseOver="return m_over(\'set www.'+Domain+' as home page\')" onMouseOut="m_out()" onClick="style.b'+'ehavior=\'url(#'+'default#'+'homepage)\';setHome'+'Page(\'http://www.'+Domain+'/\');">');
	dw((root?'Set as Home Page</a> |':'<img src=http://img.tfd.com/m/home.gif align=absbottom></a>'));
	}
}
function toggle(id){
	var img=ById('toggle_img_'+id);
	var td=ById('toggle_td_'+id).style;
	if (td.display=='none'){
		td.display='';
		toggle_store(id,0);
		img.src=img.src.replace('right','down');
	}
	else {
		td.display='none';
		toggle_store(id,1);
		img.src=img.src.replace('down','right');
	}
}
function toggle_store(id, hide){
	var c='0'+getCookie('t2');
	if (hide)
		c=c|(1<<(id-1));
	else
		c=c & (~(1<<(id-1)));
	setCookie('t2',c);
}
function toggle_retrieve(id){
	var c=getCookie('t2');
	if (c) c=Number(c);
	else c=1;
	if (c&(1<<(id-1))) toggle(id);
}
function getCookie(name){
	var dc=document.cookie;
	var prefix=name+'=';
	var s = dc.indexOf('; ' + prefix);
	if (s==-1){
		s=dc.indexOf(prefix);
		if (s != 0) return null;
	}
	else
		 s+=2;
	var e=dc.indexOf(';', s);
	if (e==-1)
		 e=dc.length;
	return unescape(dc.substring(s+prefix.length, e));
}
function setCookie(name, value){
	document.cookie=name+'='+escape(value)+
	(name=='t2'?'; expires=Thu, 1 Jan 2015 05:00:00 UTC':'')+'; path=/; domain='+Domain;
}
function AsyncRequest(url){
	var scr=document.createElement('script');
	scr.type='text/javascript';
	scr.defer=true;
	scr.src=url;
	document.getElementsByTagName('head').item(0).appendChild(scr);
}
var tfd_searchby_HTML=null;
var tfd_searchby=0;
function UpdadeSearchForms(){
var SearchCookie=getCookie('searchBy');
if (SearchCookie)tfd_searchby=SearchCookie

for (var f=1;f<=2;f++){
	var form=eval('document.f'+f);
	if (form) {
		var f_sd=ById('f'+f+'_sd');
		if (f_sd) {
			if (f_sd.innerHTML.indexOf('worD')<0) tfd_searchby_HTML=f_sd.innerHTML;
			if (tfd_searchby!=8 && tfd_searchby!=9 && f_sd.innerHTML.indexOf('worD')>0) 
				f_sd.innerHTML=tfd_searchby_HTML;
			if (tfd_searchby==8)
				f_sd.innerHTML='<table cellspacing=0 cellpadding=2><tr><td valign=bottom>First Name<div style="font-size:8pt;height:20px"><input type=checkbox name=firstname_begins_with value=1 checked>Begins with</div><input size=8 name=worD maxlength=25><td><td valign=bottom>Last Name<div style="font-size:8pt;height:20px"><input type=checkbox name=name_begins_with value=1>Begins with</div><input size=8 name=name maxlength=25></td><td valign=bottom>Location<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">(City, State, Area code or ZIP)</div><input size=20 name=where maxlength=100></td><td valign=bottom><input type=submit value=Search></td></tr></table>';
			if (tfd_searchby==9)
				f_sd.innerHTML='<table cellspacing=0 cellpadding=2><tr><td valign=bottom>Keyword<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">&nbsp;</div><input size=20 name=worD maxlength=300><td><td valign=bottom>Location<div style="font-size:8pt;padding-top:4px;padding-bottom:1px">(ex: Boston MA, or MA, or 02114)</div><input size=23 name=L maxlength=100></td><td valign=bottom><input type=submit value=Search></td></tr></table>';
		}
		for (var i=0;i<form.elements.length;i++){
			var bt=form.elements[i];
			if (bt.type) if (bt.type=='radio') if (bt.value==tfd_searchby && tfd_searchby!=3) bt.checked=true;
		}
		var search_by_obj=ById('f'+f+'_tfd_searchby');
		if (search_by_obj) search_by_obj.style.visibility=((tfd_searchby>3 && tfd_searchby!=8 && tfd_searchby!=9) || isForeign?'hidden':'');
		
	}
}}
function _SearchBy(by){
	tfd_searchby=by.value
	setCookie('searchBy', tfd_searchby);
	UpdadeSearchForms();
}
function scrollPos(){
if (IE) return document.body.scrollTop ;
return window.pageYOffset;
}
function addFav(){
if (IE) try{
	if (window.external && ("AddFavorite" in window.external))
		document.write(' <a title="Add to favorites" href="javascript:external.AddFavorite(\'http://www.thefreedictionary.com/\',\'Dictionary, Thesaurus & Encyclopedia\')"><img src=http://img.tfd.com/m/favorites.gif align=absbottom></a>')
	}catch(e){}
}
function TestSB(){
if (IE) {try {if (window.external && ("AddSearchProvider" in window.external)) return 1} catch(e){return 0}}
else if (window.sidebar && ("addSearchEngine" in window.sidebar)) return 2;
return 0;
}
function WriteSB(){
if (TestSB())
document.write('<a href="#" title="Add The Free Dictionary to your search bar" xonmouseover="t_i(-1)" xonmouseout="t_o(-1)" onclick="if(TestSB()==1) window.external.AddSearchProvider(\'http://www.thefreedictionary.com/_/open-search.xml\'); else window.sidebar.addSearchEngine(\'http://mycroft.mozdev.org/plugins/freedict.src\',\'http://mycroft.mozdev.org/plugins/freedict.png\',\'freedict\',\'Language dictionary\');return false"><img src=http://img.tfd.com/m/add2SB.gif border=0 align=absbottom style="width:26px;"></a>');
//document.write('<div ID=Tp-1 class=hint style="width:470px;background-color:white"></div>');
}
function changeTextSize(size){
	if (size){
	var customStyles = document.styleSheets.item("mainCSS");
	var Rules;
	if (customStyles.rules)
		Rules=customStyles.rules;
	else
		Rules=customStyles.cssRules;

	var TD=Rules[0].style;
	TD.fontSize=size+'pt';
	setCookie('fontSize', size)
}}
function WF(s,l){
document.write('<a title="Change Text Size" style="text-decoration:none;font-size:'+(s-2)+'pt" href="javascript:changeTextSize('+s+')">'+l+'&nbsp;</a>')
}
function FontSize(){
WF(8,'T');
WF(10,'E');
WF(11,'X');
WF(13,'T');
changeTextSize(getCookie('fontSize'));
}
function SocialNetworks(){
var dttl=encodeURIComponent(document.title);
dw('<p>Link to this page: ');
if (word.length>20)
	dw('<br><textarea onDblClick="click_block=1" rows=3 cols=70 readonly=readonly>&lt;a href=&quot;'+document.location+'&quot;&gt;'+word+'&lt;/a&gt;</textarea></p>');
	
else
	dw('<input onDblClick="click_block=1" size='+(20+word.length+String(document.location).length)+' readonly=readonly value="&lt;a href=&quot;'+document.location+'&quot;&gt;'+word+'&lt;/a&gt;"></p>');
dw('<map name=socialNetworks>'+
'<area shape=rect coords="0,0,33,32" target=_blank href="http://digg.com/submit?phase=2&url='+loc+'&title='+dttl+'" title="Digg it!">'+
'<area shape=rect coords="34,0,67,32" target=_blank href="http://www.facebook.com/share.php?u='+loc+'" title="Add to Facebook">'+
'<area shape=rect coords="69,0,102,32" target=_blank href="http://del.icio.us/post?v=4;url='+loc+';title='+dttl+'" title="Bookmark on del.icio.us">'+
'<area shape=rect coords="106,0,136,32" target=_blank href="http://www.google.com/bookmarks/mark?op=add&bkmk='+loc+'&title='+dttl+'" title="Bookmark on Google History Bookmarks">'+
'<area shape=rect coords="138,0,174,32" target=_blank href="http://myweb2.search.yahoo.com/myresults/bookmarklet?u='+loc+'&t='+dttl+'" title="Bookmark on Yahoo!">'+
'<area shape=rect coords="177,0,211,32" href="http://reddit.com/submit?url='+loc+'&title='+dttl+'" title="Reddit">'+
'</map>'+
'Please bookmark with social media, your votes are noticed and appreciated:<br><IMG style="margin-top:3pt" SRC="http://img.tfd.com/m/social-networks.gif" width=211 height=32 usemap="#socialNetworks" border=0><br><br>');
}

function Translate(){
var i=location.href.indexOf('&u=http://');
if (i>-1){
	dw('<br><b><a href="'+decodeURIComponent(location.href.substring(i+3))+'" target="_top">Back to English</a></b>');
	return;
}
function l(x,c,n){
	dw('<area shape=rect coords="'+x+'" target=_top href="http://www.google.com/translate?hl=en&ie=UTF8&langpair=en%7C'+c+'&u='+loc+'" title="'+n+'">');
}
dw('<map name=translate>');
l('0,0,17,11','fr','Francais');
l('20,0,37,11','de','Deutsch');
l('40,0,57,11','es','Espa&#241;ol');
l('60,0,77,11','it','Italiano');
l('80,0,97,11','pt','Portugu&#234;s');
l('0,14,17,25','zh-CN','Chinese');
l('20,14,37,25','ar','Arabic');
l('40,14,57,25','ru','Russian');
l('60,14,77,25','ja','Japanese');
l('80,14,97,25','ko','Korean');
dw('</map><img src="http://img.tfd.com/m/translate.gif" style="width:97px;height:25px;margin-top:6px;border:none" usemap=#translate>')
}
function Charity(cc){
dw('<table width="100%" class=sbox1 cellspacing=0><tr><th nowrap align=left><a style="float:right" title="Help" class="help help7" href="http://www.'+Domain+'/_/help/help3.htm#328">?</a>Charity</th></tr><tr><td>');
var code='<a href="/_/gr.aspx?source='+loc+'&url=http%3A%2F%2Fwww.friendsofwfp.org%2Ffarlex" style="text-decoration:none"><img src=http://img.tfd.com/m/child.jpg width=125 height=39 border=0 align=left> Feed a hungry child - donate to school feeding program</a>';
/*
if (cc=='US')
	code='<a href="/_/gr.aspx?source='+loc+'&url='+encodeURIComponent('http://american.redcross.org')+'" style="text-decoration:none"><img src=http://img.tfd.com/m/red-cross.gif width=42 height=42 border=0 align=left> Donate to American Red Cross</a>';
else
	code='<a href="/_/gr.aspx?source='+loc+'&url='+encodeURIComponent('http://www.icrc.org/web/eng/siteeng0.nsf/iwpList2/Help_the_ICRC?OpenDocument')+'" style="text-decoration:none"><img src=http://img.tfd.com/m/red-cross.gif width=42 height=42 border=0 align=left> Donate to International Red Cross</a>';
*/
dw(code);
dw('</td></tr></table>');
}
var WordListHost='';
function WordList(){
dw('<table width="100%" class=sbox1 cellspacing=0><tr><th nowrap align=left><a style="float:right" title="Help" class="help help7" href="http://www.'+Domain+'/_/help/help2.htm#22115">?</a>My Word List</th></tr><tr><td>');
dw('<a href="javascript:WordListAdd()"><img class=icon src=http://img.tfd.com/m/ico_add.gif align=absmiddle>Add current page to the list</a>');
dw('<div id=word_list></div></td></tr></table>');
};
function WordListAdd(){AsyncRequest('http://'+WordListHost+'/_/wordList.ashx?o=add&u='+(OriginalURL?OriginalURL:loc))};
function WordListDelete(i){AsyncRequest('http://'+WordListHost+'/_/wordList.ashx?o=delete&i='+i)};
function dWL(i){
return '&nbsp;<a title=Delete style="font-weight:bold;font-family:Verdana;color:red;text-decoration:none" href="javascript:WordListDelete('+i+')">X</a><br>';
};
function diggit(){
digg_url = 'http://encyclopedia2.thefreedictionary.com/Top%2010%20Worst%20Computer%20Worms%20of%20All%20Time';
digg_title = 'Top 10 Worst Computer Worms of All Time';
digg_topic = 'tech_news';
dw('<scri'+'pt src="http://digg.com/tools/diggthis.js" type="text/javascript"></sc'+'ript>');
//dw('<div style="float:right"><a href="http://digg.com/submit?phase=2&url='+loc+'&title=Top+10+Worst+Computer+Worms+of+All+Time"><img border=0 src="http://digg.com/img/badges/100x20-digg-button.gif" width="100" height="20" alt="Digg!"></a></div>')
}
function _cb_FindItems(root){
var items = root.Item || [];
  var html = [];
  for (var i=0; i<items.length && i<10; ++i)
  {
    var item = items[i];
    var title = item.Title;
    var viewitem = item.ViewItemURLForNaturalSearch;

    if (null != title && null != viewitem)
    {
      html.push('&#x25AA; <a href="'+viewitem+'">'+title+'</a><br>');
    }
  }
  html=html.join('');
  if (html) {
  	html='<table width="100%" class=sbox1 cellspacing=0><tr><th nowrap align=left>eBay listings</th></tr><tr><td>'+html+'</td></tr></table>';
  	ById("ebay_div").innerHTML = html;
  }
}
function KWTrack(wl){
if (kw>'' && (OResults>0 || GResults>0))
	dw('<img width=1 height=1 style="display:none" src=http://a'+'d.db3nf.com/pix.aspx?w='+encodeURIComponent(kw)+'&o='+OResults+'&g='+GResults+'>');
UpdadeSearchForms();
if (document.f1 && window.location.toString().indexOf('#')<0) window.setTimeout('if (scrollPos()==0) document.f1.Word.focus()',300);
if (wl && WordListHost) AsyncRequest('http://'+WordListHost+'/_/wordList.ashx?r='+Math.random());
//if (kw>'' && typeof(window["ebay_div"])!="undefined") dw('<s'+'cript src="http://open.api.ebay.com/shopping?appid=Farlexf1d-62c1-4cc4-b716-1f3ad259321&version=517&siteid=0&callname=FindItems&QueryKeywords='+encodeURIComponent(kw)+'&ItemSort=BestMatch&MaxEntries=5&responseencoding=JSON&callback=true&trackingid=5335818805&trackingpartnercode=9&affiliateuserid=links"></s'+'cript>');
}
