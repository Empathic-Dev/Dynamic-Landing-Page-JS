  // dom elements
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

  // show time
function showTime(){
  console.log('hello time');
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes()
      sec = today.getSeconds();

    // set am or pm
  const amPm = hour >= 12 ? "PM" : "AM";

    // 12hr format
  hour = hour % 12 || 12;

    //output time
  time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n){
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

  //set background & greeting
function setBgGreet(){
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

// run
showTime();
setBgGreet();
