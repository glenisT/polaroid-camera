var button = document.getElementById("snapper");

button.addEventListener("click", function(){
    console.log("CLICKED!");
    document.body.style.animation = "flash 0.5s";
});