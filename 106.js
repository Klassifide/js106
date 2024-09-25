const numbers = [12,15,54,34,52,17,8,33,20,13]

function multiplyAndLog(num){console.log(num * 3);}
numbers.forEach(multiplyAndLog);

for (let num of numbers) {console.log (num * 3)}
let i=0;
if (i < numbers.length){console.log(numbers[i]);}
i++;
if(i < numbers.length) {console.log(numbers[i]);}

const tumble = [1,2,3,4]
const drier = tumble.filter(checkmate);
function checkmate(bob){return bob <1;}
    
