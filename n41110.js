let input = require('fs').readFileSync('input.txt').toString().split('\n');

let num = Number(input);
let sum;
let i = 0;

while (true) {

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    i++;

    if (Number(input) === num) {
	break;
    } 
}
//while 문의 조건식에 무조건 조건을 적어넣으면 초반에 실행되지 않는 경우를 경험
//조건문에 true 값을 할당하여 일단 실행되게 한 뒤에 while문 내에서 탈출할 수도 있음을 알게됨..!!

console.log(i);

//커밋이 깃허브에 연동이 안되서...다시올려봄.