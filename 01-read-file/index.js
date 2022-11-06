let fs = require('fs');
fs.readFile('./01-read-file/text.txt', 'utf8', function(err,data){
    if (err) {
      return console.log(err);
    }
    console.log(data);
});
