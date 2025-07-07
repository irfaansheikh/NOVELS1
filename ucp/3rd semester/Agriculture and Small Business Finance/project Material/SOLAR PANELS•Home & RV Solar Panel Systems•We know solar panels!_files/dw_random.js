/*  
    dw_random.js - random image rotation - version date: April 2005
    requires dw_rotator.js 
*/

/*************************************************************************
    This code is from Dynamic Web Coding at dyn-web.com
    Copyright 2001-5 by Sharon Paine 
    See Terms of Use at www.dyn-web.com/bus/terms.html
    regarding conditions under which you may use this code.
    This notice must be retained in the code as is!
*************************************************************************/

// dw_RandRotator is subclass of dw_Rotator
// it has its own rotate method, and adds a setupImage method
dw_RandRotator.prototype = new dw_Rotator();

// constructor arguments: (all optional) rotation speed, path to images, 
// linked? (boolean), mouse events? (boolean), target window name
function dw_RandRotator(sp, pt, bClickable, bMouse, tgt) {
    this.num = dw_Rotator.col.length; this.name = "RandRotateImg" + this.num;
    this.mouseEvs = bMouse; this.clickable = bClickable;
    // call method available to replace following 2 steps as of JS 1.3 (ns6/ie5.5)
    this.rObj = dw_Rotator; this.rObj(this.name, sp, pt, tgt); 
}

// arguments: images array, width and height of images, transition filter? (boolean)
dw_RandRotator.prototype.setUpImage = function(imgAr, w, h, bTrans) {
    this.trans = bTrans;
   	this.ctr = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ this.ctr ];
    var imgStr = '<img name="' + this.name + '" src="' + this.path + img + '"';
    imgStr += ( typeof w == "number") ? ' width="' + w + '"': ''; 
    imgStr += ( typeof h == "number") ? ' height="' + h + '"': ''; 
    imgStr += ' alt="" border="0" style="float: left; margin-right: 10px; border: #234BA3 1px solid; padding: 2px;">';
    var str = "";
    if (this.clickable) { // link it
        str += '<a href="" onclick="return dw_Rotator.doClick(' + this.num + ')"';
        if (this.mouseEvs) {
            str += ' onmouseover="dw_Rotator.pause(' + this.num + ')"' 
            str += ' onmouseout="dw_Rotator.resume(' + this.num + ')"';
        }
        str += ' onfocus="this.blur()">' + imgStr + '</a>';
    } else {
        str = imgStr;
    }
    document.write(str); document.close();
    for (var i=0; imgAr[i]; i++) this.addImages( imgAr[i] );
}

dw_RandRotator.prototype.rotate = function() { 
    clearTimeout(this.timer); this.timer = null;
    var ctr = Math.floor( Math.random() * this.imgs.length );
    // repeat attempts to get new image, if necessary
    var i = 0;
    while ( ctr == this.ctr && i < 6 ) {
        ctr = Math.floor( Math.random() * this.imgs.length );
        i++; // limit # of loops
    }
    this.ctr = ctr;
    var imgObj = document.images[this.name];
    if (!imgObj) return;
    if ( this.trans && typeof imgObj.filters != "undefined" ) {
   	    imgObj.style.filter = 'blendTrans(duration=1)';
        if (imgObj.filters.blendTrans) imgObj.filters.blendTrans.Apply();
    }
    imgObj.src = this.imgs[this.ctr].src;
    if ( this.trans && typeof imgObj.filters != "undefined" && imgObj.filters.blendTrans )
        imgObj.filters.blendTrans.Play(); 

    this.timer = setTimeout( this.animString + ".rotate()", this.speed);                        
}
