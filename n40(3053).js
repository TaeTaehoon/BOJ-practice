let input = Number(require('fs').readFileSync('input.txt').toString());

console.log((Math.PI*input**2).toFixed(6));
console.log((2*input**2).toFixed(6));
