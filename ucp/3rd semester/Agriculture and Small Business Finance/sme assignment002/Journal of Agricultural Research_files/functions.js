<!---- === Confirm Delete Submit Button === ----->
function confirmSubmit(x)
{
if (confirm(x))
return true ;
else
return false ;
}

<!---- === Open Popup Window === ----->
function Start(page,features) {
OpenWin = this.open(page, "new", features);
}

<!---- === Confirm Delete Link === ----->
function go_there(delthis) {
if(confirm("Do you really want to delete this record"))
window.location=delthis;
}

<!---- === Addprod.asp Delete product === ----->
function del_product(delthis) {
if(confirm("Do you really want to delete this product"))
window.location=delthis;
}

<!---- === Refresh the parent window == -->
function out()
{
window.opener.location.reload()
}

<!---- === Confirm Delete Database === ----->
function deletedb(delthis) {
if(confirm("Do you really want to delete this database"))
window.location=delthis;
}
