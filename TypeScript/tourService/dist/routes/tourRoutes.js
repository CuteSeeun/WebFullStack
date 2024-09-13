"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let baseUrl = process.env.URL;
const API_KEY = process.env.API_KEY;
//GET  /api/tours/area?areaCode=1
const router = (0, express_1.Router)();
router.get('/area', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let areaCode = req.query.areaCode;
    if (!areaCode) {
        areaCode = "1"; //서울:1, 인천:2, 대전:3
    }
    if (!API_KEY) {
        return res.status(401).json({ message: '인증받지 못한 서비스 키이다' });
    }
    //const url=`${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1`
    const url = `${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1;`;
    console.log(url);
    try {
        const response = yield axios_1.default.get(url);
        const data = response.data;
        if (!((_c = (_b = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.item)) {
            return res.status(404).json({ message: '해당 정보가 없다.' });
        }
        res.json(data.response.body.items.item);
    }
    catch (error) {
        res.status(500).json({ message: '데이터 받아오기 실패' + error.message });
    }
}));
//관광 상세정보 가져오기
router.get('/detail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { contentId, contentTypeId } = req.query;
    /* 중괄호 사용 이유 : 객체 디스트럭처링을 사용하기 때문.
       이는 객체의 속성을 쉽게 추출할 수 있는 문법이다.
       위 코드는 req.query 객체에서 contentId와 contentTypeId라는 두 개의 속성을
       추출해 각각의 변수에 할당하는 것을 의미한다.
       req.query는 요청 url의 쿼리 파라미터를 포함하는 객체이다. 예를 들어
       사용자가 ?contendId=123&contentTypeId=456과 같은 url로 요청했을 때 req.query는
       다음과 같은 객체로 표현된다

    */
    //const url=`${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourApiApp&_type=json`
    const url = `${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourApiApp&_type=json`;
    console.log(url);
    try {
        const response = yield axios_1.default.get(url);
        const data = response.data;
        console.log(data);
        if (!((_c = (_b = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.item)) {
            return res.status(404).json({ message: '상세 정보가 없다.' });
        }
        res.json(data.response.body.items.item); //계층구조가 깊은 애들은 비구조화할당 말고 이렇게 접근하는 게 낫다
    }
    catch (error) {
        res.status(500).json({ message: '상세정보 가져오기 실패' + error.message });
        /* 여기서 중괄호를 사용하는 이유는 객체리터럴을 생성하기 위해서이다.
           이 객체는 http 응답으로 전송되는 json 데이터의 구조를 정의한다.
           중괄호의 의미 : 중괄호는 객체를 생성하는 데 사용된다.
           이는 응답 본문으로 반환할 json 객체를 정의하고 있다
           {message : ~~} 이는 자바스크립트 객체이다.
        */
    }
}));
exports.default = router;
