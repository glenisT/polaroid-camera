var button = document.getElementById("snapper");
var camera = document.getElementById("camera");
var polaroid = document.getElementById("polaroid");
var picture = document.getElementById("pic");

button.addEventListener("click", function(){
    console.log("CLICKED!");
    document.body.parentNode.style.animation = "flash 0.5s";
    camera.style.animation = "print 1s 1.5s 1 forwards";
});

// //after flash print polaroid
// camera.addEventListener("animationend", function(){
//     console.log("ended!");
//     camera.style.animation = "print 0.5s 1 forwards";
//     // picture.style.animation = "develop 3s forwards";
// });