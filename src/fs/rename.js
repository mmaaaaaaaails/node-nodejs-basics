import fs from 'node:fs';

const rename = async () => {
    // Write your code here
    try {
        fs.renameSync('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md')
    } catch (error) {
        console.log('FS operation failed')
    }
};

await rename();
