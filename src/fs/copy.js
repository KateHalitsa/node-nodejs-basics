import { promises as fs } from 'fs';
import path from 'path';
const copy = async () => {
    const sourceDir = path.join('src', 'fs', 'files');
    const destDir = path.join('src', 'fs','files_copy');
    try {
        await fs.access(sourceDir);
        await fs.access(destDir);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
        await fs.mkdir(destDir);
        await fs.cp(sourceDir, destDir, { recursive: true });
    }
};

await copy();
