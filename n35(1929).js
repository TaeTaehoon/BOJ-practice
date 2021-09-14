let input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

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
function findLimit(n) {
    let limit = 2;

    while(true) {
        if(n < limit**2) {
            return limit;
        } else {
            limit++;
        }
    }
}
function solve(M, N) {
    let numRange = [];
    numRange.length = N-M+1;
    numRange.fill(true, 0, N-M+1);


    let finder = 2;
    let smallnumbers = [];

    while(finder <= findLimit(N)) {
        if(isPrime(finder)) {
            smallnumbers.push(finder)
        }
        finder++;
    }
    console.log(numRange);

    let multiflier = 1;

    for(i = 0; i <= smallnumbers.length-1; i++) {
        while(true) {
            multiflier++;
            if(M <= smallnumbers[i]*multiflier && smallnumbers[i]*multiflier <= N) {
                numRange.splice(smallnumbers[i]*multiflier-M, 1, false);
            } else if (smallnumbers[i]*multiflier > N) {
                break;
            }
        }
    }
    console.log(numRange);
}
//에스무시기 체에 따라 하는 중인데 잘 안된다. 모든 숫자범위를 true로 채운뒤에 소수가 아닌 숫자들의 위치만 false로 바꾸어
//true index에 위치한 숫자들만 출력하고 싶은데...
