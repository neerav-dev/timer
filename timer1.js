const timers = process.argv.slice(2);

if (timers.length === 0) {
  return;
}

// const start = Date.now();

for (const time of timers) {
  const timer = Number(time);
  if (!isNaN(timer)) {
    if (timer > 0) {
      setTimeout(()=> {
        process.stdout.write('\x07');
        // const millis = Date.now() - start;
        // process.stdout.write(`seconds elapsed = ${Math.floor(millis / 1000)}\n`);
      }, timer * 1000);
    }
  }
}




