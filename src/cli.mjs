import {processRequest} from './index.js';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
    .option('file', {
        alias: 'p',
        describe: 'File or folder path to be analysed',
        demandOption: true,
        type: 'string'
    })
    .option('mode', {
        alias: 'm',
        describe: 'Process mode',
        choices: ['validate', null],
        default: null
    })
    .help()
    .argv;

processRequest(argv.file, argv.mode === 'validate');