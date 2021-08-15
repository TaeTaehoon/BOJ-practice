let input = require('fs').readFileSync('input.txt').toString().split('\n');

let num = Number(input[0]);
//vsc상으로는 문제가 없었지만 백준에서 채점시 시간초과 오류가 지속적으로 발생함.
//문제를 찾던 중 인풋이 하나인데 배열을 넣어서 그런가 하고 split메소드 삭제하니 해결
//그러나 split 메소드로 배열을 만든뒤 input[0]으로 명시해주자 더욱 빨라졌다.
//배열의 중요성과 명시적인 코드작성의 필요성을 깨달았다...
let sum;
let i = 0;

while (true) {

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    i++;

    if (Number(input[0]) === num) {
	break;
    } 
}
//while 문의 조건식에 무조건 조건을 적어넣으면 초반에 실행되지 않는 경우를 경험
//조건문에 true 값을 할당하여 일단 실행되게 한 뒤에 while문 내에서 탈출할 수도 있음을 알게됨..!!

console.log(i);

//커밋이 깃허브에 연동이 안되서...다시올려봄...
