let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input[0]);

function fibonachi(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n > N) return 0;

    return fibonachi(n-1) + fibonachi(n-2);
    
}

console.log(fibonachi(N))
/*
약간 재귀함수의 동작흐름이 대충 이해되어가는 것 같다.
아래에서부터 차근차근 올라가면 흐름을 따라갈 수 있는 것 같은데
내가 자꾸 위에서부터 내려가려고해서 이해가 안 되었던 것 같다.
fibonachi(0) = 0
fibonachi(1) = 1
fibonachi(2) = fib(1) + fib(0) = 1 + 0 == 1
fibonachi(3) = fib(2) + fib(1) = 1 + 1 == 2
fibonachi(4) = fib(3) + fib(2) = 2 + 1 == 3
......
이런식으로 아래에서부터 올라가면 되는건데!
*/
