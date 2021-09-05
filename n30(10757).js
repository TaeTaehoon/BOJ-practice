let input = require('fs').readFileSync('input.txt').toString().split(' ');

const A = input[0];
const B = input[1];
let splitF = [];
let splitE = [];

console.log(input[0].length);
console.log(input[0].indexOf('', 16));
for(element of input) {

    if (element.length > 16) {

        splitF.push(element.slice(0, 16));
        splitE.push(element.slice(16, element.length));

    }
}
//숫자가 16자리 이상이면 뒤에서 부터 반올림되서 잘려버리는 것을 발견.
//컨셉 => 앞에서 부터 16자리를 기준으로 앞수 뒷수로 나눈뒤 해당수들끼리 더한값을 다시 붙여 반환.
//발생한 문제 => 16번째자리 혹은 17번째자리쯤에서 앞수 뒷수에서 값이 중복되어 자릿수가 늘어나버림! wtf?
let sumF = (Number(splitF[0]) + Number(splitF[1])).toString();
let sumE = (Number(splitE[0]) + Number(splitE[1])).toString();

if(sumF.endsWith('0') == true) {
    if(sumE.length == 3) {

    } else
    if (sumE.length == 4) {
        
    }
    let numF = sumf.slice(0, -1);
} else {

}

console.log(splitF);
console.log(splitE);
console.log(`${sumF} , ${sumE}`);
console.log(sumF + sumE);
//많은 시간을 허비하고 나서야 잘못 풀고 있음을 깨달음... 나중에 수정하자..
