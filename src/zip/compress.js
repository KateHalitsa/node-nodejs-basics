import fs from 'fs';
import zlib from 'zlib';
const compress = async () => {
    const input = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const output = fs.createWriteStream('./src/zip/files/archive.gz');
    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);
    output.on('error', () => {
        throw new Error('FS operation failed');
    });};

await compress();
