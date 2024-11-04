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
const datatRouter = require('./dataRouter.js');

app.use(cors());
app.use(express.static(path.join(__dirname, 'Test'))); /* 서버에서 정적 파일을 서빙하려면 express.static으로 정적 파일 경로를 설정해야 한다. 
                                                           그러므로 express.static 미들웨어를 추가한다. 
                                                        */
app.use(express.static(path.join(__dirname, 'front'))); //imarket.html을 가져오기 위해 서버에서 정적 파일을 제공해야함



app.use('/markets', datatRouter); //이게 라우터에서는 '/' 가 되는 것이다. 
                                /* 라우팅 경로의 동작 방식
                                   app.use('/markets', dataRouter)의 의미 : 이는 /markets 경로에 대한 요청을 dataRouter에서 정의한 라우터로 위임한다는 의미이다.
                                        즉, dataRouter에 정의된 모든 경로는 /markets 경로를 기준으로 동작하게 된다
                                   router.get("/", ..) 동작 방식 : dataRouter에서 정의한 router.get("/",..)은 라우터 자체의 루트 경로를 처리하는 것이다.
                                        즉, dataRouter에 정의된 "/"는 /markets 경로를 기준으로 처리된다.(dataRouter.js 참고)
                                        app.use("/markets") = router.get("/")
                                        따라서 router.get("/")는 /markets 경로로 요청이 들어왔을 때 실행된다.
                                   왜 /가 아닌 /markets가 아닌가? : 경로가 중첩된 것이다. app.use('/markets',..)는 이미 /markets 경로로 들어오는 요청을 처리하겠
                                        다는 것이기에 그 안의 라우터에서는 상대 경로로 설정하게 된다. 
                                   router.get("/")는 /markets 경로에 대응하고, router.get("/search")는 /markets/search 경로에 대응하게 된다.

                    -> app.use('/markets', dataRouter)는 /markets로 들어오는 요청을 dataRouter로 처리하도록 설정한 것.
                       요청을 받는 입장에서(라우터 코드) / = /markets 인것이다. 
                                */

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})