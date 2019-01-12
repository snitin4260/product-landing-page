import axios from "axios";


let hamburger = document.querySelector("#hamburger");
let navbar = document.querySelector("#nav-bar");
let closeIcon = document.querySelector("#nav-bar .close")
let body = document.querySelector("body");

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

async function books() {

    let result = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            q: "atomic+isbn=1847941834,",
            
            key: 'AIzaSyBLRyH5Njmh1T_MD5uKueLTv9bqJfUm5zM'
        }
    });
    
    console.log(result.data.items[0].volumeInfo.imageLinks.thumbnail);

    let img =document.createElement("img");
    img.src = result.data.items[0].volumeInfo.imageLinks.thumbnail;
    img.setAttribute("alt","book");

    body.appendChild(img);
    



}

books();