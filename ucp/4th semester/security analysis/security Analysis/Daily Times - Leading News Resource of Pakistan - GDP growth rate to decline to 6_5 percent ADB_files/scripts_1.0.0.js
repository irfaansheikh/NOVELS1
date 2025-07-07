function echeck(str) {
		var at="@"
		var dot="."
		var lat=str.indexOf(at)
		var lstr=str.length
		var ldot=str.indexOf(dot)
		if (str.indexOf(at)==-1){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
		   alert("Invalid E-mail ID")
		   return false
		}

		if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
		    alert("Invalid E-mail ID")
		    return false
		}

		 if (str.indexOf(at,(lat+1))!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
		    alert("Invalid E-mail ID")
		    return false
		 }

		 if (str.indexOf(dot,(lat+2))==-1){
		    alert("Invalid E-mail ID")
		    return false
		 }
		
		 if (str.indexOf(" ")!=-1){
		    alert("Invalid E-mail ID")
		    return false
		 }

 		 return true					
}
	
function namecheck(nValue){
		if((nValue == null) || (nValue == "")){
			alert("Name field is not entered");
			return false;
		}
}

function ValidateForm(frm){
	var emailID, firstName, lastName;
	var frmType;
	//Detect Which Form Posting

	switch (frm)
	{
		case 'frmOne':
			emailID = document.getElementById("idEmailR");
		break;
		case 'frmTwo':
			emailID = document.getElementById('idEmailN');
			firstName = document.getElementById('idFName');
			lastName = document.getElementById('idLName');
			frmType = '2';
		break;
	}

	if ((emailID.value==null)||(emailID.value=="")){
		alert("Please Enter your Email ID");
		emailID.focus();
		return false;
	}
	if (echeck(emailID.value)==false){
		emailID.focus();
		return false
	}
	if(frmType == "2"){
		// First Name Check
		if(namecheck(firstName.value) == false){
			firstName.focus();
			return false;
		}
		// Last Name Check
		if(namecheck(lastName.value) == false){
			lastName.value="";
			lastName.focus();
			return false;
		}
	}
	return true;
 }
