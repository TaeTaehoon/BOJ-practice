let input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = Number(input[0]);
let x = 0;
let y = 0;
let sugar = (x == 0 && y == 0 ? 0 : 3*x + 5*y);
console.log(sugar);
if(N == 1 || N == 2 || N == 4) {
    console.log(-1);
} else 
if (N == 3 || 5 <= N) {
    while(N != sugar) {
        x++;
        if(x%5 == 0) {
            x = 0; 
            y++; 
        }
        if(sugar == N) {
            console.log(x + y); 
            break;
        }
    }
}
/*
5 5 5 3

3 3 3 3 3 3

3 = 3
3*2 = 6
3*3 = 9
3*4 = 12
3*5 = 15 => 5*3 = 15
3*1 + 5 = 8
3*2 + 5 = 11
3*3 + 5 = 14
3*4 + 5 = 17
3*5 + 5 = 20 => 5* 4 = 20
3*6 + 5 = 23 => 3 + 5*4 = 23
3*7 + 5 = 26 => 3*2 + 5*4 = 26

n = 3*x + 5*y // N
*/
