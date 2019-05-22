var square = document.querySelector("#square");
var item = document.querySelector("span");
var left_p = 0;
var top_p = 0;
document.body.addEventListener("keyup", function (e) {
    console.log(e.which);
    // sola surusdurmek
    if (e.which == 37) {
        if (item.offsetLeft > square.offsetLeft + item.clientWidth) {
            left_p -= 20;
        } else {
            left_p = 0;
        }
    }
    // saga surusdurmek
    if (e.which == 39) {
        if (Math.max(item.offsetLeft + item.clientWidth) < square.clientWidth - item.clientWidth) {
            left_p += 20;
        } else {
            left_p = square.clientWidth - item.clientWidth;
        }
    }
    // asagi surusdurmek
    if (e.which == 40) {
        if (Math.max(item.offsetTop + item.clientHeight) < square.clientHeight - item.clientHeight) {
            top_p += 20;
        } else {
            top_p = square.clientHeight - item.clientHeight;
        }
    }
    // yuxari surusdurmek
    if (e.which == 38) {
        if (item.offsetTop > square.offsetTop + item.clientHeight) {
            top_p -= 20;
        } else {
            top_p = 0;
        }
    }
    item.style.left = left_p + "px";
    item.style.top = top_p + "px";

    // console.log(item.offsetTop);
    // console.log(square.clientHeight)
})