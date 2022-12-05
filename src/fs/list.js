import fs from 'node:fs';

const list = async () => {
    // Write your code here

    fs.readdir('src/fs/files', 'utf8', (error, file) => {
        if (error) throw Error('FS operation failed');
        console.table(file)
    })
};

await list();
