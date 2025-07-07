if(!document.itxtInProg){
document.itxtInProg=1;var bvie=navigator.appVersion.indexOf('MSIE')>=0&&navigator.appVersion.indexOf('Opera')<0,gIAS='';
function itxtLES(u){var e=document.createElement('script');e.src=u;e.type='text/javascript';var b=document.getElementsByTagName('body')[0];b.insertBefore(e, b.firstChild);}
function gIT(o){if(o.nodeType==3)return o.nodeValue;if(o.tagName&&('script'==o.tagName.toLowerCase()))return '';var t='';var cn=o.childNodes;for(var i=0;i<cn.length;i++)t+=gIT(cn[i]);return t;}
function itxtsW(x){var r=x;var v=/\s/g;if(x.search(v)!=-1)r=x.replace(v, '');return r;}
function itxtbtl(){if(document.body.innerText!=undefined)return itxtsW(document.body.innerText).length;return gIT(document.body).length;}
function itxtGCE(){var e='';try{var ms=document.getElementsByTagName('META');for(var i=0;i<ms.length;i++){var m=ms[i];if(m.content){var c=m.content.toLowerCase(),o=c.indexOf('charset=');if(o>=0){var re=/([\w\-]+)/,s=re.exec(c.substring(o+8));if(s)e=s[0];}}}}catch(x){}return e;}
function itxtDSB(u){try{if(navigator.appVersion.indexOf('MSIE')>=0 && ('complete'!=document.readyState)){document.write('<s'+'cript language="javascript" src="'+u+'"></s'+'cript>');}else itxtLES(u);}catch(e){}};
var itxturl='http://physorg.us.intellitxt.com/v3/door.jsp?ts='+(new Date()).getTime()+'&pagecl='+itxtbtl()+'&enc='+itxtGCE()+'&ipid=7576&refurl='+document.location.href.replace(/\&/g,'%26').replace(/\'/g, '%27').replace(/\"/g, '%22').replace(/\#(.)*/,'');
try{
var a=document.referrer;
if (a.match(/http:\/\/(www\.)?google\.co(m|\.\w\w)\/search\?/i))
{
var b=/(\?|&)(as_)?q=/gi,
c=b.exec(a);
if(null!=c)
{
var e=/([^&])+/gi,
f=e.exec(a.substring(c.index+c[0].length));
if(null!=f)
itxturl+='&gst='+f[0];
}
}}catch(e){}
itxtDSB(itxturl);
}
