
var common = require('../common/aoc-common.js');

async function app () {

    var passwords = await common.loadLinesIntoArray('passwords.txt');

    let found = 0;

    for(let pw of passwords) {  

        //parse entry
        let pos1 = pw.substring(0, pw.indexOf("-"));
        let pos2 = pw.substring(pw.indexOf("-")+1, pw.indexOf(" "));
        let char = pw.split(" ")[1].charAt(0);
        let pass = pw.split(" ")[2];
    
        //see if the specificed character appears at pos1 or pos2 but not both
        let c1 = pass.split('')[pos1-1] == char;
        let c2 = pass.split('')[pos2-1] == char;
        if( ( c1 || c2 ) && !( c1 && c2 ) ) {
            found++;
        }

    }

    console.log("Found " + found + " valid password.")

};

app();