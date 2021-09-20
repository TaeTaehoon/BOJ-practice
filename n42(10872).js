let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
let result = 1;

function Factorial(n) {
    if (n > N) return 1;
    
    return n *= Factorial(n+1);
    
}

console.log(Factorial(result));
//재귀 과정이 잘 이해가 안된다..! 디버깅 해봐야겠다..;;
