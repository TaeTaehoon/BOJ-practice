let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


const num = Number(input[0]);
let faverage = Number();
let tscore = input[1].split(' ').map((item) => +item);
let M = tscore[0];


i = 0;
while (true) {

    if (i == num ) {
        break;
    }

    if (M < tscore[i]) {

        M = tscore[i];

    }

    i++;
    
}
//반복문의 반복횟수에 문제가 있었던 것 같다. 횟수를 추가시킴으로써 해결!

for (k = 0; k <= num - 1; k++) {

    faverage += tscore[k] / M * 100 / num;

}
console.log(faverage.toFixed(6));
