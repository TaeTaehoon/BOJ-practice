let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map((x) => +x);

solve(N, numbers);

function solve(N, numbers) {
    let count = 0;
    for(i = 0; i <= N-1; i++) {

        let num = numbers[i];

        if(num == 1) {
            continue;
        } else {
            for(j=2; j <= num; j++) {
                if(j == num) {
                    count++;
                    break;
                }
                if(num/j != Math.floor(num/j)) {
                    continue;
                    //num/j가 정수가 아닌 경우
                } else {
                    break;
                } //num/j가 정수인 경우 => num이 소수가 아님을 의미
            }
        }
    }
    console.log(count);    
}
