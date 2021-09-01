let input = require('fs').readFileSync('input.txt').toString().split(' ');


const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);
let height = 0;
let date = 0;

while(true) {
    date++;
    height += A;

    if (V <= height) {
        console.log(date);
        break;
    }
    height -= B;
}
//맞는 풀이이기는 하지만 시간제한을 보니 올바른 풀이는 아닌듯하다.
//input값이 커지면 시간도 오래걸려서..시간을 단축할 알고리즘을 찾아보자..!
