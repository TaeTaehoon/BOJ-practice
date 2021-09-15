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
    let numRange = Array(N+1).fill(true, 0, N+1);


    let finder = 2;
    let smallsindex = [];

    while(finder <= findLimit(N)) {
        if(isPrime(finder)) {
            smallsindex.push(finder)
        }
        finder++;
    }

    for(i = 0; i <= smallsindex.length-1; i++) {
        let multiflier = 1;
        while(true) {
            multiflier++;
            let target = smallsindex[i]*multiflier;

            if(target <= N) {
                numRange.splice(target, 1, false);
            } else if (target > N) {
                break;
            }
            
        }
    }

    let smallnums = [];

    for(j = M; j <= N; j++) {
        if(numRange[j] && j != 1) {
            smallnums.push(j);
        }
    }
    
    console.log(smallnums.join('\n'));
}
/*
해냈다! 에스트라 무시기 체를 그대로 구현해냈다!
다만 조금 아쉬운 점은 N의 제곱근 이하의 소수를 한 번 찾아낸 후에야
해당 소수들의 곱셈값을 범위내에서 제외시켜야해서 그런지
코드의 실행시간이 좀 길어졌다. 그래도 풀어낸 게 어디야! 숏코딩은 나중에 하하
*/
