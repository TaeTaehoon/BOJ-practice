let input = require('fs').readFileSync('input.txt').toString().split('\n');

let remain = [];


for (i=0; i <=input.length-1; i++) {
    remain.push(Number(input[i]) % 42);
    remain.join('');
    console.log(remain);
}

for(s=0; s <= remain.length-1; s++) {
    let count = 0;

        for (t=0; t <= remain.length-1; t++) {
            if (Number(remain[t]) == Number(remain[s])) {
                count++;
            }
        }
    console.log(count);
}