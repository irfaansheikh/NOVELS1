//Pakistan Film Magazine by mazhar.dk, created by Mazhar Iqbal, Copenhagen, Denmark since June 1999

//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.

////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit www.mazhar.dk for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
	effect = "Fade(duration=0.2);Alpha(style=0,opacity=75);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
	effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}


timegap=500				// The time delay for menus to remain visible
followspeed=5			// Follow Scrolling speed
followrate=40			// Follow Scrolling Rate
suboffset_top=0;		// Sub menu offset Top position 
suboffset_left=0;		// Sub menu offset Left position

style1=[				// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"12f00d",				// Mouse Off Font Color
"000000",				// Mouse Off Background Color
"ffffff",				// Mouse On Font Color
"279e1b",				// Mouse On Background Color
"797979",				// Menu Border Color 
10,						// Font Size in pixels
"normal",				// Font Style (italic or normal)
"bold",					// Font Weight (bold or normal)
"Verdana, Arial",		// Font Name
1,						// Menu Item Padding
"http://www.mazhar.dk/film/images/pil.gif",			// Sub Menu Image (Leave this blank if not needed)
,						// 3D Border & Separator bar
"FFADFF",				// 3D High Color
"000099",				// 3D Low Color
"red",				// Current Page Item Font Color (leave this blank to disable)
"000000",					// Current Page Item Background Color (leave this blank to disable)
,			// Top Bar image (Leave this blank to disable)
"ffffff",				// Menu Header Font Color (Leave blank if headers are not needed)
"000099",				// Menu Header Background Color (Leave blank if headers are not needed)
]




addmenu(menu=[		// This is the array that contains your menu properties and details
"mainmenu",			// Menu Name - This is needed in order for the menu to be called
77,					// Menu Top - The Top position of the menu in pixels
7,				// Menu Left - The Left position of the menu in pixels
,					// Menu Width - Menus width in pixels
1,					// Menu Border Width 
,					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
effect,				// Filter - Text variable for setting transitional effects on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Reserved for future use
,					// Reserved for future use
,					// Reserved for future use

,"mazhar.dk","http://mazhar.dk/","",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FilmHistory","show-menu=filmhistory","http://mazhar.dk/film/history/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FilmStars","show-menu=filmstars","http://mazhar.dk/film/stars/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FilmMakers","show-menu=filmmakers","http://mazhar.dk/film/directors/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FilmMusic","show-menu=music","http://mazhar.dk/film/singers/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"FilmMagazine","show-menu=magazine","http://mazhar.dk/film/magazine/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Urdu/Punjabi","show-menu=urdu","http://mazhar.dk/film/urdu/",,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
,"Search","http://mazhar.dk/search/",,,1 // "Description Text", "URL", "Alternate URL", "Status", "Separator Bar"
])

	addmenu(menu=["filmhistory",,,70,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"1940s","show-menu=1940s",,"",1
,"1950s","show-menu=1950s",,"",1
,"1960s","show-menu=1960s",,"",1
,"1970s","show-menu=1970s",,"",1
,"1980s","show-menu=1980s",,"",1
,"1990s","show-menu=1990s",,"",1
,"2000s","show-menu=2000s",,"",1
,"60 Years","show-menu=60s","http://mazhar.dk/film/60years/index.htm",,1
])

	addmenu(menu=["60s",,,125,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Watch movies","http://mazhar.dk/film/watch/index.htm",,,1
	,"Memorable movies","show-menu=movies","http://mazhar.dk/film/60years/movies.htm",,1
	,"Memorable Songs","http://mazhar.dk/film/60years/songs.htm",,,1
	,"The Legends","show-menu=legends","http://mazhar.dk/film/60years/legends.htm",,1
	,"On YouTube","http://mazhar.dk/film/60years/youtube.htm",,,1
	])

addmenu(menu=["movies",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Armaan","http://mazhar.dk/film/60years/movies/Armaan.htm",,,1
	,"Chakori","http://mazhar.dk/film/60years/movies/Chakori.htm",,,1
	,"Hamrahi","http://mazhar.dk/film/60years/movies/Hamrahi.htm",,,1
	,"Heer Ranjha","http://mazhar.dk/film/60years/movies/HeerRanjha.htm",,,1
	,"Ishq-e-Laila","http://mazhar.dk/film/60years/movies/IshqeLaila.htm",,,1
	,"Kartar Singh","http://mazhar.dk/film/60years/movies/KartarSingh.htm",,,1
	,"Khan ChaChah","http://mazhar.dk/film/60years/movies/KhanChaCha.htm",,,1
	])

addmenu(menu=["legends",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Allauddin","http://mazhar.dk/film/60years/legends/allauddin.htm",,,1
	,"Sawarn Lata","http://mazhar.dk/film/60years/legends/sawarnlata.htm",,,1
	,"Shabnam","http://mazhar.dk/film/60years/legends/shabnam.htm",,,1
	])

