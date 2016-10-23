'use strict'
const fs = require('fs');
const path = require('path')
var start;
var book = fs.readFileSync(path.join(__dirname, 'algLG.txt'), 'utf-8');
var bookLen = book.length;
var freqResults;
var bookFragQueue;
var bookFragQueueLen;
var failedWorkQueue;
var hasFirstResponseOccurred;
var calculating = false;
let allTasksSent;
var i;
//when first client connects, i is 0.  send client 0 bookFragQueue @ i and increment i.
//if index === bookFragQueue.length, work is complete unless faileWorkQueue.length > 0.
//for disconnect, on each socket object will contain property i.  if disconnect, store i in failedWorkQueue.

function setState() {
  freqResults = {};
  hasFirstResponseOccurred = false;
  calculating = false;
  bookFragQueue = [];
  failedWorkQueue = [];
  chunkBookData();
  allTasksSent = false;
  i = -1;
}
function chunkBookData(){
  const fragSize = 6000000;
  // console.log('a chunk length is : ', fragSize) // 5100465
  let index = 0;
  let isFinished = false;
  while(!isFinished){
    let begin = index * fragSize;
    let end = begin + fragSize - 1;
    if (end >= bookLen) {
      isFinished = true;
      end = book.length - 1;
      bookFragQueueLen = index + 1;
    }
    bookFragQueue.push(book.slice(begin,end + 1));
    index++;
  }
}
setState();

const textParseController = {
  distribute() {
    if (!calculating) {
      start = Date.now();
      calculating = true;
    }
    console.log('inside textParseController, i is : ', i,' bookFragQueueLen is : ', bookFragQueueLen, ' current status of FWQ : ', failedWorkQueue)
    if (allTasksSent && !failedWorkQueue.length) return {bookFrag : false};
    if (i >= bookFragQueueLen - 2){
       allTasksSent = true;
       console.log(`!!!!!!!!!!!!! ${allTasksSent} : all tasks sent`);
    }
    var bookFrag = (allTasksSent) ? bookFragQueue[failedWorkQueue.pop()] : bookFragQueue[++i];
    console.log('the next frag is : ', bookFrag.slice(0, 20), ' expect FWQ to be empty : ', failedWorkQueue)
    return {bookFrag , i};
  },
  aggregateData(obj) {
    console.log(`in agg data ${allTasksSent} : all tasks sent, ${failedWorkQueue.length} : failedWorkQueue.length`)
    if (!hasFirstResponseOccurred) {
      freqResults = obj;
      hasFirstResponseOccurred = true;
      console.log('first time calling agg');
    } else {
      console.log('inside else if, inside agg data');
      for (let key in obj) {
        freqResults[key] ? freqResults[key] += obj[key] : freqResults[key] = obj[key];
      }
      if (allTasksSent && !failedWorkQueue.length) {
        console.log('work is complete, from server w/ love')
        setState();
        return (Date.now() - start) / 1000;
      }
    }
  },
  queueFailedTasks(i){
    console.log('client disconnected. queue: ', failedWorkQueue)
    if (calculating) failedWorkQueue.push(i);
  }
}

module.exports = textParseController;
