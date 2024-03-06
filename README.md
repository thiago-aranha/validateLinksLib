# Overview
This project creates a library in Node.js that validates links inside markdown (*.md) files.
It was created during Alura's Node.js trainment.

# Technologies
Node.js

# How to use
This library can be used with the following instruction:

> node cli.mjs -p <file or folder path> -m <execution mode>

where
* file or folder path (mandatory): can be filled with a file *.MD or a folder with *.MD files
* execution mode (optional): can be indicated with "validate" string, that means that links will be tested or empty if they just need to be extracted, with no test.

## Return
The execution result will be printed on console, on the following pattern:

> [FileName] linkName url - linkStatus

Examples:
* [file.md] gatinho salsicha (http://gatinhosalsicha.com.br/) - Broken link
* [file.md] DataTransfer (https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) - Link working
* [file.md] FileList (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) - Non-validated link