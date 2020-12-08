
var common = require('../common/aoc-common.js');

async function app () {

    var grid = await common.loadLinesIntoArray('grid.txt');

    const line_length = grid[0].length;

    let line = 0;
    let pos = 0;
    let trees = 0;

    while(line < grid.length){
        
        if( grid[line].charAt(pos % line_length) == "#"){
            trees++;
        }
        pos = pos + 3;
        line++;
    }

    console.log("Found " + trees + " trees.")

};

app();