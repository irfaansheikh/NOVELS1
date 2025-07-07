function sendAJAX(component,method,argumentCollection )
{	
	var theRequest = new Object();
	theRequest.component = component;
	theRequest.method = method;
	theRequest.argumentCollection = argumentCollection;
	
	var xmlhttp=false;
	try {

		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false;
			}
		}
		
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
			try {
				xmlhttp = new XMLHttpRequest();
			} catch (e) {
				xmlhttp=false;
			}
		}
		if (!xmlhttp && window.createRequest) {
			try {
			xmlhttp = window.createRequest();
			} catch (e) {
			xmlhttp=false;
			}
		}
		

		if (!xmlhttp) {
			alert("Your browsers current version, or its security settings,\ncurrently do not allow you to use this feature of the site.");
		}
		
		var wddxer = new WddxSerializer();
		var theWDDX = wddxer.serialize(theRequest);	
		
		
		try {
			xmlhttp.open("POST", "/ajax.cfm", false);
		
			try{
				xmlhttp.setRequestHeader( "Content-type", "application/x-www-form-urlencoded");
				xmlhttp.setRequestHeader( "Cookie", document.cookie );

				xmlhttp.send("wddxPacket=" + escape(theWDDX));
				// now convert the wddx to a javascript object
		
				var wddxdes = new WddxDeserializer();
				var resultWDDX = wddxdes.deserialize(xmlhttp.responseText);
				return resultWDDX;
			} catch (e) {
				return false;
			}
			return false;
		} catch(e) {
			return false;
		}
	} catch(e) {
		return false;
	}
}


var MAX_DUMP_DEPTH = 10;

function dumpObj(obj, name, indent, depth) {
       if (depth > MAX_DUMP_DEPTH) {
              return indent + name + ": <Maximum Depth Reached>\n";
       }
       if (typeof obj == "object") {
              var child = null;
              var output = indent + name + "\n";
              indent += "\t";
              for (var item in obj)
              {
                    try {
                           child = obj[item];
                    } catch (e) {
                           child = "<Unable to Evaluate>";
                    }
                    if (typeof child == "object") {
                           output += dumpObj(child, item, indent, depth + 1);
                    } else {
                           output += indent + item + ": " + child + "\n";
                    }
              }
              return output;
       } else {
              return obj;
       }
}

function recordOutcome(fact,valu) {
    var http_request = true;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    http_request.open('GET', '/memetrics.cfm?fact='+fact+'&valu='+valu, true);
    http_request.send(null);
	return true;
}

