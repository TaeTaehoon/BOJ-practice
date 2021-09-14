let input = require('fs').readFileSync('input.txt').toString();

let num = Math.sqrt(Number(input));

solve(num);

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

function solve(num) {
    let center = Math.round(num);
    let lessnum = [];

    if(num == 1) {return;}

    while(true) {
        if(Number(input)/center == Math.floor(Number(input)/center)) {
            lessnum.push(center);
            lessnum.push(Number(input)/center);
            break;
        } else {
            center -= 1;
        }
    }

    let smallnum = [];
    for(i = 0; i < lessnum.length; i++) {
        const A = lessnum[i];
        let count = 2;
        if(isPrime(A)) {
            smallnum.push(A);
            continue;
        }
        while(true) {
            if(Math.pow(A, 1/count) == Math.floor(Math.pow(A, 1/count))) {
                for(j = 1; j <= count; j++) {
                    smallnum.push(Math.pow(A, 1/count));
                }
                break;
            } 
            count++;
        }
    }
    
    console.log(smallnum.join('\n'));
}
//시간초과가 나긴했으나...푼게 너무 아까워서 올림! 소수판별함수를 통하여 소수를 소인수로 갖는 경우에도 대처가능!
