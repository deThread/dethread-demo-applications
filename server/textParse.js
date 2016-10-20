const fs = require('fs');
const path = require('path')
var book,
    freqResults = {};
const textParseController = {
  //read method
  read(){
    fs.readFile(path.join(__dirname , 'alg.txt'), 'utf-8', (err,res) => {
      !err ?  book = res : console.error(err);
      this.parse(book);
    })
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

textParseController.read();