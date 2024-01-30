const fs = require('node:fs');

// a file descriptor is a reference to an open file
// the 'fd' file descriptor is a unique number identifying an open file in the OS


// opening a file
fs.open('./mary.txt', 'r', (err, fd) => {
    // do file operations here
    if (err) console.error(err);
    else console.log(fd);
});

const dataToAddToFile = 'Old McDonalds had a farm...';


// writing to a file
// writeFile => overwrites the file if it exists
// you can specify the behavior by specifying the flag option
// e.g. flag: 'a' for appending and so on
fs.writeFile('./mary.txt', dataToAddToFile, (err) => {
    if (err) console.error(err);
    console.log('Done writing the file baaabbyyy!');
});

const dataToAddToFile2 = '\nMary had a little lamb...';


// appending data to the end of the file
fs.appendFile('./mary.txt', dataToAddToFile2, (err) => {
    if (err) console.error(err);
    console.log('Added new data to file!');
});


// reading a file
// params => (pathToFile, encoding, callbackFunction)
// readFile is asynchronous & reads the whole file
fs.readFile('./mary.txt', 'utf8', (err, fileData) => {
    if (err) console.error(err);
    console.log(fileData.toString());
})