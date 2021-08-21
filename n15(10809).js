let input = require('fs').readFileSync('input.txt').toString().split('\n');

let result = [];
let Eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

            
for (i = 0; i <= Eng.length - 1; i++) {
    result.push(input[0].indexOf(Eng[i]) + ' ');
}
//순서대로 주어진 단어에 Eng배열 내의 요소가 포함되어있으면 해당 요소의 index를 출력. 

console.log(result.join(''));
