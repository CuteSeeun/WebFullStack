//대수 데이터 타입
//1. union 타입 => '|' 기호로 다양한 타입을 연결해서 만든 타입을 의미한다
//2. intersect 타입 => '&' 기호로 다양한 타입을 연결해서 만든 타입을 의미한다
type NumOrString = number|string;
let k:NumOrString = 10;
let z:NumOrString = "TypeScript";
//z=true; 는 안됨