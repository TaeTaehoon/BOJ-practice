const input = require('fs').readFileSync('input.txt').toString().split('');
input.pop();
//백준에서 input을 읽어오는 과정에서 뭔가 문제가 생겼던것 같다.
//내 텍스트 편집기 상으로는 아무문제가 없었는데...어이가 없다!
//아무래도 split메소드의 특성상 뭐 줄바꿈 문자가 들어갔다거나,,?
//다음부터는 trim메소드를 사용해봐야겠다. 그게 오류가 없단다!

const string = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let result = 0;


for( i = 0; i <= input.length - 1; i++) {

    let num = Number(string.indexOf(input[i]));

    if (num <= 2) {
        result += 3;
    } else  if (num <= 5) {
        result += 4;
    } else  if (num <= 8) {
        result += 5;
    }  else  if (num <= 11) {
        result += 6;
    }  else  if (num <= 14) {
        result += 7;
    } else  if (num <= 18) {
        result += 8;
    }  else  if (num <= 21) {
        result += 9;
    }  else  if (num <= 25) {
        result += 10;
    }

}
console.log(result);