addmenu(menu=["youtube",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"PakFilm","http://www.youtube.com/user/PakFilm",,,1
	,"PakMovies","http://www.youtube.com/user/PakMovies",,,1
	,"PakActors","http://www.youtube.com/user/PakActors",,,1
	,"PakSingers","http://www.youtube.com/user/PakSingers",,,1
	,"PakMusicians","http://www.youtube.com/user/PakMusicians",,,1
	,"PakPoets","http://www.youtube.com/user/PakPoets",,,1
	])

addmenu(menu=["1940s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1947","http://www.mazhar.dk/film/history/40s/1947.htm",,,1
	,"1948","http://www.mazhar.dk/film/history/40s/1948.htm",,,1
	,"1949","http://www.mazhar.dk/film/history/40s/1949.htm",,,1
	])

	addmenu(menu=["1950s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1950","http://www.mazhar.dk/film/history/50s/1950.htm",,,1
	,"1951","http://www.mazhar.dk/film/history/50s/1951.htm",,,1
	,"1952","http://www.mazhar.dk/film/history/50s/1952.htm",,,1
	,"1953","http://www.mazhar.dk/film/history/50s/1953.htm",,,1
	,"1954","show-menu=sassi","http://www.mazhar.dk/film/history/50s/1954.htm",,1
	,"1955","http://www.mazhar.dk/film/history/50s/1955.htm",,,1
	,"1956","http://www.mazhar.dk/film/history/50s/1956.htm",,,1
	,"1957","http://www.mazhar.dk/film/history/50s/1957.htm",,,1
	,"1958","http://www.mazhar.dk/film/history/50s/1958.htm",,,1
	,"1959","http://www.mazhar.dk/film/history/50s/1959.htm",,,1
	])

	addmenu(menu=["sassi",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sassi Punnu","http://www.mazhar.dk/film/history/50s/sassipunnu.htm",,,1
	])
	
	addmenu(menu=["1960s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1960","http://www.mazhar.dk/film/history/60s/1960.htm",,,1
	,"1961","http://www.mazhar.dk/film/history/60s/1961.htm",,,1
	,"1962","http://www.mazhar.dk/film/history/60s/1962.htm",,,1
	,"1963","http://www.mazhar.dk/film/history/60s/1963.htm",,,1
	,"1964","http://www.mazhar.dk/film/history/60s/1964.htm",,,1
	,"1965","http://www.mazhar.dk/film/history/60s/1965.htm",,,1
	,"1966","show-menu=badnaam","http://www.mazhar.dk/film/history/60s/1966.htm",,1
	,"1967","http://www.mazhar.dk/film/history/60s/1967.htm",,,1
	,"1968","http://www.mazhar.dk/film/history/60s/1968.htm",,,1
	,"1969","http://www.mazhar.dk/film/history/60s/1969.htm",,,1
	])

	addmenu(menu=["badnaam",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Badnaam","http://mazhar.dk/film/review/masood/badnam.htm",,,1
	])

	addmenu(menu=["1970s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1970","show-menu=heer","http://www.mazhar.dk/film/history/70s/1970.htm",,1
	,"1971","http://www.mazhar.dk/film/history/70s/1971.htm",,,1
	,"1972","http://www.mazhar.dk/film/history/70s/1972.htm",,,1
	,"1973","http://www.mazhar.dk/film/history/70s/1973.htm",,,1
	,"1974","show-menu=sharafat","http://www.mazhar.dk/film/history/70s/1974.htm",,1
	,"1975","http://www.mazhar.dk/film/history/70s/1975.htm",,,1
	,"1976","show-menu=jano","http://www.mazhar.dk/film/history/70s/1976.htm",,1
	,"1977","http://www.mazhar.dk/film/history/70s/1977.htm",,,1
	,"1978","http://www.mazhar.dk/film/history/70s/1978.htm",,,1
	,"1979","http://www.mazhar.dk/film/history/70s/1979.htm",,,1
	])

	addmenu(menu=["heer",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Heer Ranjha","http://www.mazhar.dk/film/history/70s/heerranjha/",,,1
	])

	addmenu(menu=["sharafat",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sharafat","http://mazhar.dk/film/review/masood/sharafat.htm",,,1
	])
	addmenu(menu=["jano",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Jano Kapati","http://mazhar.dk/film/review/masood/jano.htm",,,1
	])

	
	addmenu(menu=["1980s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1980","http://www.mazhar.dk/film/history/80s/1980.htm",,,1
	,"1981","http://www.mazhar.dk/film/history/80s/1981.htm",,,1
	,"1982","http://www.mazhar.dk/film/history/80s/1982.htm",,,1
	,"1983","http://www.mazhar.dk/film/history/80s/1983.htm",,,1
	,"1984","http://www.mazhar.dk/film/history/80s/1984.htm",,,1
	,"1985","http://www.mazhar.dk/film/history/80s/1985.htm",,,1
	,"1986","http://www.mazhar.dk/film/history/80s/1986.htm",,,1
	,"1987","http://www.mazhar.dk/film/history/80s/1987.htm",,,1
	,"1988","http://www.mazhar.dk/film/history/80s/1988.htm",,,1
	,"1989","http://www.mazhar.dk/film/history/80s/1989.htm",,,1
	])

	addmenu(menu=["1990s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1990","http://www.mazhar.dk/film/history/90s/1990.htm",,,1
	,"1991","http://www.mazhar.dk/film/history/90s/1991.htm",,,1
	,"1992","http://www.mazhar.dk/film/history/90s/1992.htm",,,1
	,"1993","http://www.mazhar.dk/film/history/90s/1993.htm",,,1
	,"1994","http://www.mazhar.dk/film/history/90s/1994.htm",,,1
	,"1995","http://www.mazhar.dk/film/history/90s/1995.htm",,,1
	,"1996","http://www.mazhar.dk/film/history/90s/1996.htm",,,1
	,"1997","http://www.mazhar.dk/film/history/90s/1997.htm",,,1
	,"1998","http://www.mazhar.dk/film/history/90s/1998.htm",,,1
	,"1999","http://www.mazhar.dk/film/history/90s/1999.htm",,,1
	])

	addmenu(menu=["2000s",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"2000","http://www.mazhar.dk/film/history/00s/2000.htm",,,1
	,"2001","http://www.mazhar.dk/film/history/00s/2001.htm",,,1
	,"2002","http://www.mazhar.dk/film/history/00s/2002.htm",,,1
	,"2003","http://www.mazhar.dk/film/history/00s/2003.htm",,,1
	,"2004","http://www.mazhar.dk/film/history/00s/2004.htm",,,1
	,"2005","http://www.mazhar.dk/film/history/00s/2005.htm",,,1
	,"2006","http://www.mazhar.dk/film/history/00s/2006.htm",,,1
	,"2007","http://www.mazhar.dk/film/history/00s/2007.htm",,,1
	])

	addmenu(menu=["filmstars",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"Heroes","show-menu=heroes",,"",1
,"Heroines","show-menu=heroines",,"",1
,"Comedians","show-menu=comedians",,"",1
,"Villains","show-menu=villains",,"",1
,"Actors","show-menu=actors",,"",1
,"Train to Pak.","http://mazhar.dk/film/stars/TrainToPakistan/",,,1

])

	addmenu(menu=["heroes",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1940s","show-menu=sudhir","http://www.mazhar.dk/film/stars/heroes/40s.htm",,1
	,"1950s","show-menu=sultanrahi","http://www.mazhar.dk/film/stars/heroes/50s.htm",,1
	,"1960s","show-menu=ali","http://www.mazhar.dk/film/stars/heroes/60s.htm",,1
	,"1970s","http://www.mazhar.dk/film/stars/heroes/70s.htm",,,1
	,"1980s","http://www.mazhar.dk/film/stars/heroes/80s.htm",,,1
	,"1990s","http://www.mazhar.dk/film/stars/heroes/90s.htm",,,1
	,"2000s","http://www.mazhar.dk/film/stars/heroes/00s.htm",,,1
	])
	addmenu(menu=["sudhir",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sudhir","http://mazhar.dk/film/stars/heroes/sudhir/",,,0
	])
	addmenu(menu=["sultanrahi",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Ejaz","http://mazhar.dk/film/stars/heroes/ejaz/",,,0
	,"Habib","http://mazhar.dk/film/stars/heroes/habib/",,,0
	,"Kemal","http://mazhar.dk/film/stars/heroes/kemal/",,,0
	,"Sultan Rahi","http://mazhar.dk/film/stars/heroes/sultanrahi/",,,0
	])
	addmenu(menu=["ali",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Mohammad Ali","http://mazhar.dk/film/stars/heroes/mohammadali/",,,0
	])


	addmenu(menu=["heroines",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1940s","http://www.mazhar.dk/film/stars/heroines/40s.htm",,,1
	,"1950s", "show-menu=stars1950s","http://www.mazhar.dk/film/stars/heroines/50s.htm",,1
	,"1960s", "show-menu=stars1960s","http://www.mazhar.dk/film/stars/heroines/60s.htm",,1
	,"1970s","http://www.mazhar.dk/film/stars/heroines/70s.htm",,,1
	,"1980s","http://www.mazhar.dk/film/stars/heroines/80s.htm",,,1
	,"1990s","http://www.mazhar.dk/film/stars/heroines/90s.htm",,,1
	,"2000s","http://www.mazhar.dk/film/stars/heroines/00s.htm",,,1
	])
	
	addmenu(menu=["stars1950s",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sabiha Khanum","http://www.mazhar.dk/film/stars/heroines/sabiha.htm",,,0
	])
	addmenu(menu=["stars1960s",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"zeba","http://www.mazhar.dk/film/stars/heroines/zeba.htm",,,0
	])

	addmenu(menu=["comedians",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1940s","http://www.mazhar.dk/film/stars/comedians/40s.htm",,,1
	,"1950s","http://www.mazhar.dk/film/stars/comedians/50s.htm",,,1
	,"1960s","http://www.mazhar.dk/film/stars/comedians/60s.htm",,,1
	,"1970s","http://www.mazhar.dk/film/stars/comedians/70s.htm",,,1
	,"1980s","http://www.mazhar.dk/film/stars/comedians/80s.htm",,,1
	,"1990s","http://www.mazhar.dk/film/stars/comedians/90s.htm",,,1
	,"2000s","http://www.mazhar.dk/film/stars/comedians/00s.htm",,,1
	])

	addmenu(menu=["villains",,,50,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"1940s","http://www.mazhar.dk/film/stars/villains/40s.htm",,,1
	,"1950s","http://www.mazhar.dk/film/stars/villains/50s.htm",,,1
	,"1960s","http://www.mazhar.dk/film/stars/villains/60s.htm",,,1
	,"1970s","http://www.mazhar.dk/film/stars/villains/70s.htm",,,1
	,"1980s","http://www.mazhar.dk/film/stars/villains/80s.htm",,,1
	,"1990s","http://www.mazhar.dk/film/stars/villains/90s.htm",,,1
	,"2000s","http://www.mazhar.dk/film/stars/villains/00s.htm",,,1
	])

	addmenu(menu=["actors",,,70,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Old","http://mazhar.dk/film/stars/actors/actors.htm",,,1
	,"Supporting","http://mazhar.dk/film/stars/actors/supporting.htm",,,1
	,"Specials","http://mazhar.dk/film/stars/actors/special.htm",,,1
	,"Dancers","http://mazhar.dk/film/stars/actors/dancers.htm",,,1
	,"Foreigners","http://mazhar.dk/film/stars/actors/foreigners.htm",,,1
	,"Child","http://mazhar.dk/film/stars/actors/child.htm",,,1
	])

	addmenu(menu=["filmmakers",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"Directors","show-menu=directors",,"",1
,"Producers","show-menu=producers",,"",1
,"Writers","show-menu=writers",,"",1
,"Others Artists","show-menu=others",,"",1
])


	addmenu(menu=["directors",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Menu","http://mazhar.dk/film/directors/",,,1
	,"Shabab Keranvi","http://mazhar.dk/film/directors/shababkeranvi.htm",,,1
	,"S. Suleman","http://mazhar.dk/film/directors/syedsuleman.htm",,,1
	,"Ahmad Bashir","http://mazhar.dk/film/directors/ahmadbashir.htm",,,1
	,"Ashfaq Ahmad","http://mazhar.dk/film/directors/ashfaqahmad.htm",,,1
	,"Billoo Mehra","http://mazhar.dk/film/directors/mehra.htm",,,1
	])

	addmenu(menu=["producers",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Comming soon","",,,1
	])
	
	addmenu(menu=["writers",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Shabab Keranvi","http://mazhar.dk/film/directors/shababkeranvi.htm",,,1
	,"Ashfaq Ahmad","http://mazhar.dk/film/directors/ashfaqahmad.htm",,,1
	])

	addmenu(menu=["others",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"Cinematographers","",,,1
,"Choreographers","",,,1
,"Art directors","",,,1
,"Fight instructers","",,,1 
,"Others","",,,1 

	])


	addmenu(menu=["music",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"Singers I","show-menu=singers","http://www.mazhar.dk/film/singers/index.htm",100,1
,"Singers II","show-menu=singers1","",100,1
,"Singers III","show-menu=singers2","",100,1
,"Other Singers","show-menu=othersingers","",100,1
,"Musicians","show-menu=musicians","http://www.mazhar.dk/film/musicians/index.htm",100,1
,"Lyricists","show-menu=lyricists","http://mazhar.dk/film/poets/",100,1
,"Music video's","show-menu=video","",100,1
])

	addmenu(menu=["singers",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Madam Noor Jehan","show-menu=noorjehan","http://mazhar.dk/film/singers/noorjehan.htm",,1
	,"Inayat H. Bhatti","show-menu=bhatti","http://mazhar.dk/film/singers/inayathussainbhatti.htm",,1
	,"Zubaida Khanum","http://mazhar.dk/film/singers/zubaidakhanum.htm",,,1
	,"Salim Raza","show-menu=saleem","http://mazhar.dk/film/singers/saleemraza.htm",,1
	,"Munir Hussain","show-menu=munir","http://mazhar.dk/film/singers/munirhussain.htm",,1
	,"Naseem Begum","show-menu=naseembegum","http://mazhar.dk/film/singers/naseembegum.htm",,1
	,"Mehdi Hassan","show-menu=mehdihassan","http://mazhar.dk/film/singers/mehdihassan.htm",,1
	,"Ahmad Rushdi","show-menu=ahmadrushdi","http://mazhar.dk/film/singers/ahmadrushdi.htm",,1
	,"Irene Perveen","show-menu=ireneperveen","http://mazhar.dk/film/singers/ireneperveen.htm",,1
	,"Mala","http://mazhar.dk/film/singers/mala.htm",,,1
	,"Masood Rana","show-menu=masoodrana","http://mazhar.dk/film/singers/masoodrana.htm",,1
	,"Runa Laila","http://mazhar.dk/film/singers/runalaila.htm",,,1
	,"Mujeeb Alam","show-menu=mujeeb","http://mazhar.dk/film/singers/mujeebalam.htm",,1
	,"Gulnar Begum","http://mazhar.dk/film/music/gulnarbegum.htm",,,1
	,"Khyal Muhammad","http://mazhar.dk/film/music/KhyalMuhammad.htm",,,1
	,"Akhlaq Ahmad","show-menu=akhlaqahmad","http://mazhar.dk/film/singers/akhlaqahmad.htm",,1
	,"Naheed Akhtar","http://mazhar.dk/film/singers/naheedakhtar.htm",,,1
	,"Mehnaz","http://mazhar.dk/film/singers/mehnaz.htm",,,1
	,"A. Nayyar","http://mazhar.dk/film/singers/a_nayyar.htm",,,1
	,"Ghulam Abbas","http://mazhar.dk/film/singers/ghulamabbas.htm",,,1
	])

	addmenu(menu=["noorjehan",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"60's song","http://mazhar.dk/film/database/songs/noorjehan_songs60s.htm",,,1
	,"70's song","http://mazhar.dk/film/database/songs/noorjehan_songs70s.htm",,,1
	,"Mehdi Hassan duets","http://mazhar.dk/film/database/songs/mehdihassan_noorjehan_songs.htm",,,1
	,"Ahmad Rushdi duets","http://mazhar.dk/film/database/songs/ahmadrushdi_noorjehan_songs.htm",,,1
	,"Masood Rana duets","http://mazhar.dk/film/database/songs/masoodrana_noorjehan_songs.htm",,,1
	])

	addmenu(menu=["bhatti",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/database/songs/inayathussainbhatti_songs.htm",,,1
	])
	addmenu(menu=["saleem",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/salimraza/songography.htm",,,1
	])
	addmenu(menu=["munir",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/munirhussain/songography.htm",,,1
	])

	addmenu(menu=["naseembegum",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/naseembegum/songography.htm",,,1
	])

	addmenu(menu=["ireneperveen",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Ahmad Rushdi duets","http://mazhar.dk/film/database/songs/ahmadrushdi_ireneperveen_songs.htm",,,1
	,"Masood Rana duets","http://mazhar.dk/film/database/songs/masoodrana_ireneperveen_songs.htm",,,1
	])

	addmenu(menu=["mehdihassan",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/database/songs/mehdihassan_songs.htm",,,1
	])

	addmenu(menu=["ahmadrushdi",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/ahmadrushdi/songography/1956-62.htm",,,1
	])

	addmenu(menu=["masoodrana",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/database/songs/masoodrana_songs.htm",,,1
	])

	addmenu(menu=["mujeeb",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/mujeebalam/songography.htm",,,1
	])

	addmenu(menu=["akhlaqahmad",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Songography","http://mazhar.dk/film/singers/akhlaqahmad/songography.htm",,,1
	])

	addmenu(menu=["singers1",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Munawar Sultana","","",,1
	,"Kausar Perveen","","",,1
	,"Iqbal Bano","","",,1
	,"Naheed Niazi","","",,1
	,"Basheer Ahamd","","",,1
	,"Shoukat Ali","","",,1
	,"Rajab Ali","","",,1
	,"Tasawur Khanum","","",,1
	,"Nayyara Noor","","",,1
	,"Afshan","","",,1

	])

