
var common = require('../common/aoc-common.js');

async function app () {

    var passwords = await common.loadLinesIntoArray('passwords.txt');

    let found = 0;

    for(let pw of passwords) {  

        //parse entry
        let min = pw.substring(0, pw.indexOf("-"));
        let max = pw.substring(pw.indexOf("-")+1, pw.indexOf(" "));
        let char = pw.split(" ")[1].charAt(0);
        let pass = pw.split(" ")[2];
    
        //see if the specificed character appears between min and max times
        let count = pass.split('').filter(letter => letter == char).length;
        if((count >= min)&&(count <= max)){
            found++;
        }

    }

    console.log("Found " + found + " valid password.")

};

app();