let quality=prompt("choose your video quality:720p,1080p,4k","720")
switch(quality.toLowerCase()){
    case "720p":
        alert("you have choosen 720p.good for medium speed internet. ")
        break;
    case "1080p":
        alert("you have choosen 1080p.enjoy hd quality.")
        break;
    case "4k":
        alert("you have choosen 4k.ultra hd at its finest! ")
        break;
    default:
        alert("invalid quality option defaulting to 720p")
}