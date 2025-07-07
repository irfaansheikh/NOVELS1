//<jsobject name="Paginator">
function Paginator(refId,pageHeight,outerDivId,innerDivId,navigationId,pageIndicatorId,pageIndicatorNumId,fadeStartColor,
				showPrevNextNav,nextLinkText,prevLinkText,
				maxPageLinks,noncurrentPageTag,currentPageTag,
				onGotoPage, onAdjustWrapper)

{
	// configurable parameters
	this.refId = refId; // A string naming how this object can reference itself in global memory
	this.pageHeight = pageHeight; // the optimal page height
	this.wrapper = document.getElementById(outerDivId); // The div element that is the display window for the pagenated body content
	this.body = document.getElementById(innerDivId);
	this.navigationDiv = document.getElementById(navigationId);
	this.pageIndicatorId = pageIndicatorId;
	this.pageIndicatorNumDiv = document.getElementById(pageIndicatorNumId);
	this.fadeStartColor = fadeStartColor;
	this.fadeEndColor = Fader.get_bgcolor(pageIndicatorId);
	this.maxPageLinks = maxPageLinks;
	this.nextLinkText = nextLinkText;
	this.prevLinkText = prevLinkText;
	this.currentPageTag = currentPageTag;
	this.noncurrentPageTag = noncurrentPageTag;
	this.showPrevNextNav = showPrevNextNav;
	this.onGotoPage = onGotoPage || null;
	this.onAdjustWrapper = onAdjustWrapper || null;
	
	// internal tracking variables
	this.breakName = "PBM_"+this.refId;
	this.pagePrefix = "pageStart_"+this.refId+"_";
	this.currentPageNum = 1;
	this.currentTop = 0;
	this.currentPage = null;
	this.nextPage = null;
	this.currentPageHeight = this.pageHeight;
	this.pages = null;
	this.numPages = 1;
	this.adRefreshTimerId = null;
	this.ignoreResize = false;
	this.resizeTimerId = null;
	this.suppressPageIndicator = false;
		
	//TODO: maybe register resize event
	//============================================================//
	// Event handlers                                             //
	//============================================================//
	// <method name="onLoad">
	this.onLoad = function()
	{
		this.paginate();
		if(this.numPages < 2)
		{
			this.suppressPageIndicator = true;
			document.getElementById(this.pageIndicatorId).style.display = "none";
		}
		this.goToPage(1,false);
		// register a stylesheet change handler
		if(typeof(addStyleSheetChangeHandler) == "function")
			addStyleSheetChangeHandler(this.refId+".readjustScroll()");
	}
	//</method>

	// <method name="goToPage">
	this.goToPage = function(pageNum)
	{
		var scrollToTop = true;
		if(arguments.length >= 2)
			scrollToTop = arguments[1];
		if(this.scrollToPage(pageNum))
		{
			this.drawNavigation();
			if (scrollToTop)
			{	
				window.scrollTo(0, 0);
				this.updatePageIndicator();
				if(this.onGotoPage)
					this.onGotoPage();
			}
		}
	}
	//</method>
	
	// <method name="nextPage">
	this.gotoNextPage = function()
	{
		this.goToPage(this.currentPageNum+1);
	}
	//</method>

	// <method name="previousPage">
	this.gotoPreviousPage = function()
	{
		this.goToPage(this.currentPageNum-1);
	}
	//</method>

	// <method name="onResize">
	this.onResize = function()
	{
		if(this.ignoreResize)
		{
			this.ignoreResize = false;
			return;
		}
		this.scrollToPage(this.currentPageNum);
	}
	//</method>

	// =========================================================== //
	// METHODS                                                     //
	// =========================================================== //
	
	// == Pagination ============================================= //
	
	// <method name="paginate">
	// This method performs the initial pagination (it assumes the body is clean/free of existing breaks
	this.paginate = function()
	{
		this.body.innerHTML = insertOffsetMarkers(this.body.innerHTML);
		this.findNewLines();
		this.setBreakTags();
		this.body.innerHTML = cleanupOffsetMarkers(this.body.innerHTML);
	}
	//</method>
	
	// <method name="clearPagination">
	// This method clears any existing page breaks (THIS HAS NOT BEEN FULLY TESTED)
	this.clearPagination = function()
	{
		var pageBreakArr = document.getElementsByTagName("span");
		for(var i = 0; i < pageBreakArr.length; i++)
		{
			if(pageBreakArr[i].name == this.breakName)
				var x = pageBreakArr[i].removeNode(false);
		}
		pageBreakArr = document.getElementsByTagName("tr");
		for(var i = 0; i < pageBreakArr.length; i++)
		{
			if(pageBreakArr[i].id.indexOf(this.pagePrefix) == 0)
			{
				pageBreakArr[i].name="";
				pageBreakArr[i].id="";				
			}
		}
	}
	//</method>

	// <method name="setBreakTags">
	// This method loops through the line breaks and tags those at desired break positions into break markers
	this.setBreakTags = function()
	{
		var eolsCount = this.eolsCount;
		var pgOn = 0;
		var nextBreakAt = 0;
		var lastBreak = -1;
		this.pages = new Array();
		for (var idx = 0; idx < this.lineMarkersArr.length; idx ++)
		{
			var top = this.eolTopsArr[idx];
			if (top >= nextBreakAt )
			{
				if(idx > 0 && idx-1 != lastBreak)
				{
					// which is closer, this one or the previous one??
					var thisDist = top - nextBreakAt;
					var prevDist = nextBreakAt -this.eolTopsArr[idx-1];
					if(prevDist < thisDist)
						idx--;
				}
				lastBreak = idx;
				pgOn ++;
				theElement = this.lineMarkersArr[idx];
				theElement.name = this.breakName;
				theElement.id = this.pagePrefix+pgOn;
				this.pages[pgOn] = theElement;
				nextBreakAt = this.eolTopsArr[idx] + this.pageHeight;
			}
		}
		var lastPage = this.pages[pgOn];
		if(this.body.offsetHeight - this.getOffset(lastPage) < (this.pageHeight/2) )
		{
			lastPage.name="spc";
			lastPage.id = "spc";
			pgOn--;
		}
		this.numPages = pgOn;
	}
	//</method>
	
	// <method name="getOffset">
	// This method crawls the the dom from theElement up to this.body adding offsets where appropriate.
	// THIS METHOD MUST BE USED INSTEAD OF DIRECTLY ACCESSING AN ELEMENT'S offsetTop PROPERTY!! 
	this.getOffset = function(theElement)
	{
		var offset = theElement.offsetTop;
		//return offset;
		while(theElement.parentNode && theElement.parentNode.id != this.body.id)
		{
			theElement = theElement.parentNode;
			if(theElement.tagName.search(/^(table|tbody|thead|tfoot|div)$/i) == 0)
				offset += theElement.offsetTop;
		}
		return offset;
	}
	//</method>

	// <method name="findNewLines">
	// This method looks at all the offsetMarkers and determines which represent a new line
	this.findNewLines = function()
	{	
		this.eolTopsArr = new Array();
		this.eolIdxsArr = new Array();
		this.lineMarkersArr = new Array();
		// do these really need to be stored beyond this method??
		this.offsetMarkersArr = document.getElementsByName("spc");
		this.spcSpansCollLen = this.offsetMarkersArr.length;
		var trLines = document.getElementsByName("trln");
		var lineIndex = 0;
		var tmpIndex = 0;
		var prevLeft = 0;
		var prevTop = 0;
		var lines = 0;
		var words = 0;
		var lastIdx = 0;
		var avgWordsPerLine = 10;
		var trIdx = 0;
		var nextTrTop = -1;
		if(trLines.length > 0)
			nextTrTop = this.getOffset(trLines[0]);
		for (var spcIndex = avgWordsPerLine; spcIndex < this.spcSpansCollLen; spcIndex++)
		{
			var spcElement = this.offsetMarkersArr[spcIndex];
			var top = this.getOffset(spcElement);
			if (spcIndex != 0)
			{
				while(nextTrTop >= 0 && nextTrTop < top)
				{
					this.eolTopsArr[lineIndex] = nextTrTop;
					this.lineMarkersArr[lineIndex] = trLines[trIdx];	
					lineIndex++;
					trIdx++;
					prevTop = nextTrTop;
					if(trIdx < trLines.length)
						nextTrTop = this.getOffset(trLines[trIdx]);
					else
						nextTrTop = -1;
				}
				if(top > prevTop)
				{
					newTop = top;
					while( top > prevTop && spcIndex > 0)
					{ 	
						newTop = top;
						tmpIndex = spcIndex;
						spcIndex--;
						spcElement = this.offsetMarkersArr[spcIndex];
						top = this.getOffset(spcElement);
					}
					this.eolTopsArr[lineIndex] = newTop;	
					this.lineMarkersArr[lineIndex] = this.offsetMarkersArr[tmpIndex];	
					lineIndex++;	
					lines++;
					avgWordsPerLine = parseInt(tmpIndex/lines);
					spcIndex += avgWordsPerLine;
					prevTop = newTop;
				}
			}
		}
		while(trIdx < trLines.length)
		{
			this.eolTopsArr[lineIndex] = this.getOffset(trLines[trIdx]);
			this.lineMarkersArr[lineIndex] = trLines[trIdx];	
			lineIndex++;
			trIdx++;
		}

		this.eolsCount = lineIndex;
	}
	//</method>

	// == Navigation ============================================= //
	
	// <method name="scrollToPage">
	// This method scrolls the body to the requested page and adjusts the wrapper size (using adjustWrapper method).
	// In the process it sets three object properties: currentPage, currentPageNum, and nextPage
	this.scrollToPage = function(thePage)
	{
		if(thePage > 0 && thePage <= this.numPages)
		{
			this.currentPageNum = thePage;
			var nextPage = thePage+1
			var top = 0;
			if(thePage > 1)
			{
				this.currentPage = document.getElementById(this.pagePrefix+thePage);
				top = this.getOffset(this.currentPage);
			}
			else
			{
				this.currentPage = null;
			}
			this.currentTop = top;
			this.body.style.top = "-"+top+"px";
			if(nextPage <= this.numPages)
				this.nextPage = document.getElementById(this.pagePrefix+nextPage);
			else
				this.nextPage = null;
			this.adjustWrapper();
			return true;
		}
		return false;
	}
	//</method>

	// <method name="readjustScroll">
	this.readjustScroll = function()
	{
		var top = 0;
		if(this.currentPageNum > 1)
		{
			this.currentPage = document.getElementById(this.pagePrefix+this.currentPageNum);
			top = this.getOffset(this.currentPage);
		}
		this.currentTop = top;
		this.body.style.top = "-"+top+"px";
		this.adjustWrapper();
	}
	//</method>

	// <method name="adjustWrapper">
	// This method adjusts the height of the wrapper to perfectly fit the page
	this.adjustWrapper = function()
	{
		if(this.nextPage != null)
			height = this.getOffset(this.nextPage) - this.currentTop;
		else
			height = this.body.offsetHeight - this.currentTop;
		this.ignoreResize = true;
		this.currentPageHeight = height;
		this.wrapper.style.height = height+"px";
		if(this.onAdjustWrapper)
			this.onAdjustWrapper();
	}
	//</method>
	
	// <method name="updatePageIndicator">
	this.updatePageIndicator = function()
	{
		if(this.suppressPageIndicator)
			return;
		this.pageIndicatorNumDiv.innerHTML = this.currentPageNum;
		Fader.fade_element(this.pageIndicatorId,this.fadeStartColor,this.fadeEndColor);
	}
	//</method>

	// <method name="drawNavigation">
	// This method draws all the navigation elements into this.navigationDiv
	this.drawNavigation = function()
	{
		if(this.numPages == 1 )
		{  // no pagination
			this.navigationDiv.innerHTML = "";
		}
		else
		{
			var theHtml = this.drawPrev();
			theHtml += this.drawPageNums();
			theHtml += this.drawNext();
			this.navigationDiv.innerHTML = theHtml;
		}
	}	
	//</method>

	
	// <method name="drawPrev">
	// This method draws the 'previous page' control.
	this.drawPrev = function()
	{
		if(this.currentPageNum > 1)
		{
			return this.prevLinkText;
		}
		else
			return "";
	}
	//</method>

	// <method name="drawNext">
	// This method draws the 'next page' control.
	this.drawNext = function()
	{
		if(this.currentPageNum <  this.numPages)
		{
			return this.nextLinkText;
		}
		else
			return "";
	}
	//</method>

	// <method name="drawPageNums">
	// This method draws the 'go to page number' controls.
	this.drawPageNums = function()
	{
		var theHtml = "";
		var startPage = 1;
		var endPage = this.numPages;
		if(this.numPages > this.maxPageLinks)
		{
			var numToSplit = this.maxPageLinks-1;
			var numToLeft = Math.min(parseInt(numToSplit/2),this.currentPageNum-1);
			var numToRight = Math.min(numToSplit-numToLeft, this.numPages-this.currentPageNum);
			numToLeft = numToSplit - numToRight; // final check in case nearing the end of the page list
			startPage = this.currentPageNum - numToLeft;
			endPage = this.currentPageNum + numToRight;
		}
		for(var i = startPage; i <= endPage; i++)
		{
			if(i == this.currentPageNum)
			{
				theHtml += this.currentPageTag.replace(/__page_num__/g,i);
			}
			else
			{
				theHtml += this.noncurrentPageTag.replace(/__page_num__/g,i);
			}
		}
		return theHtml;
	}
	//</method>


	// =========================================================== //
	// LOCAL FUNCTIONS                                             //
	// =========================================================== //
	
	// <function name="insertOffsetMarkers">
	// This function inserts offset markers into html text.
	function insertOffsetMarkers(theText)
	{
		var re = /<([^ >]+)[^>]*>/g; // Finds all tags
	    var match;
		var result = "";
		var lastIndex = 0;
		var inNoBreakZone = 0; // indicates an area where breaking on soft line breaks is forbidden. integer flag allows us to track nested elments
		var preserveSpaces = 0;
		var inEmbed = false;
	    while ((match = re.exec(theText)) != null)
		{
			// if there is text between the tags, add it to the result
			if(match.index > lastIndex)
			{ 
				tmpText = theText.substring(lastIndex,match.index);// get the text
				if(inNoBreakZone == 0 && preserveSpaces > 0 && !inEmbed) // if we're in an open pre tag we mark the line feeds
					result += tmpText.replace(/\n([^\n])/g, '<span id="trln" name="trln">\n$1</span>');
				else if(inNoBreakZone == 0 & !inEmbed) // if we're in open text we mark the spaces
					result += tmpText.replace(/\s+/g, '<span name="spc" id="spc"> </span>');
				else // we're in a no break zone so copy the text as is
					result += tmpText;
			}
			
			// Append the tag to the result (flagging if needed)
			var theTag = match[1]; // get the tag name
			var tagRe = new RegExp(match[1],"i")
			if(theTag.search(/^(tr|li|p|table)$/i) == 0 && !inEmbed) // If the tag is a 'new line' type and we're not in a nested no-break zone, flag it.
			{
				result += match[0].replace(/ (id|name)=[^ >]+/gi,"").replace(tagRe, match[1]+' id="trln" name="trln"');				
			}
			else // not a 'new line' type so pass through as is
				result += match[0];	
				
			// Check tag and incremet/decrement flags as needed
			if(theTag.search(/^(a|script|table|ol|ul|p)$/i) == 0)// standard no-break tags increment/decrement the noBreakZone counter
				inNoBreakZone++;
			else if(theTag.search(/^\/(a|script|table|ol|ul)$/i) == 0 && inNoBreakZone > 0)
				inNoBreakZone--;
			else if(theTag.toLowerCase() == "/p")
				inNoBreakZone = 0;
			else if(theTag.toLowerCase() == "pre") // pre tags set/unset the preserveSpaces flag
				preserveSpaces++;
			else if(theTag.toLowerCase() == "/pre")
				preserveSpaces--;
			else if(theTag.toLowerCase() == "!--abembed--") // this pattern indicates an embedded component, simulate nested no-break to prevent any line breaks from happening
				inEmbed = true;
			else if(theTag.toLowerCase() == "!--/abembed--")
				inEmbed = false;
			
			// remember where we left off
			lastIndex = match.index+match[0].length;
		}
		
		return result;	
	}
	// </function>

	// <function name="cleanupOffsetMarkers">
	function cleanupOffsetMarkers(theHTML)
	{ 
		return theHTML.replace(/<span [^>]*id="?spc"?[^>]*> <\/span>/gi," ").replace(/(<tr [^>]*)(id|name)="?spc"?([^>]*)(id|name)="?spc"?([^>]*>)/gi,"$1$3$5");
	}
	// </function>

	// Register the onResize handler
	//if(typeof(addResizeEvent) == "function")
		//addResizeEvent(this.refId+".onResize()");
	//this.wrapper.attachEvent("onresize",eval("function(){"+this.refId+".onResize();}"));
	// Schedule initialization
	window.setTimeout(this.refId+".onLoad()",50);
		
	return this;
}
//</jsobject>




