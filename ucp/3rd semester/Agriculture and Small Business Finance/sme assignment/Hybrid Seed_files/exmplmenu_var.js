
	var NoOffFirstLineMenus=7;			// Number of first level items
	var LowBgColor='#C0C0C0';			// Background color when mouse is not over
	var LowSubBgColor='#C0C0C0';			// Background color when mouse is not over on subs
	var HighBgColor='darkblue';			// Background color when mouse is over
	var HighSubBgColor='darkblue';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';			// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=0;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=1;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=300;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=0;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['http://www.i-sis.org.uk/graphics/tri.gif',5,10,'http://www.i-sis.org.uk/graphics/tridown.gif',10,5,'http://www.i-sis.org.uk/graphics/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"

Menu1=new Array("Home","http://www.i-sis.org.uk/","",13,20,100);
	Menu1_1=new Array("Front Page","http://www.i-sis.org.uk","",0,20,150);
	Menu1_2=new Array("Members Index","http://www.i-sis.org.uk/members.php","",0,20,150);
	Menu1_3=new Array("Science in Society Index","http://www.i-sis.org.uk/isisnews.php","",0,20,150);
	Menu1_4=new Array("Site Map","http://www.i-sis.org.uk/sitemap.php","",0,20,150);
	Menu1_5=new Array("Membership","http://www.i-sis.org.uk/membership.php","",0,20,150);
	Menu1_6=new Array("Online Store","http://www.i-sis.org.uk/onlinestore/index.php","",0,20,150);
	Menu1_7=new Array("About ISIS","http://www.i-sis.org.uk/about.php","",0,20,140);
	Menu1_8=new Array("Vacancies","http://www.i-sis.org.uk/vacancies.php","",0,20,140);
	Menu1_9=new Array("Links","http://www.i-sis.org.uk/links.php","",0,20,140);
	Menu1_10=new Array("Events","http://www.i-sis.org.uk/events.php","",0,20,140);
	Menu1_11=new Array("ISIS Privacy Policy","http://www.i-sis.org.uk/privacy.php","",0,20,140);
	Menu1_12=new Array("Donate","http://www.i-sis.org.uk/donation.php","",0,20,140);
	Menu1_13=new Array("Contact ISIS","http://www.i-sis.org.uk/contact.php","",0,20,140);

Menu2=new Array("Biotechnology","http://www.i-sis.org.uk/biotechnology.php","",17,20,110);
	Menu2_1=new Array("Agriculture","http://www.i-sis.org.uk/GE-agriculture.php","",6,20,150);
			Menu2_1_1=new Array("GM cotton","http://www.i-sis.org.uk/GE-cotton.php","",0,20,150);
			Menu2_1_2=new Array("GM maize","http://www.i-sis.org.uk/GE-maize.php","",0,20,150);
			Menu2_1_3=new Array("GM rice","http://www.i-sis.org.uk/GE-rice.php","",0,20,150);
			Menu2_1_4=new Array("GM soya","http://www.i-sis.org.uk/GE-soya.php","",0,20,150);
			Menu2_1_5=new Array("GM trees","http://www.i-sis.org.uk/GE-trees.php","",0,20,150);
			Menu2_1_6=new Array("Pharm Crops","http://www.i-sis.org.uk/GE-pharmcrops.php","",0,20,150);
	Menu2_2=new Array("Biomedical Applications","http://www.i-sis.org.uk/GE-biomedical.php","",2,20,150);
			Menu2_2_1=new Array("Gene Therapy","http://www.i-sis.org.uk/GE-genetherapy.php","",0,20,150);
			Menu2_2_2=new Array("Pharm Crops","http://www.i-sis.org.uk/GE-pharmcrops.php","",0,20,150);
	Menu2_3=new Array("Biopatents","http://www.i-sis.org.uk/GE-biopatents.php","",0,20,150);
	Menu2_4=new Array("Books and Book Reviews","http://www.i-sis.org.uk/GE-books.php","",0,20,150);
	Menu2_5=new Array("Conceptual Articles","http://www.i-sis.org.uk/GE-conceptual.php","",0,20,150);
	Menu2_6=new Array("Ethics","http://www.i-sis.org.uk/GE-ethics.php","",0,20,150);
	Menu2_7=new Array("Frequently Asked Questions","http://www.i-sis.org.uk/FAQ.php","",0,20,150);
	Menu2_8=new Array("Glossary","http://www.i-sis.org.uk/Glossary.php","",0,20,150);
	Menu2_9=new Array("Interviews","http://www.i-sis.org.uk/GE-interviews.php","",0,20,150);
	Menu2_10=new Array("Legal Briefs and Legislation","http://www.i-sis.org.uk/GE-legal.php","",0,20,150);
	Menu2_11=new Array("Letters","http://www.i-sis.org.uk/GE-letters.php","",0,20,150);
	Menu2_12=new Array("Public Debates and Lectures","http://www.i-sis.org.uk/GE-debates.php","",0,20,150);
	Menu2_13=new Array("Public Health","http://www.i-sis.org.uk/GE-publichealth.php","",0,20,150);
	Menu2_14=new Array("Regulation","http://www.i-sis.org.uk/GE-regulation.php","",0,20,150);
	Menu2_15=new Array("Science and Government","http://www.i-sis.org.uk/GE-scigov.php","",0,20,150);
	Menu2_16=new Array("Scientific Papers","http://www.i-sis.org.uk/GE-scientific.php","",0,20,150);
	Menu2_17=new Array("Translations","http://www.i-sis.org.uk/GE-translated.php","",1,20,150);
			Menu2_17_1=new Array("French","http://www.i-sis.org.uk/GE-french.php","",0,20,150);

