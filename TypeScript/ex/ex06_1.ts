/*  TS에서 튜플(Tuple)은 배열과 유사하지만
    고정 길이와 정해진 타입의 요소를 가질 수 있는 자료형이다
    ex) 좌표 (x,y)
*/

let t1:[string, number]; //튜플타입 선언

t1=["Hello", 10];

//꺼낼 때는 배열처럼 접근 _ 그래서 반복문을 써도 된다
console.log(t1[0]); //Hello
console.log(t1[1]); //10

//튜플타입 string, number, boolean 타입을 갖는 튜플을 선언하고 값을 할당해보자
//그리고 for루프 이용해 저장된 값을 출력해보자
let t2: [string, number, boolean];
t2=["Hi", 3.14, true];
console.log(t2);

for(let i =0; i<t2.length; i++){
    console.log(t2[i]);
    
}
t2[0]="Have a nice day";
// t1[1] = "100"; 타입을 맞춰서 해야 한다
t2[1]=100;
t2[2]=false;
console.log(t2);



//함수에서 여러 값을 반환할 때 유용하다
//t1 => [string, number]
function getUserInfo(name:string, age:number):[string, number]{
    return [name, age];
}

let u1 = getUserInfo('안상수', 28);
console.log(u1[0], u1[1]);



//튜플에 선택적 요소/나머지 요소
//선택적 요소: ?를 사용
//나머지 요소: ...
let tuple : [string, number?]
tuple=['안녕'];
console.log(tuple);
console.log(tuple);
tuple=['잘가',7];
console.log(tuple);

let tuple2 : [string, ... number[]];
//string은 필수이며number 타입의 요소들은 가변적으로 올 수 있다
tuple2 =["필수"]
tuple2 =["필수", 1,2,3]
tuple2 =["필수", 1,2,3,4,5]
console.log(tuple2);

//함수명 createTuple()
//매개변수 첫번째 : string, 두번째 가변적인 숫자를 받아서 
//튜플로 반환하는 함수를 구성하세요
type MyTuple = [string, ... number[]];

function createTuple(args:MyTuple){
    let str=args[0].toUpperCase();
    console.log(str);
    let tmp:number[]=[];
    
    for(let i=1; i<args.length; i++){
        console.log(args[i]);
        if(typeof args[i] == 'number'){
            tmp.push(args[i] as number); //타입 단언
        }
    }
    return [str, ...tmp];
}
let ex1=createTuple(['FIRST', 1,2,3])
console.log(ex1);

