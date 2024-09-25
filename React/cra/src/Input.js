
function Input(props){
    //props 객체 구조 분해 할당(구조 분해는 객체나 배열의 속성을 분해하는 거임)
    console.dir(props);
    //참조 변수로 접근하는 것은 불편한 일이다
    const {handler, greeting} = props;

    return (<>
        <button onClick={function(e){
        //다른 함수 호출
        handler();
        
    }}>클릭 미!!</button>
    <p>{greeting}</p>
   </>);
}

export default Input;