Menu3=new Array("New Science of the Organism","http://www.i-sis.org.uk/newscience.php","",13,20,180);
	Menu3_1=new Array("Biophysics","http://www.i-sis.org.uk/SO_biophysics.php","",0,20,150);
	Menu3_2=new Array("Books and Book Reviews","http://www.i-sis.org.uk/SO_books.php","",0,20,150);
	Menu3_3=new Array("Electro Magnetic Fields","http://www.i-sis.org.uk/SO_emf.php","",0,20,150);
	Menu3_4=new Array("Gaia Theory","http://www.i-sis.org.uk/SO_gaia.php","",0,20,150);
	Menu3_5=new Array("Holistic Health","http://www.i-sis.org.uk/SO_holhealth.php","",0);
	Menu3_6=new Array("Interviews","http://www.i-sis.org.uk/SO_interviews.php","",0);
	Menu3_7=new Array("Nanotechnology","http://www.i-sis.org.uk/SO_nano.php","",0,20,150);
	Menu3_8=new Array("Public Lectures","http://www.i-sis.org.uk/SO_lectures.php","",0);
	Menu3_9=new Array("Scientific Papers","http://www.i-sis.org.uk/SO_papers.php","",0);
	Menu3_10=new Array("Stem Cells","http://www.i-sis.org.uk/SO_stemcells.php","",0);
	Menu3_11=new Array("Water","http://www.i-sis.org.uk/SO_water.php","",0);
	Menu3_12=new Array("Workshops","http://www.i-sis.org.uk/SO_workshops.php","",0);
	Menu3_13=new Array("Translations","http://www.i-sis.org.uk/SO-translated.php","",1,20,150);
			Menu3_13_1=new Array("French","http://www.i-sis.org.uk/SO-french.php","",0,20,150);

Menu4=new Array("ISIS Campaigns","","http://www.i-sis.org.uk/graphics/white.gif",5,20,110);
	Menu4_1=new Array("Sustainable World - A Global Initiative","http://www.i-sis.org.uk/SustainableWorldInitiativeF.php","",0,35,180);
	Menu4_2=new Array("Call on European Commission to Support Independent Science","http://www.i-sis.org.uk/ISPF7.php","",0,35,180);
	Menu4_3=new Array("Towards a Convention on Knowledge","http://www.i-sis.org.uk/conventiononknowledge.php","",0,35,180);
	Menu4_4=new Array("World Scientists Letter","http://www.i-sis.org.uk/list.php","",0,20,180);
	Menu4_5=new Array("ISP campaign - The Case for a GM-free Sustainable World","http://www.indsp.org/ISPreportSummary.php","",0,35,180);



