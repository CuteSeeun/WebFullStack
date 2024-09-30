const express = require("express");
const { getTodo, getTodoById } = require("../controllers/todoListController");
const router = express.Router();

router.route('/todo').get(getTodo)
.post((req, res)=>{
    res.end('할일 등록');
}); //router.get과 같은 방식, router.route.get.post는 체인이 가능하다

router.route('/todo/:id').get(getTodoById)
.post((req, res)=>{
    res.end('특정 할일 수정');
});

//node.js 모듈로 등록 (app.js에서 미들웨어로 이를 사용)
module.exports = router;