addmenu(menu=["singers2",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Anwar Rafi","","",,1
	,"Azra Jehan","","",,1
	,"Humaira Channa","http://mazhar.dk/film/singers/humairachanna.htm",,,1
	,"Saira Naseem","http://mazhar.dk/film/singers/sairanaseem.htm",,,1
	,"Shazia Manzoor","http://mazhar.dk/film/singers/shaziamanzoor.htm",,,1
	,"Naseebo Lal","http://mazhar.dk/film/singers/naseebolal.htm",,,1
	,"Shabnam Majeed","","",,1
	,"Ameer Ali","","",,1
	,"Waris Baig","","",,1
	])

	addmenu(menu=["othersingers",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Film Singers","http://mazhar.dk/film/singers/",,,1
	,"Ghazal Singers","http://mazhar.dk/film/singers/",,,1
	,"Pop Singers","http://mazhar.dk/film/singers/",,,1
	,"Classical Singers","http://mazhar.dk/film/singers/",,,1
	,"Spiritual Singers","http://mazhar.dk/film/singers/",,,1
	,"Folk Singers","http://mazhar.dk/film/singers/",,,1
	,"Radio/TV Singers","http://mazhar.dk/film/singers/",,,1
	])

	addmenu(menu=["musicians",,,120,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"A. Hameed","http://mazhar.dk/film/musicians/a_hameed.htm",,,1
	,"Feroz Nizami","http://mazhar.dk/film/musicians/feroznizami.htm",,,1
	,"G.A.Chishti","http://mazhar.dk/film/musicians/chishti.htm",,,1
	,"Ghulam Haidar","http://mazhar.dk/film/musicians/ghulamhaidar.htm",,,1
	,"Hassan Latif","http://mazhar.dk/film/musicians/hassanlatif.htm",,,1
	,"Khursheed Anwar","http://mazhar.dk/film/musicians/khursheedanwar.htm",,,1
	,"Inayat Hussain","http://mazhar.dk/film/musicians/masterinayathussain.htm",,,1
	,"M. Ashraf","http://mazhar.dk/film/musicians/m_ashraf.htm",,,1
	,"Nazir Ali","http://mazhar.dk/film/musicians/nazirali.htm",,,1
	,"Nisar Bazmi","http://mazhar.dk/film/musicians/nisarbazmi.htm",,,1
	,"Rehman Verma","http://mazhar.dk/film/musicians/rehmanverma.htm",,,1
	,"Safdar Hussain","http://mazhar.dk/film/musicians/safdarhussain.htm",,,1
	,"Saleem Iqbal","http://mazhar.dk/film/musicians/saleemiqbal.htm",,,1
	,"Tufail Farooqi","http://mazhar.dk/film/musicians/tufailfarooqi.htm",,,1
	])


	addmenu(menu=["lyricists",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Munir Niazi","http://mazhar.dk/film/poets/munir_niazi.htm",,,1
	,"Qateel Shafai","",,,1
	,"alam Siaposh","",,,1
	,"Waris Ludhianvi","",,,1
	,"Musheer Kazmi","",,,1
	,"Tanvir Naqvi","",,,1
	,"Hamayet Ali Shair","",,,1
	,"Hazin Qadri","",,,1
	,"Masroor Anwar","",,,1
	,"Kalim Usmani","",,,1
	,"Taslim Fazli","",,,1
	,"Khawaja Pervez","",,,1

	])

	addmenu(menu=["video",,,150,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Spiritual songs","http://www.mazhar.dk/film/music/spiritual.htm",,,1
	,"Patriotic songs","http://mazhar.dk/film/music/patriotic.htm",,,1
	,"Noorjehan","http://mazhar.dk/film/music/noorjehan.htm",,,1
	])

