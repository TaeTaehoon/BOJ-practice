let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const M = Number(input[0]);
const N = Number(input[1]);

solve(M, N);

function isPrime(num) {
    if (num <= 1) return false;
  
    const squareRoot = Math.floor(Math.sqrt(num));
  
    for (let i = 2; i <= squareRoot; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }//소수 판별 함수 정수인 제곱근의 존재유무를 통해 소수판별
/*
이전 문제에서 나는 소수를 판별하기 위해 주어진 숫자 아래의 정수로 모두 나누어보며
소수인지를 판별했으나 이번문제에서는 똑같은 방법을 이용하니 시간초과가 나왔다.
예상했던 결과긴 하지만 막상 당하니 마음이아프다...
제곱근이 정수로 존재한다면 해당 제곱근이 중앙값이니 그 이하인 절반만 찾아봐도
해당 숫자가 공약수를 가지는지 안 가지는지 알 수 있는것이엇다!(수학적 사고력 부족..!^^&)
그래서 제곱근이 정수임 => 해당 제곱근까지의 숫자들로 나누어 판별
      제곱근이 정수가 아님 => 해당 제곱근에 가장 가까운 작은 정수까지 숫자들로 나누어 판별
어차피 제곱근보다 큰 숫자는 제곱근보다 작은 수의 곱으로 해당 숫자를 나타내기 때문에
제곱근보다 큰 숫자에 대해서는 굳이 판별하지 않아도 된다!
*/
//같은 기능을 하더라도 단계가 적어야 좋다는 말을 체감중이다..
//앞으로도 최대한 적게 동작하는 알고리즘을 생각해보자!
function solve(M, N) {
       let Firstprime = 0;
       let sum = 0;
       let count = 0;

      for(i = M; i <= N; i++) {
        if(isPrime(i)) {
            sum += i;
            count ++;
            if(count == 1) {
                Firstprime += i;
            }
        }
      }

       console.log(sum != 0 ? sum + '\n' + Firstprime : -1);
}
