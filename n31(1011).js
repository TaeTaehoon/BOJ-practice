let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);

function solve(t) {
    const coordinate = input[t].toString().split(' ');
    let x = Number(coordinate[0]);
    let y = Number(coordinate[1]);
    const distance = (y-x);

    let n = 0;

    while(true) {
        if(distance <= n*(n+1)) {
            return (distance > n*n ? n*2 : n*2-1);
        }else {
            n++;
        }
    }
}

for(i = 1; i <= T; i++) {
    console.log(solve(i));
}
