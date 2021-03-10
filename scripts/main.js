/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!!!';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/landscape.jpg') {
      myImage.setAttribute('src','images/kidssafety.jpg');
    } else {
      myImage.setAttribute('src','images/landscape.jpg');
    }
}

// Personlized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Stay Safe, ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Stay Safe, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }