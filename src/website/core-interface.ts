var Module = require('../../core.js');

export async function readFileAsync(path: string): Promise<number> {
    let ret: number = -2;
    try {
        console.log('Module:', Module);

        const instance = await Module();
        console.log('instance:', instance);

        const readFile = instance.cwrap('readFile', 'number', ['string']);
        console.log('exported function:', readFile);

        ret = readFile(path);
        console.log('result: ', ret);
    } catch (err) {
        console.log('error: ', err);
    }

    return ret;
}