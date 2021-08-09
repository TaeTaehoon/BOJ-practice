let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(x=> Number(x));

let max = Math.max(...input)

console.log(max)
console.log(input.indexOf(max) + 1)
//Math 메소드를 이용하여 손쉽게 max값을 구할수도 있음을 구글링을 통해 알게됨..


