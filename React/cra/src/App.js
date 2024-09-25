import React, { useState } from 'react'; // useState 훅을 React에서 가져오기
import Input from './Input';  // Input.js에서 가져오기
import Output from './Output'; // Output.js에서 가져오기
import Clock from './Clock';

function App(){
    // let message = "Hello world";
    //변수의 값을 수정해도 컴포넌트는 새로 그려지지 않는다.
    //컴포넌트가 새로 그려지려면 state값을 변경해야 한다(리렌더링)
    //useState() 훅을 이용해 statae 생성

    const [message, setMessage] = useState("Hello World");
    const [score, setScore] = useState(0);  // 점수 상태 추가
    const [seconds, setSeconds] = useState(0);  // 현재 초 상태 추가

    function buttonHandler(){
        // alert("클릭");
        // message = "클레오파트라"; 상수는 직접 수정 불가능, setter로 값 변경
        setMessage("러닝화 사고싶다"); //state변경 후 해당 컴포넌트 갱신
        // console.log("버튼클릭", message);
        
        // 현재 초가 3의 배수인지 확인
        if (seconds % 3 === 0) {
            setScore(score + 1);  // 3의 배수면 점수 증가
        } else {
            setScore(score - 1);  // 3의 배수가 아니면 점수 감소
        }
    }

    // Clock 컴포넌트에서 초(second)를 받아 업데이트하는 함수
    function handleTimeChange(currentSeconds) {
        setSeconds(currentSeconds);
    }

    return (
        <>
            <h1>버튼 누르기</h1>
            <p>현재 점수: {score}</p>  {/* 점수 출력 */}
            <Input handler={buttonHandler} greeting={message} />
            <Output greeting={message} />
            {/* Clock 컴포넌트에 handleTimeChange 함수를 전달 */}
            <Clock onTimeChange={handleTimeChange} />
        </>
    );
}

//이를 모듈에 등록해야 한다. export default app;으로 하면 등록됨 사용하는 곳에서 import
export default App;