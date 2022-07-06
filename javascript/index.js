/**
  Description: 
    Wait for a given number of milliseconds.
  Usage: 
    await sleep(1000);
*/
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
