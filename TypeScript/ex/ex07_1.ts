//Generic 타입 : 변수, 함수, 클래스 등을 다룰 때 데이터 타입을 파라미터화 해서 사용하는 것
//    => 유연성, 코드의 재사용성 높일 수 있다.
interface IValuable{
    value:string; //타입이 string으로 고정
    valueArray:string[]

}
interface GValuable<T>{ //<>는 어떤 타입이 들어올거라는 의미임
                        //<T> => 제네릭 타입
    value: T;
    valueArray : T[];
}
let iv:IValuable = {value:"Hello", valueArray:["a","b","c"]}
console.log(iv.value);
console.log(iv.valueArray);

// let iv2 : IValuable = {value :100, valueArray:[1,2]} 이는 안된다
let gv:GValuable<number> = {
    value:100,
    valueArray:[1,2,3]
}
console.log(gv.value);
console.log(gv.valueArray);

//boolean타입을 받는 GValueable 타입의 변수 선언 후, 값 할당한 뒤 출력하기
let gv2:GValuable<boolean> = {
    value: true,
    valueArray: Array(3).fill(false)
}
console.log(gv2.value);
console.log(gv2.valueArray);



//함수 정의할 때 제네릭 사용 
function printArr(arr:number[]):void{
    for(const v of arr){
        console.log(v);
        
    }
}
//printArr(["10","20"])이거 안됨
//어떤 타입이든 배열만 들어오게 하기?
function printArray<T>(arr: T[]):void{
    for(const v of arr){
        console.log(v);
    }
}
//함수 호출 <number>,<string>
printArray<number>([1,2,3,4]);
console.log('----------------');
printArray<string>(["Hi", "Hello", "Bye"])

//type에서 제너릭 사용
type AMan<T> = {
    no: T;
    name: string;
    tel: string;
}
let aman1:AMan<number> = {no:10, name:"에이맨", tel:"1111"}
let aman2:AMan<string> = {no:"10", name:"김수맨", tel:"2222"}
let aman3:AMan<number> = {no:10, name:"비맨", tel:"3111"}


//printArray호출해서 aman1, aman2 정보가 자동으로 출력되게 해보기
printArray<AMan<number>>([aman1, aman3])


//클래스에 제너릭 적용
//GValuable 인터페이스를 상속하는 클래스(value)를 구성해보자
class Value<T> implements GValuable<T>{ 
    constructor(public value:T, public valueArray:T[]){}
}
//Value타입 변수 선언해서 객체 생성해보기
let v1:Value<number> = new Value(800, [9,8,7]);
console.log(v1.value);
console.log(v1.valueArray);

const printValue =<T>(obj:GValuable<T>):void=>{
    console.log('----------------');
    console.log(obj.value);
}
printValue(v1);
printValue(new Value<string>("오영수", ["개발자", "연봉1억", "돈많은 백수 원츄"]))
printValue(new Value<AMan<number>>(aman1, [aman1, aman3]));
//제너릭 boolean타입으로 출력
printValue(new Value<boolean>(false,[false,true]))

//value객체에 GValuable 타입을 매개변수로 받되, valueArray 배열 값들을 출력하는 함수를
// 화살표 함수로 구성해보자. 함수명은 pirntValueArray()
const pirntValueArray = <T>(obj:GValuable<T>):void=>{
    console.log('--- valueArray값 출력----');
    
    if(!obj.valueArray || obj.valueArray.length == 0){
        console.log('배열이 없다');
    }else{
        for(const v of obj.valueArray){
            console.log(v);
            
        }
    }
}
pirntValueArray(v1)
pirntValueArray(new Value<string>("오영수", ["개발자","배고픈","집애가"]));
pirntValueArray(new Value<boolean>(true, []));

