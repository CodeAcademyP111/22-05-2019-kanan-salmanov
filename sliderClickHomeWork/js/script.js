let li = document.querySelectorAll(".list-group-item");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        var active_m = document.querySelector(".active");
        this.classList.add("active");
        active_m.classList.remove("active");
        console.log(active_m);
    })
};

var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

// Novbeti shekle kece bilmesi ucun funksiya yaziriq

function rightSide(){
    var active = document.querySelector(".active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }
}

function leftSide(){
     var active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("active");
        active.classList.remove("active");
    }
}

// click event'inde novbeti shekle kecsin deye
right.addEventListener("click", rightSide);
left.addEventListener("click", leftSide);

// sol ve ya sag buttonu basanda novbeti shekle kecsin deye
document.body.addEventListener("keydown",function(e){
    console.log(e.which);
    if(e.which==39){
        rightSide();
    }
});

document.body.addEventListener("keydown",function(e){
    if(e.which==37){
        leftSide();
    }
});