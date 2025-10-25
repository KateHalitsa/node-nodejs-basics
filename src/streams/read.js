import fs from 'fs';
const read = async () => {
    const stream = fs.createReadStream('./src/streams/files/fileToRead.txt', { encoding: 'utf-8' });
    stream.pipe(process.stdout);
    stream.on('error', () => {
        throw new Error('FS operation failed');
    });
    stream.on('end', () => {
        console.log('\n--- File read complete ---');
    })
};

await read();
