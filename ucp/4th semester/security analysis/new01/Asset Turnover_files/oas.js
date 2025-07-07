//configuration
OAS_url = 'http://ads.investopedia.com/RealMedia/ads/';

if(typeof OAS_sitepage=="undefined" || OAS_sitepage.length == 0){
	OAS_sitepage = "investopedia.com/sitepage";
}

if(typeof OAS_listpos=="undefined" || OAS_listpos.length == 0){
	OAS_listpos = "BigBanner,x5,Block,RightMiddle,x1,TradingCenter1,TradingCenter2,LeftBottom,LeftBottom2,LeftBottom3,LeftBottom4,Loge";
}

OAS_query = '';
OAS_target = '_top';

if(typeof OAS_query_addition != 'undefined' && OAS_query_addition.length>0) {
	if(OAS_query.length>0 && OAS_query.charAt(0)=='?') OAS_query += '&'+OAS_query_addition;
	else OAS_query = '?'+OAS_query_addition;
}
//end of configuration

OAS_version = 10;
OAS_rn = '001234567890'; OAS_rns = '1234567890';
OAS_rn = new String (Math.random()); OAS_rns = OAS_rn.substring (2, 11);

OAS_version = 11;
if (navigator.userAgent.indexOf('Mozilla/3') != -1 || navigator.userAgent.indexOf('Mozilla/4.0 WebTV') != -1)
	OAS_version = 10;
if (OAS_version >= 11)
		document.write('<SCRIPT type="text/javascript" SRC="' + OAS_url + 'adstream_mjx.ads/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + OAS_query + '"><\/SCRIPT>');

function OAS_NORMAL(pos) {
	document.write('<A HREF="' + OAS_url + 'click_nx.cgi/' + OAS_sitepage + '/1' + OAS_rns + '@' + 		OAS_listpos + '!' + pos + OAS_query + '" TARGET=' + OAS_target + '>');
	document.write('<IMG SRC="' + OAS_url + 'adstream_nx.cgi/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + OAS_query + '" BORDER=0></A>');
}

function OAS_RICH(pos) {
	document.write('<A HREF="' + OAS_url + 'click_nx.cgi/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + OAS_query + '" TARGET=' + OAS_target + '>');
	document.write('<IMG SRC="' + OAS_url + 'adstream_nx.cgi/' + OAS_sitepage + '/1' + OAS_rns + '@' + OAS_listpos + '!' + pos + OAS_query + '" BORDER=0></A>');
}

function OAS_AD(pos) {
if (OAS_version >= 11)
	OAS_RICH(pos);
else
	OAS_NORMAL(pos);
}
