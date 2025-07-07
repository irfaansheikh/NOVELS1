<!--
function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i< changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}
 
var preloadFlag = false; 
function preloadImages() {
	if (document.images) {
		About_web_over = newImage("/images/about_web_over.gif");
		Status_of_Women_over = newImage("/images/status_of_women_over.gif");
		Success_Stories_over = newImage("/images/success_stories_over.gif");
		Oppertunities_for_Web_over = newImage("/images/opportunities_for_web_over.gif");
		Publications_over = newImage("/images/publications_over.gif");
		Contact_Us_over = newImage("/images/contact_cs_over.gif");
		preloadFlag = true;
	}
}
--> 