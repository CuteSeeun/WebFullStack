//ResultType import
import { ResultType } from '../myutil/util';

export const ajaxWork = ():ResultType => {
    try{
        console.log('ajaxWork ... ajax 통신 중 ...');
        throw new Error('Error: 네트워크 통신 에러');
    }catch(err:any){
        return [false, (err as Error).message];
    }
}

//ajaxWork 함수 호출하고 반환값 받아 출력해보기
const result = ajaxWork();
console.log(result);
//result[0], result[1] 밑에 코드처럼 하면 이렇게 인덱스로 접근안해도 된다

//튜플에도 비구조화 할당 적용가능
const [isSuccess, msg] = ajaxWork();
console.log(`isSuccess: ${isSuccess}`);
console.log(`msg: ${msg}`);

