let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hqdefault.jpg') {
      myImage.setAttribute('src', 'images/200837101931479_2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.contentText = 'Mozilla 酷毙了，' + myName;
  }
}
myButton.onclick = function() {
   setUserName();
}
