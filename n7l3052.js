let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});

console.log(userNum.length);
//함수를 쓰지않고 풀고싶었으나..아직은 무리인듯하다..
