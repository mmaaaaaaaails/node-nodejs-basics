import fs from 'node:fs';

const remove = async () => {
    // Write your code here

    try {
        fs.unlinkSync('src/fs/files/fileToRemove.txt');
    } catch (error) {
        console.log('FS operation failed')
    }
};

await remove();
