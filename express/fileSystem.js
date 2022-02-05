const fs = require('fs');
const testfs = 'testfs.txt';

// fs.watch(testfs, () => {
//     console.log('testfs updated');
// });

//for async programming
// fs.readFile('testfs.txt', (error, data) => {
//     if (error) {
//         console.log("Error", error);
//     }
//     console.log('Data', data);
// });

//for sync programming
const readFileSync = fs.readFileSync('testfs.txt');
console.log('read file sync', readFileSync);