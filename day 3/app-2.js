
var common = require('../common/aoc-common.js');

async function app () {

    var grid = await common.loadLinesIntoArray('grid.txt');

    const line_length = grid[0].length;

    const slopes = [
        {
            right : 1,
            down : 1
        },
        {
            right : 3,
            down : 1
        },
        {
            right : 5,
            down : 1
        },
        {
            right : 7,
            down : 1
        },
        {
            right : 1,
            down : 2
        }
    ];

    let all_trees = [];

    for (let slope of slopes){

        let line = 0;
        let pos = 0;
        let trees = 0;

        while(line < grid.length){
            
            if( grid[line].charAt(pos % line_length) == "#"){
                trees++;
            }
            pos = pos + slope.right;
            line = line + slope.down;
        }

        all_trees.push(trees);

    }

    console.log("Found " + all_trees.reduce(function(a,c){return a*c}) + " trees.");    

};

app();