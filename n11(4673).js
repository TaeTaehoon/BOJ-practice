function d(n) {
    let number = n;
    //해당 n이 밑에 추출단계에서 i로 대체되서 n을 썻구만!
    let result = 0;
    
    for (let i = 0; i < String(n).length; i++) {
        result += number % 10;
        number = Math.floor(number / 10);
        //1의자리부터 10, 100, '''으로 올라가면서 각 자릿수를 result에 더함!
    }
    //String(n).length => n이 한자리수면 1, n이 두자리수면 2, '''을 의미함!
    return n + result;
}
/*
d(n)함수를 설정하여 주어진 number마다 selfnumber계산을
실행하여 해당 값들(n + result(for문을 이용한 n의 각자리수의 합))을 반환시킨다!
이게 실행된다는 것은 해당 n이 selfnumber가 아니라는 것을 의미한다!
*/


const range = 10000;
let selfnumbers = Array(range + 1).fill(true);
//판별범위(range)를 설정하고 selfnumber에 대한 배열을 생성하고 모두 true로 초기화시킴.


for (let i = 0; i <= range; i++) {
    selfnumbers[d(i)] = false;
}
//selfnumber가 아니면(=d(n)의 반환된 값이 존재하면) 배열내의 해당값을 false로 변환시킨다.

for (let i = 0; i < range; i++) {
    if (selfnumbers[i]) {
        console.log(i);
    }
}
//배열 내에서 true값을 가진 index만 출력한다.
