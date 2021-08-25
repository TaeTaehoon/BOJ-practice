const input = require('fs').readFileSync('input.txt').toString().split(' ');

let num1 = input[0].split('')
let num2 = input[1].split('')
let count = 0;
//우선 input을 하나하나 배열로 지정하여 자릿수마다 분리
//반복횟수를 판별하기위한 count 변수 선언

for (i = 2; 0 <= i; i--) {

    if (count == 1){ break;}
     //만약 cont가 1이면 이미 결과가 출력된것이므로 바로 반복문을 종료시킴
    if (num1[i] < num2 [i]) {
        console.log(Number(num2.reverse().join('')));
        count += 1;
    } else if (num1[i] > num2[i]) {
        console.log(Number(num1.reverse().join('')));
        count += 1;
      //1의자리 수부터 비교하여 해당 숫자가 큰 수가 보다 큰 숫자이므로 해당 숫자를 출력하고
      //출력과 함께 count의 값을 증가시켜 출력이 되었는지 안되었는지 판별함.
    } else if (num1[i] = num2[i]) {
        continue;
    }
      //해당 자릿수가 서로 같은 경우 다음 자릿수를 비교하여 크기를 비교함.
}
