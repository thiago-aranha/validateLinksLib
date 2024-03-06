import fs from "fs";
import {errorTreatment} from "./common.js";

function readFileSync(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        return fileContent;
    }
    catch (error) {
        errorTreatment(error);
    }
}

function oldReadFileAsync(filePath) {
    fs.promises
        .readFile(filePath, "utf-8")
        .then((fileContent) => fileContent)
        .catch((error) => errorTreatment(error))
}

async function newReadFileAsync(filePath) {
    try {
        const fileContent = await fs.promises.readFile(filePath, "utf-8");
        return fileContent;
    }
    catch (error) {
        errorTreatment(error)
    }
}

export {readFileSync, oldReadFileAsync, newReadFileAsync};