//*************************************************************
//<jsobject name="Ads">
function Ads(overrideTimecheckForFirstRefresh) 
{
	this.overrideTimecheckForFirstRefresh = overrideTimecheckForFirstRefresh || false;
	this.isFirstRefresh = true;
	

	
	// <method name="requestAdsRefresh">
	// This method requests the refreshment of iFrame ads.
	this.requestAdsRefresh = function()
	{	
		if ( this.overrideTimecheckForFirstRefresh && this.isFirstRefresh )
		{
			this.adsRefresh();
		}
		else 
		{
			if ( this.isTimeGoForAds() )
			{	
				this.adsRefresh();
			}
		}
	}
	// </method>
	
	// <method name="adsRefresh">
	// This method refreshes the iFrame ads.
	this.adsRefresh = function()
	{	
		var temp = new Array();
		
		temp.iFramesColl = document.getElementsByTagName('iframe');
		temp.iFramesCollLen = temp.iFramesColl.length;
		
		for (temp.idx = 0; temp.idx < temp.iFramesCollLen; temp.idx ++)
		{
			temp.ithIFrame = temp.iFramesColl[temp.idx];
			if (temp.ithIFrame.name.indexOf('ZZZ') > 0)
			{	
				temp.ithIFrameCurrentHref = temp.ithIFrame.contentWindow.location.href;
				temp.randomNumber = Math.floor(Math.random()*999999);
				temp.regexToFind = 'rnd[\\d]+ZZZ';
				temp.replaceWithSubstring = 'rnd' + temp.randomNumber + 'ZZZ';
				var objRegExp =  new RegExp(temp.regexToFind, 'g');
				temp.ithIFrameNewHref = temp.ithIFrameCurrentHref.replace(objRegExp, temp.replaceWithSubstring); 
				delete objRegExp;
				temp.ithIFrame.contentWindow.location.href = temp.ithIFrameNewHref;	
			}
		}
		this.setAdsRefreshTimestamp() // Maybe this should be handle by the Writer from the controller?
		this.isFirstRefresh = false; 
	}
	// </method>

	// <method name="setAdsRefreshTimestamp">
	// This method set the global scope timestamp of approximately when page - hence ads were last loaded.
	this.setAdsRefreshTimestamp = function()
	{
		glb_adRefreshTimestamp = new Date().getTime();
	}
	// </method>

	// <method name="setAdsRefreshPeriod">
	// This methods set the period of time that must elapse from last ads load before ads can be refreshed.
	this.setAdsRefreshPeriod = function(periodInMilliseconds)
	{
		glb_adsRefreshPeriod = periodInMilliseconds;
	}
	// </method>

	// <method name="isTimeGoForAds">
	// This method determine if enough time has elapsed in order to refresh ads
	this.isTimeGoForAds = function()
	{
		var temp = new Array();
		
		// Note: All times are in milliseconds
		temp.startTime = glb_adRefreshTimestamp; 
		temp.endTime = new Date().getTime();
		
		temp.elapsedTime =  temp.endTime - temp.startTime;
		temp.passPeriod = glb_adsRefreshPeriod;
		
		if (temp.elapsedTime >= temp.passPeriod )
		{	
			temp.isOk = true; 
		}
		else
		{	temp.isOk = false; }
		
		return temp.isOk; 
	}
	// </method>
	
	this.setAdsRefreshTimestamp();
	return this;
}
//</jsobject>
//<jsobject name="Fader">
// @name      The Fade Anything Technique
// @namespace http://www.axentric.com/aside/fat/
// @version   1.0-RC1
// @author    Adam Michela

