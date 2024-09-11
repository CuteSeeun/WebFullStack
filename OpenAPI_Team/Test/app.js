/*
    express.js로 작성된 간단한 서버 애플리케이션이다.
    const express = require('express') : express모듈 가져오기
    require('dotenv').config() : .env파일에 있는 환경 변수들을 process.env를 통해 사용할 수 있도록 설정
    const morgan = require('morgan') : morgan은 http 요청을 로깅해주는 미들웨어이다. 서버로 들어오는 모든 요청을 기록하여 로그로 남기는 역할을 한다
    const cors = require('cors') : cors는 다른 도메인에서 서버에 요청을 할 수 있도록 도와주는 미들웨어이다. api서버에서 프론트엔드 앱과 통신할 수 있게 한다
    const port = process.env.PORT || 7778; 서버가 실행될 포트를 설정.
    const app = express(); express 애플리케이션을 생성한다. 
    const marketRouter = require('Test/marketRouter') 라우터 모듈을 가져온다
    app.use('/markets', marketRouter) /markets 경로로 들어오는 요청은 marketRouter에서 처리된다
    app.listen(port : 서버를 지정한 port에서 실행시킨다.

    이는 market 관련된 경로를 처리하는 서버를 구축한 것이다.
    
*/


const express = require('express') 
require('dotenv').config()
const morgan = require('morgan')
const path = require('path')
const cors = require('cors');
const port = process.env.PORT || 7778;
const app = express();

const marketRouter = require('Test/marketRouter');

app.use('/markets', marketRouter);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    
})