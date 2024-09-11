/*
    init 함수 : 검색 버튼을 클릭 혹은 엔터 키에 이벤트 리스너 등록ㄱ
                검색어 입력되면 send 함수를 호출해 네이버 api요청 시작
    send 함수 : fetch를 사용해 api 요청을 보냄
                url, query, page를 인자로 받아서 api에 get요청을 하고 json형식 응답을 처리
                데이터를 받아오면 showList 함수를 통해 겸색 결과 목록에 표시
                showPage 함수를 통해 페이지 네비게이션을 설정
    showPage 함수 : api에서 받아온 데이터(검색 결과 갯수, 한 페이지에 보여줄 목록 수)를 바탕으로 
                    페이지 네비게이션을 만든다.
                    페이지 번호 클릭할 때마다 fetchData 함수를 호출해 새로운 페이지의 검색
                    결과를 불러온다
    fetchData 함수 : 특정 페이지를 클릭할 때 호출되며 다시 send 함수를 호출해 해당 페이지에 맞는 
                     데이터를 서버에 요청
    showList 함수 : 검색 결과로 받아온 책들의 목록을 html로 구성해 웹 페이지에 출력한다
                    책의 이미지, 제목, 저자, 출판사 등의 정보를 테이블 형식으로 표시한다.
    
*/

const axios = require('axios');
const baseUrl = `http://localhost:7778`;
const apiUrl = 'https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=*&outSR=4326&f=json'



// async function showData(url, query, page) {
//     //fetch로 백에 요청 보내기
//     try {
//         const response = await fetch(baseUrl);
//         const data = await response.json();
//         alert(JSON.stringify(data));
//         showList(data, query)//데이터 보여주기
//         showPage(data, query, page)//페이지네비게이션 처리

//     } catch (error) {
//         alert('Fetch error: ' + error);
//     }
// }

const showData = async () => {
    try {
        // API로부터 데이터 가져오기
        const response = await axios.get('http://localhost:7778/markets');// const response = await fetch(apiUrl);
        // const data = await response.json();
        const data = response.data;
        const markets = data.features; // 시장 정보 목록
        renderData(markets);
    } catch (error) {
        showError(error)
    }
}

function renderData (markets){
    // HTML 요소 선택
    const marketListDiv = document.getElementById('market-list');
    // 시장 정보를 나열
    markets.forEach(market => {
        const { name, tel, addr } = market.attributes; // 필요한 속성 추출

        // 새로운 div 요소 생성 및 시장 정보 추가
        const marketItem = document.createElement('div');
        marketItem.innerHTML = `
            <h3>${name}</h3>
            <p>전화번호: ${tel}</p>
            <p>주소: ${addr}</p>
            <hr>
        `;

        // market-list div에 추가
        marketListDiv.appendChild(marketItem);
        console.log(name, tel, addr);
    });
}

export {showData, renderData};