const input = require('fs').readFileSync('input.txt').toString().split('\n');

let word = input[0].split(' ');
let result = [];


for (i = 0; i <= word.length - 1; i++) {
    if  (word[i] != '') {
        result.push(word[i]);
    }
}
//첫번째 배열에 들어가있는 공백들을 걸러내는 과정. 시간이 좀 걸리는게 흠...

console.log(result.length);
