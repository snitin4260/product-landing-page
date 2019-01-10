let hamburger = document.querySelector("#hamburger");
let navbar = document.querySelector("#nav-bar");
let closeIcon = document.querySelector("#nav-bar .close")

hamburger.addEventListener("click",function() {

    navbar.classList.add("open");
    //display close icon in navbar whose initial display was none
    closeIcon.classList.add("show");
    hamburger.classList.add("hide")

})


closeIcon.addEventListener("click",function() {
    navbar.classList.remove("open");
    closeIcon.classList.remove("show");
    hamburger.classList.remove("hide");
});