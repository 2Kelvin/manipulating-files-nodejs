// Working with folders

const fs = require('node:fs');

// const projectFolder = 'testFolder';


// // check if the folder exists
// // fs.existsSync => returns True if file exists, false if otherwise
// console.log(fs.existsSync(projectFolder));


// // creating a new folder
// fs.mkdirSync(projectFolder);


// // reading the contents of a file
// console.log(fs.readdirSync(projectFolder));


// // renaming a folder
// fs.rename(projectFolder, 'renamedFolder', (err) => {
//     if (err) console.error(err);
//     else console.log('Folder renamed successfully');
// });

// removing an empty folder
fs.rmdir('myProject/newFolder', (err) => {
    if (err) console.error(err);
    else console.log('Folder deleted');
});


// removing a folder that has contents inside
fs.rm('myProject/newFolder', { recursive: true }, (err) => {
    if (err) console.error(err);
    else console.log('Removed the folder & its contents');
})