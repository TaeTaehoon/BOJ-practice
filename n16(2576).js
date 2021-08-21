let input = require('fs').readFileSync('input.txt').toString().split('\n');

let T = Number(input[0]);
let P = [];

for (i=1; i <= T; i++) {
    let R = input[i].split(' ')[0];
    let S = input[i].split(' ')[1];
    let testcase = S.split("");
//필요한 값들을 우선 생성시킴.
    for (l = 0; l <= Number(S.length) - 1; l++) {

        for (j = 1; j <= Number(R); j++) {
            P.push(testcase[l]);
        }//반복횟수 R에 맞추어 각 글자를 반복해서 P에 저장

    }//글자마다 내부의 반복문이 실행되도록 함!

    console.log(P.join(``));
    P = [];
    //출력 후에 다음 출력때 이전 요소들이 남아있지 않도록 P를 초기화
}
