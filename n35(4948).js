let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

for(i = 0; i <= input.length-1; i++) {
    const n = Number(input[i]);
    if(n == 0) break;
    if (n == 1) {
        console.log(1);
        continue;
    }

    const numbers = Array(2*n).fill(true, 0, 2*n);

    for(j = 2; j*j <= 2*n; j++) {
        if(numbers[j-1]) {
            for(l = 2; j*l <= 2*n; l++) {
                numbers.splice(j*l-1, 1, false);
            }


        }
    }
    
    const Primenums = numbers.slice(n).filter(x => x == true);
    
    console.log(Primenums.length); 
} 
//오히려 단계를 줄였다고 생각했는데 시간이 더 오래걸린다 왜지!
