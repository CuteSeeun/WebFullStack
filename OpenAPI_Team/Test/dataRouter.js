/* 라우터를 사용해 오픈 api와 상호작용 하는 경로를 처리한다
   axios는 http 클라이언트 라이브러리로 비동기적으로 외부 api를 호출하기 위해 사용된다

   const express = require('express') express 서버를 만들기 위해 필요한 모듈
   const router = express.Router() express의 Router객체를 사용하여 경로를 정의
   const axios = require('axios') 외부 api와의 http통신을 비동기적으로 처리하는 라이브러리

   router.get('/', (req,res)=>{res.send();}); : 기본 경로 /에 요청이 들어오면 간단한 링크를 반환해 /naver/search/books로 이동할 수 있도록 설정
   router.get('/search/books', async (req, res)=>{ : query,display,start 쿼리 파라미터를 통해 도서 검색 기능을 사용자 정의할 수 있다

   var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' 
               + encodeURI(query) + `&start=${start}&display=${display}`;
               API 요청을 위한 URL을 구성하는 부분이다.
               query를 통해 검색어를 url에 적합한 형식으로 변환한다.
               start와 display 값은 쿼리 스트링으로 추가해 api호출 시 요청 매개변수로 전달한다.

    const response = await axios.get(api_url, : axios를 사용해 api에 get요청을 보낸다
    
    module.exports = router : router를 모듈로 내보내서 express 서버의 다른 부분에서 사용할 수 잇게 함
*/

// /market/search로 경로 치면 가져온 데이터 보여주기
// router.get('/market/search', showData); 문제점 _ showData 함수는 데이터를 백엔드에서 불러오고 있는데 이를 클라이언트에 적절히 렌더링하려면 renderData 함수도 서버에서
//                                                  html을 만들어 클라이언트로 전달할 수 있어야 한다. 현재 renderData는 브라우저 환경에서 동작하는 코드로 작성되어 있어 이를 서버 환경에 
//                                                  맞게 조정해야 한다. -> res.send를 사용해 서버에서 클라이언트로 html 문자열을 생성하고 전송해야 한다. 


const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        let encode1 = encodeURI('전통시장');
        const apiUrl = `https://smart.incheon.go.kr/server/rest/services/Hosted/${encode1}/FeatureServer/47/query?where=1%3D1&outFields=*&outSR=4326&f=json`;
        const response = await axios.get(apiUrl);
        const markets = await response.data.features;
        console.log(markets);
        
        res.json(markets);

    } catch (error) {
        console.log(error);
    }
});

router.get("/library", async (req, res) => {
    try {
        let encode = encodeURI('도서관및서점정보');
        const apiUrl = `https://smart.incheon.go.kr/server/rest/services/Hosted/${encode}/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`;
        const response = await axios.get(apiUrl);
        const librarys = await response.data.features;
        res.json(librarys);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
