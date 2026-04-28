let askName = 0;

function handleAskName() {

  let message = '';

  // Use a loop to handle the intro phase
  let i = 0;
  while (i < 2) {
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

  document.getElementById("output").textContent = message;
}
