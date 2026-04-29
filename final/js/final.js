// variable declared
var timesAsked
let askName = 0;
// function used
function handleAskName() {

  let message = '';

  // Loop so that We can display a message as soon as the button is clicked without needing to do backflips to make the button show 0
  let i = 0;
  // While loop used
  while (i < 2) {
    // if used
    if (askName === i) {
      message = 'Go ahead, I prepared for everything!';
    }
    i++;
  }

  // If we're past the intro phase, use your main dialogue
  if (askName >= 2) {
    if (askName === 2) {
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
  }

  askName++;
//DOM manipulator
  document.getElementById("output").textContent = message;
}
