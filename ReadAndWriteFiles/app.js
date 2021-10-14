var fs = require('fs');


//Read : 
//Blocking
// var readMe = fs.readFileSync('readMe.txt', 'utf8')


//unblocking
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
fs.writeFile('test.txt', data, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
});

const content = 'Some content!'

// fs.writeFile('test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })
// fs.writeFileSync('readMe.txt', 'hello..')
// console.log(readMe)