let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const T = Number(input[0]);

for(i = 1; i <= T; i++) {
    const testcase = input[i].split(' ').map(x => +x);
    const L = Math.sqrt((testcase[0]-testcase[3])**2 + (testcase[1]-testcase[4])**2)
    const r1 = testcase[2];
    const r2 = testcase[5];

    if (r1 == r2 && testcase[0] == testcase[3] && testcase[1] == testcase[4]) {
        console.log(-1);
        continue;
    }
    if (r1+r2 > L) {
        if (Math.abs(r1-r2) > L) {
            console.log(0);
            continue;
        } else if (Math.abs(r1-r2) == L) {
            console.log(1);
            continue;
        } else if (Math.abs(r1-r2) < L) {
            console.log(2);
            continue;
        }
    } else if (r1+r2 == L) {
        console.log(1);
        continue;
    } else {
        console.log(0);
        continue;
    }
}
//어렵게 생각하지 않고 도식화하여 경우마다 쪼개면 쉽게 풀 수 있었다.
