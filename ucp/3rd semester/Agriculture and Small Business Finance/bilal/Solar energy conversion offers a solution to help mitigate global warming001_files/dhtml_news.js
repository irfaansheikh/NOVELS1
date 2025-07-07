
 
function makeHttpRequest(url, handler) {
        if (typeof window.ActiveXObject != 'undefined' ) {
          xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
          xmlDoc.onreadystatechange = handler ;
        }
        else {
          xmlDoc = new XMLHttpRequest();
          xmlDoc.onload = handler;
        }
        xmlDoc.open( "GET", url, true );
        xmlDoc.send( null );
      }
	  
// voting on news page
function rateit(newsid, rank){
    var req = './dhtml/vote.php?submit=true&newsid='+newsid+'&rank='+rank;
	makeHttpRequest(req, updatevotes);
	document.getElementById('votes').innerHTML = '<span id=\"voted\">Processing ...</span>';
}

function updatevotes(){
  var rank, votes;
  if ( xmlDoc.readyState != 4 ) return ;
  response  = xmlDoc.responseXML.documentElement;
  if (response.getElementsByTagName('code')[0].firstChild.data == 200 )
  	{
		rank = response.getElementsByTagName('rank')[0].firstChild.data;
		votes = response.getElementsByTagName('votes')[0].firstChild.data;
		document.getElementById('rating').innerHTML = "<b>" + rank +"</b> out of 5 after "+ votes + " total votes";
		document.getElementById('votes').innerHTML = "<span id=\"voted\">Thank you! You have voted.</span>";
	}
  else document.getElementById('votes').innerHTML = "<span id=\"voted\">Sorry, you vote can't be processed.</span>";
  
  return;
}

function tabshow(n) {
	for (i=1;i<4;i++) {
	  document.getElementById('boxtab-'+i).className="";
	}

	document.getElementById('boxtab-'+n).className="active";
	makeHttpRequest('./dhtml/navtabs.php?code='+n, display);
}

function display()
{
	 if ( xmlDoc.readyState != 4 ) return ;
 	document.getElementById('tabcontent-1').innerHTML = xmlDoc.responseText ;
}
		 

//show pop-up
function poptastic(id)
	{
		window.open('blogit.php?newsid='+id,'BlogIt','scrollbars=no,menubar=no,toolbar=no,location=no,status=no,height=450,width=450,resizable=yes');
	}


function changeFont(intFontSize)
	{		
	var min=10;
	var max=18;

	var curvalue = document.getElementById('Preview').style.fontSize;
	var cursize = parseInt(curvalue.replace("px",""));
	if ( !cursize) cursize = 12;

	switch (intFontSize)
		{
		case 1:
			if(cursize!=min) cursize -=2;
			break
		case 2:
			break
		case 3: 
			if(cursize!=max) cursize +=2;
			break
		}
	document.getElementById('Preview').style.fontSize =  cursize+'px';
	document.getElementById('maintxt').style.fontSize =  cursize+'px';
	}	

// popup voting
function FstVotes(ip, newsid){
	if (ip > 0) return true;

	window.open('fstvote.php?newsid='+newsid,'FstVote','scrollbars=no,menubar=no,toolbar=no,location=no,status=no,height=150,width=450,resizable=yes');
	return true;


}

