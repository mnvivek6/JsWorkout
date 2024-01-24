const util = require('util');
const fs = require('fs');

// Using the promisify function to convert a callback-style function to a Promise-based function
const readFileAsync = util.promisify(fs.readFile);

// Example usage with async/await
async function readAndPrintFile() {
  try {
    const data = await readFileAsync('example.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading the file:', error);
  }
}

readAndPrintFile();
