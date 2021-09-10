let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);
let length = 0;

function solve(n) {
    const coordinate = input[n].split(' ');
    let x = Number(coordinate[0]);
    let y = Number(coordinate[1]);
    const arrive = y-1;

    
}

for(i = 1; i <= T; i++) {
    solve(i);
}
