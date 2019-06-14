  // dom elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

  // optional 
const showAmPm = true;

  // show time
function showTime(){
  console.log('hello time');
  // let today = new Date(2019, 06, 14, 20, 33, 30),
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes()
      sec = today.getSeconds();

    // set am or pm
  const amPm = hour >= 12 ? "PM" : "AM";

    // 12hr format
  hour = hour % 12 || 12;

    //output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

function addZero(n){
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

  //set background & greeting
function setBgGreet(){
  // let today = new Date(2019, 06, 14, 20, 33, 30),
  let today = new Date(),
      hour = today.getHours();

  if(hour < 12){
      // morning
    document.body.style.backgroundImage = "url('/imgs/morning.jpg')";
    greeting.textContent = 'Good Morning ';
  } else if(hour < 18) {
      // afternoon
    document.body.style.backgroundImage = "url('/imgs/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon ';
  } else {
      // evening
    document.body.style.backgroundImage = "url('/imgs/night.jpg')";
    greeting.textContent = 'Good Night ';
  }
}

// get name
function getName(){
  console.log('hello name');
  if(localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}
// set name
function setName(e){
  if(e.type === "keypress"){
    // make sure 'enter' is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// get focus
function getFocus(){
  console.log('hello focus');
  if(localStorage.getItem('focus') === null){
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
// set focus
function setFocus(e){
  if(e.type === "keypress"){
    // make sure 'enter' is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName); // onblur event occurs when an object loses focus. aka when the user clicks off the element. its the opposite of onfocus
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();