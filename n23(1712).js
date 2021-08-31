let input = require('fs').readFileSync('input.txt').toString().split(' ');

const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count);
//예전에 본 input 입력 받는 형식도 그렇고 ?연산자가 생각보다 유용한듯 하다.
//사용방법이 잘 떠오르지 않아서 쓰지 않고있었는데 앞으로 많이 써먹는쪽으로 사용해봐야겠다
//조건부 삼항 연산자
// 세 개의 피연산자를 취할 수 있느 ㄴ유일한 연산자.
// 조건문 ? 뒤로 조건이 참이며 ㄴ실행할 식이 들어감
// 조건문 ? 참이면 실행 : 거짓이면 실행
//보통 if의 단축형태로 주로 쓰인다.**중요!!
