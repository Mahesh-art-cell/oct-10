const products=["laptop","phone","headphone"]
let ratings=[]
for(let i=0;i<products.length;i++){
    let rating=prompt("rate the"+products[i]+"out of 5","5")
    if(rating>=0 && rating<=5){
        ratings.push(`${products[i]}:${rating}/5`)
    }
    else{
        alert("invalid rating for"+products[i])
    }
}
alert("thanks for rating here are your ratings:\n"+ratings.join("\n"))