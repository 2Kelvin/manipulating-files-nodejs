const fs = require('node:fs');
const path = require('node:path');

const myFile = '/home/rocketman/Documents/Coding/nodejs/manipulating-files/mary.txt';

// <----------------------------- file stats ----------------------------->

// getting info / stats about the file passed in
fs.stat(myFile, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink);
    console.log(stats.size);
    console.log(stats.blksize);
});

// <----------------------------- file path ----------------------------->

// path to parent folder of the file
console.log(path.dirname(myFile));

// file name with extension
console.log(path.basename(myFile));

// file's extension name/type
console.log(path.extname(myFile));

// file name without its extension
console.log(path.basename(myFile, path.extname(myFile)));

// joining a path name
const userName = 'coder22';
console.log(path.join('/home', userName, '/Downloads', 'mary.txt'));

// getting the absolute path of a file
console.log(path.resolve(myFile));