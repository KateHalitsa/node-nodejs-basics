import { promises as fs } from 'fs';
import path from 'path';
const rename = async () => {
    const oldPath = path.join('src', 'fs', 'files', 'wrongFilename.txt');
    const newPath = path.join('src', 'fs', 'files', 'properFilename.md');
    try {
        await fs.access(oldPath);
        try {
            await fs.access(newPath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.rename(oldPath, newPath);
        console.log('Файл успешно переименован');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();
