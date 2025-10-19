const menu = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
    // alert("hello clicked")
    navLinks.classList.toggle("show")
    if(navLinks.classList.contains("show")){
        menu.src = "./img/BitcoinIconsCrossFilled.svg"
    }else{
        menu.src = "./img/MaterialSymbolsMenuRounded.svg"
    }
})