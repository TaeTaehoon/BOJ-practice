let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);

function isPrime(n) {
    if (n <= 1) return false;
  
    const squareRoot = Math.floor(Math.sqrt(n));
  
    for (let i = 2; i <= squareRoot; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}

solve(T);

function solve() {
    for(i = 1; i <=T; i++) {
        let n = Number(input[i]);
        let center = n/2;
        let partition = [];

        while(center > 1) {
            if(isPrime(center) && isPrime(n-center)) {
                partition.push([center, n-center]);
                
            }
            center--;
        }
      //중간값에서부터 두 수의 합으로 n을 나타내고 골드바흐 파티션들을 찾아감.


        if(partition.length > 1) {
            let index = 0;
            for(j = 1; j <= partition.length-1; j++) {
                let min = Math.abs(partition[0][0] - partition[0][1]);
                let difference = Math.abs(partition[j][0] - partition[j][1]);

                if(difference < min) {
                    min = difference;
                    index++;
                }
            }
            console.log(partition[index].join(' '));
        } else {
            console.log(partition[0].join(' '));
        }
      //파티션이 복수존재하는경우에는 파티션내의 소수들의 차의 절대값을 비교하여 차가 작은것을 정하고
      //해당 파티션의 index를 저장하여 출력함.

    }
}
