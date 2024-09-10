const serverUrl = 'http://localhost:6666/maket/search';
const apiUrl = 'https://smart.incheon.go.kr/server/rest/services/Hosted/전통시장/FeatureServer/47/query?where=1%3D1&outFields=*&outSR=4326&f=json'

// function init(){
//     const url = `${baseUrl}?`;
// }

// 데이터를 가져와서 시장 목록을 표시하는 함수
async function fetchMarketData() {
    try {
        // API로부터 데이터 가져오기
        const response = await fetch(apiUrl);
        const data = await response.json();
        const markets = data.features; // 시장 정보 목록

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
        
        
    } catch (error) {
        console.error('데이터 가져오기 실패:', error);
        document.getElementById('market-list').textContent = '데이터를 가져오는 중 오류가 발생했습니다.';
    }
}

// 페이지 로드 시 데이터를 가져와서 화면에 표시
window.onload = fetchMarketData;

fetchMarketData();