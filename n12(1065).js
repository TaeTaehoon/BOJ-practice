let input = require('fs').readFileSync('input.txt').toString().split('\n');

let result = [];

function filter(n) {
        let number = n;
        let g = [];
    
        for (j = 0; j < String(n).length; j++) {
            g.push(number % 10);
            number = Math.floor(number / 10);
        }
        //input을 자리수마다 잘라서 배열로 순서대로 저장
    
        if (n < 100) {
    
            return result.push(n);
    
        } else if (100 <= n && n <1000) {
    
            if (g[2] - g[1] == g[1] - g[0]) {
                return result.push(n);
            }
    
        } else {
            return;
        }
        //1~99는 항상 한수이기때문에 그 이상을 따로 나누어 한수검사 실행!
        //이걸 좀 줄이고 싶은데 좀처럼 떠오르지 않는다..언젠간 바꾸리..!
    }
    //초기의 반복문을 함수형으로 바꿔서 사용하는데 성공했다!
    //함수탈출은 break가 아니라 return임! 거기에서 옆에 뭐 붙이면 그걸 뿅하고 도출!



    
    for(i = 1; i <= Number(input[0]); i++) {
        filter(i);
    }

    console.log(result.length);
