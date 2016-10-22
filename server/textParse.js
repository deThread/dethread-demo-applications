'use strict'
const fs = require('fs');
const path = require('path')
var start;
var book = fs.readFileSync(path.join(__dirname, 'algLG.txt'), 'utf-8');
var freqResults;
var bookFragQueue;
var hasFirstResponseOccurred;
var calculating = false;
function setState() {
  freqResults = {};
  hasFirstResponseOccurred = false;
  calculating = false;
  bookFragQueue = [];
  chunkBookData();
}
function chunkBookData(){
  const fragSize = Math.floor(book.length / 30);
  let index = 0;
  while(index < 30){
    let begin = index * fragSize;
    let end = begin + fragSize - 1;
    if (index === 29) end = book.length - 1;
    bookFragQueue.push(book.slice(begin,end));
    index++;
  }
}
setState();
const textParseController = {
  distribute() {
    if (!bookFragQueue.length) return false;
    if (!calculating) start = Date.now();
    calculating = true;
    var bookFrag = bookFragQueue.pop();
    console.log('the next frag is : ', bookFrag.slice(0, 20))
    return bookFrag;
  },
  aggregateData(obj) {
    if (!hasFirstResponseOccurred) {
      freqResults = obj;
      hasFirstResponseOccurred = true;
      console.log('first time calling agg');
    } else {
      console.log('inside else if, inside agg data');
      for (let key in obj) {
        freqResults[key] ? freqResults[key] += obj[key] : freqResults[key] = obj[key];
      }
      if (bookFragQueue.length === 0) {
        console.log('work is complete, from server w/ love')
        setState();
        return (Date.now() - start) / 1000;
      }
    }
  }
}

module.exports = textParseController;
