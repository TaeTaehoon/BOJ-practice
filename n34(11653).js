let input = require('fs').readFileSync('input.txt').toString();

let num = Math.sqrt(Number(input));

solve(num);

function solve(num) {
    let center = Math.round(num);
    let count = 1;
    let lessnum = [];
    while(true) {
        if(Number(input)/center == Math.floor(Number(input)/center)) {
            lessnum.push(center);
            lessnum.push(Number(input)/center);
            break;
        } else {
            center -= count;
        }
        if(center == 1) {
            break;
        }
    }
    console.log(lessnum);
}
/*
주어진 num의 제곱근에 근사값을 중앙값으로 삼아 적은쪽으로 나아가면서 인수들을 찾고있는데
해당 인수가 또다른 인수를 갖고있다면 해당 수를 어떻게 다시 인수로 나누어 가장 작은 
소인수를 찾아낼 수 있는지 생각중이다.
*/
