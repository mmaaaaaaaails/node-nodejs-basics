import fs from 'node:fs';
import crypto from 'node:crypto';


const calculateHash = async () => {
    // Write your code here

    const file = fs.readFileSync('src/hash/files/fileToCalculateHashFor.txt');
    const hashSum = crypto.createHash('sha256');
    hashSum.update(file);
    const hex = hashSum.digest('hex');
    console.log(hex)
};

await calculateHash();
