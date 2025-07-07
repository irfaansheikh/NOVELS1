// Default JavaScript file for the Main ANL website
// 06/14/2004
// Author: Dana M. Stasiak (CIS)
//
// Code for swapping stylesheets
// Load the alternate stylesheet based on platform
var p = navigator.platform;
if(p.substring(0,3) == 'Win')
{
	// load some additional style sheet items
	document.write('<link rel="stylesheet" href="/stylesheets/anl_default.css" type="text/css">');
}
else if (p.substring(0,3) == 'Mac')
{
	if(navigator.appName == "Microsoft Internet Explorer")
	{
		// do nothing - the default is fine
	}
	else
	{
		// load some additional style sheet items
		document.write('<link rel="stylesheet" href="/stylesheets/anl_default.css" type="text/css">');
	}
}
else
{
	// load some additional style sheet items
	document.write('<link rel="stylesheet" href="/stylesheets/anl_default.css" type="text/css">');
}

// FUNCTION: anlBreadCrumbs(string baseURL)
//
// Last Modified: 08/17/2004
// Modified by: D. M. Stasiak (CIS)
//
// Public function for creating breadcrumbs, all defaults for delimiter and styles
// are set in this function.  End-users only need to specify the base URL for their
// site, without the trailing slash (/)
function anlBreadCrumbs(baseURL){
	breadCrumbs(baseURL,">","index.html",null,null,null,"0");
}

// Breadcrumbs code from KaosWeaver Dreamweaver Extension
// Modified slightly to substitute "Argonne Home" for "Home" as the base breadcrumb
// and to remove the title from the breadcrumb stream
function breadCrumbs(base,delStr,defp,cStyle,tStyle,dStyle,nl) { // by Paul Davis - http://www.kaosweaver.com
loc=window.location.toString();subs=loc.substr(loc.indexOf(base)+base.length+1).split("/");
 document.write('<a href="'+getLoc(subs.length-1)+defp+'" class="'+cStyle+'">Argonne Home</a>  '+'<span class="'+dStyle+'">'+delStr+'</span> ');
 a=(loc.indexOf(defp)==-1)?1:2;for (i=0;i<(subs.length-a);i++) { subs[i]=makeCaps(unescape(subs[i]));
 document.write('<a href="'+getLoc(subs.length-i-2)+defp+'" class="'+cStyle+'">'+subs[i]+'</a>  '+'<span class="'+dStyle+'">'+delStr+'</span> ');}
 if (nl==1) document.write("<br>");
 //document.write('<span class="'+tStyle+'">'+document.title+'</span>');
}
function makeCaps(a) {
  g=a.split(' ');for (l=0;l<g.length;l++) g[l]=g[l].toUpperCase().slice(0,1)+g[l].slice(1);
  return g.join(" ");
}
function getLoc(c) {
  var d="";if (c>0) for (k=0;k<c;k++) d=d+"../"; return d;
}

