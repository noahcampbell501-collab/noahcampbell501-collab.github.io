let askName = 0;


function handleAskName() {

  let message = '';

   if (askName === 1) {
    message = 'Thrindel Yorgenfist.';
  } else if (askName === 2) {
    message = '...er, Tarben. Tarben the short.';
  } else if (askName === 3) {
    message = 'Tarben... The tall?';
  } else if (askName === 4) {
    message = 'tt-Terry? I guess?';
  } else {
    message = 'This is Terry ' + (askName -3) + ', alright? Now leave me alone!';
  }
  
  askName++; // increment the counter
  
  // Display in HTML
  document.getElementById("output").textContent =
    message;
}