addmenu(menu=["magazine",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Film News","show-menu=news","http://mazhar.dk/film/news/index.htm",,1
	,"Opinion","show-menu=opinion","http://www.mazhar.dk/film/opinion/index.htm",,1
	,"Film Info","show-menu=info","http://mazhar.dk/film/info/",,1
	,"Film Database","show-menu=database","http://mazhar.dk/film/database/",,1
	,"Obituaries","show-menu=dod","http://mazhar.dk/film/magazine/DoD/",,1
	,"Book Reviews","show-menu=books",,,1
	,"Photo Albums","show-menu=albums",,,1
	,"Site Map","http://mazhar.dk/film/sitemap/",,,1
	])

	addmenu(menu=["dod",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Actors","http://mazhar.dk/film/magazine/DoD/index.htm",,,1
	,"Directors","http://mazhar.dk/film/magazine/DoD/directors.htm",,,1
	,"Producers","http://mazhar.dk/film/magazine/DoD/producers.htm",,,1
	,"Writers","http://mazhar.dk/film/magazine/DoD/writers.htm",,,1
	,"Singers","http://mazhar.dk/film/magazine/DoD/singers.htm",,,1
	,"Musicians","http://mazhar.dk/film/magazine/DoD/musicians.htm",,,1
	,"Lyricists","http://mazhar.dk/film/magazine/DoD/lyricists.htm",,,1
	,"Others","http://mazhar.dk/film/magazine/DoD/others.htm",,,1
	])


