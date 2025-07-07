<!--
/* author@ShuvoRim
* http://www.shuvorim.tk/
* shuvorim@hotmail.com
* (c)ShuvoRim Pvt. Ltd. 2002 -03
* All rights reserved.
* --------------------------------------------------
* visit our web site for more free Java applications
* and applets. Thank you for using our program.
* --------------------------------------------------
 */
var urlArray = new Array(3); //for URL's, increase size as necessary
var banArray = new Array(1); //for banners, increase size as necessary
var counter = 1;
var url = "http://mazhar.dk"; //initial URL
//add your necessary URL's

urlArray[0] = "http://mazhar.dk/film/";
urlArray[1] = "http://mazhar.dk/film/history/";
urlArray[2] = "http://mazhar.dk/film/singers/";
urlArray[3] = "http://mazhar.dk/film/stars/";
urlArray[4] = "http://mazhar.dk/film/urdu/";
urlArray[5] = "http://mazhar.dk/film/magazine/";


if(document.images) //pre-load all banner images
{
for(i = 0; i < 10; i++)
{
banArray[i] = new Image(300, 50);
banArray[i].src = "http://mazhar.dk/film/images/banners/banner" + (i+1) + ".jpg";
}
}
function changeBanner() //banner changer function
{
  if(counter > 5)
counter = 0;
document.banner.src = banArray[counter].src; //sets a new banner
url = urlArray[counter]; //sets a new URL to the banner
counter++; //increase the counter for the next banner
}
//calls the changeBanner() function every 3 seconds
//change the timer as necessary (minutes * 60000) or (seconds * 1000)
var timer = window.setInterval("changeBanner()", 3000);
//-->
