let input = require('fs').readFileSync('input.txt').toString().split('\n');

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) { 
   console.log(num.split(i + '').length - 1);    
}
//옛날 확통에서 공과 막대의 개수세는 문제에서 막대의 개수를 푸는 코드..!
//찾고자 하는 수를 기준으로 주어진 숫자열을 나누어 배열화 시키고 나뉜 지점의 개수=찾고자하는 수의 개수임을 이용!