var Fader = {
// <method name="make_hex">
	make_hex : function (r,g,b) 
	{
		r = r.toString(16); if (r.length == 1) r = '0' + r;
		g = g.toString(16); if (g.length == 1) g = '0' + g;
		b = b.toString(16); if (b.length == 1) b = '0' + b;
		return "#" + r + g + b;
	},
	//</method>
	// <method name="fade_all">
	fade_all : function ()
	{
		var a = document.getElementsByTagName("*");
		for (var i = 0; i < a.length; i++) 
		{
			var o = a[i];
			var r = /fade-?(\w{3,6})?/.exec(o.className);
			if (r)
			{
				if (!r[1]) r[1] = "";
				if (o.id) Fat.fade_element(o.id,null,null,"#"+r[1]);
			}
		}
	},
	//</method>
	// <method name="fade_element">
	fade_element : function (id, from, to, fps, duration) 
	{
		if (!fps) fps = 30;
		if (!duration) duration = 3000;
		if (!from || from=="#") from = "#FFFF33";
		if (!to) to = this.get_bgcolor(id);
		
		var frames = Math.round(fps * (duration / 1000));
		var interval = duration / frames;
		var delay = interval;
		var frame = 0;

		if (from.length < 7) from += from.substr(1,3);
		if (to.length < 7) to += to.substr(1,3);

		var rf = parseInt(from.substr(1,2),16);
		var gf = parseInt(from.substr(3,2),16);
		var bf = parseInt(from.substr(5,2),16);
		var rt = parseInt(to.substr(1,2),16);
		var gt = parseInt(to.substr(3,2),16);
		var bt = parseInt(to.substr(5,2),16);

		var r,g,b,h;
		while (frame < frames)
		{
			r = Math.floor(rf * ((frames-frame)/frames) + rt * (frame/frames));
			g = Math.floor(gf * ((frames-frame)/frames) + gt * (frame/frames));
			b = Math.floor(bf * ((frames-frame)/frames) + bt * (frame/frames));
			h = this.make_hex(r,g,b);

			setTimeout("Fader.set_bgcolor('"+id+"','"+h+"')", delay);

			frame++;
			delay = interval * frame; 
		}
		setTimeout("Fader.set_bgcolor('"+id+"','"+to+"')", delay);
	},
	//</method>
	// <method name="set_bgcolor">
	set_bgcolor : function (id, c)
	{
		var o = document.getElementById(id);
		o.style.backgroundColor = c;
	},
	//</method>
	// <method name="get_bgcolor">
	get_bgcolor : function (id)
	{
		var o = document.getElementById(id);
		while(o)
		{
			var c;
			if (window.getComputedStyle) c = window.getComputedStyle(o,null).getPropertyValue("background-color");
			if (o.currentStyle) c = o.currentStyle.backgroundColor;
			if ((c != "" && c != "transparent") || o.tagName == "BODY") { break; }
			o = o.parentNode;
		}
		if (c == undefined || c == "" || c == "transparent") c = "#FFFFFF";
		var rgb = c.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/);
		if (rgb) c = this.make_hex(parseInt(rgb[1]),parseInt(rgb[2]),parseInt(rgb[3]));
		return c;
	}
	//</method>
}
//</jsobject>

