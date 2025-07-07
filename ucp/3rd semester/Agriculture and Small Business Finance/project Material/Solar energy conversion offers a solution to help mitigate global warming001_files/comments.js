var fltthres = 2.5;

function UpdateFilter(val){
   fltthres = val;
   if (fltthres > 0 ) {
		   		document.getElementById('SliderFilter').innerHTML =	': ' + val;
				document.SliderForm.FilterDisable.disabled = false;
		}
	else {
   		document.getElementById('SliderFilter').innerHTML =	': Off';
		document.SliderForm.FilterDisable.disabled = true;
  }

   DisplayComments();

 } 
 
 
function DisplayComments(){
   
    makeHttpRequest('/comments/addXMLcomment.php?newsid='+nid, ListComments);
    PostBox(nid);
		
}

function ListComments(){
	if ( xmlDoc.readyState != 4 ) return ;
	var response  = xmlDoc.responseXML;
	
	// nothing to display
	total = response.getElementsByTagName('total')[0].firstChild.data;
	if (total == 0 ) return;

  	//display comments
	var comments = response.getElementsByTagName('comment'); 
	var commentsHTML = '';
	for(var s = 0; s < comments.length; s++) {
			
			var subNode = comments[s];
			var cid = subNode.getElementsByTagName("cid")[0].firstChild.data;

			var cmmid = subNode.getElementsByTagName("mid")[0].firstChild.data;
			var author = subNode.getElementsByTagName("author")[0].firstChild.data;
			var date = subNode.getElementsByTagName("date")[0].firstChild.data;
			var status = subNode.getElementsByTagName("status")[0].firstChild.data;
			var vote =  subNode.getElementsByTagName("vote")[0].firstChild.data;

			var rank =  subNode.getElementsByTagName("rank")[0].firstChild.data;
			var votes =  subNode.getElementsByTagName("votes")[0].firstChild.data;
									
			var txt = subNode.getElementsByTagName("text")[0].firstChild.data;

			commentsHTML +=	'<div class="comments">';

				if ( rank >= fltthres || rank == 0 ) commentsHTML +=	'<div class="ptauth">';
				else  commentsHTML +=	'<div class="ptauth_hidden">';

		 	    commentsHTML += '<div class="cmflag"><a onClick="FlagComment(' + cid +');" href="#javascript">Flag</a>';
				if ( mid != '0' && (rank >= fltthres || rank == 0) )	commentsHTML += ' | <a href="javascript:QuoteComment(' + cid + ');">Quote</a>'; 	 		
				commentsHTML += '</div>';			

				commentsHTML +=	'Posted by <a href="/profile/user/'+ author +'">'+ author + '</a> ' + date ;
				if ( status == 1 ){

					commentsHTML +=	' [<a href="#javascript" onClick="GetComment(' + cid +')">edit</a>]';

					}

					 commentsHTML +=	'<div class="cmrank" id="rk' + cid +'">';
						if (rank > 0 ) commentsHTML +=	FormatRank(rank, votes);
						else  commentsHTML +=	'Not rated yet.';
					 commentsHTML +=	'</div>';
				
				commentsHTML +=	'</div>';
				
				if ( rank >= fltthres || rank == 0){
					 	commentsHTML +=	'<div class="ptpost" id="cm' + cid + '">';
						commentsHTML +=	txt;
						commentsHTML +=	'</div>';
			

						if ( vote == 1 ) {
							commentsHTML +=	'<div class="votes" id="rkvt' + cid + '">';
								commentsHTML +=	'Do you find this comment valuable: not at all - ';					
								commentsHTML +=	'<a href="javascript:RateComment(' + cid +', 1)">1</a>';
								commentsHTML +=	'<a href="javascript:RateComment(' + cid +', 2)">2</a>';
								commentsHTML +=	'<a href="javascript:RateComment(' + cid +', 3)">3</a>';
								commentsHTML +=	'<a href="javascript:RateComment(' + cid +', 4)">4</a>';
								commentsHTML +=	'<a href="javascript:RateComment(' + cid +', 5)">5</a>';	   
								commentsHTML +=	' - highly ';
							commentsHTML +=	'</div>';
							}  
	
				}
				
				
				commentsHTML +=	'</div>';
	}
	
	document.getElementById('comments').innerHTML = commentsHTML;

}


