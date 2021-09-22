let input = require('fs').readFileSync('input.txt').toString();


const N = Number(input);
const move = [];

function devide(a, b, n) {
    let c = 6 - (a+b);

    if (n == 1) return move.push(`${a} ${b}`);
    else if (n != 1) {
        devide(a, c, n-1);
        move.push(`${a} ${b}`);
        devide(c, b, n-1)
        return;
    }
}

devide(1, 3, N);

console.log(2**N - 1);
console.log(move.join('\n'));
/*
하노이탑을 가지고 며칠동안 엄청 고민을 많이 해보았다.
그랬더니 한가지 규칙성? 같은걸 찾을 수 있었는데 맨 밑에 가장 큰 고리를 없는 걸로 생각하고
이동을 한다면 계속하여 고리의 개수를 줄여가면서 이동하는 것과 같다는 것이다.
(가장 큰 고리를 아예 바닥으로 생각해보면 됨.)
그래서 그걸 재귀함수로 표현해보았고 다행히도 맞았다!
그리고 N이 증가함에 따라 기하급수적으로 이동횟수가 늘어나기때문에 시간초과가 우려되어
출력을 띢띢띢하지 않고 move 배열에 저장한 뒤에 한번에 출력하는 방식을 사용하였다.
*/
