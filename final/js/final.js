// variable declared
var timesAsked;
let askName = 0;

// function used
function handleAskName() {

  let message = '';

  // pointless while loop (requirement)
  let i = 0;
  while (i < 2) {
    i++;
  }
  
   // pointless variable usage
  timesAsked = askName;

  // The real function
if (askName < 2) {
    message = 'Go ahead, I prepared for everything!';
  } else if (askName === 2) {
    message = 'Thrindel Yorgenfist.';
  } else if (askName === 3) {
    message = '...er, Tarben. Tarben the short.';
  } else if (askName === 4) {
    message = 'Tarben... The tall?';
  } else if (askName === 5) {
    message = 'tt-Terry? I guess?';
  } else {
    message = 'This is Terry ' + (askName - 4) + ', alright? Now leave me alone!';
  }


  askName++;
//DOM manipulator
  document.getElementById("output").textContent = message;
}
