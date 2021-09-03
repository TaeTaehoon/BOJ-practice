let input = require('fs').readFileSync('input.txt').toString().split('\n');

let T = Number(input[0]);
let k;
let n;

for (l = 1; l <= T; l++) {
    k = Number(input[2*l - 1]);
    n = Number(input[2*l]);
    //input 정제

    let apt = [];
    let loby = [];
    let people = 1;
    for (p = 0; p <= n-1; p++) {
        loby.push(people);
        people++;
    }
    apt.push(loby);
    //1층 깔기

    for(i = 1; i <=k; i++) {
        let floor = [1];
        for(j = 1; j <= n-1; j++) {
            floor.push(apt[i-1][j] + floor[j-1]);
        }
        apt.push(floor);
    }
    //1층과 나머지층들을 구분하여 아예 apt라는 배열안에 순서대로 쌓듯이 배열해놓았다.
    //저번에 본 배열내의 배열을 지정하는 방법이 생각나서 써먹어봤다. 괜찮은듯!
    console.log(apt[k][n-1]);
}
