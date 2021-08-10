let input = require('fs').readFileSync('input.txt').toString().split('\n');

solution(Number(input[0]), Number(input[1]), Number(input[2]));

function solution(A, B, C) {
     let str = `${A*B*C}`;
     const regexp = /[0-9]/g;
     let Multifly = str.match(regexp);
//곱셈결과값을 문자열로 반환해준 후 각 자리마다 숫자를 나눠주는 코드를 짰다.
//새로운 배열로 각 자리의 수를 저장하여 순서대로 자릿수를 알 수 있다.


     for (let i = 0; i <= 9; i++) {
        let count = 0;
        
        for (let j = 0; j < Multifly.length-1; j++) {
            if (Number(Multifly[j]) === i) {
                count++;
            }
        }
        //찾고자 하는 숫자와 일치하는 값이 있으면 count값이 숫자의 개수와 일치하게 한다.
        console.log(count);
    }
    //찾은 숫자의 개수(=count)를 순차적으로 출력한다.

}
//반복문이 이중으로 들어가 시간이 오래 걸려 실패할줄 알았지만 아니었다.
//시간이 오래걸리게 되는 이유는 뭘까,,?