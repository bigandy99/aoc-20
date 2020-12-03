const fs = require('fs')

module.exports.loadLinesIntoArray = function(filename) {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf8', function(err, contents) {
            var result = contents.split("\n"); 
            resolve(result);
        });
    });
}