function PostBox(nid){
	pstbx = '<form name="commadd" method = "POST" action="/comments/addXMLcomment.php">' +
			'<div class="comments">' +
			'<div class="ptauth" id="addtitle">New comment:</div>' +
			'<textarea id="input-comment" name="commenttext" cols="49" rows="5"></textarea>' +
			'<input type="hidden" name="status" value="new" /> ' +
			'<input type="hidden" name="cid" value="0" />' +
			'<input type="hidden" name="nid" value="0" /> <br />' +
			'<input type="button" id="comment-submit" name="commentsubmit" value="Add Comment" onClick="AddComment();" /> ' +	
			'<input type="button" value="Cancel" onClick="CommentReset();"> ' + 
			'<a href="javascript:FstSignOut();" >Sign Out</a>' +	
			'<ul><li><b>Edit:</b> Your comment will be editable for 3 minutes.</li> <li><b>HTML tags:</b> HTML tags are not allowed.</li> <li><b>Links:</b> Text links will be converted automatically. </li> </ul>' +
			'</div>' +
			'</form>';
	lgbox = '<div id="fstlog">' +
				'<div id="regrequest">Please <a href="/profile/signup.php">register</a> or <a href="/profile/?redirect=TRUE">sign in</a> to add a comment. </div> ' +
				'Registration is free, and takes less than a minute. <a href="/profile/help.php">Read more</a>' +
				'<form name="fstlogin" id="fstlogin" method = "POST" action="/comments/XMLlogin.php">' +
				'Email: <input type="text" name="email" id="email" size="10" maxlength="128">&nbsp;&nbsp;' +
				'Password: <input type="password" name="passwd" id="passwd" size="10" maxlength="128">&nbsp;&nbsp;' +	
				'<input type="hidden" name="status" value="login" /> ' +
				'<input type="button" id="login-submit" name="loginsubmit" value="Sign in" onClick="SignIn();" /> ' +		
				'</form>' +		
				'Forgot your password? <a href="http://www.physorg.com/profile/pwdreset.php">Click here</a> to reset it' +
			'</div> ';
	
	if (mid != '0') {
			document.getElementById('postbox').innerHTML =	pstbx;
			document.commadd.nid.value = nid;
	}
	else {
		document.getElementById('postbox').innerHTML =	lgbox;
	}

}


function MakePostRequest(url, strDATA, handler) {
        if (typeof window.ActiveXObject != 'undefined' ) {
          xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
          xmlDoc.onreadystatechange = handler ;
        }
        else {
          xmlDoc = new XMLHttpRequest();
          xmlDoc.onload = handler;
        }
       
	    xmlDoc.open('POST', url, true); 
		xmlDoc.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlDoc.setRequestHeader("Content-length", strDATA.length);
		xmlDoc.setRequestHeader("Connection", "close");

        xmlDoc.send(strDATA);

      }

// comment handling

function AddComment(){
		var cmnt = document.commadd.commenttext.value;
		var nid = document.commadd.nid.value;
		var cid = document.commadd.cid.value;
		var status = document.commadd.status.value;	  
		
		if ( cmnt.length == 0 ){ alert('Please enter your comment!'); return }
		var queryString = 'commenttext=' + escape(cmnt) + '&nid=' + nid + '&status=' + status +'&cid=' + cid;
		document.commadd.commentsubmit.disabled = true;
		MakePostRequest('./comments/addXMLcomment.php', queryString, CheckAdd);

}


function CheckAdd(){
	if ( xmlDoc.readyState != 4 ) return ;
	response  = xmlDoc.responseXML.documentElement;
	
	if (response.getElementsByTagName('msg')[0].firstChild != null) {
		   alert(response.getElementsByTagName('msg')[0].firstChild.data);
	}

	DisplayComments();
}
   

// comment editing
function GetComment(cid){
	makeHttpRequest('/comments/GetXMLcomment.php?cid='+cid, EditComment);
   	document.getElementById('addtitle').innerHTML = 'Edit comment';
    document.commadd.status.value ='edit';
    document.commadd.cid.value = cid;
	document.commadd.commentsubmit.value='Edit';

}

function EditComment(){
	if ( xmlDoc.readyState != 4 ) return ;
	response  = xmlDoc.responseXML.documentElement;
	
	if (response.getElementsByTagName('msg')[0].firstChild != null) {
		   alert(response.getElementsByTagName('msg')[0].firstChild.data);
		   return ;
	}
	

 	var commentTEXT = response.getElementsByTagName('comment')[0].firstChild.data; 
	document.commadd.commenttext.value = commentTEXT;
	
}

