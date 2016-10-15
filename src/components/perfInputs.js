const workerArr = [];
let globalStartTime;
let localPasswordCracked;

function startWorkers(passwordCracked, begin, end, numWorkers, hash, length, startTime) {
  localPasswordCracked = passwordCracked;
  globalStartTime = startTime;
  const numCombos = end - begin;
  const workerFrag = Math.ceil(numCombos / numWorkers);
  // TODO: Need to verify that workerFrag is the correct number
  
  for (let i = 0; i < numWorkers; i += 1) {
    const workerBegin = begin + (workerFrag * i);
    const workerEnd = workerBegin + (workerFrag - 1);
    const id = i;
    console.log('Id: ', id, 'workerBegin: ', workerBegin, 'workerEnd :', workerEnd, 'hash', hash);
    const worker = new Worker('worker.js');
    workerArr.push(worker);
    worker.onmessage = handleMessage;
    worker.postMessage({ cmd: 'start', hash, id, workerBegin, workerEnd, length});
  }
}

function handleMessage(e) {
  if (e.data.cmd === 'success') {
    const duration = Math.round((Date.now() - globalStartTime) / 1000);
    console.log(`Worker: ${e.data.id} found word: ${e.data.clearText} in ${duration} seconds`);
    localPasswordCracked(e.data.clearText, duration);

    workerArr.forEach((worker) => {
      worker.terminate();
    });
  }
}

export { startWorkers };
