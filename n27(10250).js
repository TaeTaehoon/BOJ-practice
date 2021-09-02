let input = require('fs').readFileSync('input.txt').toString().split('\n');


const T = Number(input[0]);

function solution(n) {
    let testcase = input[n].split(' ').map((x) => +x);
    let H = testcase[0];
    let N = testcase[2];
    let Y = 1;
    let room = [];

    while(H < N) {
        Y++;
        N -= H;
    }//H보다 N이 큰경우 N에서 H만큼 값을 빼서 방이 배치되는 열의 XX를 구함.
     //그리고 N을 뺀 횟수 => 1열이므로 Y의 값과 같다.

    room.push(N);
    if (Y <10) {
        room.push(`0${Y}`);
    } else {
        room.push(Y);
    }//방호수는 01, 02, 03 ...과 같으므로 한자리수는 0을 포함한 문자열을 push!

    return room.join('');
}

for(i =1; i<=T; i++) {
    console.log(solution(i));
}