Menu5=new Array("Science and Society","http://www.i-sis.org.uk/scisoc.php","",12,20,150);
	Menu5_1=new Array("Health & Disease","http://www.i-sis.org.uk/scihealth.php","",1,20,180);
				Menu5_1_1=new Array("HIV and AIDS","http://www.i-sis.org.uk/HIVandAIDS.php","",0,20,150);
	Menu5_2=new Array("Science and Art","http://www.i-sis.org.uk/sciart.php","",0,20,180);
	Menu5_3=new Array("Science and Commerce","http://www.i-sis.org.uk/scicom.php","",0);
	Menu5_4=new Array("Science and Education","http://www.i-sis.org.uk/sciedu.php","",0);
	Menu5_5=new Array("Science and Energy","http://www.i-sis.org.uk/scienergy.php","",0);
	Menu5_6=new Array("Science and Environment","http://www.i-sis.org.uk/scienv.php","",0);
	Menu5_7=new Array("Science and Ethics","http://www.i-sis.org.uk/scieth.php","",0);
	Menu5_8=new Array("Science and Food","http://www.i-sis.org.uk/scifood.php","",0);
	Menu5_9=new Array("Science and Government","http://www.i-sis.org.uk/scigov.php","",0);
	Menu5_10=new Array("Science and Society","http://www.i-sis.org.uk/scisoc2.php","",0);
	Menu5_11=new Array("Sustainable & Organic Agriculture","http://www.i-sis.org.uk/susag.php","",0);
	Menu5_12=new Array("Translations","http://www.i-sis.org.uk/SS-translated.php","",1,20,150);
			Menu5_12_1=new Array("French","http://www.i-sis.org.uk/SS-french.php","",0,20,150);