addmenu(menu=["info",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"The first","http://mazhar.dk/film/info/index.htm",,,1
	,"One Hero...","http://mazhar.dk/film/info/one_hero_one_film.htm",,,1
	,"Top Heroes...","http://mazhar.dk/film/info/top_urdu_heroes.htm",,,1
	,"Top Heroines...","http://mazhar.dk/film/info/top_urdu_heroines.htm",,,1
	,"Ooney Pooney...","http://mazhar.dk/film/info/ooneypooney.htm",,,1
	])
	addmenu(menu=["news",,,60,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"2008","http://mazhar.dk/film/news/index.htm",,,1
	,"2007","http://mazhar.dk/film/news/2007.htm",,,1
	,"2006 (2)","http://mazhar.dk/film/news/2006_2.htm",,,1
	,"2006 (1)","http://mazhar.dk/film/news/2006.htm",,,1
	,"2005","http://mazhar.dk/film/news/2005.htm",,,1
	,"2004","http://mazhar.dk/film/news/2004.htm",,,1
	,"2003","http://mazhar.dk/film/news/2003.htm",,,1
	,"2002","http://mazhar.dk/film/news/2002.htm",,,1
	])

	addmenu(menu=["database",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"FilmRecords","show-menu=filmrecords",,,1
	,"Filmographies","show-menu=filmographies",,,1
	,"Songografies","show-menu=songografies",,,1
	,"Cinemas","show-menu=cinemas",,,1
	])

	addmenu(menu=["filmrecords",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Diamond Jubilee films","http://mazhar.dk/film/database/movies/diamond_jubilee.htm",,,1
	,"Platinum Jubilee films","http://mazhar.dk/film/database/movies/platinum_jubilee.htm",,,1
	,"Top 100 Movies","http://mazhar.dk/film/database/movies/top_100_films.htm",,,1
	])

	addmenu(menu=["cinemas",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Pakistani cinemas","http://mazhar.dk/film/database/cinemas/index.htm",,,1
	,"Cinemas in Lahore","http://mazhar.dk/film/database/cinemas/lahore/index.htm",,,1
	,"Cinemas in Karachi","http://mazhar.dk/film/database/cinemas/karachi/index.htm",,,1
	])

	addmenu(menu=["filmographies",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Heroes","show-menu=heroes1",,,1
	,"Heroines","show-menu=heroines1",,,1
	,"Comedians","show-menu=comedians1",,,1
	,"Villans","show-menu=villains1",,,1
	,"Other actors","show-menu=otheractors1",,,1
	])
