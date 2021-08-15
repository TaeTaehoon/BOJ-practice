let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = input[0];
let maxIdx = 0;

for (let i = 1; i < 9; i++) {
  if (max < input[i]) {
    max = input[i];
    maxIdx = i;
  }
}

console.log(max);
console.log(maxIdx + 1);
//Index값에 +1을 해주는 이유 => 배열은 0에서 시작하지만 i값은 1에서 시작해서 생기는 괴리해결
//너무 어렵게 생각하지말자..기초수학이다..! 괜히 어렵게 코드 짰다가 시간초과났다!


