
var common = require('../common/aoc-common.js');

async function app () {

    var expenses = await common.loadLinesIntoArray('expenses.txt');

    main_loop:
    for(let expense1 of expenses) {  
        for(let expense2 of expenses) {  
            
            let total = Number(expense1) + Number(expense2);
            if(total == 2020){

                let product = Number(expense1) * Number(expense2);

                console.log(expense1 + " + " + expense2 + " = " + total);
                console.log(expense1 + " * " + expense2 + " = " + product);
                break main_loop;

            }
        }
        
    }

};

app();