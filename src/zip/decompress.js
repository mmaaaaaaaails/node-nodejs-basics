import zlib from "node:zlib";
import fs from "node:fs";

const decompress = async () => {
    // Write your code here

    const gzip = zlib.createUnzip();
    const inputFile = fs.createReadStream('src/zip/files/archive.gz');
    const outputFile = fs.createWriteStream('src/zip/files/fileToCompress2.txt');

    inputFile.pipe(gzip).pipe(outputFile);
};

await decompress();
