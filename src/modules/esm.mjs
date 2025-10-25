import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { promises as fs } from 'fs';

import './files/c.cjs';

const random = Math.random();
console.log(`Работает ${random}`);
let unknownObject;
if (random > 0.5) {
  unknownObject = JSON.parse(await fs.readFile('./src/modules/files/a.json', 'utf-8'));
} else {
  unknownObject = JSON.parse(await fs.readFile('./src/modules/files/b.json', 'utf-8'));
}
console.log(`Работает ${random}`);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Работает ${random}`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
