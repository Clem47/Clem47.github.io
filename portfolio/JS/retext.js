//--------------------------------------------------------------------------------------------------------------------
//                                                       Retext
//--------------------------------------------------------------------------------------------------------------------

const robotHand = document.querySelector('div.projRobotHand');
const watchList = document.querySelector('div.projWatchList');
const portfolio = document.querySelector('div.projPortfolio');
const survey = document.querySelector('div.projEnquete');
const lowatem = document.querySelector('div.projLowatem');
const robotCup = document.querySelector('div.projRobotCup');
const snek = document.querySelector('div.projSnek');
const maze = document.querySelector('div.projMaze');

document.querySelector('div.cross').addEventListener('click', 
    function() {
        let displayAll = document.getElementsByClassName("retext");
        for(let i = 0; i < displayAll.length; i++){
        displayAll[i].style.opacity='0';
        }
        setTimeout(() =>{
        for(let i = 0; i < displayAll.length; i++){
            displayAll[i].style.visibility = "hidden";
        }
        },200)
        showAll('project');
    }
);

robotHand.addEventListener('click', function() {
        hideAll('project');
        showAll('robotHand');
    }
);

watchList.addEventListener('click', function() {
        hideAll('project');
        showAll('watchList');
    }
);

portfolio.addEventListener('click', function() {
        hideAll('project');
        showAll('portfolio');
    }
);

survey.addEventListener('click', function() {
        hideAll('project');
        showAll('enquete');
    }
);

lowatem.addEventListener('click', function() {
        hideAll('project');
        showAll('lowatem');
    }
);

robotCup.addEventListener('click', function() {
        hideAll('project');
        showAll('robotCup');
    }
);

snek.addEventListener('click', function() {
        hideAll('project');
        showAll('snek');
    }
);

maze.addEventListener('click', function() {
        hideAll('project');
        showAll('maze');
    }
);


function hideAll(param){
    let displayOff = document.getElementsByClassName(param);
    for(let i = 0; i < displayOff.length; i++){
      displayOff[i].style.opacity='0';
    }
    setTimeout(() =>{
      for(let i = 0; i < displayOff.length; i++){
        displayOff[i].style.visibility = "hidden";
      }
    },200)
}

function showAll(param){
    let displayOff = document.getElementsByClassName(param);
    for(let i = 0; i < displayOff.length; i++){
        displayOff[i].style.visibility = "visible";
    }
    
    for(let i = 0; i < displayOff.length; i++){
      displayOff[i].style.opacity='1';
    }
}