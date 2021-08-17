let input = require('fs').readFileSync('input.txt').toString().split('\n');

console.log(input[0]);
function filter(n) {
    let number = n;
    let g = [];

    for (i = 0; i < String(n).length; i++) {
        g.push(number % 10);
        number = Math.floor(number / 10);
    }

    if (g[0] == g[1]) {
        return n;
    }

     
}

const range = Number(input[0]);
let Hansu = Array(range + 1).fill(true);

for(i = 0; i <= range; i++) {
    Hansu[filter(i)] = false;
}
console.log(range - Hansu.length);
