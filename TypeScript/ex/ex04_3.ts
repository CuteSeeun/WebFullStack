import {INameable, ITelable} from './INameable'

let obj1:object = {name:'김영희'};
let obj2:object = {tel:'010-2222'};
let obj3:object = {name:'이철수', tel:'010-3333'};

console.log((<INameable>obj1).name); //타입 단언
console.log((<ITelable>obj2).tel); //형변환해서 접근하면 된다

// console.log(obj3.name);
//위 코드를 되게 해보자
console.log((obj3 as INameable).name);
console.log((obj3 as ITelable).tel);



