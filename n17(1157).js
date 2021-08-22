let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let C = input[0].split("");
let Istring = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let string = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let max = count[0];
let maxid = 0;

for (i = 0; i <= C.length - 1; i++) {
    for (j = 0; j <= string.length - 1; j++) {
        if (C[i] == string[j] || C[i] == Istring[j]) {
            count[j] += 1;
        }
    }
}
//대소문자의 개수를 세기위해 count배열을 이용

for (i = 0; i < string.length; i++) {
    if (max <count[i]) {

        max = count[i];
        maxid = i;
    } 
}
//최대값을 찾고 처음 찾은 최대값의 위치를 maxid에 저장

let filter = count.filter(num => num >= max);
//max값이 2개 이상일 경우를 찾기 위해 filter배열에 max값들을 저장

if (filter.length == 1) {
    console.log(Istring[maxid]);
} else if (filter.length > 1) {
    console.log('?');
}
//max값이 count배열에 한개 존재하는경우에만 max값의 id에 해당하는 대문자 출력
//max값이 2개 이상 존재시에는 ? 출력

//시간을 더 줄여보고는 싶은데 다른 알고리즘이 떠오르지 않는다..구글링 해봐야지!
