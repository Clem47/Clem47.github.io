const git = document.querySelector(".git");
const trait = document.querySelector("nav div")
const linkdin = document.querySelector(".linkedin")
const menu = document.querySelector(".menu a");
const mail = document.querySelector(".mail")
const haut = document.querySelector(".title");

window.addEventListener('scroll',()=>{
    if (window.scrollY>haut.clientHeight*1.285 && window.scrollY<haut.clientHeight*2.285){
        git.src = "./picture/gitb.png";
    }
    else{
        git.src = "./picture/git.png";
    }

    if (window.scrollY>haut.clientHeight*1.2 && window.scrollY<haut.clientHeight*2.2){
        linkdin.src = "./picture/linkedinb.png";
    }
    else{
        linkdin.src = "./picture/linkedin.png";
    }

    if (window.scrollY>haut.clientHeight*1.32 && window.scrollY<haut.clientHeight*2.35){
        mail.src = "./picture/mailb.png";
    }
    else{
        mail.src = "./picture/mail.png";
    }
})