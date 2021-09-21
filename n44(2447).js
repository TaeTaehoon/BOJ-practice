let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');


const k = Number(input[0]);
const lines = [];
function print(n) {
    for (i = 0; i < k; i++) {
        for( j = 0; j < k; j++) {
            star(i, j, k);
        }
        lines.push('\n');
    }
}

function star(i, j, k) {
    if(i % 3 == 1 && j % 3 == 1) {
        //(1,1), (1,4), (1,7).....
        lines.push(' ');
    } else {
        if(k == 1) {
            lines.push('*');
        } else {
            star(parseInt(i/3), parseInt(j/3), parseInt(k/3));
        }//보고 정말 놀란부분..! 이런생각을 못햇네..하
    }    //(3,3), (3,4),(3,5) => (1,1) 로 만들어서 star함수를 호출시켜 같은 효과를 냄!
}
print(k);
console.log(lines.join(''));
//좌표값에 대한 코드를 실행해야할 경우 각각의 좌표값을 (i, j)로 나타낸다!
//for loop문을 사용할때 자주 사용한다고 한다.
/*
for(i~~) {
  for(j~~) {
  }
}
와 같이...
*/
