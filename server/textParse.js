'use strict'
const fs = require('fs');
const path = require('path')

var book = fs.readFileSync(path.join(__dirname, 'alg.txt'), 'utf-8');
var freqResults;
var bookFragQueue;
var mid;
var hasRan;
function setState() {
  freqResults = {};
  mid = Math.floor(book.length / 2);
  hasRan = false;
  bookFragQueue = [];
  bookFragQueue.push(book.slice(0, mid), book.slice(mid));
}
setState();
const textParseController = {
  distribute() {
    if (!bookFragQueue.length) return false;
    var bookFrag = bookFragQueue.shift();
    console.log('the next frag is : ', bookFrag.slice(0, 20))
    return bookFrag;
  },
  aggregateData(obj) {
    if (!hasRan) {
      freqResults = obj;
      hasRan = true;
      console.log('first time calling agg');
    } else {
      console.log('inside else if, inside agg data');
      for (let key in obj) {
        freqResults[key] ? freqResults[key] += obj[key] : freqResults[key] = obj[key];
      }
      if (bookFragQueue.length === 0) {
        console.log('work is complete, from server w/ love')
        setState();
        return true;
      }
    }
  }
}

module.exports = textParseController;
