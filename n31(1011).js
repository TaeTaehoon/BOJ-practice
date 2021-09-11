let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const T = Number(input[0]);

function solve(n) {
    const coordinate = input[n].split(' ');
    let x = Number(coordinate[0]);
    let y = Number(coordinate[1]);
    const arrive = y-1;
    let distance = arrive-x;
    let jump = 1;
    
    while(true) {

        if(distance > 0) {
            distance -= jump;
            jump++;
        } else
        if(distance == 0) {
            return jump+1;
            break;
        } else
        if(distance < 0) {
            jump--;
        }

    }
}

for(i = 1; i <= T; i++) {
    console.log(solve(i));
}
/*
1
1

2
1 1

3
1 1 1

4
1 1 1 1
1 2 1

5
1 1 1 1 1
1 2 1 1

6
1 1 1 1 1 1
1 2 2 1

7
1 1 1 1 1 1 1
1 2 2 1 1

8
1 1 1 1 1 1 1 1
1 2 2 2 1

9
1 1 1 1 1 1 1 1 1
1 2 3 2 1

10
1 1 1 1 1 1 1 1 1 1
1 2 3 2 1 1
*/
