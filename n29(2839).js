let input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = Number(input[0]);
let count5 = (N - N%5)/5;
let count3 = 0;
let remain = N%5;
//처음에는 count5와 count3 모두 반복문을 통해 올라가게 하였으나 굳이 그렇게 할 필요성이 없음을 깨달았다.
//그래서 내가 원하는 풀이로직 => 5의 최대개수를 구한뒤 필요한만큼 5를 빼고 3을 더해 주어진 값에 맞추기 <=에 필요한
//N을 5로 나눌때 최대값을 먼저 count5에 할당시켜놓았다. remain도 마찬가지 5를 최대한 빼고 남은 나머지를 할당.

if (remain == 0) {
    console.log(count5);
    
} else 
if (remain == 1 && 0 < count5) {
    count5 -= 1;
    count3 += 2;
    
    console.log(count3+count5);
    
} else
if (remain == 2 && 1 < count5) {
    count5 -= 2;
    count3 += 4;
    
    console.log(count3+count5);
    
} else
if (remain == 3) {
    count3 += 1;
    
    console.log(count3+count5);
    
} else
if (remain == 4 && 0 < count5) {
    count5 -= 1;
    count3 += 3;
    
    console.log(count3+count5);
    
} 
else {console.log(-1);}
//그 이후에 remain값에 따라 5의 개수와 3의 개수를 조정하여 count5 + count3 == N이 되도록하였다.
//그리고 이 모든 조건에 해당하지 않는 값들은 -1이 출력되도록함.
//조건문에 count5의 값의 범위를 지정한 이유 => 5가 음수 개만큼 있는건 불가능하기 때문! => 만들 수 없는 N이다!

//너무 반복문을 강박적으로 사용하려는 건가?라는 생각이 처음으로 들었다.
//수학적으로 간단히 해결할 수 있는 것도 반복문에 의존하려고한건가...싶다.
