import fs from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
    // Write your code here

    const gzip = zlib.createGzip();
    const inputFile = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const outputFile = fs.createWriteStream('src/zip/files/archive.gz');

    inputFile.pipe(gzip).pipe(outputFile);
};

await compress();
