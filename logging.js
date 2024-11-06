let confirmlogout=confirm("are u sure u want to log out")
if(confirmlogout){
    alert("logging you out...")
    setTimeout(function(){
        alert("you have been logged out")
    },2000)
}
else{
    alert("logout cancelled.enjoy streaming")
}