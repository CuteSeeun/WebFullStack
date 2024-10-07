const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/", express.static(path.join(__dirname, "public")));

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

//db 준비 및 연동
const dbClient = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });// useUnifiedTopology 추가
const dbName = "vehicle";
const collectionName = "car";

// MongoDB 연결을 미리 수행
async function connectToDb() {
    if (!dbClient.isConnected()) {
        await dbClient.connect();
    }
}

//목록 출력
app.get('/car', async (req, res) => {
    try {
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        // await dbClient.connect();
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        const cursor = cars.find({}, { sort: { name: 1 }, projection: {} });

        // console.log(await cursor.toArray());

        const carList = await cursor.toArray();
        req.app.render('carList', {carList: carList}, (err, html)=>{
            if(err) throw err;
            res.end(html);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
//db에 데이터 저장
app.post('/car', async (req, res) => {
    try{
        // await dbClient.connect();
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        // 전달 된 데이터를 body에서 가져오기
        // 받아온 데이터를 db에 저장
        // 저장 후 목록으로 redirect
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        const {name, price, company, year} = req.body;
        await cars.insertOne({name, price, company, year});
        res.redirect("/car");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

// DB에 데이터 수정
// bodyParser 미들웨어가 먼저 준비 되어야 합니다. 
app.post('/car/modify', async (req, res)=>{
    try{
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        // await dbClient.connect();
        const {id, name, price, company, year} = req.body;
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        await cars.updateOne({_id: new ObjectId(id)}, {$set:{name, price, company, year}});
        res.redirect("/car");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

const forward = (req, res, target, obj) => {
    // req.app.render(target, obj, (err, html) => {
    //     if (err) throw err;
    //     res.end(html);
    // });
    req.app.render(target, obj, (err, html) => {
        if (err) {
            console.error(err);
            res.status(500).send("Rendering error occurred");
        } else {
            res.send(html);  // res.end() 대신 res.send() 사용
        }
    });
}

//새 데이터로 입력페이지로 forward
app.get('/car/input', (req, res) => {
    forward(req, res, 'carInput', {});
})

//상세보기 페이지로 forward
app.get('/car/detail', async (req, res) => {
    //파라미터로 id를 받고 
    // const _id = req.query.id;
    //id와 같은 car를 db에서 검색
    try {
        // await dbClient.connect();
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        const car = await cars.findOne({_id: new ObjectId(req.query.id)},{});
        forward (req, res, 'carDetail', {car});
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

// 수저 페이지로 forward
app.get('/car/modify', async (req, res)=>{
    try{
        // await dbClient.connect();
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        const car = await cars.findOne({_id: new ObjectId(req.query.id)},{});

        forward (req, res, 'carModify', {car});
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


// car 삭제 후 list로 redirection
app.get('/car/delete', async (req, res) => {
    try {
        // await dbClient.connect();
        await connectToDb(); // 미리 연결된 클라이언트를 사용
        const db = dbClient.db(dbName);
        const cars = db.collection(collectionName);
        await cars.deleteOne({_id: new ObjectId(req.query.id)});
        res.redirect("/car");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`서버 실행 http://localhost:${app.get('port')}`);
});