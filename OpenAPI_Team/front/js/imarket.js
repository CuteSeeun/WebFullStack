







// const axios = require('axios'); //Node.js 환경에서 사용하는 require 제거
// const baseUrl = `http://localhost:7778`;

const showData = async () => {
    try {
        // API로부터 데이터 가져오기
        const response = await axios.get('http://localhost:7778/markets');// const response = await fetch(apiUrl);
        // const data = await response.json();
        const data = response.data; //서버에서 html 형태로 응답을 줌 (서버에서 이미 처리함)

        console.log(data);


        // 가져온 HTML을 그대로 페이지에 삽입
        const marketListDiv = document.getElementById('market-list');
        marketListDiv.innerHTML = data; // 서버에서 받은 HTML을 바로 삽입

        // const markets = data.features; // 시장 정보 목록
        // renderData(markets);
    } catch (error) {
        console.log(error);
    }
}

// function renderData (markets){
//     // HTML 요소 선택
//     const marketListDiv = document.getElementById('market-list');
//     // 시장 정보를 나열
//     markets.forEach(market => {
//         const { name, tel, addr } = market.attributes; // 필요한 속성 추출

//         // 새로운 div 요소 생성 및 시장 정보 추가
//         const marketItem = document.createElement('div');
//         marketItem.innerHTML = `
//             <h3>${name}</h3>
//             <p>전화번호: ${tel}</p>
//             <p>주소: ${addr}</p>
//             <hr>
//         `;

//         // market-list div에 추가
//         marketListDiv.appendChild(marketItem);
//         console.log(name, tel, addr);
//     });
// }

// export {showData}; 

//페이지 로드 시 데이터를 가져와서 화면에 표시
window.onload = showData;







