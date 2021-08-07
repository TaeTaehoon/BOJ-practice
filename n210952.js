let input = require('fs').readFileSync('input.txt').toString().split('\n');
//input.txt로부터 input 값을 받아옴. 현재 사지방 개발환경이 리눅스타입이라
//인터넷에서 본 자동으로 input을 받아오는걸 선별해주는 코드를 사용 못 함...


let i = 0;
//while 문의 반복횟수를 지정해주기 위해 사용
let answer = [];


while (i <= input.length) {

    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);

    if ( a==0 && b==0) {
        break;
    } else {
        answer.push(a + b + '\n');
    }
    //a와 b가 모두 0일때 if문을 탈출한다. 그외의 경우엔 a + b를 저장하고 다음줄로 넘김.
    i++;
}
console.log(answer.join(''))
//항상 드는 생각이 있다. 마지막줄에도 개행문자가 추가되어 아무 값이 없는 다음줄이 생긴다.
//해당 문제도 언젠가는 해결해보고싶다.