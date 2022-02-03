var button = document.getElementById("snapper");
var camera = document.getElementById("camera");
var polaroid = document.getElementById("polaroid");
var picture = document.getElementById("pic");

//flash and print polaroid
button.addEventListener("click", function(){
    document.body.parentNode.style.animation = "flash 0.5s";
    camera.style.animation = "print 1s 1.5s 1 forwards";
});

//develop polaroid
polaroid.addEventListener("animationend", function(){
    picture.style.opacity = "100%";
    polaroid.style.animationPlayState = "paused";
    picture.classList.remove('pic');
});