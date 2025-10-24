import { promises as fs } from 'fs';
import path from 'path';
const read = async () => {
    const dirPath = path.join('src', 'fs', 'files','fileToRead.txt');
    try {
        const files = await fs.readFile(dirPath, 'utf-8');
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
