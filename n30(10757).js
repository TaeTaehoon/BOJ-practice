let input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
//trim!! 그놈의 trim잘쓰자!!!!!!
let A = input[0].split('').map((x) => +x).reverse();
let B = input[1].split('').map((x) => +x).reverse();
//A와 B를 자릿수마다 배열에 저장하고 1의자리부터 덧셈을 해야하므로 수를 뒤집었다.
let result = [];
let count = 0;
let longernum = A.length >= B.length ? A : B;
//한쪽의 수가 더 길면 같은 자리수가 존재하지 않으므로 문제를 해결하기 위해 긴 숫자를 지정해줬다.

while(true) {
    let sum = count in A && count in B ? A[count]+B[count] : longernum[count];
    //두 수가 서로 자릿수가 같지 않다면 덧셈을 할때 한쪽은 null값이 더해져 숫자로 인식하지 못하는 오류 발생.
    //그래서 한쪽만 해당 자릿수가 존재한다면 그냥 해당 숫자만을 sum값으로 지정해줌.
    if (sum >= 10) {
        if (count + 1 == longernum.length) {
            result.push(sum%10);
            result.push(1);
            break;
        } else {
            result.push(sum%10);
            longernum[count+1] ++;
        }//그중에서도 다음 자릿수가 A B중 한쪽만 있는경우 긴수에 대해서만 해당 과정을 실행한다.
    } else {
        result.push(sum);
    }//sum이 10 이상인 경우 다음자릿수가 +1이 되게 하였으며

    count++;
    if (count == longernum.length) {break;}
    //count값을 이용하여 긴 숫자의 길이만큼 해당 과정을 반복시킨다.
}
console.log(result.reverse().join(''));
/*
++해당 문제가 너무 어려워 다른사람들의 풀이가 궁금해서 찾아봤다.
그런데 다른 사람들은 단 몇줄로 문제를 해결해놓은것이다! wtf?
BigInt메소드를 이용하면 기존에 출력가능한 범위 이상의 숫자열을 다룰 수 있다는 것이다!
놀랍게도 나는 그렇게 풀수가 없었는데..사지방에 깔린 js의 한계였다..
Bigint 메소드가 내장되어 있지 않았다...ㅎ
*/