function CommentReset(cid){
   	document.getElementById('addtitle').innerHTML = 'New comment';	
	document.commadd.commenttext.value = ''; 
    document.commadd.status.value ='New';
    document.commadd.cid.value = '0';
	document.commadd.commentsubmit.value='Add Comment';	
	document.commadd.reset;

}

//comment quoting
function QuoteComment(cid){
	makeHttpRequest('/comments/GetXMLcomment.php?cid='+cid, InsertQuote);
}
 
function InsertQuote(){
	if ( xmlDoc.readyState != 4 ) return ;
	response  = xmlDoc.responseXML.documentElement;
	
 	var commentQUOTE = '[q]' + response.getElementsByTagName('comment')[0].firstChild.data + '[/q]'; 
	document.commadd.commenttext.value = commentQUOTE + document.commadd.commenttext.value;
	
}



// Rank handling 
 
function RateComment(cid, rank){
	makeHttpRequest('/comments/RateComment.php?cid='+cid+'&rank='+rank, DisplayRank);
	document.getElementById('rk' + cid).innerHTML = 'Re-calculating ..'; 
	hideVoting('rkvt' + cid); 	
}  

function  DisplayRank(){

	if ( xmlDoc.readyState != 4 ) return ;

	response  = xmlDoc.responseXML.documentElement;			 
	if (response.getElementsByTagName('msg')[0].firstChild != null) {
		   alert(response.getElementsByTagName('msg')[0].firstChild.data);
		   return;
	}

	var cid =  response.getElementsByTagName('cid')[0].firstChild.data;
	var rank=  response.getElementsByTagName('rank')[0].firstChild.data;	
	var votes=  response.getElementsByTagName('votes')[0].firstChild.data;	
	document.getElementById('rk' + cid).innerHTML = 'Thank you! ' + FormatRank(rank, votes); 
	
	
}

// fstlog
function SignIn(){
		var email = document.fstlogin.email.value;
		var passwd = document.fstlogin.passwd.value;

		if ( email.length == 0 ){ alert('Please enter your email!'); return }
		if ( passwd.length == 0 ){ alert('Please enter your password!'); return }		

		var queryString = 'email=' + escape(email) + '&passwd=' + passwd + '&status=login';
		MakePostRequest('./comments/XMLlogin.php', queryString, SignInCheck);
}

function  SignInCheck(){
	if ( xmlDoc.readyState != 4 ) return ;
	response  = xmlDoc.responseXML.documentElement;		
	
	if (response.getElementsByTagName('msg')[0].firstChild != null) {
		   alert(response.getElementsByTagName('msg')[0].firstChild.data);
		   return;
	}						  
	if (response.getElementsByTagName('mid')[0].firstChild != null) {
		 mid = 	 response.getElementsByTagName('mid')[0].firstChild.data;
	}	

	DisplayComments();						  
	PostBox(nid);

}

function FstSignOut() {
		mid = '0';
		var queryString = 'status=signout';
		MakePostRequest('./comments/XMLlogin.php', queryString, SignInCheck); 

}

// flag comment
function FlagComment(cid){
  if (confirm("Report this comment as spam, offensive or inappropriate?")) {
 				queryString = 'status=flag&nid=' + nid +'&cid=' + cid;
			    MakePostRequest('./comments/XMLflag.php', queryString, DisplayMessage);
				   
			    } 
}

//display flag output
function DisplayMessage(){
	
	if ( xmlDoc.readyState != 4 ) return ;

	response  = xmlDoc.responseXML.documentElement;			 
	if (response.getElementsByTagName('msg')[0].firstChild != null) {
		   alert(response.getElementsByTagName('msg')[0].firstChild.data);
		   return;
	}
}


// supplemental

function FormatRank(rank, votes){
	if ( votes > 1 ) return 'Rank: <span class="inxrank">' + rank + '/5</span> after <span class="inxrank">' + votes + '</span> votes';
	else return 'Rank: <span class="inxrank">' + rank + '/5</span> after <span class="inxrank">' + votes + '</span> vote';
}

function hideVoting(divID) { 
	if (document.getElementById) { 
		document.getElementById(divID).style.visibility = 'hidden'; 
		} 
		else { 
		if (document.layers) { // Netscape 4 
		document.divID.visibility = 'hidden'; 
		} 
		else { // IE 4 
		document.all.divID.style.visibility = 'hidden'; 
		} 
	} 
} 
