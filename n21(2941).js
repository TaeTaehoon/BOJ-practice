let input = require('fs').readFileSync('input.txt').toString().trim();
//trim이 없어서 12번은 넘게 틀린듯.. 줄바꿈문자열은 trim으로 타도한다..!

const cenglist = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
//해당 풀이에는 문제점이 하나 있다, dz=이 z=보다 뒤에있으면 z=을 먼저 치환해서 dz=이 인식되지 않는다...
//내 처음풀이도 같은 문제점을 갖고있었는데...어떻게 해결할지 좀 더 생각해봐야겠다.


for(let alphabet of cenglist) {
    input = input.split(alphabet).join('*');
  //alphabet의 cenglist내의 요소들마다 for문을 진행시킨다. 해당 요소를 *로 대체함..
  //나도 비슷한 풀이를 생각했었으나 input을 const로 선언시켰었어서 망했다!
}
//for of 문은 처음인데 익숙하지 않다.
/*
for...of 명령문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 
각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.
*/

console.log(input.length);
