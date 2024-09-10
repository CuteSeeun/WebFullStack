//타입 주석(type annotation)
//let 변수:타입 = 초기값

let myname:string = 'Hong';
myname = "123";
console.log(myname);

//타입스크립트가 가지고 있는 자료형 : string, number, boolean, null, undefined, object, 배열
//                                    tuple(튜플), enum(열거형)

let names:string[] = ["Hong", "Choi", "Kim"]
let age:number; //선언
age = 22; //초기화
let height:number = 166.6;
console.log(names);
console.log(age, height);


//isLogin변수 선언하고 true, false값을 할당하기
let isLogin:boolean = true;
let outLogin:boolean = false;

//-------인터페이스-------------------------------------------------------------------

let user:object = {};
interface User{
    name:string;
    age:number;
}
let user2:User = {name:'희선', age:26} //객체가 가져야 할 구조를 인터페이스로
//인터페이스 : 타입스크립트에서 객체의 구조를 정의하는 방법
//객체가 가져야할 모양을 정의한다.
//인터페이스는 확장이 가능하다 (다른 인터페이스를 상속받아서 새로운 속성을 추가할 수 있다)
//동일한 이름의 인터페이스를 여러 곳에서 선언할 경우 타입스크립트는 이를 하나의 인터페이스로 병합한다.

//let user3.User={name:'철수', age:27, job:'Developer'} 이렇게 객체에 없는 속성을 추가하면 안된다

interface Man{
    name:string;
    height:number;
}

//인터페이스가 인터페이스를 상속받을 때는 extends로 
//클래스가 인터페이스를 상속받을 때는 implements를 사용
interface Employee extends Man{
    dept:string;
    jog:string;
}
//Man타입의 변수 m1 선언 후 초기화해보자
let m1:Man = {name:"나비", height:155}
//Employee타입 변수 e1 선언 후 초기화해보자
let e1:Employee = {name:"철수",height:178, dept:"글로벌 회계", jog:"경찰"} //상속받은거까지 다 안쓰면 에러
console.log(m1);
console.log(e1);
console.log(e1.name, e1.dept);

//type 키워드를 이용해서 타입을 정의할 수 있다
type Member = {
    name:string,
    age:number
}
let m2:Member = {name:'최화정', age:65}
console.log(m2);
type Emp = Member & { //&는 intersect타입 (교차타입)
    dept:string
}
let e2:Emp = {name:'이진섭', age:31, dept:'Sales'}
console.log(e2);

//일반적으로 객체의 구조를 정의할 땐 인터페이스를 사용
// &(Intersect type) 또는 | (Union type)를 이용하여
//간결하게 표현하고자 할 때는 type 이용
type A={
    name:string
}
type B={
    age:number;
}
type C=A|B; //union type (인터페이스는 교차타입은 가능하나 유니언 타입은 사용불가)
let person1:C = {name:"James"} //ok
let person2:C = {age:28}; //ok
let person3:C = {name:"King", age:31}; //ok
console.log(person1);
console.log(person2);
console.log(person3);

//타입 추론(type inference)
//js와의 호환성을 위해 타입 주석을 생략할 수 있다
//ts컴파일러는 할당된 값에 따라 변수의 타입을 지정한다 이를 타입 추론이라고 한다
let a = 100; //number
let b = "Hello"; //string
let c = false; //boolean
let d = {name:'아무개', age:22} //objecct
//값 변경
//a = "Bye Bye~"; 이는 넘버 타입의 문자열을 할당할 수 없어 에러가 난다. 즉 a는 number만 할당 가능하다는 것이다
//컴파일러가 초기값에 따라 타입을 추론하므로 그 이후에 각 변수는 해당 타입의 값만 지정할 수 있다

//any타입 : 어떤 종류의 값도 저장할 수 있다 이는 컴파일러가 타입 검사를 하지 않는다.
let e:any = 0;
e="Hi";
console.log('e: ', e);
e = false;
e = {name:'최길배'}

//undefined 타입 _ ts에서는 타입이기도 하고 값이기도 하다
let f:undefined = undefined;
console.log(f);
//f=200; 이는 안됨
//함수가 특정 조건에서만 반환하고 그외에는 아무것도 반환하지 않게 할 때 undefined를 사용
function response(val:boolean):string|undefined{
    if(val){
        return "Success"
    }
    return undefined;
}
console.log(response(true));
console.log(response(false));

//유효성 체크 : 함수의 매개변수나 객체 속성값이 존재하는지 여부를 확인하기 위해 undefined 타입을 사용할 수 있다
function check(name:string|undefined):void{
    if(name === undefined){
        console.log("이름을 입력해야 한다");
    }else{
        console.log(`당신의 이름은 ${name}이군요~`);
    }
}
//check() 호출하기
check('둘리');
check(f); //f: undefined 타입
check(undefined); 