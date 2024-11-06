let ridetype=prompt("choose your ride:uberX,uberXL,uber Black","uberX")
let confirmation=confirm("your selected"+ridetype+"Do you want to confirm the booking?")
if(confirmation){
    alert("your"+ridetype+"is being booked")
    setTimeout(function() {
        alert("your ride is on its way")
    },3000);
    setTimeout(function() {
        alert("your driver is near at you")
    },10000);
}
else{
    alert("ride booking cancelled")
}