let fs = require('fs');

let text = fs.ReadStream("./01-read-file/text.txt");

text.on('data', function(data){
  let texty = data.toString();
  console.log(texty);
})


