"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
fs.readFile(path.join(__dirname, './texty.txt'), 'utf8', function (error, data) {
    // ...
    console.log(data);
});
// https://stackoverflow.com/questions/43048113/use-fs-in-typescript
