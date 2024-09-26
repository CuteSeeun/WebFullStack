const http = require('http')
const express = require('express'); //와 여기서 오류나면 npm run dev가 안됨
const app = express();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const { log } = require('console');

//환경 변수 준비
app.set('port', 3333);


/*
app.get('/axios', (req, res)=>{
    const getUrlVal = "https://www.kosta.or.kr/about";
    axios.get(getUrlVal, {responseType:"arraybuffer"}).then((response)=>{
        let htmlCMD = iconv.decode(response.data, "UTF-8").toString();
        // console.log(htmlCMD);
        let $ = cheerio.load(htmlCMD);
        // console.dir($)



        // let selectData = $('#ct > div.sc_offc_lst._paper_article_list.sc_offc_lst_eng > div._persist_wrap > div:nth-child(1) > div:nth-child(1) > div.newspaper_brick_item._start_page > div > div > ul > li > a').text();
        //텍스트 선택
            //let selectData = $('ul.press_edit_news_list img');
            //console.log(selectData.length);
            //for(var i=0; i<10; i++){
                //let imageUrl = selectData[1].attribs['data-src'];
                //console.log(imageUrl);
            
            //}
        // 이미지 URL 선택
        // let imageUrl = $('img')[1].attribs['data-src'];
            //console.log(selectData);
        // console.log(imageUrl);
        

        //한글 깨지지 않도록
        // res.writeHead(200, {'Content-Type':"text/html; charset=utf-8"});
        
            //res.end(selectData);

        let select = $('div._img_box img');
        var cnt = 0;
        console.log(select.length);
        for(var i =0; i<select.length; i++){
            let imgUrl = select[i].attribs.src
            console.log(imgUrl.split('?')[0]);
            let imgDataUrl = imgUrl.split('?')[0];
            console.log(imgDataUrl, {responseType:"arraybuffer"}).then((images)=>{
                console.log(imgres.data);
                fs.writeFile(`./download/${i}.jpg`, imgres.data, ()=>{
                    console.log("이미지 다운로드 완료");
                    
                });
            });
            
        }
        
        res.end("");




        // Cheerio 객체에서 이미지 URL을 추출하여 HTML로 변환
// let selectData = $('ul.press_edit_news_list img'); // 이미지 선택
// let imagesHtml = '';

// for (let i = 0; i < Math.min(selectData.length, 10); i++) { // 최대 10개의 이미지 처리
//     let imageUrl = selectData[i].attribs['data-src'] || selectData[i].attribs['src']; // 'data-src' 또는 'src'에서 URL 가져오기
//     if (imageUrl) {
//         imagesHtml += `<img src="${imageUrl}" alt="이미지 ${i+1}" /><br>`; // HTML 형식으로 변환
//     }
// }

// // HTML로 이미지 리스트를 반환
// res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
// res.end(imagesHtml);
     });
})
     */


const server = http.createServer(app);
server.listen(app.get('port'), ()=>{ //포트번호(포트설정), 콜백함수()
    console.log(`서버 실행 http://localhost:${app.get('port')}`);
    
})