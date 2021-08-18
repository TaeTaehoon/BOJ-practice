let input = require('fs').readFileSync('input.txt').toString().split('\n');

let result = [];
//result에 빈 배열을 생성하여 여기에 결과값들을 저장

for (n = 1; n <= Number(input[0]); n++) {
    let number = n;
    let g = [];

    for (i = 0; i < String(n).length; i++) {
        g.push(number % 10);
        number = Math.floor(number / 10);
    }
    //input을 자리수마다 잘라서 배열로 순서대로 저장

    if (n < 100) {

        result.push(n);

    } else if (100 <= n && n <1000) {

        if (g[2] - g[1] == g[1] - g[0]) {
            result.push(n);
        }

    } else if ( n == 1000) {
        break;
    }
    //1~99는 항상 한수이기때문에 그 이상을 따로 나누어 한수검사 실행!
    //이걸 좀 줄이고 싶은데 좀처럼 떠오르지 않는다..언젠간 바꾸리..!
}

console.log(result.length);
//result에 저장된 결과값의 개수를 출력
