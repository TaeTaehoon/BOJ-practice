const input = require('fs').readFileSync('input.txt').toString().split('');

const string = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
let result = 0;


for( i = 0; i <= input.length - 1; i++) {

    if (string.indexOf(input[i]) <= 2) {
        result += 3;
    } else  if (string.indexOf(input[i]) <= 5 && 2 < string.indexOf(input[i])) {
        result += 4;
    } else  if (string.indexOf(input[i]) <= 8 && 5 < string.indexOf(input[i])) {
        result += 5;
    } else  if (string.indexOf(input[i]) <= 11 && 8 < string.indexOf(input[i])) {
        result += 6;
    } else  if (string.indexOf(input[i]) <= 14 && 11 < string.indexOf(input[i])) {
        result += 7;
    } else  if (string.indexOf(input[i]) <= 18 && 14 < string.indexOf(input[i])) {
        result += 8;
    } else  if (string.indexOf(input[i]) <= 21 && 18 < string.indexOf(input[i])) {
        result += 9;
    } else  if (string.indexOf(input[i]) <= 25 && 21 < string.indexOf(input[i])) {
        result += 10;
    }

}
console.log(input);
console.log(string.length);
console.log(result);
