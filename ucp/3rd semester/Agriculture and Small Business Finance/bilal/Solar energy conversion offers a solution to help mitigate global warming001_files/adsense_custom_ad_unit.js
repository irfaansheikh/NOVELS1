function winstat(w) {window.status = w; return true;}
function clearstat(){window.status='';}

function CheckRef(){
  
  var ref = document.referrer.toLowerCase();

  if (!ref) {    return false;  }
  try
   {
  
      if (ref.indexOf('news.google.') > 0)  { return false; }
	 
	  if (ref.indexOf('google.') > 0)  { return true; }
      if (ref.indexOf('yahoo.') > 0) {return true; }
      if (ref.indexOf('search.msn.') > 0) {return true; }
	  if (ref.indexOf('askjeeves.') > 0) {return true; }
	  if (ref.indexOf('aol.') > 0) {return true; }

   }
   catch(ex) {};
  
   return false;
 
}


function google_ad_request_done(google_ads) {  

	var first_ad_unit = '', second_ad_unit = '', goog_url = '', goog_ad ='';

	// default for second unit OA img tag	
	var defSec =  '<iframe id="a91d7e10" name="a91d7e10" src="http://adms.physorg.com/openads/www/delivery/afr.php?resize=1&amp;zoneid=13" framespacing="0" frameborder="no" scrolling="no" width="300" height="250" allowtransparency="true"><a href="http://adms.physorg.com/openads/www/delivery/ck.php?n=a66b3c77" target="_blank"><img src="http://adms.physorg.com/openads/www/delivery/avw.php?zoneid=13&amp;n=a66b3c77" border="0" alt="" /></a></iframe>';	 

	// deafult for GS				
	var defGS = new Array(4);
	defGS[0] =  '<div class="defBOX">'+
				'<a href="http://physorg.tradepub.com/?pt=cat&page=_INTL"><h1>FREE Magazine Subscriptions</h1> <br />' +
				'<span>No hidden or trial offers, and no purchase necessary. Publications are absolutely free to those who qualify</span> ' +
				'</a>' +
				'</div>';	 
				
	defGS[1] =  '<div class="defBOX">'+
				'<a href="http://jobs.physorg.com"><h1>Career Center</h1> <br />' +
				'<span>Designed to simplify your employment search, you will find a variety of resourceful career tools at your fingertips</span> ' +
				'</a>' +
				'</div>';

	defGS[2] =  '<div class="defBOX">'+
				'<a href="https://adwords.google.com/select/OnsiteSignupLandingPage?client=ca-pub-0536483524803400&referringUrl=http://www.physorg.com"><h1>Advertise on this site</h1> <br />' +
				'<span>Your banner or text ad could be here <br /> Learn more ...</span> ' +
				'</a>' +
				'</div>';
	
	defGS[3] =  '<div class="defBOX">'+
				'<a href="http://physorg-whitepapers.tradepub.com/?pt=cat&page=_INTL&flt=wpr"><h1>Free White Paper</h1> <br />' +
				'<span>Free Information Technology white papers, downloads and podcasts </span> ' +
				'</a>' +
				'</div>';

	
	// 'Ads by google'			
		goog_url = '<p style="margin: 4px 0px 6px 5px; padding: 0px; color: GRAY; font-size: 0.9em;" align="left">'; 
		goog_url +='Sponsored Links&nbsp';
		if (google_info.feedback_url) {
		goog_url += '<a href=\"' + google_info.feedback_url + 
					'\">(Ads by Google)</a>';
					} else {
					 goog_url += '(Ads by Google)';
					}
		goog_url += '</p>';



	if (google_ads.length > 0) {
				if (google_ads[0].type == "flash") {
							second_ad_unit += '<a href=\"' + google_info.feedback_url + '\" style="color:000000">Ads by Google</a><br>' + 
							'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' +
							' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"' +
							' WIDTH="' + google_ad.image_width +
							'" HEIGHT="' + google_ad.image_height + '">' +
							'<PARAM NAME="movie" VALUE="' + google_ad.image_url + '">'
							'<PARAM NAME="quality" VALUE="high">'
							'<PARAM NAME="AllowScriptAccess" VALUE="never">'
							'<EMBED src="' + google_ad.image_url +
							'" WIDTH="' + google_ad.image_width +
							'" HEIGHT="' + google_ad.image_height + 
							'" TYPE="application/x-shockwave-flash"' + 
							' AllowScriptAccess="never" ' + 
							' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';
							}
				 else if (google_ads[0].type == "image") {
						  second_ad_unit += '<a href="' + google_ads[0].url +
						  '" target="_top" title="go to ' + google_ads[0].visible_url +
						  '"><img border="0" src="' + google_ads[0].image_url +
						  '"width="' + google_ads[0].image_width +
						  '"height="' + google_ads[0].image_height + '"></a>';
			    }
				else { 
				 
				 			if (google_ads.length == 1)
				 			{
							  
														  first_ad_unit += '<p style="margin: 4px 4px 2px 10px; font-weight: bold; font-size: 1.4em;">' +
														  '<a href="' +  google_ads[0].url + '" onMouseOver="return winstat(\'go to ' + google_ads[0].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[0].line1 + "</a> " + ' - ' +
														  '<a href="' +  google_ads[0].url + '" style="text-decoration: none; font-weight: normal; color: BLACK;" onMouseOver="return winstat(\'go to ' + google_ads[0].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[0].line2 + ' ' + google_ads[0].line3 +  	 
														  '</a> <br />'+
														  '<a href="' +  google_ads[0].url + '" style="text-decoration: none; font-weight: normal; color: GRAY;" onMouseOver="return winstat(\'go to ' + google_ads[0].visible_url +' \');" onMouseOut="clearstat();" >' +										  
														  google_ads[0].visible_url +  '</a>' +
														  '</p>';		
							} // google_ads.length == 1				 				
			
							// more than 1 ad 
							else for(var i = 0; i < google_ads.length; ++i) { 
									if 	(google_ads[i].type == "text") {
								
												if (i<3) {
														   first_ad_unit += '<p style="margin: 4px 4px 2px 10px; font-weight: bold; ">' +
														  '<a href="' +  google_ads[i].url + '" onMouseOver="return winstat(\'go to ' + google_ads[i].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[i].line1 + "</a> " + ' - ' +
														  '<a href="' +  google_ads[i].url + '" style="text-decoration: none; font-weight: normal; color: BLACK;" onMouseOver="return winstat(\'go to ' + google_ads[i].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[i].line2 + ' ' + google_ads[i].line3 +  	 
														  '</a> <br />'+
														  '<a href="' +  google_ads[i].url + '" style="text-decoration: none; font-weight: normal; color: GRAY;" onMouseOver="return winstat(\'go to ' + google_ads[i].visible_url +' \');" onMouseOut="clearstat();" >' +										  
														  google_ads[i].visible_url +  '</a>' +
														  '</p>';									
												}	 
												if (i > 2 && i<6){
														  second_ad_unit += '<p style="margin: 4px 4px 2px 10px; font-weight: bold; ">' +
														  '<a href="' +  google_ads[i].url + '" onMouseOver="return winstat(\'go to ' + google_ads[i].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[i].line1 + "</a>  <br>" +
														  '<a href="' +  google_ads[i].url + '" style="text-decoration: none; font-weight: normal; color: BLACK;" onMouseOver="return winstat(\'go to ' + google_ads[i].visible_url +' \');" onMouseOut="clearstat();" >' +
														  google_ads[i].line2 + ' ' + google_ads[i].line3 + 	 
														  '<br />' +  
														  '<span style="text-decoration: none; font-weight: normal; color: GRAY;">' +										    
														  google_ads[i].visible_url +
														  '</span></a>'+
														  '</p>';								
												
												}
												
								} // if text
					    } // end else FOR cycle
		} //end else 


	} // google_ads.length > 0 			
				
	


	// FILL DEFAULTS
		if (first_ad_unit == ''){
		first_ad_unit +=	'<a href="http://physorg.tradepub.com/?pt=cat&page=_INTL">'+
							'<img src="banner/lifesci468x60.gif" border="0" width="468" height="60" alt=""></a>';
	}
	else  first_ad_unit = goog_url +  	first_ad_unit;
	
	if ( second_ad_unit == '' ) second_ad_unit +=	defSec;
	else  second_ad_unit = goog_url +  second_ad_unit;


	// PLACE ADS
	// 1st box
	if (CheckRef())	document.getElementById("top_ad_unit").innerHTML += first_ad_unit + '<br>';
	else document.getElementById("first_ad_unit").innerHTML += first_ad_unit;

	//2nd box
	if (document.getElementById('second_ad_unit') != null) {	
			document.getElementById('second_ad_unit').innerHTML = second_ad_unit;	
			var randNo = Math.random()*4;	
			randNo = Math.floor(randNo);
			if (document.getElementById('GS_goog_def') != null)	document.getElementById('GS_goog_def').innerHTML = defGS[randNo];
	}
	// GS default
	else if (document.getElementById('GS_goog_def') != null)	document.getElementById('GS_goog_def').innerHTML = second_ad_unit;


}