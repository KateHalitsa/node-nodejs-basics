import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import path from 'path';
const performCalculations = async () => {
    const numWorkers = cpus().length;
    const workerPromises = [];

    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker(path.resolve('./src/wt/worker.js'));
        const numberToCompute = 10 + i;

        const p = new Promise((resolve) => {
            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });
        });

        worker.postMessage(numberToCompute);
        workerPromises.push(p);
    }

    const results = await Promise.all(workerPromises);
    console.log(results);
};

await performCalculations();
