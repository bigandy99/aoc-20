
var common = require('../common/aoc-common.js');

async function app () {

    const passport_batch = await common.loadAsString('passports.txt');

    const passports = passport_batch
        .split("\n\n")
        .map(function(a){
            let out = {};
            a.replace(/(\r\n|\n|\r)/gm," ").split(" ").forEach(function(b){
                out[b.substring(0, b.indexOf(":"))] = b.substring(a.indexOf(":")+1, b.length);
            });
            return out;
        });
    
    const valid_passports = passports.filter(function(a){

        let bad = 
            a.ecl === undefined ||
            a.pid === undefined ||
            a.eyr === undefined ||
            a.hcl === undefined ||
            a.byr === undefined ||
            a.iyr === undefined ||
            a.hgt === undefined;
        
        return !bad; 

    });

    console.log("There are " + valid_passports.length + " valid passports.")

    

};

app();