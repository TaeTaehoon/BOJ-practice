let input = require('fs').readFileSync('input.txt').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);
//예전에 본 input 입력 받는 형식도 그렇고 ?연산자가 생각보다 유용한듯 하다.
//사용방법이 잘 떠오르지 않아서 쓰지 않고있었는데 앞으로 많이 써먹는쪽으로 사용해봐야겠다
