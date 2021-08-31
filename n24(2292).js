let input = require('fs').readFileSync('input.txt').toString().split(' ');


const N = Number(input[0]);
let sum = [1];


for (i = 0; i <= 100000; i ++) {

    sum.push(sum[i] + 6 * (i + 1));

    if (N == 1) {
        console.log(1);
        break;
    }
    else if (sum[i] < N && N <= sum[i + 1]) {
        console.log(i + 2);
        break;
    } else {continue;}

}
//공차 6인 등차수열을 i값에 따라 필요한만큼만 만들어 불필요한 시간 소모를 줄였다.
//i값도 계산해서 구할려다가 귀찮아서 안했다!
//해당 범위 내에 N값이 존재하면 해당 범위에 순서를 출력한다.(배열은 0부터 시작하므로 i+2를 출력함)
