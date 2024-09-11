/* 라우터를 사용해 오픈 api와 상호작용 하는 경로를 처리한다
   axios는 http 클라이언트 라이브러리로 비동기적으로 외부 api를 호출하기 위해 사용된다

   const express = require('express') express 서버를 만들기 위해 필요한 모듈
   const router = express.Router() express의 Router객체를 사용하여 경로를 정의
   const axios = require('axios') 외부 api와의 http통신을 비동기적으로 처리하는 라이브러리

   router.get('/', (req,res)=>{res.send();}); : 기본 경로 /에 요청이 들어오면 간단한 링크를 반환해 /naver/search/books로 이동할 수 있도록 설정
   router.get('/search/books', async (req, res)=>{ : query,display,start 쿼리 파라미터를 통해 도서 검색 기능을 사용자 정의할 수 있다
   
   var api_url = 'https://openapi.naver.com/v1/search/book.json?query=' 
               + encodeURI(query) + `&start=${start}&display=${display}`;
   
*/