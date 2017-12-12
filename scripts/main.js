// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/m-dot.jpg') {
    myImage.setAttribute ('src', 'images/m-dot2.jpg');
  } else {
    myImage.setAttribute ('src', 'images/m-dot.jpg');
  }
}
//Welcome Message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName + ' Triathlon Times';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storeName = localStorage.getItem('name');
  myHeading.innerHTML = storedName + 'Triathon finish times';
}

myButton.onclick = function () {
  setUserName();
}
