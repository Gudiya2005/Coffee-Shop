function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%"
            bar.src = "https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
        }else{
            nav.style.left = "0%";
            bar.src = "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
            
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}
