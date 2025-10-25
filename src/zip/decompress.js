import fs from 'fs';
import zlib from 'zlib';
const decompress = async () => {
    const input = fs.createReadStream('./src/zip/files/archive.gz');
    const output = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
    const gunzip = zlib.createGunzip();

    input.pipe(gunzip).pipe(output);
    input.on('error', () => {
        throw new Error('FS operation failed');
    });
    output.on('error', () => {
        throw new Error('FS operation failed');
    });};

await decompress();
