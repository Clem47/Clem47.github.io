const git = document.querySelector(".git");
const linkdin = document.querySelector(".linkedin")
const mail = document.querySelector(".mail")
const upButton = document.getElementById("button_up")
const downButton = document.getElementById("button_down")
const leftButton = document.getElementById("button_left")
const rightButton = document.getElementById("button_right")
var x = 0;
var y = 0;

document.getElementById("button_up").onclick = function () {
    if (x > 0){
        x -= 1;
        switchPosition();
        colorSwitch();
    }
};

document.getElementById("button_down").onclick = function () {
    if (x < 3){
        x += 1;
        switchPosition();
        colorSwitch();
    }
};

document.getElementById("menuWelcome").onclick = function () {
    x = 0;
    colorSwitch();
};

document.getElementById("menuAboutMe").onclick = function () {
    x = 1;
    colorSwitch();
};

document.getElementById("menuProject").onclick = function () {
    x = 2;
    colorSwitch();
};

document.getElementById("menuWContact").onclick = function () {
    x = 3;
    colorSwitch();
};

function switchPosition(){
    switch(x){
        case 0:
            window.location.hash = "#welcome";
            break;
        case 1:
            window.location.hash = "#about_me";
            break;
        case 2:
            window.location.hash = "#project";
            break;
        case 3:
            window.location.hash = "#contact";
            break;
    }
}

function colorSwitch(){
    if(x == 2 && y == 0){
        upButton.src = "./picture/Dark/button_up_revert.png";
        downButton.src = "./picture/Dark/button_down_revert.png";
        leftButton.src = "./picture/Dark/button_left_revert.png";
        rightButton.src = "./picture/Dark/button_right_revert.png";
    }
    else{
        upButton.src = "./picture/Dark/button_up.png";
        downButton.src = "./picture/Dark/button_down.png";
        leftButton.src = "./picture/Dark/button_left.png";
        rightButton.src = "./picture/Dark/button_right.png";
    }
}