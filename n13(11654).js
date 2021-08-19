let input = require('fs').readFileSync('input.txt').toString().split('\n');

let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let Istring = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let string = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//딱히 어떻게 풀어야할지 감이 안와서 일단 무식하게 들이박았다.
//주어진 입력의 범위를 아스키분류에 따라 나누어 배열로 만들었다.


 if (num.indexOf(c) != -1) {       
            
    console.log(Number(num.indexOf(input[0])) + 48);
                   
} else if (Istring.indexOf(c) != -1) {       
            
    console.log(Number(Istring.indexOf(input[0])) + 65);
                   
} else if (string.indexOf(c) != -1) {
            
    console.log(Number(string.indexOf(input[0])) + 97);
              
}
//주어진 입력이 존재하는 배열에서 해당 배열의 입력의 index값에 아스키표와 비교한 값을 더해준다.
//놀랍게도 function을 사용할 때보다 사용하지 않았을때가 더 빠른 속도를 보여주었다.(약 30ms 차이)
//function을 쓰면 더 빨라질 줄 알았는데 그것도 케바케인듯..?
