let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const listX = [];
const listY = [];
for(i = 0; i <=input.length-1; i++) {
    let coordinate = input[i].split(' ').map(n => +n);
    listX.push(coordinate[0]);
    listY.push(coordinate[1]);
}

solution(listX, listY); 

function solution(lx, ly) {
    let x1 = Math.max(...lx);
    let x2 = Math.min(...lx);
    let y1 = Math.max(...ly);
    let y2 = Math.min(...ly);
    let countX = 0;
    let countY = 0;

    for (num of listX) {
        if(num == x1) {
            countX++;
        }
    }

    for (num of listY) {
        if(num == y1) {
            countY++
        }
    }
    
    if (countX == 1) {
        console.log(countY == 1 ? `${x1} ${y1}` : `${x1} ${y2}`);
    } else {
        console.log(countY == 1 ? `${x2} ${y1}` : `${x2} ${y2}`);
    }
}
//직사각형에서 x값과 y값은 2개씩 존재한다는 점에서 착안하였다.
//주어진 점들의 x값과 y값들 중에서 개수가 1개인 x와 y값을 
