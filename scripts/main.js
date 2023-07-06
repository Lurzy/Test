let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/burn.png') {
      myImage.setAttribute ('src','images/burn.png');
    } else {
      myImage.setAttribute ('src','images/LONY.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Привет, как тебя зовут?');
    localStorage.setItem('Имя', myName);
    myHeading.textContent = 'Здарова ' + myName;
  }
  if(!localStorage.getItem('Имя')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('Имя');
    myHeading.textContent = 'Здарова ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
  
