const askName = 4;
console.log('Times name has been asked ' + askName);

if (askName < 1) {
  console.log('Thrindel Yorgenfist.');
} else if (askName < 2) {
  console.log('...er, Tarben. Tarben the short.');
} 
	else if (askName < 3) {
    console.log('tt-Terry? I guess?');
  }
	else {
  console.log('This is Terry ' + (askName - 1) + ', alright? Now leave me alone!');
}
