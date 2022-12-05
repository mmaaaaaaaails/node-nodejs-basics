import fs from 'fs';

const copy = async () => {
    // Write your code here

    try {
        const filePath = 'src/fs/files/';
        const filePathCopy = 'src/fs/files_copy/';

        fs.readdirSync(filePath).forEach((file) => {
            fs.copyFileSync(filePath + file, filePathCopy + file)
        })
        console.log('files copied successfully')
    } catch (error) {
        console.log('FS operation failed')
    }

};

copy();
