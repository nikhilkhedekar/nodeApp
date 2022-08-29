const fs = require('fs');
const os = require('os');
const path = require('path');
const testfs = 'testfs.txt';

console.log("FS", fs)
console.log("OS", os);
console.log("path", path);
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