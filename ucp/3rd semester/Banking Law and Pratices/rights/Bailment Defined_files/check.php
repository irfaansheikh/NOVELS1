var vc_aidA = '1718';
var vc_host = 'feed.validclick.com';
var vc_imBase=unescape('%68%74%74%70%3A%2F%2F')+vc_host+unescape('%2F%61%64%5F%6C%6F%67%2E%70%68%70');
var vc_ref=unescape("%75%52");var vc_lo=unescape("%75%4C");var vc_lt="";var vc_alCim=
new Image();var vc_lVal=unescape("%4C%46%50%76%41%66%66%56%43");var vc_calledHome=
new Array();var vc_empImg=new Image();var vc_empBase=unescape('%68%74%74%70%3A%2F%2F')+
vc_host+unescape('%2F%69%6D%70%6C%6F%67%2E%70%68%70');if(typeof(vc_empA)==unescape("%75%6E%64%65%66%69%6E%65%64"))
{vc_empA=new Array();}var ns4=(document.layers)?1:0;var ie4=(document.all)?1:0;var ns6=
(document.getElementById&&!document.all)?1:0;function winWid(){return(ns4||ns6)?window.
innerWidth:document.body.clientWidth;}function winHei(){return(ns4||ns6)?window.innerHeight:
document.body.clientHeight;}function alC(){var newcall=true;for(i=0;i<vc_calledHome.
length;i++){if(vc_calledHome[i]==vc_lt){newcall=false;break;}}if(newcall){var displaywitdh=
winWid();var displayheight=winHei();vc_calledHome[vc_calledHome.length]=vc_lt;vc_alCim.
src=vc_imBase+unescape('%3F')+vc_lt+unescape('%26%52%3D')+vc_ref+unescape('%26%4C%3D')+
vc_lo+unescape('%26%4B%3D')+unescape('%26%57%3D')+displaywitdh+unescape('%26%48%3D')+
displayheight;}return true;}function dV(){var pairs=new Array();var parts=url_To_Vars(
this.href);var tag=(parts[unescape('%69%64')])?parts[unescape('%69%64')]:'';var sitehost=
(parts[unescape('%73%69%74%65%68%6F%73%74')])?parts[unescape('%73%69%74%65%68%6F%73%74')]
:'';var affid=(parts[unescape('%61%66%66%49%44')])?parts[unescape('%61%66%66%49%44')]
:'';parts[unescape('%55')]=(parts[unescape('%6B%65%79')])?parts[unescape('%6B%65%79')]
:'';parts[unescape('%74%69%64')]=tag+unescape('%56');for(var item in parts){var value=
parts[item];var key=item;if(typeof(value)!=unescape('%66%75%6E%63%74%69%6F%6E')){
pairs[pairs.length]=key+unescape('%3D')+value;}}vc_lt=pairs.join(unescape('%26'))
;alC();window.status=sitehost;return true;}function dI(){vc_lt="";window.status="";
return true;}function lI(){var hit=false;for(var i=0;i<vc_empA.length;i++){if(vc_empA[
i]==vc_aidA){hit=true;}}if(!hit){vc_empImg.src=vc_empBase+unescape('%3F%61%66%66%69%64%3D')+
vc_aidA;}vc_empA[vc_empA.length]=(vc_aidA);return true;}function initLinks(){var fp_elements=
Array();fp_elements=document.links;if(fp_elements.length!=0){for(var i=0;i<fp_elements.
length;i++){var parts=url_To_Vars(fp_elements[i].href);if(parts[unescape('%69%64')]
){if((parts[unescape('%69%64')].match(vc_lVal)!=null)){fp_elements[i].onmouseover=
dV;fp_elements[i].onmouseout=dI;}}}}vc_ref=document.referrer;vc_ref=escape(vc_ref)
;vc_lo=window.location.href;vc_lo=escape(vc_lo);lI();return true;}function url_To_Vars(
uri){var key_value=new Array();var query_str=/\?.+/.exec(uri);var query=query_str?
(query_str[0].substring(1).split(unescape('%26'))):[];var url_length=query.length;
for(var i=0;i<url_length;i++){var name_value_pair=query[i].split(unescape('%3D'))
;key_value[name_value_pair[0]]=unescape(name_value_pair[1]);}return key_value;}initLinks(
);
