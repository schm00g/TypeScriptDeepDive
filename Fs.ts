import * as fs from 'fs';
import * as path from 'path';
fs.readFile(path.join(__dirname, './texty.txt'), 'utf8', (error: null|Error, data:any) => {
        // ...
        console.log(data);
})  
    
// https://stackoverflow.com/questions/43048113/use-fs-in-typescript