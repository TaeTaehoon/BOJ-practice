let input = require('fs').readFileSync('input.txt').toString().split('\n');


let i = 0;
let result = [];

while (i<input.length-1) {

    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);

    result.push(a + b + '\n');

    i++;
}

console.log(result.join(''));