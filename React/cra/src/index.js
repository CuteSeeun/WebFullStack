import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App' //상대경로로 지정해줘야 한다.
                        //App 컴포넌트에 input과 output이 포함되어 있다

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

//App 컴포넌트를 렌더링
root.render(<App />); //root.render는 한번만 호출되어야 한다
