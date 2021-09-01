let input = require('fs').readFileSync('input.txt').toString().split(' ');


const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

console.log(Math.ceil((V - A)/(A - B)) + 1);
//너무 복잡하게 생각한게 아니었나! 수학적 풀이를 찾아냈다..!
//우선 마지막날 정상에 도달하거나 정상을 넘어가는 높이를 올라가게되기에 +1을 해줌
//그리고 마지막날 올라가는 A높이를 제외한 날들은 A-B만큼 올라가니까 나누고 소수점을 올림해줬다.
//=>소수점이 나온다는 것은 A-B가 남은 높이보다 크다는 거니까 일단 정상에 도달한다.
