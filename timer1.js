const timer = (arr) => {
  for (let elm of arr) {
    // checks that the element is a number and greater than 0
    if (!Number(elm) || elm <= 0) {
      continue;
    }
    // adds 000 to convert the number to seconds
    elm += '000';
    setTimeout(() => {
      // if the time between beeps is less than 2 seconds only the first will play
      // I assume this is because the sounds overlap as if the beep is replaced with a char it works fine
      process.stdout.write('\x07');
    }, Number(elm));
  }
};

timer(process.argv);