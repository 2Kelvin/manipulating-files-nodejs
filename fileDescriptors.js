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

fs.writeFile('./mary.txt', dataToAddToFile, (err) => {
    if (err) console.error(err);

    console.log('Done writing the file baaabbyyy!');
});

const dataToAddToFile2 = '\nMary had a little lamb...';

fs.appendFile('./mary.txt', dataToAddToFile2, (err) => {
    if (err) console.error(err);

    console.log('Added new data to file!');
});

// reading a file
fs.readFile('./mary.txt', (err, fileData) => {
    if (err) throw err;

    console.log(fileData.toString());
})