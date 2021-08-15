let input = require('fs').readFileSync('input.txt').toString().split('\n');
//input.txt로부터 input 값을 받아옴. 현재 사지방 개발환경이 리눅스타입이라
//인터넷에서 본 자동으로 input을 받아오는걸 선별해주는 코드를 사용 못 함...

let X = input[0].split(' ').map((x) => +x);
let A = input[1].split(' ').map((A) => +A);
let result = [];
//받아온 input을 내가 사용하려는 목적에 맞게 정제
// push,join을 사용하기 위해 result에는 새로운 배열을 추가시켰다.

solution(X, A, result);

function solution(X,A) {
    for (i=0; i <= X[0]; i++) {
        if(A[i] < X[1]) {
            result.push(A[i]);
            //result 배열에 해당 요소를 추가시킴
        }
    }
    console.log(result.join(' '));
    //배열 요소에 추가된 A[i]값들을 문자열로 반환시켰다.
}
