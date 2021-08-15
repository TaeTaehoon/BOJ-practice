let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let C = Number(input[0]);
let testcase;
let sum = Number();
let line = Number();
let people = Number();
let ratio = Number();
let result;


for (i = 1; i <= C; i++) {

    testcase = input[i].split(' ').map((x) => +x);


    for (j = 1; j <= testcase[0]; j++) {
        if (testcase[0] < j) {
            break;
        }

        sum += testcase[j];
        
    } //학생들의 점수 합산

    line = sum / testcase[0];


    for (k = 1; k <= testcase[0]; k++) {

        if (testcase[0] < k) {
            break;
        }

        if (line < testcase[k]) {
            people += 1;
        }
        
    } //평균을 넘는 학생들의 비율 계산

    ratio = ((people / testcase[0]) * 100).toFixed(3);

    result = `${ratio}%`

    console.log(result);

    
    sum = 0;
    people = 0;
    //sum, count, people 값이 누적되는 것을 방지

}
//구글링 안하고 진짜 열심히 풀어서 그런지 매우 뿌듯...
//다만 너무 모듈식처럼 푼 것 같기도 한데..내일 구글로 
//다른사람들의 풀이도 참고해보려고한다.
