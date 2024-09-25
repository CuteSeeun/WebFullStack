const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const static = require("serve-static");
const router = express.Router(); //라우터 객체는 반드시 모듈 설정이 끝난 후에 미들웨어로 등록해야 한다.
const bodyParser = require("body-parser");

app.set('port', 3000);
app.set("views", path.join(__dirname, "views"));//prefix (ejs 페이지 경로 _ 기본 경로를 말함)
app.set("view engine", "ejs"); //suffix (확장자)
app.use("/", static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const carList = [
    {_id:1001, name:"GRANDEUR", price:3500, company:"HYUNDAI", year:2019},
    {_id:1002, name:"SONATA2", price:2500, company:"HYUNDAI", year:2022},
    {_id:1003, name:"BMW", price:5500, company:"BMW", year:2018},
    {_id:1004, name:"S80", price:4500, company:"VOLVO", year:2023}
];

let seq_id = 1005;

//목록
router.route("/car/list").get((req, res)=>{
    req.app.render('car/list', {carList}, (err, html)=>{
        if(err) throw err;
        res.end(html);
    });
});

//입력
router.route("/car/input")
.get((req, res)=>{
    req.app.render('car/input', {}, (err, html)=>{
        if(err) throw err;
        res.end(html);
    });//getㅇ로 처리될 대는 페이지 변환
})
.post((req, res)=>{
    //파라미터 값 가져오기 
    //가져온 값 확인
    //리스트에 객체로 추가하기
    //목록으로 redirect
    const newCar = {
        _id : seq_id++,
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    }
    carList.push(newCar);
    res.redirect("/car/list");
});//get으로 변환된 페이지에서 

//상세 보기
router.route("/car/detail")
.get((req, res)=>{
    const index = carList.findIndex((car)=>{
        //car는 숫자가 아니고 객체임
        return car._id == req.query._id; //이게 동일한게 있는 위치
    });
    if(index != -1){
        req.app.render('car/detail', {car: carList[index]}, (err, html)=>{
            if(err) throw err;
            res.end(html);
        });
    }else{
        console.log("해당 요소를 찾을 수 없다.");
        res.redirect("/car/list");
    }
})
.post();

//수정
router.route("/car/modify")
.get((req, res)=>{
    const index = carList.findIndex((car)=>{
        return car._id == req.query._id;
    });
    if(index != -1) {
        req.app.render('car/modify',{car: carList[index]}, (err, html) => {
            if (err) throw err;
            res.end(html);
        });
    } else {
        console.log("해당 요소를 찾을 수 없습니다!");
        res.redirect("/car/list");
    }
})
.post((req, res)=>{
    const index = carList.findIndex((car)=>{
        return car._id == req.body._id;
    });
    if(index != -1) {
        const newCar = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            company: req.body.company,
            year: req.body.year
        }
        carList[index] = newCar;
    }
    res.redirect("/car/list");
});

//삭제
router.route("/car/delete")
.get((req, res)=>{
    const index = carList.findIndex((car)=>{
        return car._id == req.query._id;
    });
    if(index != -1) {
        carList.splice(index, 1);
    }
    res.redirect("/car/list");
})


//모든 라우터 설정이 완료된 후에 미들웨어 등록해야 함.
app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`서버 실행 http://localhost:${app.get('port')}`);
})