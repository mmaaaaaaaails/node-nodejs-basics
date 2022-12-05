import fs from 'node:fs';

const write = async () => {
    // Write your code here

    const { stdin } = process;
    const output = fs.createWriteStream('src/streams/files/fileToWrite.txt', 'utf-8');
    stdin.pipe(output);
};

await write();
