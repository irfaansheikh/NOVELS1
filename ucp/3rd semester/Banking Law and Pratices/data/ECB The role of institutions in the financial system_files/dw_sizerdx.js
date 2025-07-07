
/*
    dw_sizerdx.js version date: Jan 2004
    requires dw_cookies.js
*/

/*************************************************************************
  This code is from Dynamic Web Coding at http://www.dyn-web.com/
  Copyright 2004 by Sharon Paine 
  See Terms of Use at http://www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

var dw_fontSizerDX = {
  sizeUnit:    "em",
  defaultSize: .66,
  maxSize:     3.6,
  minSize:     .5,
  height:	   1.05,

  adjustList: [],
  
  set: function (sel,dflt,mn,mx) {
    this.adjustList[this.adjustList.length] = arguments;
  },

  init: function() {

    var size, sizerEl, i;
    if ( !document.getElementById || !document.getElementsByTagName ) return;
    size = window.location.search? window.location.search.slice(1): getCookie("fontSize");
    size = !isNaN( parseFloat(size) )? parseFloat(size): this.defaultSize;
    // in case default unit changed or size passed in url out of range
    if ( size > this.maxSize || size < this.minSize ) size = this.defaultSize;
    this.curSize = this.defaultSize;  // create curSize property to use in calculations 
    sizerEl = document.getElementById('sizer');
    if (sizerEl) sizerEl.style.display = "block";
    // hold ratio of this element's default size to this.defaultSize for calcs in adjust fn 
    for (i=0; this.adjustList[i]; i++) 
      this.adjustList[i][4] = this.adjustList[i][1] / this.defaultSize;
    if ( size != this.defaultSize ) this.adjust( size - this.defaultSize );
  },

  adjust: function(n) {
    var alist, size, list, i, j;
    // check against max/minSize
    if ( n > 0 && dw_fontSizerDX.maxSize ) {
      if ( dw_fontSizerDX.curSize + n > dw_fontSizerDX.maxSize )
          n = dw_fontSizerDX.maxSize - dw_fontSizerDX.curSize;
    } else if ( n < 0 && dw_fontSizerDX.minSize ) {
        if ( dw_fontSizerDX.curSize + n < dw_fontSizerDX.minSize )
          n = dw_fontSizerDX.minSize - dw_fontSizerDX.curSize;
    }
    if ( n == 0 ) return false;
    dw_fontSizerDX.curSize += n;
    // loop through adjustList, calculating size, checking max/min
    alist = dw_fontSizerDX.adjustList;
    for (i=0; alist[i]; i++) {
      size = dw_fontSizerDX.curSize * alist[i][4]; // maintain proportion 
      size = Math.max(alist[i][2], size); size = Math.min(alist[i][3], size);
      list = dw_getElementsBySelector( alist[i][0] );
      for (j=0; list[j]; j++) { list[j].style.fontSize = size + dw_fontSizerDX.sizeUnit; list[j].style.lineHeight = this.height + .20;

	  }
    }
    setCookie( "fontSize", dw_fontSizerDX.curSize, 180, "/" );
  },

  // Reset adjustList elements to their default sizes
  reset: function() {
    var alist = dw_fontSizerDX.adjustList, list, i, j;
    for (i=0; alist[i]; i++) {
      list = dw_getElementsBySelector( alist[i][0] );
      for (j=0; list[j]; j++) { list[j].style.fontSize = alist[i][1] + dw_fontSizerDX.sizeUnit; }
    }
    dw_fontSizerDX.curSize = dw_fontSizerDX.defaultSize;
    deleteCookie("fontSize", "/");
  }

}

// resource: simon.incutio.com/archive/2003/03/25/getElementsBySelector
function dw_getElementsBySelector(selector) {
 	var nodeList = [document], tokens, bits, list, els, i, j, k;
  if (!document.getElementsByTagName) return [];
  tokens = selector.split(' ');
  for (i=0; tokens[i]; i++) {
    if ( tokens[i].indexOf('#') != -1 ) {  // id
      bits = tokens[i].split('#'); 
      nodeList = [ document.getElementById( bits[1] ) ];
      continue; 
    } else if ( tokens[i].indexOf('.') != -1 ) {  // class
      bits = tokens[i].split('.');
      for (j=0; nodeList[j]; j++) 
        list = dw_getElementsByClassName( bits[1], bits[0], nodeList[j]);
      nodeList = [];
      for (j=0; list[j]; j++) { nodeList.push(list[j]); }
      continue; 
    } else {  // element 
      els = []; 
      for (j = 0; nodeList[j]; j++) {
        list = nodeList[j].getElementsByTagName(tokens[i]);
        for (k = 0; list[k]; k++) { els.push(list[k]); }
      }
      nodeList = els;
    }
  }
  return nodeList;
}

function dw_getElementsByClassName(sClass, sTag, oCont) {
  var result = [], list, i;
  oCont = oCont? oCont: document;
  if ( document.getElementsByTagName ) {
    if ( !sTag || sTag == "*" ) {
      list = oCont.all? oCont.all: oCont.getElementsByTagName("*");
    } else list = oCont.getElementsByTagName(sTag);
    
    for (i=0; list[i]; i++) 
      if ( list[i].className.match( new RegExp("\\b" + sClass + "\\b", "i") ) ) result.push( list[i] );
  }
  return result;
}

if (!Array.prototype.push) {  // for ie5.0
	Array.prototype.push =  function() {
		for (var i=0; arguments[i]; i++) this[this.length] = arguments[i];
		return this.length;
	}
}  
