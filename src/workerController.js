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
  const numCombos = end - begin + 1;
  const workerFrag = Math.floor(numCombos / numWorkers);
  const remainder = numCombos % numWorkers; 
  
  for (let i = 0; i < numWorkers; i += 1) {
    const workerBegin = begin + (workerFrag * i);
    let workerEnd = workerBegin + (workerFrag - 1);
    if (i === numWorkers - 1) workerEnd += remainder;
    const id = i;
    console.log('Worker id:', id, 'workerBegin:', workerBegin, 'workerEnd:', workerEnd);

    // Check for and re-use existing workers, if available. Otherwise, create new workers
    let worker = workerArr[i];

    if (!worker) {
      worker = new Worker('worker.js');
      worker.onmessage = handleMessage;
      workerArr.push(worker);
    }

    worker.postMessage({ cmd: 'start', hash, id, workerBegin, workerEnd, length });
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
