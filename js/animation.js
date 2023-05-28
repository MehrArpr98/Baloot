var elementVisible = 50;

function reveal() {
    var suggestCard_anim = document.querySelectorAll(".suggest-card");
    console.log('1: ', suggestCard_anim)
    for (var i = 0; i < suggestCard_anim.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = suggestCard_anim[i].getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            suggestCard_anim[i].classList.add("suggest-card-anim");
        } else {
            suggestCard_anim[i].classList.remove("suggest-card-anim");
        }
    }

    var part4_anim = document.querySelector(".content-part-4");
    var windowHeight1 = window.innerHeight;
    var elementTop1 = part4_anim.getBoundingClientRect().top;    
    if (elementTop1 < windowHeight1 - elementVisible) {
        part4_anim.classList.add("content-part4-anim");
    } else {
        part4_anim.classList.remove("content-part4-anim");
    }
           
    
}

window.addEventListener("scroll", reveal);