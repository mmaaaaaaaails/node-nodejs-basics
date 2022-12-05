import { Transform } from 'node:stream';

const transform = async () => {
    // Write your code here

    const reverseStream = new Transform({
        transform (data) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
