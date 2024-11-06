let plan=prompt("choose your subscription plan:free,VIP,premium","free")
switch(plan.toLowerCase()){
    case "free":
        alert("you have selected the free plan.")
        break;
    case "vip":
        alert("you have selected the VIP plan.")
        break;
    case "premium":
        alert("you have selected the premium plan.")
        break;
    default:
        alert("inavalid plan.please choose either free,VIP or premium")     
}