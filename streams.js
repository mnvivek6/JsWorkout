const fs = require('fs');

// Replace 'example.txt' with the path to the file you want to read
const filePath = 'example.txt';

// Create a readable stream
const readStream = fs.createReadStream(filePath,{encoding:'utf-8'});

// Event handlers for the stream

// 'data' event is emitted when a chunk of data is read
readStream.on('data', (data) => {
  console.log(data);
});
