let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

for(i = 0; i < input.length-1; i++) {
    let length = input[i].split(' ').map(x => +x);
    let sqrt = length.map(n => n*n);
    let max = Math.max(...sqrt);
    let min = Math.min(...sqrt);

    if(sqrt.indexOf(max-min) != -1) {
        console.log('right');
    } else {
        console.log('wrong');
    }
}
