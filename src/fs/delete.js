import fs from 'fs';

const remove = async () => {
    // Write your code here

    try {
        fs.unlinkSync('src/fs/files/fileToRemove.txt');
        console.log('FS operation failed')
    } catch (error) {
        console.log(error)
    }
};

await remove();
