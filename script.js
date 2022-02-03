var button = document.getElementById("snapper");
var camera = document.getElementById("camera");
var polaroid = document.getElementById("polaroid");

button.addEventListener("click", function(){
    console.log("CLICKED!");
    document.body.parentNode.style.animation = "flash 0.5s";
});

document.body.parentNode.addEventListener("animationend", function(){
    console.log("ended!");
    polaroid.style.animation = "print 0.5s 1 forwards";
});