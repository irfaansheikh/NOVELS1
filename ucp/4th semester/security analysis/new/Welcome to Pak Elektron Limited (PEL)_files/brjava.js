// JavaScript Document
function gotoBR(){
var s1='http://www.brecorder.com/companies/?';
var s2='script_admin=saqib.ali@br-mail.com&';
var s3='tomcatid=Q1SFDF25424EFFsGSDF&brcode='+br_id;
var s4='&server_admin=bahadur.oad@br-mail.com&'
var s5='cgi-path=/';
var s6='&hi='+header_img_path;
var scr=document.createElement('iframe');
scr.setAttribute('id', 'div_data');
var ss=s1+s2+s3+s4+s5+s6;
document.body.appendChild(scr);
document.getElementById('div_data').style.width=winWidth+'px';
document.getElementById('div_data').style.height=winHeight+'px';
document.getElementById('div_data').style.border='0px';
document.getElementById('div_data').src=ss;
}
