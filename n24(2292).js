const input = require('fs').readFileSync('/dev/stdin');

let range = 1, block = 1;

while (block < input) {    
	block += 6 * range;

	range++;
}
//변수를 두개 설정하여 더욱 간단하게 해결했다..
//가운데로 부터 둘러싼 묶음을 block으로 생각하고 해당 block이 가운데로부터 떨어진 거리를 range로 선언.
//멀어질 수록 range값에 의한 등차등비수열?이므로 해당 block과 block 사이에 값이 존재하면 range를 출력!
//순서대로 진행되므로 전 block보다 input이 크면 다음 단계로 넘어간후 
//해당 block보다 input이 작으면 두 block사이에 input이 존재한다는 말과 같은데...이걸 생각 못한 나는 바보...
//좀 더 반복문과 조건문에 익숙해질 필요가 있다..

console.log(range);
