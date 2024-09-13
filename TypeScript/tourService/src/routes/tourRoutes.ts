import {Request, Response, Router} from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import {TourListResponse, TourItem, TourDetailResponse} from '../interfaces/TourApi';

let baseUrl = process.env.URL as string;
const API_KEY = process.env.API_KEY as string;

//GET  /api/tours/area?areaCode=1
const router = Router();

router.get('/area', async(req:Request, res:Response)=>{
    let areaCode = req.query.areaCode as string;
    if(!areaCode){
        areaCode = "1"; //서울:1, 인천:2, 대전:3
    }
    if(!API_KEY){
        return res.status(401).json({message:'인증받지 못한 서비스 키이다'})
    }
    //const url=`${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1`
     const url =`${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1;`
    console.log(url);
    try{
        const response = await axios.get<TourListResponse>(url);
        const data = response.data;

        if(!data.response?.body?.items?.item){
            return res.status(404).json({message:'해당 정보가 없다.'})
        }

        res.json(data.response.body.items.item)
    }catch(error:any){
        res.status(500).json({message:'데이터 받아오기 실패' + error.message})
    }
});

//관광 상세정보 가져오기
router.get('/detail', async (req:Request, res:Response)=>{
    const {contentId, contentTypeId} = req.query;
      /* 중괄호 사용 이유 : 객체 디스트럭처링을 사용하기 때문.
         이는 객체의 속성을 쉽게 추출할 수 있는 문법이다. 
         위 코드는 req.query 객체에서 contentId와 contentTypeId라는 두 개의 속성을
         추출해 각각의 변수에 할당하는 것을 의미한다. 
         req.query는 요청 url의 쿼리 파라미터를 포함하는 객체이다. 예를 들어 
         사용자가 ?contendId=123&contentTypeId=456과 같은 url로 요청했을 때 req.query는 
         다음과 같은 객체로 표현된다

      */
    //const url=`${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourApiApp&_type=json`
    const url = `${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourApiApp&_type=json`
    console.log(url);
    try {
        const response = await axios.get<TourDetailResponse>(url);
        const data = response.data;
        console.log(data);
        if(!data.response?.body?.items?.item){
            return res.status(404).json({message:'상세 정보가 없다.'})
        }
        res.json(data.response.body.items.item)//계층구조가 깊은 애들은 비구조화할당 말고 이렇게 접근하는 게 낫다

    } catch (error:any) {
        res.status(500).json({message:'상세정보 가져오기 실패'+error.message})
        /* 여기서 중괄호를 사용하는 이유는 객체리터럴을 생성하기 위해서이다. 
           이 객체는 http 응답으로 전송되는 json 데이터의 구조를 정의한다. 
           중괄호의 의미 : 중괄호는 객체를 생성하는 데 사용된다. 
           이는 응답 본문으로 반환할 json 객체를 정의하고 있다
           {message : ~~} 이는 자바스크립트 객체이다. 
        */
    }
    
})

export default router;