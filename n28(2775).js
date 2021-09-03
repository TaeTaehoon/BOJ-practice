const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const k = +input.shift();
  const n = +input.shift();

  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));//WTF?

  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j-1];
    }
  }

  console.log(house[k][n]);
}
//다른 사람의 풀이를 보니 애초에 위 배열은 모두 0명으로 시작하기때문에
//fill메소드를 이용하여 모든 층의 모든 호수를 0으로 채워 00박스를 만들고
//층마다 호수에 맞게 숫자를 추가하여 인원수를 맞춘것 같다...이게더 쉽긴 하겠다!
