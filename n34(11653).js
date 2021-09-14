let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

solve(num);

function solve(num) {
    let center = Math.round(num);
    let smallnum = [];

    if(num == 1) {return;}

   let divider = 2;
    while(num != 1) {
        
        if(num%divider == 0) {
            smallnum.push(divider);
            num /= divider;
        } else {
            divider++;
        }

    }

    
    console.log(smallnum.join('\n'));
}
//굳이 주어진 숫자에서 분해해서 내려가지말고 작은수부터 시작해서 올라가면 소인수가 겹칠일도 없다!
//그리고 그렇게 하면 시간이 오래걸릴 것 같았는데 이미 앞에서 겹치는 소인수들은 나눔할당을 통해 빠져나가므로
//생각보다 그리 오래걸리지도 않는듯!
//너무 어렵게 생각하지말고 원래 내가 하던대로를 구현할 수 있도록 해보자!
