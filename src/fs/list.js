import { promises as fs } from 'fs';
import path from 'path';
const list = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    try {
        const content = await fs.readdir(dirPath);
        console.log(content );
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
