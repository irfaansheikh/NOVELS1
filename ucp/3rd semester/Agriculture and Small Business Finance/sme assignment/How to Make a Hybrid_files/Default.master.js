$(document).ready(function () {
    
    //FIX for IE button flicker
    try {
        document.execCommand("BackgroundImageCache", false, true);
    } catch(err) {}    
    
    rewriteLinks();    
    enableMainMenuDropDown();
        
        
        
});



function enableMainMenuDropDown()
{
    $("#topnav li").hover(
        function (){$("ul",this).fadeIn("normal");},
        function() {}
    );
    
    if (document.all) {
		$("#topnav li").hoverClass ("nav-hover");
	}
    
}

$.fn.hoverClass = function(c) {
    return this.each(function(){
		$(this).hover( 
			function() { $(this).addClass(c);  },
			function() { $(this).removeClass(c); }
		);
	});
};	



function rewriteLinks () {
   
   domain = document.URL.match( /:\/\/(www\.)?([^\/:]+)/ );
   domain = domain[2]?domain[2]:'';
   for (var i=0; i<=(document.links.length-1); i++) {
      url = document.links[i].href;
      if (!url.match('javascript') && !url.match('clickflow') && url != '#') {
         if (url.match(domain)) {
            if (document.links[i].target != '_blank')
                document.links[i].target = '_self';
         }
         else {
            document.links[i].onclick = function() {var target = (this.target == "_blank")? "_blank" : "_self"; if (typeof dcsMultiTrack == "function") {dcsMultiTrack('DCS.dcsuri',escape(this.href),'WT.ti','External Link'); window.open(this.href,target); return false;}}
         }
      }
   }
}



function videoPopUp(URL,description)
{
    dcsMultiTrack('DCS.dcsuri',URL,'WT.ti',description);        
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=0,width=480,height=360,left = 0,top = 0');");
}


function genericPopUp(URL,description,width,height)
{
    dcsMultiTrack('DCS.dcsuri',URL,'WT.ti',description);        
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=0,width='"+width+"',height='"+height+"',left = 0,top = 0');");
}

function fungicideFlashPopUp(URL,description)
{
    dcsMultiTrack('DCS.dcsuri',URL,'WT.ti',description);        
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=0,width=792,height=612,left = 0,top = 0');");
}

function videoPopUpRaxil(URL,description)
{
    dcsMultiTrack('DCS.dcsuri',URL,'WT.ti',description);        
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=0,width=475,height=308,left = 0,top = 0');");
}


//url=url of window to open
//windowName=name to give window
//width=pixels
//height=pixels
//toolbar=[yes|no]
//location=[yes|no]
//directories=[yes|no]
//status=[yes|no]
//menubar=[yes|no]
//scrollbars=[yes|no]
//resizable=[auto|yes|no]

function newWindow(url, windowName, width, height, toolbar, location, status, menubar, scrollbars, resizable) {
    //set the defaults for the params
    if(!windowName) windowName = "popup";
    if(!width) width = "400";
    if(!height) height = "300";
    if(!toolbar) toolbar = "no";
    if(!location) location = "no";
    if(!status) status = "no";
    if(!menubar) menubar = "no";
    if(!scrollbars) scrollbars = "no";
    if(!resizable) resizable = "no";

    var windowProperties = 'height='+height+',width='+width+',toolbar='+toolbar+',location='+location+',status='+status+',menubar='+menubar+',scrollbars='+scrollbars+',resizable='+resizable;
    win = window.open(url, windowName, windowProperties);
}
