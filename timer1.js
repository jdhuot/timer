const args = process.argv.slice(2);

for (let arg of args) {
  if ((arg * 1) && arg > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log("BEEEEP!");
    }, arg * 1000);
  } else {
  }
}