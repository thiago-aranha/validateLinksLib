import chalk from "chalk";


function findLinks(text) {
    const regex = /\[(.*?)\]\((https?:\/\/.*?)\)/g;
    
    let match;
    let links = [];
    
    while ((match = regex.exec(text)) !== null) {
        links.push({linkName: match[1], url: match[2]});
    }
    
    return links;    
}

async function testLinks(validation, links, fileName = '') {

    links.forEach(async link => {

        let status = chalk.bgYellow("Non-validated link");
        if (validation) {
            if (await validateLink(link.url)) {
                status = chalk.bgGreen("Link working");
            } else {
                status = chalk.bgRed("Broken link");
            }
        }

        printLink(fileName, link.linkName, link.url, status);

    });

}

async function validateLink(url) {
    const statusCodeHTTPOK = 200;
    let response;

    try {
        response = await fetch(url);
    } catch (error) {
        return false;
    }

    if (response.ok && response.status === statusCodeHTTPOK) {
        return true;
    }
    return false;
}

function printLink(fileName, linkName, url, linkStatus) {
    console.log(`[${fileName}] ${chalk.bgGray(linkName)} (${chalk.underline(url)}) - ${linkStatus}`);
}

export {findLinks, testLinks}