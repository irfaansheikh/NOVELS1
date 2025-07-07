var DL_MN;
{ var pfs={
"http://www.allbusiness.com/business-guides-forms-kits/business/3472255-1.html" : { "nid" : 5243 , "tr" : 1 },
"http://www.allbusiness.com/2984639-1.html" : { "nid" : 5203 , "tr" : 1 },
"http://www.allbusiness.com/2984945-1.html" : { "nid" : 5241 , "tr" : 1 },
"http://www.allbusiness.com/3470951-1.html" : { "nid" : 5202 , "tr" : 1 },
"http://www.allbusiness.com/3471137-1.html" : { "nid" : 5242 , "tr" : 1 },
"http://www.allbusiness.com/2984958-1.html" : { "nid" : 5244 , "tr" : 1 },
"http://www.allbusiness.com/3470973-1.html" : { "nid" : 5245 , "tr" : 1 },
"http://www.allbusiness.com/" : { "nid" : 13147 , "tr" : 1 }
  },d=document,w=window,u=(w.gm_fake_href)?w.gm_fake_href:w.location.href;

  function z(n){
	if (Math.random()>=pfs[n]['tr']) return;

	var z=d.createElement('SCRIPT');
	z.src='http://content.dl-rms.com/dt/s/'+pfs[n]['nid']+'/s.js';
	z.type='text/javascript';
	d.getElementsByTagName('head')[0].appendChild(z);
  }
  function r(){
	var n="";

	while (1) {try {
	for (p in pfs)
	  if (u.substring(0,p.length)==p && p.length > n.length) 
		n=p;

	if (n.length > 0) {z(n);return;}
	} catch (e) {}
	if (w==top) break;

	if (w==window&&u!=document.referrer)u=document.referrer;
	else w=w.parent;
	}

  }

  if (d.readyState=="complete"){
	r();
  } else if (w.addEventListener){ 
	w.addEventListener("load", r, false);
  } else if (w.attachEvent){ 
	w.attachEvent("onload", r);
  }
}