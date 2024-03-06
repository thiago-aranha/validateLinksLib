import chalk from "chalk";
import fs from "fs";
import {readFileSync, oldReadFileAsync, newReadFileAsync} from "./files.js";
import {findLinks, testLinks} from "./links.js";

async function processRequest(path, validation) {
    try {
        fs.lstatSync(path);
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log(chalk.red("Caminho inválido: Arquivo ou diretório não existe"));
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const text = await newReadFileAsync(path);
        const links = findLinks(text);
        await testLinks(validation, links, path);

    } else if(fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async fileName => {
            const text = await newReadFileAsync(path + "/" + fileName);
            const links = findLinks(text);
            await testLinks(validation, links, fileName);
        });
    }
}

export {processRequest};