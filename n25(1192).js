let input = require('fs').readFileSync('input.txt').toString().split(' ');


let range = 1, block = 1;
let line = [];


while(block < input) {
    range++;

    block += range;
}

if (Math.floor(range % 2) == 0) {

    for (i = 0; i <= range - 1; i++) {
        line.push(`${i + 1}/${range - i}`);
    }

    console.log(input[0] == 2 ? '1/2' : line[Number(input[0]) - (block - range + 1)]);
}//짝수 행에 대해
else if (Math.floor(range % 2) != 0) {

    for (i = 0; i <= range - 1; i++) {
        line.push(`${range - i}/${i + 1}`);
    }

    console.log(range == 1 ? '1/1 ': line[Number(input[0]) - (block - range + 1)]);
}//홀수 행에 대해!
//확실히 삼행연산자를 쓰니까 예외사항들을 표기하기가 편하다!
//처음에 문자 순서를 배열마다 쪼개서 생각하다보니 힘들었는데 예외사항 몇개 빼니까 금방 했다! 유후~
