const workerArr = [];
let startTime; 
function startWorkers(length, numWorkers, hash) {
  const numCombos = Math.pow(26, length); // 26^3 === 17576
  const frag = Math.round(numCombos / numWorkers);
  startTime = Date.now();
  for (let i = 0; i < numWorkers; i += 1) {
    const begin = frag * i;
    const end = begin + (frag - 1);
    const id = i;
    console.log('Id: ', id, 'begin: ', begin, 'end :', end);
    const worker = new Worker('worker.js');
    workerArr.push(worker);
    worker.onmessage = handleMessage;
    worker.postMessage({ cmd: 'start', hash, id, begin, end, length});
  }
}

// handling worker message
function handleMessage(e) {
  if (e.data.cmd === 'success') {
    const duration = Math.round((Date.now() - startTime) / 1000);
    console.log(`Worker: ${e.data.id} found word: ${e.data.clearText} in ${duration} seconds`);
    workerArr.forEach((worker) => {
      worker.terminate();
    });
  }
}

// crackMD5(length, workers, hash){
//     //needs to call MD5
//     console.log(startWorkers, handleMessage)
//     console.log('in crack');
//   }




export {startWorkers, handleMessage}
