
var common = require('../common/aoc-common.js');

async function app () {

    var expenses = await common.loadLinesIntoArray('expenses.txt');

    main_loop:
    for(let expense1 of expenses) {  
        for(let expense2 of expenses) {  
            for(let expense3 of expenses) {  
            
                let total = Number(expense1) + Number(expense2)+ Number(expense3);
                if(total == 2020){

                    let product = Number(expense1) * Number(expense2) * Number(expense3);

                    console.log(expense1 + " + " + expense2 + " + " + expense3 + " = " + total);
                    console.log(expense1 + " + " + expense2 + " * " + expense3 + " = " + product);
                    break main_loop;

                }
            }
        }
        
    }

};

app();