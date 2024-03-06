import chalk from "chalk";

function errorTreatment(error) {
    throw new Error(chalk.red(error));
}

export {errorTreatment}