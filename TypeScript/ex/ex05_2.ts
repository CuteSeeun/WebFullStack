//   myutil/util 모듈에서 함수를 import해야 한다
import {makeRandomNum, makePerson, makePerson2, testMakePerson, range} from '../myutil/util';
//1. makeRandomNum() 호출해보기
for(let i=0; i<5; i++){
    let num=makeRandomNum(17); // 0<= num <=100 사이의 임의의 정수
    console.log(num);
    
}
console.log('--------------------');

for(let i=0; i<5; i++){
    let num=makeRandomNum(400,200); // 0<= num <=100 사이의 임의의 정수
    console.log(num);
    
}
console.log('--------------------');


//2. testMakePerson() 호출해보기
testMakePerson();

let man = makePerson2("김재흠");
console.log(man);
console.log('--------------------');


let arr1 = range(1,7);
console.log(arr1);
let arr2 = range(50, 101)
console.log(arr2);
