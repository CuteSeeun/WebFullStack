const http = require("http");
const express = require("express");
const app = express();
const path = require('path');

const PORT = 3333;
const title = "자동차 목록";

//port 환경 변수 등록
app.set('port', 3333);
//뷰엔진 설정
app.set('view engine', 'ejs');
//경로(views가 있는 위치)
app.set('views', path.join(__dirname, 'views'));

//static 폴더 설정
app.use(express.static(path.join(__dirname, 'public'))); //<- 스태틱 미들웨어가 머시기 되서 보여지게 된다. 
//path.join은 운영체제에 따른 구분자를 알아서 바꿔준다.

//디비에서 가져온 데이터로 대체될 임시 목록 (나중에 디비 데이터로 바꿔줄거임)
const carList = [
    {_id:1001, name:"GRANDEUR", price:3500, company:"HYUNDAI", year:2019},
    {_id:1002, name:"SONATA1", price:2500, company:"HYUNDAI", year:2022},
    {_id:1003, name:"BMW", price:5500, company:"BMW", year:2018},
    {_id:1004, name:"S80", price:4500, company:"VOLVO", year:2023},
];

app.get('/car/list', (req, res)=>{
    //node.js에서 콜백함수의 첫번째 인자는 error객체
    req.app.render('car/list', {carList}, (err,html)=>{
        if(err) throw err; //에러가 있다면 에러를 출력하고 끝낸다
        res.end(html);
    }); //앞에는 경로가 들어가고 두번째는 객체가 들어가고 세번째는 콜백 함수가 들어간다.
})

/*
const server = http.createServer(//(request, response)=>{
    //response.end(html);
//}
                                app);
//위 코드에서 주석 처리 된 부분을 express의 기능으로 쓰겠다. 그래서 위에서 app을 명시해준다
*/

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`서버 실행 중 http://localhost:${app.get('port')}`);
});

