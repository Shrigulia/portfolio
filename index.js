let nav = document.querySelectorAll(".navItem");
console.log(nav[4])
window.onscroll = function(){
    if(this.scrollY == 32){
        nav[0].classList.add("active")
    }
    else if(this.scrollY != 32){
        nav[0].classList.remove("active")
    }
    if(this.scrollY == 853){
        nav[1].classList.add("active")
    }
    else if(this.scrollY != 853){
        nav[1].classList.remove("active")
    }
    if(this.scrollY == 1642){
        nav[2].classList.add("active")
    }
    else if(this.scrollY != 1642){
        nav[2].classList.remove("active")
    }
    if(this.scrollY == 2115){
        nav[3].classList.add("active")
    }
    else if(this.scrollY != 2115){
        nav[3].classList.remove("active")
    }
    
    console.log(scrollY)
}


