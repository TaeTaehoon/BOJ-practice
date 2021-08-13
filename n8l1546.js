let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let faverage = Number();
const fscore = [];
let tscore = input[1].split(' ');
const M = Math.max(...tscore);
//직접 최댓값을 구하는 코드를 짜고 싶었는데 뭔가 이상하다..
//일단 시간이 없어 구글링한 Math의 메소드를 이용하여 최대값을 추출해내었다.
//내일 한 번더 코딩해서 직접 최댓값을 추출하는 코드를 짜보겠다.

/*for(i =0; i <= Number(input[0]) - 1; i++) {

    if (M <= tscore[i]) {

        M = tscore[i];

    }
    
}*/

for (k = 0; k <= Number(input[0]) - 1; k++) {

    fscore.push(tscore[k]/M*100);
    faverage += fscore[k] / Number(input[0]);

}
console.log(faverage.toFixed(6));