// Navigation menu code from SoThink DHTMLMenu Dreamweaver Extension
// Code is being generated in an unlinked library object and then pasted into this JavaScript
// file for ease in updating.
function generateSciTechMenu()
{
stm_bm(["uueoehr",640,"/images/","blank.gif",0,"","",0,0,0,0,0,1,0,0,"","",0,0,1,1,"default","hand","/javascript/"],this);
stm_bp("p0",[0,4,0,0,3,2,0,7,100,"",-2,"",-2,90,0,0,"#000000","#444444","",3,0,0,"#000000"]);
stm_ai("p0i0",[0,"Science/Technology","","",-1,-1,0,"/Science_and_Technology/index.html","_self","","","","",0,0,0,"arrow_w_d.gif","arrow_w_d.gif",7,7,0,0,1,"#444444",1,"#444444",1,"","",3,3,0,0,"#FFFFF7","#000000","#FFFFFF","#FFFFFF","bold 8pt 'Arial','Verdana'","bold 8pt 'Arial','Verdana'",0,0]);
stm_bp("p1",[1,4,-3,3,2,2,6,0,100,"progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.43)",-2,"",-2,67,2,3,"#999999","#FFFFFF","",3,1,1,"#ACA899"]);
stm_aix("p1i0","p0i0",[0,"Research Facilities","","",-1,-1,0,"/Science_and_Technology/facilities.html","_self","","","","",0,0,0,"","",0,0,0,0,1,"#FFFFFF",0,"#666666",0,"","",3,3,0,0,"#FFFFF7","#000000","#000000","#FFFFFF","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
stm_aix("p1i1","p1i0",[0,"Research Programs","","",-1,-1,0,"/Science_and_Technology/programs.html"]);
stm_aix("p1i2","p1i0",[0,"Research Divisions","","",-1,-1,0,"/Science_and_Technology/divisions.html","_self","","","","",6]);
stm_aix("p1i3","p1i0",[0,"Technical Services","","",-1,-1,0,"/Science_and_Technology/Technical_Services/index.html"]);
stm_aix("p1i4","p1i0",[0,"Accomplishments","","",-1,-1,0,"/Science_and_Technology/Accomplishments/index.html"]);
stm_aix("p1i5","p1i0",[0,"Theorists","","",-1,-1,0,"/Science_and_Technology/theorists.html"]);
stm_aix("p1i6","p1i0",[0,"Distinguished Fellows","","",-1,-1,0,"/Science_and_Technology/Distinguished_Fellows/index.html"]);
stm_aix("p1i7","p1i0",[0,"Emeritus Status","","",-1,-1,0,"/Science_and_Technology/Emeritus.html"]);
stm_aix("p1i8","p1i0",[0,"User Registration","","",-1,-1,0,"/Science_and_Technology/userreg.html"]);
stm_aix("p1i9","p1i0",[0,"Library Services","","",-1,-1,0,"http://www.library.anl.gov/"]);
stm_ai("p1i10",[6,1,"#000000","",-1,-1,0]);
stm_aix("p1i11","p1i0",[0,"Technology Transfer","","",-1,-1,0,"/techtransfer/index.html"]);
stm_aix("p1i12","p1i0",[0,"Research Incubator","","",-1,-1,0,"/Science_and_Technology/incubator.html"]);
stm_aix("p1i13","p1i10",[]);
stm_aix("p1i14","p1i0",[0,"Awards","","",-1,-1,0,"/Media_Center/awards.html"]);
stm_aix("p1i15","p1i0",[0,"History","","",-1,-1,0,"/Science_and_Technology/History/index.html"]);
stm_aix("p1i16","p1i10",[]);
stm_aix("p1i17","p1i0",[0,"Women in Science & Tech.","","",-1,-1,0,"http://www.wist.anl.gov/","_blank"]);
stm_aix("p1i18","p1i15",[0,"DOE Office of Science","","",-1,-1,0,"http://www.sc.doe.gov/"]);
stm_ep();
stm_ep();
stm_em();
    }
function generateCommEnvironMenu()
{
	stm_bm(["uueoehr",430,"/images/","blank.gif",0,"","",0,0,0,0,0,1,0,0,"","",0],this);
	stm_bp("p0",[0,4,0,0,3,2,0,7,100,"",-2,"",-2,90,0,0,"#000000","#444444","",3,0,0,"#000000"]);
	stm_ai("p0i0",[0,"Community/Environment","","",-1,-1,0,"/Community_and_Environment/index.html","_self","","","","",0,0,0,"arrow_w_d.gif","arrow_w_d.gif",7,7,0,0,1,"#444444",1,"#444444",1,"","",3,3,0,0,"#fffff7","#000000","#ffffff","#ffffff","bold 8pt 'Arial','Verdana'","bold 8pt 'Arial','Verdana'",0,0]);
	stm_bp("p1",[1,4,-3,3,2,2,6,0,100,"progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.43)",-2,"",-2,67,2,3,"#999999","#ffffff","",3,1,1,"#aca899"]);
	stm_aix("p1i0","p0i0",[0,"Community Programs","","",-1,-1,0,"/Community_and_Environment/index.html","_self","","","","",6,0,0,"","",0,0,0,0,1,"#ffffff",0,"#666666",0,"","",3,3,0,0,"#fffff7","#000000","#000000","#ffffff","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
	stm_aix("p1i1","p1i0",[0,"Community Round Table","","",-1,-1,0,"/Community_and_Environment/clrt.html"]);
	stm_aix("p1i2","p1i0",[0,"Community Newsletter","","",-1,-1,0,"/Community_and_Environment/Update/index.html"]);
	stm_aix("p1i3","p1i0",[0,"Speakers Bureau","","",-1,-1,0,"/Community_and_Environment/Speakers/index.html"]);
	stm_aix("p1i4","p1i0",[0,"Tours","","",-1,-1,0,"/Visiting/tours.html"]);
	stm_aix("p1i5","p1i0",[0,"Visit Argonne","","",-1,-1,0,"/Visiting/index.html"]);
	stm_ai("p1i6",[6,1,"#000000","",-1,-1,0]);
	stm_aix("p1i7","p1i0",[0,"Environmental Protection","","",-1,-1,0,"/Community_and_Environment/environment.html"]);
	stm_aix("p1i8","p1i0",[0,"Environmental Research","","",-1,-1,0,"/Community_and_Environment/envresearch.html"]);
	stm_aix("p1i9","p1i6",[]);
	stm_aix("p1i10","p1i0",[0,"About Argonne","","",-1,-1,0,"/about.html"]);
	stm_aix("p1i11","p1i0",[0,"Arts at Argonne","","",-1,-1,0,"/Community_and_Environment/index.html#arts"]);
	stm_aix("p1i12","p1i0",[0,"Combined Appeal","","",-1,-1,0,"/Community_and_Environment/aca.html"]);
	stm_ep();
	stm_ep();
	stm_em();
}
function generateMediaCenterMenu()
{
	stm_bm(["uueoehr",430,"/images/","blank.gif",0,"","",0,0,0,0,0,1,0,0,"","",0],this);
	stm_bp("p0",[0,4,0,0,3,2,0,7,100,"",-2,"",-2,90,0,0,"#000000","#444444","",3,0,0,"#000000"]);
	stm_ai("p0i0",[0,"Media Center","","",-1,-1,0,"/Media_Center/index.html","_self","","","","",0,0,0,"arrow_w_d.gif","arrow_w_d.gif",7,7,0,0,1,"#444444",1,"#444444",1,"","",3,3,0,0,"#fffff7","#000000","#ffffff","#ffffff","bold 8pt 'Arial','Verdana'","bold 8pt 'Arial','Verdana'",0,0]);
	stm_bp("p1",[1,4,-3,3,2,2,6,0,100,"progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.43)",-2,"",-2,67,2,3,"#999999","#ffffff","",3,1,1,"#aca899"]);
	stm_aix("p1i0","p0i0",[0,"Press Room","","",-1,-1,0,"/Media_Center/index.html","_self","","","","",6,0,0,"","",0,0,0,0,1,"#ffffff",0,"#666666",0,"","",3,3,0,0,"#fffff7","#000000","#000000","#ffffff","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
	stm_aix("p1i1","p1i0",[0,"News Releases","","",-1,-1,0,"/Media_Center/News/index.html"]);
	stm_aix("p1i2","p1i0",[0,"Media Contacts","","",-1,-1,0,"/Media_Center/contacts.html"]);
	stm_aix("p1i3","p1i0",[0,"Publications","","",-1,-1,0,"/Media_Center/publications.html"]);
	stm_aix("p1i4","p1i0",[0,"Image Library","","",-1,-1,0,"/Media_Center/Image_Library/index.html"]);
	stm_aix("p1i5","p1i0",[0,"Science-Writing Internship","","",-1,-1,0,"/Media_Center/Internship/index.html"]);
	stm_ai("p1i6",[6,1,"#000000","",-1,-1,0]);
	stm_aix("p1i7","p1i0",[0,"About Argonne","","",-1,-1,0,"/about.html"]);
	stm_aix("p1i8","p1i0",[0,"Awards","","",-1,-1,0,"/Media_Center/awards.html"]);
	stm_aix("p1i9","p1i0",[0,"History","","",-1,-1,0,"/Science_and_Technology/History/index.html"]);
	stm_aix("p1i10","p1i6",[]);
	stm_aix("p1i11","p1i0",[0,"EurekAlert! Reference Desk","","",-1,-1,0,"http://www.eurekalert.org/links.php","_blank"]);
	stm_aix("p1i12","p1i11",[0,"EurekAlert! Science News","","",-1,-1,0,"http://www.eurekalert.org/"]);
	stm_ep();
	stm_ep();
	stm_em();
}
function generateAdminMenu()
{
	stm_bm(["uueoehr",430,"/images/","blank.gif",0,"","",0,0,0,0,0,1,0,0,"","",0],this);
	stm_bp("p0",[0,4,0,0,3,2,0,7,100,"",-2,"",-2,90,0,0,"#000000","#444444","",3,0,0,"#000000"]);
	stm_ai("p0i0",[0,"Administration","","",-1,-1,0,"/Administration/index.html","_self","","","","",0,0,0,"arrow_w_d.gif","arrow_w_d.gif",7,7,0,0,1,"#444444",1,"#444444",1,"","",3,3,0,0,"#fffff7","#000000","#ffffff","#ffffff","bold 8pt 'Arial','Verdana'","bold 8pt 'Arial','Verdana'",0,0]);
	stm_bp("p1",[1,4,-3,3,2,2,6,0,100,"progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.43)",-2,"",-2,67,2,3,"#999999","#ffffff","",3,1,1,"#aca899"]);
	stm_aix("p1i0","p0i0",[0,"Management","","",-1,-1,0,"/Administration/index.html","_self","","","","",6,0,0,"","",0,0,0,0,1,"#ffffff",0,"#666666",0,"","",3,3,0,0,"#fffff7","#000000","#000000","#ffffff","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
	stm_aix("p1i0","p0i0",[0,"Mission","","",-1,-1,0,"/Administration/mission.html","_self","","","","",6,0,0,"","",0,0,0,0,1,"#ffffff",0,"#666666",0,"","",3,3,0,0,"#fffff7","#000000","#000000","#ffffff","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
	stm_aix("p1i1","p1i0",[0,"Board of Governors","","",-1,-1,0,"/Administration/Board_of_Governors/index.html","_self","","","","",0]);
	stm_aix("p1i2","p1i1",[0,"Executive Bios","","",-1,-1,0,"/Administration/Bios/index.html"]);
	stm_aix("p1i3","p1i0",[0,"Organizational Chart","","",-1,-1,0,"http://www.ipd.anl.gov/anl_org_chart/","_blank"]);
	stm_aix("p1i4","p1i0",[0,"Contact Us","","",-1,-1,0,"/Administration/contactus.html"]);
	stm_ep();
	stm_ep();
	stm_em();
}
function generateCareersMenu()
{
	stm_bm(["uueoehr",430,"/images/","blank.gif",0,"","",0,0,0,0,0,1,0,0,"","",0],this);
	stm_bp("p0",[0,4,0,0,3,2,0,7,100,"",-2,"",-2,90,0,0,"#000000","#444444","",3,0,0,"#000000"]);
	stm_ai("p0i0",[0,"Careers","","",-1,-1,0,"/Careers/index.html","_self","","","","",0,0,0,"arrow_w_d.gif","arrow_w_d.gif",7,7,0,0,1,"#444444",1,"#444444",1,"","",3,3,0,0,"#fffff7","#000000","#ffffff","#ffffff","bold 8pt 'Arial','Verdana'","bold 8pt 'Arial','Verdana'",0,0]);
	stm_bp("p1",[1,4,-3,3,2,2,6,0,100,"progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.43)",-2,"",-2,67,2,3,"#999999","#ffffff","",3,1,1,"#aca899"]);
	stm_aix("p1i0","p0i0",[0,"Job Openings","","",-1,-1,0,"/Careers/index.html","_self","","","","",6,0,0,"","",0,0,0,0,1,"#ffffff",0,"#666666",0,"","",3,3,0,0,"#fffff7","#000000","#000000","#ffffff","8pt 'Arial','Verdana'","8pt 'Arial','Verdana'"]);
	stm_aix("p1i1","p1i0",[0,"Human Resources","","",-1,-1,0,"/Careers/hr.html"]);
	stm_aix("p1i2","p1i0",[0,"Benefits","","",-1,-1,0,"/Careers/benefits.html"]);
	stm_aix("p1i3","p1i0",[0,"Retiree Benefits","","",-1,-1,0,"/Careers/retiree_benefits.html"]);
	stm_ai("p1i3",[6,1,"#000000","",-1,-1,0]);
	stm_aix("p1i4","p1i0",[0,"Educational Programs","","",-1,-1,0,"http://www.dep.anl.gov"]);
	stm_aix("p1i5","p1i0",[0,"Faculty Programs","","",-1,-1,0,"http://www.dep.anl.gov/p_faculty/","_blank"]);
	stm_aix("p1i6","p1i0",[0,"Post-doc Fellowships","","",-1,-1,0,"http://www.dep.anl.gov/postdocs/","_blank"]);
	stm_aix("p1i7","p1i3",[]);
	stm_aix("p1i8","p1i0",[0,"About Argonne","","",-1,-1,0,"/about.html"]);
	stm_aix("p1i9","p1i0",[0,"Women in Science &amp; Tech.","","",-1,-1,0,"http://www.wist.anl.gov/","_blank"]);
	stm_ep();
	stm_ep();
	stm_em();
}
//
// Search functions
function checkSearchForm(f)
{
	if(f.q.value != "Search Argonne ...")
	{
		return true;
	}
	else
	{
		alert("Please enter a search term.");
		f.q.focus();
	}
	return false;
}