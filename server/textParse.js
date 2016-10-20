const fs = require('fs');
const path = require('path')
var book,
    freqResults = {};
const textParseController = {
  //read method
  read(){
    book = fs.readFileSync(path.join(__dirname , 'alg.txt'), 'utf-8');
    return book.toLowerCase();
  },
  //parse and count read data
  parse(){
     if (!book.length) return;
     var splitBook = book.toLowerCase().split(/\b\W+\b/);
     for (var word of splitBook){
       freqResults[word] ? freqResults[word] += 1 : freqResults[word] = 1;
     }
     console.log('plzdontbreak',freqResults,book.length)
  }
  //store results
}

// textParseController.read();

module.exports = textParseController;