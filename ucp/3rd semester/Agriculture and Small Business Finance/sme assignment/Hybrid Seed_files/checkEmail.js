function validEmail(email) {	
		invalidChars = "/:,;"
		if (email == "") {
			return false
					}
		for (i=0; i<invalidChars.length; i++) {	
			badChar = invalidChars.charAt(i)
			if (email.indexOf(badChar,0) > -1) {
				return false
							}
							}
		atPos = email.indexOf("@",1)	
		if (atPos == -1) {
			return false
				}
		if (email.indexOf("@",atPos+1) != -1) {
							return false
							}
		periodPos = email.indexOf(".",atPos)	
		if (periodPos == -1) {
			return false
					}
		if (periodPos+3 > email.length)	{
					return false
						}
		return true
	}


function checkEmail(subscribe)	{
	if (!validEmail(subscribe.email.value)) {
		alert("Invalid email address")
		subscribe.email.focus()
		return false
							}
			return true
					}
