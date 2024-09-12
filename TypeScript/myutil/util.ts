//기능을 갖는 함수들을 모아서 모듈화


//1. function으로 함수 구성
//랜덤한 정수값을 반환하는 함수 : makeRandomNum()
// makeRandonNum() / makeRandomNum(max) / makeRandomNum(max, start)
let MAX = 100;
export function makeRandomNum(max:number = MAX, start:number = 0):number{
    //Math.random() : 0.0 <= r <1.0 사이의 임의의 실수값을 반환
    //5 <= r <= 20 임의의 정수값 =>  Math.ceil(Math.random() * 범위 + 시작수)
    // let r:number = Math.ceil(Math.random()*15 + 5);
    let r:number = Math.ceil(Math.random()*(max-start) +start);
    return r;
}

//2. 화살표 함수로 구성
//makePerson() => 반환타입 IPerson인터페이스 타입
//매개변수로 name, age
export interface IPerson{
    name:string;
    age:number;
}
export const makePerson = (name:string, age:number=makeRandomNum()):IPerson=>{

    // return {name:name, age:age} 이를 줄여쓸 수 있다 ↓
    return {name, age};
}
export const makePerson2=(name:string, age:number=makeRandomNum(30,20)):IPerson=> ({name, age})
//return {name, age}; 이와 ({name, age}) 이는 같은 것이다

export const testMakePerson = ():void=>{
    let p1:IPerson = makePerson('James');
    let p2:IPerson = makePerson("길동", 25);
    let p3:IPerson = makePerson("Tommy");
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

//range(시작값, 끝값) 의 반환값은 배열 -> 배열의 전개 연산자(spread 연산자)를 구현
//재귀 함수 구현 (재귀 함수란 자기 함수내에서 자기 함수를 호출하는 것을 말한다. 잘못하면 무한루프. 그래서
//                반드시 종료 조건을 만들어야 한다.)
export const range = (start:number, end:number):number[] => {
    let array = start < end ? [start, ... range(start+1, end)] : [];
    // console.log(array);
    return array;
}
// console.log(range(1,7));
range(1,7)

export type ResultType = [boolean, string]; //튜플 타입