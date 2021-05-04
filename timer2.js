// stdin setup
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  //The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!"
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!');
    process.exit();
  }

  // The user can press b and it should beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  // The user can input any number from 1 to 9 and it should
  //  - immediately output "setting timer for x seconds...", and
  //  - beep after that number of seconds has passed
  if (key > 0 && key < 10) {
    setTimeout(()=> {
      process.stdout.write(`setting timer for ${key} seconds...`);
      process.stdout.write('\x07');
    }, key * 1000);

  }
});
