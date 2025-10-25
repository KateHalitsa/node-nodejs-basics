import fs from 'fs';
const write = async () => {
    const stream = fs.createWriteStream('./src/streams/files/fileToWrite.txt', { encoding: 'utf-8' });

    stream.on('error', () => {
        throw new Error('FS operation failed');
    });
    process.stdin.pipe(stream);
};

await write();
