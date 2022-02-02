var button = document.getElementById("snapper");
var camera = document.getElementById("camera");
var polaroid = document.getElementById("polaroid");

button.addEventListener("click", function(){
    console.log("CLICKED!");
    document.body.parentNode.style.animation = "flash 0.5s";
    
});