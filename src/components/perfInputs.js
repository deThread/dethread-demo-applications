const workerArr = [];
let localNumWorkers;
let failCount = 0;
let globalStartTime;
let localPasswordCracked;
let requestMoreWork;
let localSocket;

function startWorkers(passwordCracked, begin, end, numWorkers, hash, length, startTime, requestCallback, socket) {
  localNumWorkers = numWorkers;
  globalStartTime = startTime;
  localPasswordCracked = passwordCracked;
  requestMoreWork = requestCallback;
  localSocket = socket;
  const numCombos = end - begin;
  const workerFrag = Math.ceil(numCombos / numWorkers);
  // TODO: Need to verify that workerFrag is the correct number
  
  for (let i = 0; i < numWorkers; i += 1) {
    const workerBegin = begin + (workerFrag * i);
    const workerEnd = workerBegin + (workerFrag - 1);
    const id = i;
    console.log('Id: ', id, 'workerBegin: ', workerBegin, 'workerEnd :', workerEnd, 'hash', hash);

    // Check for and re-use existing workers, if available. Otherwise, create new workers
    let worker = workerArr[i];

    if (!worker) {
      worker = new Worker('worker.js');
      worker.onmessage = handleMessage;
      workerArr.push(worker);
    }
    
    worker.postMessage({ cmd: 'start', hash, id, workerBegin, workerEnd, length});
  }
}

function handleMessage(e) {
  if (e.data.cmd === 'success') {
    const duration = Math.round((Date.now() - globalStartTime) / 1000);
    console.log(`Worker: ${e.data.id} found word: ${e.data.clearText} in ${duration} seconds`);
    terminateAllWorkers();
    localPasswordCracked(e.data.clearText, duration);
  }

  if (e.data.cmd === 'fail') {
    failCount++;

    if (failCount === localNumWorkers) {
      failCount = 0;
      requestMoreWork(localSocket);
    }
  }
}

function terminateAllWorkers() {
  while (workerArr.length) {
    const worker = workerArr.pop(); 
    worker.terminate();
  }
}

export { startWorkers, terminateAllWorkers };