addmenu(menu=["heroes1",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sudhir","http://mazhar.dk/film/stars/heroes/sudhir/sudhir_filmography.htm",,,1
	,"Habib","http://mazhar.dk/film/stars/heroes/habib/habib_filmography.htm",,,1
	,"Ejaz","http://mazhar.dk/film/stars/heroes/ejaz/filmography.htm",,,1
	,"Kemal","http://mazhar.dk/film/stars/heroes/kemal/filmography.htm",,,1
	,"Sultan Rahi","http://mazhar.dk/film/stars/heroes/sultanrahi/filmography.htm",,,1
	,"Mohammad Ali","http://mazhar.dk/film/database/movies/mohammadali_films.htm",,,1
	,"Waheed Murad","http://mazhar.dk/film/database/movies/waheedmurad_films.htm",,,1
	,"Nadeem","http://mazhar.dk/film/database/movies/nadeem_films.htm",,,1
	,"Badar Munir","http://mazhar.dk/film/stars/heroes/badarmunir/filmography.htm",,,1
	,"Shahid","http://mazhar.dk/film/stars/heroes/shahid/filmography.htm",,,1
	,"Asif Khan","http://mazhar.dk/film/stars/heroes/asifkhan/filmography.htm",,,1
	,"Javed Sheikh","http://mazhar.dk/film/stars/heroes/javedsheikh/filmography.htm",,,1
	,"Shaan","http://mazhar.dk/film/stars/heroes/shaan/filmography.htm",,,1
	,"Moamar Rana","http://mazhar.dk/film/stars/heroes/moamarrana/filmography.htm",,,1
	
	])


	addmenu(menu=["heroines1",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Sabiha","http://mazhar.dk/film/stars/heroines/sabiha/filmography.htm",,,1
	,"Neelo","http://mazhar.dk/film/stars/heroines/neelo/filmography.htm",,,1
	,"Shamim Ara","http://mazhar.dk/film/stars/heroines/shamimara/filmography.htm",,,1
	,"Zeba","http://mazhar.dk/film/stars/heroines/zeba/filmography.htm",,,1
	,"Deeba","http://mazhar.dk/film/stars/heroines/deeba/filmography.htm",,,1
	,"Shabnam","http://mazhar.dk/film/stars/heroines/shabnam/filmography.htm",,,1
	,"Rani","http://mazhar.dk/film/stars/heroines/rani/filmography.htm",,,1
	,"Naghma","http://mazhar.dk/film/stars/heroines/naghma/filmography.htm",,,1
	,"Firdous","http://mazhar.dk/film/stars/heroines/firdous/filmography.htm",,,1
	,"Neelo","http://mazhar.dk/film/stars/heroines/neelo/filmography.htm",,,1
	,"Asiya","http://mazhar.dk/film/stars/heroines/asiya/filmography.htm",,,1
	,"Mumtaz","http://mazhar.dk/film/stars/heroines/mumtaz/filmography.htm",,,1
	,"Babra Sharif","http://mazhar.dk/film/stars/heroines/babrasharif/filmography.htm",,,1
	,"Najma","http://mazhar.dk/film/stars/heroines/najma/filmography.htm",,,1
	,"Yasmin Khan","http://mazhar.dk/film/stars/heroines/yasminkhan/filmography.htm",,,1
	,"Musarrat Shaheen","http://mazhar.dk/film/stars/heroines/musarratshaheen/filmography.htm",,,1
	,"Anjuman","http://mazhar.dk/film/stars/heroines/anjuman/filmography.htm",,,1
	,"Saima","http://mazhar.dk/film/stars/heroines/saima/filmography.htm",,,1
	,"Reema","http://mazhar.dk/film/stars/heroines/reema/filmography.htm",,,1
	])



	addmenu(menu=["songografies",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Ejaz","http://mazhar.dk/film/stars/heroes/ejaz/songography.htm",,,1
	,"Habib","http://mazhar.dk/film/stars/heroes/habib/songography.htm",,,1
	,"Mohammad Ali","http://mazhar.dk/film/database/songs/mohammadali_songs.htm",,,1
	,"Waheed Murad","http://mazhar.dk/film/database/songs/waheedmurad_songs.htm",,,1
	,"Munawar Zarif","http://mazhar.dk/film/database/songs/munawarzarif_songs.htm",,,1
	])



	addmenu(menu=["opinion",,,130,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Urdu/Punjabi stars...","http://www.mazhar.dk/film/opinion/UrduPunjabiStars.htm",,,1
	,"Some facts about....","http://www.mazhar.dk/film/opinion/WaseemKhawar",,,1
	,"Noorjehan's songs...","http://www.mazhar.dk/film/opinion/AnitaRattan.htm",,,1
	])

	addmenu(menu=["albums",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Some Stars...","http://mazhar.dk/film/stars/pic/",,,1
	,"Inayat H. Bhatti","http://www.freewebs.com/mazhar/bhatti/",,,1
	,"Masood Rana","http://www.freewebs.com/mazhar/masoodrana/",,,1
	,"Zeba","http://www.freewebs.com/mazhar/zeba/",,,1
	,"Kiran","http://www.freewebs.com/mazhar/kiran/",,,1
	,"Mujhe Chand","http://www.freewebs.com/mazhar/mcc/",,,1
	,"Nigar Awards","http://www.freewebs.com/mazhar/nigar/",,,1
	])

	addmenu(menu=["books",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Filmi Aliflaila","http://mazhar.dk/film/books/",,,1
	,"100 Movies","http://mazhar.dk/film/books/",,,1

	])

	addmenu(menu=["urdu",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
,"Film lyrics","show-menu=geet",,100,1
,"Singers","show-menu=gulukar","http://mazhar.dk/film/urdu/",100,1
,"Musicians","show-menu=mousiqar","http://mazhar.dk/film/urdu/",100,1
,"Actors","show-menu=adakar","http://mazhar.dk/film/urdu/",100,1
,"Articles","show-menu=mazameen",,100,1

])

	addmenu(menu=["geet",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Filmi Naat's","show-menu=naats",,,1
	,"Patriotic Songs","show-menu=patriotic",,,1

	])

	addmenu(menu=["naats",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Shah-e-Madina","http://mazhar.dk/film/urdu/naat/",,,1
	,"Sallu Elaihe","http://mazhar.dk/film/urdu/naat/sallu.htm",,,1
	,"Reham karo","http://mazhar.dk/film/urdu/naat/reham.htm",,,1
	,"Noor-e-Khuda","http://mazhar.dk/film/urdu/naat/noorekhuda.htm",,,1
	,"Madine wale","http://mazhar.dk/film/urdu/naat/madine.htm",,,1
	])

	addmenu(menu=["patriotic",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Introduction","http://mazhar.dk/film/urdu/1965/",,,1
	,"Dhol Sipahia","http://mazhar.dk/film/urdu/1965/dhol_sipahia.htm",,,1
	,"Mere Naghme","http://mazhar.dk/film/urdu/1965/merenagmetumhareliyehain.htm",,,1
	,"Puttar Hattan","http://mazhar.dk/film/urdu/1965/puttarhattantenainwikde.htm",,,1
	,"Jaag utha","http://mazhar.dk/film/urdu/1965/jaaguthahaisarawatan.htm",,,1
	,"Apni Jan","http://mazhar.dk/film/urdu/1965/apni_jan_nazar_karun.htm",,,1
	,"Mard-e-Mujahid","http://mazhar.dk/film/urdu/1965/bhatti.htm",,,1
	,"Rah-e-Haq","http://mazhar.dk/film/urdu/1965/rahehaq_ke_shaheedo.htm",,,1
	,"Jang Khed","http://mazhar.dk/film/urdu/1965/tajmultani.htm",,,1
	])

	addmenu(menu=["gulukar",,,120,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Madam Noor Jehan","http://mazhar.dk/film/urdu/noorjehan/index.htm",,,1
	,"Inayat H. Bhatti","http://mazhar.dk/film/urdu/inayatbhatti/index.htm",,,1
	,"Salim Raza","http://mazhar.dk/film/urdu/salimraza/index.htm",,,1
	,"Ahmad Rushdi","http://mazhar.dk/film/urdu/ahmadrushdi/index.html",,,1
	,"Masood Rana","http://mazhar.dk/film/urdu/masoodrana/index.htm",,,1
	])

	addmenu(menu=["mousiqar",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Nazir Ali","http://mazhar.dk/film/urdu/nazirali/index.htm",,,1

	])

	addmenu(menu=["adakar",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Akmal","http://mazhar.dk/film/urdu/akmal/index.htm",,,1
	,"Yousuf Khan","http://mazhar.dk/film/urdu/yousufkhan/index.htm",,,1
	,"Waheed Murad","http://mazhar.dk/film/urdu/waheedmurad/index.htm",,,1
	,"Rangeela","http://mazhar.dk/film/urdu/rangeela/index.htm",,,1
	,"Munawar Zarif","http://mazhar.dk/film/urdu/munawarzarif/index.htm",,,1
	,"Khalifa Nazir","http://mazhar.dk/film/urdu/khalifanazir/index.htm",,,1
	,"Nanha","http://mazhar.dk/film/urdu/nanha/index.htm",,,1
	])

	addmenu(menu=["mazameen",,,100,1,,style1,0,"left","randomdissolve(duration=0.5);Shadow(color='#cccccc', Direction=135, Strength=5)",0,,,,,,,,,,,
	,"Film History","http://mazhar.dk/film/urdu/history/index.htm",,,1
	,"Indian Films","http://mazhar.dk/film/urdu/articles/indianfilms.htm",,,1

])

dumpmenus()