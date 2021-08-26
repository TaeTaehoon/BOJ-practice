const input = require('fs').readFileSync('input.txt').toString().split('');

const string = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
let result = 0;


for( i = 0; i <= input.length - 1; i++) {

    let num = Number(string.indexOf(input[i]));

    if (num <= 2) {
        result += 3;
    } else  if (num <= 5 && 2 < num) {
        result += 4;
    } else  if (num <= 8 && 5 < num) {
        result += 5;
    }  else  if (num <= 11 && 8 < num) {
        result += 6;
    }  else  if (num <= 14 && 11 < num) {
        result += 7;
    } else  if (num <= 18 && 14 < num) {
        result += 8;
    }  else  if (num <= 21 && 18 < num) {
        result += 9;
    }  else  if (num <= 25 && 21 < num) {
        result += 10;
    }

}
//type 문제라고 생각해서 Number태그를 이용하였는데 여전히 풀리지않는다...

console.log(input);
console.log(string.length);
console.log(result);
