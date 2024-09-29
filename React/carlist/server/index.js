// server/index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 7778;

// 정적 파일 제공 설정 (React 빌드된 파일)
app.use(express.static(path.join(__dirname, '../build')));


// 기본 경로를 React 앱으로 리다이렉션
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.get('/hello', (req, res) => {
    res.json({ message: "서버 연결!" });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});