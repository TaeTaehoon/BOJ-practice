let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const M = Number(input[0]);
const N = Number(input[1]);

solve(M, N);

function isPrime(num) {
    if (num <= 1) return false;
  
    const squareRoot = Math.floor(Math.sqrt(num));
  
    for (let j = 2; j <= squareRoot; j++) {
      if (num % j === 0) {
        return false;
      }
    }
  
    return true;
  }//소수 판별 함수 정수인 제곱근의 존재유무를 통해 소수판별

function solve(M, N) {
       let sum = 0;
       let count = 0;
        let Primenum = [];

      for(i = M; i <= N; i++) {
        if(isPrime(i)) {
            Primenum.push(i);
        }
      }

       console.log(Primenum.join('\n'));
}
