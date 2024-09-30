//모듈 app을 불러옴
const app = require("./app"); //사용자 정의 모듈

app.listen(app.get('port'), ()=>{
    console.log(`http://localhost:${app.get('port')}`); //app.js에 정의되어 있는 포트를 가져온다
    
});