import fs from 'node:fs';

const read = async () => {
    // Write your code here
    try {
        const content = fs.readFileSync('src/fs/files/fileToRead.txt', 'utf-8');
        console.log(content)
    } catch (e) {
        console.log('FS operation failed')
    }
};

await read();
