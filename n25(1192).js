let input = require('fs').readFileSync('input.txt').toString().split(' ');


let range = 1, block = 1;

while(block < input) {
    block += 1 + range;

    range++;
}

console.log(range);
console.log(block);

if ( Math.floor(range % 2) == 0) {

}
else if (Math.floor(range % 2) != 0) {

}
//block 내의 숫자의 순서를 찾는다 => 해당 위치에 알맞는 분수값을 지정하는 일이 남음!
