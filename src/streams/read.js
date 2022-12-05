import fs from 'node:fs';

const read = async () => {
    // Write your code here

    const { stdout } = process;
    const readableStream = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8');
    readableStream.on('data', chunk => stdout.write(chunk));
};

await read();
