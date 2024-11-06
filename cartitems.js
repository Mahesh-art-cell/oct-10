var cartitems=["laptop","phone","headphones"]
let totalcost=0
for(let i=0;i<cartitems.length;i++){
    price=prompt(`enter the price of ${cartitems[i]}:`, "0")
    totalcost += Number(price)
}
if(confirm("your total cost is"+totalcost+"do you want to proceed to checkout?")){
    alert("thank you for your purchase")
}
else{
    alert("purchase cancelled")
}