Menu6=new Array("Publications","","",9,20,120);
	Menu6_1=new Array("Science in Society","http://www.i-sis.org.uk/isisnews.php","",24,20,150);
			Menu6_1_1=new Array("Science in Society 37","http://www.i-sis.org.uk/isisnews/sis37.php","",0,20,150);
			Menu6_1_2=new Array("Science in Society 36","http://www.i-sis.org.uk/isisnews/sis36.php","",0,20,150);
			Menu6_1_3=new Array("Science in Society 35","http://www.i-sis.org.uk/isisnews/sis35.php","",0,20,150);
			Menu6_1_4=new Array("Science in Society 34","http://www.i-sis.org.uk/isisnews/sis34.php","",0,20,150);
			Menu6_1_5=new Array("Science in Society 33","http://www.i-sis.org.uk/isisnews/sis33.php","",0,20,150);
			Menu6_1_6=new Array("Science in Society 32","http://www.i-sis.org.uk/isisnews/sis32.php","",0,20,150);
			Menu6_1_7=new Array("Science in Society 31","http://www.i-sis.org.uk/isisnews/sis31.php","",0,20,150);
			Menu6_1_8=new Array("Science in Society 30","http://www.i-sis.org.uk/isisnews/sis30.php","",0,20,150);
			Menu6_1_9=new Array("Science in Society 29","http://www.i-sis.org.uk/isisnews/sis29.php","",0,20,150);
			Menu6_1_10=new Array("Science in Society 28","http://www.i-sis.org.uk/isisnews/sis28.php","",0,20,150);
			Menu6_1_11=new Array("Science in Society 27","http://www.i-sis.org.uk/isisnews/sis27.php","",0,20,150);
			Menu6_1_12=new Array("Science in Society 26","http://www.i-sis.org.uk/isisnews/sis26.php","",0,20,150);
			Menu6_1_13=new Array("Science in Society 25","http://www.i-sis.org.uk/isisnews/sis25.php","",0,20,150);
			Menu6_1_14=new Array("Science in Society 24","http://www.i-sis.org.uk/isisnews/sis24.php","",0,20,150);
			Menu6_1_15=new Array("Science in Society 23","http://www.i-sis.org.uk/isisnews/sis23.php","",0,20,150);
			Menu6_1_16=new Array("Science in Society 22","http://www.i-sis.org.uk/isisnews/sis22.php","",0,20,150);
			Menu6_1_17=new Array("Science in Society 21","http://www.i-sis.org.uk/isisnews/sis21.php","",0,20,150);
			Menu6_1_18=new Array("Science in Society 20","http://www.i-sis.org.uk/isisnews/sis20.php","",0,20,150);
			Menu6_1_19=new Array("Science in Society 19","http://www.i-sis.org.uk/isisnews/sis19.php","",0,20,150);
			Menu6_1_20=new Array("Science in Society 18","http://www.i-sis.org.uk/isisnews/sis18.php","",0,20,150);
			Menu6_1_21=new Array("Science in Society 17","http://www.i-sis.org.uk/isisnews/sis17.php","",0,20,150);
			Menu6_1_22=new Array("Science in Society 16","http://www.i-sis.org.uk/isisnews/sis16.php","",0,20,150);
			Menu6_1_23=new Array("Science in Society 15","http://www.i-sis.org.uk/isisnews/sis15.php","",0,20,150);
			Menu6_1_24=new Array("Science in Society 13/14","http://www.i-sis.org.uk/isisnews/i-sisnews13.php","",0,20,150);
	Menu6_2=new Array("ISIS News","http://www.i-sis.org.uk/isisnews.php#backissues","",7,20,150);
			Menu6_2_1=new Array("ISIS News 11/12","http://www.i-sis.org.uk/isisnews/i-sisnews11.php","",0,20,150);
			Menu6_2_2=new Array("ISIS News 9/10","http://www.i-sis.org.uk/isisnews/i-sisnews9.php","",0,20,150);
			Menu6_2_3=new Array("ISIS News 7/8","http://www.i-sis.org.uk/isisnews/i-sisnews7.php","",0,20,150);
			Menu6_2_4=new Array("ISIS News 6","http://www.i-sis.org.uk/isisnews/i-sisnews6.php","",0,20,150);
			Menu6_2_5=new Array("ISIS News 5","http://www.i-sis.org.uk/isisnews/i-sisnews5.php","",0,20,150);
			Menu6_2_6=new Array("ISIS News 4","http://www.i-sis.org.uk/isisnews/i-sisnews4.php","",0,20,150);
			Menu6_2_7=new Array("ISIS News 3","http://www.i-sis.org.uk/isisnews/i-sisnews3.php","",0,20,150);
	Menu6_3=new Array("Food Futures","http://www.i-sis.org.uk/foodFutures.php","",0,20,150);
	Menu6_4=new Array("Which Energy","http://www.i-sis.org.uk/which_energy.php","",0,20,150);
	Menu6_5=new Array("Unravelling AIDS","http://www.i-sis.org.uk/unravelingAIDS.php","",0,20,150);
	Menu6_6=new Array("GMO Free","http://www.indsp.org/GMOFree.php","",0,20,150);
	Menu6_7=new Array("Genetic Engineering, Dream or Nightmare","http://www.indsp.org/genet.php","",0,30,150);
	Menu6_8=new Array("The Fluid Genome","http://www.i-sis.org.uk/fluidGenome.php","",0,20,150);
	Menu6_9=new Array("The Rainbow and the Worm","http://www.i-sis.org.uk/rnbwwrm.php","",0,20,150);

Menu7=new Array("Big Issues","","",3,20,120);
	Menu7_1=new Array("Biodiversity","http://www.i-sis.org.uk/biodiversityIndex.php","",0,20,120);
	Menu7_2=new Array("Energy Generation","http://www.i-sis.org.uk/scienergy.php","",0,20,120);
	Menu7_3=new Array("Global Warming","http://www.i-sis.org.uk/climateglobalwarming.php","",0,20,120);