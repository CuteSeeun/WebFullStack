const express = require('express');
const app = express();

// public 폴더를 정적으로 제공
app.use(express.static('img'));

// HTML 파일을 클라이언트에 제공
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/homePage.html');
});

// 서버 실행
app.listen(5500, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});