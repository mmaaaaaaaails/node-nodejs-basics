import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    // Write your code here

    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        (error) => {
            if (error) throw error;
            console.log('FS operation failed');
        }
    )
};

await create();
