const allButton = document.querySelector('div.allButton');
const webButton = document.querySelector('div.webButton');
const softButton = document.querySelector('div.softButton');
const robotButton = document.querySelector('div.robotButton');

window.onload = function() {
  allButton.classList.toggle('isActive');
  webButton.classList.toggle('notActive');
  softButton.classList.toggle('notActive');
  robotButton.classList.toggle('notActive');
};

allButton.addEventListener('click', function() {
  if( this.classList.contains('notActive')){
    let active = document.querySelector('div.isActive');
    if(active!=null){
      displayAll('robot');
      displayAll('soft');
      displayAll('web')
      active.click();
    }
  }
    this.classList.toggle('notActive'); 
    this.classList.toggle('isActive');
  });

webButton.addEventListener('click', function() {
  if( this.classList.contains('notActive')){
    let active = document.querySelector('div.isActive');
    if(active!=null){
      displayOff('robot');
      displayOff('soft');
      setTimeout(() =>{displayAll('web')},100)
      active.click();
    }
  }
    this.classList.toggle('notActive');
    this.classList.toggle('isActive');
  });

softButton.addEventListener('click', function() {
  if( this.classList.contains('notActive')){
    let active = document.querySelector('div.isActive');
    if(active!=null){
      displayOff('robot');
      displayOff('web');
      setTimeout(() =>{displayAll('soft')},100)
      active.click();
    }
  }
    this.classList.toggle('notActive');
    this.classList.toggle('isActive');
  });

  robotButton.addEventListener('click', function() {
  if( this.classList.contains('notActive')){
    let active = document.querySelector('div.isActive');
    if(active!=null){
      displayOff('soft');
      displayOff('web');
      setTimeout(() =>{displayAll('robot')},100)
      active.click();
    }
  }
    this.classList.toggle('notActive');
    this.classList.toggle('isActive');
  });

  function displayOff(param){
    let displayOff = document.getElementsByClassName(param);
    for(let i = 0; i < displayOff.length; i++){
      displayOff[i].style.opacity='0';
    }
    setTimeout(() =>{
      for(let i = 0; i < displayOff.length; i++){
        displayOff[i].style.display = "none";
      }},200
    )
  }

  function displayAll(param){
    let displayAll = document.getElementsByClassName(param);
    for(let i = 0; i < displayAll.length; i++){
      displayAll[i].style.opacity='1';
    }
    setTimeout(() =>{
      for(let i = 0; i < displayAll.length; i++){
        displayAll[i].style.display = "flex";
      }
    },210)
  }