let input = require('fs').readFileSync('input.txt').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    
    sum += count;
  }
  
  console.log(sum);
}
//처음에는 X를 기준으로 기존 input을 나누어 새로운 배열을 생성하고
//해당 배열의 요소마다 O가 연결된 횟수만큼 count와 같이 반복되는 횟수를
//반환하는 요소를 만들어 sum하려고 했으나 X가 아예 없는 경우에는
//length가 짧아져 아예 for문이 동작을 안 하는 문제가 발생했다.
//해당 예외를 만드는 방법을 알 수가 없어 포기했다.
//해당 풀이를 통해 input[i][j]와 같이 배열내의 순서를 정해주는 방법이
//있다는 것도 알게되었다. 개 쌈빡하네...;;
