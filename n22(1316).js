let input = require('fs').readFileSync('input.txt').toString().split('\n');

const caseCount = Number(input[0]);
let countGroupWord = 0;

for (let i = 1; i <= caseCount; i++) {
  const word = input[i];
  const letter = [];
  //word에서 처음으로 발견한 문자를 저장할 빈 배열 생성
  let isGroupWord = true;
  //해당 단어가 그룹워드라는 가정을 true로 하여 코드 진행

  for (let j = 0; j < word.length; j++) {
    if (letter.indexOf(word[j]) === -1) {
      letter.push(word[j]);
      //letter 배열은 현재 빈 배열이므로 첫 문자가 letter배열에 저장됨
    } else {
      if (letter.indexOf(word[j]) !== letter.length - 1) {
        isGroupWord = false;
        break;
        //다음 문자가 letter 배열의 맨 마지막 순서가 아니다 => 이미 한번 탐색된 문자이므로 그룹워드를 false로 만듬.
      }
    }
  }

  if (isGroupWord) {
    countGroupWord += 1;
  }
  //위의 반복문을 통과한 단어는 그룹워드이므로 count +1.
}
/*
원래 예전에 했던대로 차례차례 문자의 index를 추출하여 index값이 두개 이상인 경우에 그룹워드가 아니므로 
false 시키려했지만생각해보니 index값이 두개 이상이더라도 해당 문자들이 연속으로만 있으면 그룹워드이기 때문에
판별조건을 어떻게 설정해야 할지 까다로워보였다. 계속 하다보니 코드가 너무 난잡해져서 과감히 포기했다!
위의 코드에서 문자의 개수를 판별해내는 알고리즘이 매우 신박해보였다. 저렇게 할 수 있다는 생각은 처음이다.
Array배열이 옆으로 쭉쭉 쌓이는 특성을 이용하여 해당 문자의 index가 배열 마지막 순서보다 전으로 나오면
서로 떨어져있는 중복문자이다..! 놀랍다! 앞으로 자주 써먹어야지.
*/
console.log(countGroupWord);
