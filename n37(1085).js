let input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

solution(x, y, w, h) 

function solution(x, y, w, h) {
    let distanceX = 0;
    let distanceY = 0;

    if (w/2 < x) {
        distanceX = w-x;
    } else {
        distanceX = x;
    }

    if (h/2 < y) {
        distanceY = h-y;
    } else {
        distanceY = y;
    }

    console.log(distanceX < distanceY ? distanceX : distanceY);
}
