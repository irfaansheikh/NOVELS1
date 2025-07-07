		function switchInfo(id,pos,bg,border,imgOn,imgOff){

			var bgh = (bg == null) ? '#ebebd7' : bg;
			var bg = (bg == null) ? '#f9f9f1' : '#ffffff';
			var imgOn = (imgOn == null) ? '/shared/img/ico_minus_new.gif' : imgOn;
			var imgOff = (imgOff == null) ? '/shared/img/ico_plus_new.gif' : imgOff;

			var border = (border == null) ? '0' : border;
			
			if (typeof(idSave)=='undefined' ) {
				idSave="xx";
				posSave="xx";
			}
			
			if (id != idSave && idSave != "xx") {
				hideInfo(idSave,posSave,bg,border,imgOff);
				showInfo(id,pos,bgh,border,imgOn);
			}
			else if (id == idSave && idSave != "xx"){
				hideInfo(idSave,posSave,bg,border,imgOff);
				idSave="xx";
				posSave="xx";
			}
			else {
				showInfo(id,pos,bgh,border,imgOn);
			}
		};
		
		function isset(varname)  {
  			if(typeof( window[ varname ] ) != "undefined") return true;
  			else return false;
		}

		function showInfo(id,pos,bg,bord,imgOn) {
			
			document.getElementById('id'+id+'-'+pos).style.display='block';
			document.getElementById('mid'+id+'-'+pos).style.backgroundColor=bg;
			if (navigator.appName.indexOf("Microsoft")==-1) document.getElementById('mid'+id+'-'+pos).style.border=bord;
			ver=navigator.appVersion.substring(navigator.appVersion.indexOf('MSIE')+5,navigator.appVersion.indexOf('MSIE')+6);
			if (navigator.appName.indexOf("Microsoft")!=-1 && ver>=7) document.getElementById('mid'+id+'-'+pos).style.border=bord;


			document.getElementById('mid'+id+'-'+pos).style.fontWeight='bold';
			document.getElementById('iid'+id+'-'+pos).src=imgOn;
			document.getElementById('iid'+id+'-'+pos).alt='-';
			idSave=id;
			posSave=pos;
		}
		
		function hideInfo(id,pos,bg,bord,imgOff) {
		
			if(document.getElementById('id'+id+'-'+pos)!=null){
				document.getElementById('id'+id+'-'+pos).style.display='none';
				document.getElementById('mid'+id+'-'+pos).style.backgroundColor=bg;
				document.getElementById('mid'+id+'-'+pos).style.border='0';
				document.getElementById('mid'+id+'-'+pos).style.fontWeight='normal';
				document.getElementById('iid'+id+'-'+pos).src=imgOff;
				document.getElementById('iid'+id+'-'+pos).alt='+';
			}
		}

