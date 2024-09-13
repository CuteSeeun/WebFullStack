
let currentPage = 1;
const itemPerPage = 10;
let totalPages = 0;






//api 요청 후 데이터 넘기기
// const showData = async () => {
//     try {
//         // API로부터 데이터 가져오기
//         const response = await axios.get('http://localhost:7778/markets');// const response = await fetch(apiUrl);
//         // const data = await response.json();
//         const data = response.data; //서버에서 html 형태로 응답을 줌 (서버에서 이미 처리함)
//         totalPages = Math.ceil(data.length / itemPerPage); // 총 페이지 수 계산

//         console.log(data);

//         // 페이지 데이터 렌더링
//         renderTable(data, currentPage);
//         renderPagination(totalPages);
//         // const markets = data.features; // 시장 정보 목록
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// API 요청 및 데이터 렌더링
//showData 함수를 재구성한 것으로 주어진 api엔드포인트와 헤더 배열을 받아 데이터를 가져오고 테이블을 렌더링한다. 이로 api별로 동적인 헤더와 데이터를 처리할 수 있다
const fetchDataAndRender = async (url, headers) => {
    try {
        // API로부터 데이터 가져오기
        const response = await axios.get(url);
        const data = response.data;
        
        console.log(data);
        console.log('개빡치네');
        
        

        totalPages = Math.ceil(data.length / itemPerPage); // 총 페이지 수 계산
        
        // 테이블 헤더와 데이터를 동적으로 렌더링
        renderTableHeader(headers);
        renderTable(data, headers, currentPage);
        renderPagination(totalPages);
    } catch (error) {
        console.log(error);
    }
};


//<thead>에 새로운 헤더를 동적으로 생성 _ headers라는 배열 받음
//api 응답에 맞는 테이블 헤더를 동적으로 생성함
const renderTableHeader = (headers) => {
    const thead = document.querySelector('#data-table thead');
    let headerRow = '<tr>';
    
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    
    headerRow += '</tr>';
    thead.innerHTML = headerRow; // 새로운 헤더로 교체
};

//테이블 렌더링 함수
//api 응답의 데이터 구조에 맞춰 동적으로 데이터를 테이블에 렌더링한다
const renderTable = (data, headers, page)=>{
    // const tbody = document.querySelector('.tbody');
    // tbody.innerHTML = ''; // 기존 데이터를 초기화
    // const startIndex = (page - 1) * itemPerPage;
    // const endIndex = startIndex + itemPerPage;
    // const pageData = data.slice(startIndex, endIndex); // 해당 페이지 데이터만 잘라서 렌더링

    // let rows = '';
    // pageData.forEach((market, index) => {
    //     const { attributes } = market;
    //     rows += `
    //         <tr>
    //             <td>${startIndex + index + 1}</td>
    //             <td>${attributes.period ? attributes.period : '#확인필요'}</td>
    //             <td>${attributes.name ? attributes.name : '#확인필요'}</td>
    //             <td>
    //                 <button class="seebtn"
    //                     data-hmpg_addr="${attributes.hmpg_addr}" 
    //                     data-roadaddr="${attributes.roadaddr}" 
    //                     data-lat="${market.geometry.y}" 
    //                     data-lon="${market.geometry.x}">
    //                     상세보기
    //                 </button>
    //             </td>
    //         </tr>
    //     `;

    // })
    // tbody.innerHTML = rows; //새롭게 생성한 rows 삽입

    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = ''; // 기존 데이터를 초기화
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const pageData = data.slice(startIndex, endIndex); // 해당 페이지 데이터만 잘라서 렌더링

    let rows = '';
    pageData.forEach((item, index) => {
        const { attributes, geometry } = item;
        // rows += `<tr>`;
        rows += `<tr><td>${startIndex + index + 1}</td>`;
        
        // 동적으로 headers에 맞는 데이터를 삽입
        headers.forEach(header => {
            const value = attributes[header] ? attributes[header] : '#확인필요';
            rows += `<td>${value}</td>`;
        });

        // 상세보기 버튼 추가
        rows += `
            <td>
                <button class="seebtn"
                    data-hmpg_addr="${attributes.hmpg_addr || ''}" 
                    data-roadaddr="${attributes.roadaddr || ''}" 
                    data-lat="${geometry?.y || ''}" 
                    data-lon="${geometry?.x || ''}">
                    상세보기
                </button>
            </td>
        `;
        
        rows += `</tr>`;
    });

    tbody.innerHTML = rows; //새롭게 생성한 rows 삽입
}


// 특정 API 호출에 맞게 데이터 렌더링 (헤더도 같이 동적으로 변경)
//네비게이션 메뉴의 링크를 클릭했을 때 각 API를 호출과 데이터를 렌더링하도록 처리
let currentAPI = '';   // 현재 API URL 저장
let currentHeaders = []; // 현재 테이블 헤더 저장
document.addEventListener('click', (e) => {
    if (e.target.id === 'incheon-info1') { // 인천_전통시장
        console.log('인천 전통시장 클릭');
        
        currentAPI = 'http://localhost:7778/markets';
        currentHeaders = ['번호', '기간', '이름', '상세보기'];
        fetchDataAndRender(currentAPI, currentHeaders);
    }
    if (e.target.id === 'incheon-info2') { // 인천_도서관
        currentAPI = 'http://localhost:7778/markets/library';
        currentHeaders = ['번호', '운영시간', '이름', '상세보기'];
        fetchDataAndRender(currentAPI, currentHeaders);
    }
    // if (e.target.id === 'incheon-info1') {//인천_전통시장
    //     fetchDataAndRender('http://localhost:7778/markets', ['기간', '이름']);
    // }
    // if (e.target.id === 'incheon-info2') {//인천_도서관
    //     fetchDataAndRender('http://localhost:7778/markets/library', ['운영시간', '이름']);
    // }
    // if (e.target.id === 'seoul-info1') { //서울 _1
    //     fetchDataAndRender('/api/incheon/libraries', ['휴무일', '운영시간', '이름', '주소']);
    // }
    // if (e.target.id === 'seoul-info2') { //서울 _2
    //     fetchDataAndRender('/api/incheon/libraries', ['휴무일', '운영시간', '이름', '주소']);
    // }
    // if (e.target.id === 'gyeonggi-info1') { //경기_1
    //     fetchDataAndRender('/api/incheon/libraries', ['휴무일', '운영시간', '이름', '주소']);
    // }
    // if (e.target.id === 'gyeonggi-info2') { //경기_2
    //     fetchDataAndRender('/api/incheon/libraries', ['휴무일', '운영시간', '이름', '주소']);
    // }
});




//페이지네이션 버튼 렌더링 함수
const renderPagination = (totalPages) => {
    const paginationDiv = document.querySelector('.pagination-buttons');
    paginationDiv.innerHTML = ''; // 기존 버튼 초기화

    for (let i = 1; i <= totalPages; i++) {
        paginationDiv.innerHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
};

//페이지 버튼 클릭 이벤트
document.addEventListener('click', (e)=>{
    // if (e.target.classList.contains('page-btn')) {
    //     currentPage = parseInt(e.target.getAttribute('data-page'));
    //     showData(); // 해당 페이지 데이터 표시
    // }
    if (e.target.classList.contains('page-btn')) {
        currentPage = parseInt(e.target.getAttribute('data-page'));
        fetchDataAndRender(currentAPI, currentHeaders); // 해당 페이지 데이터 표시
    }
})

//상세보기 클릭
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('seebtn')) {
        const hmpgAddr = e.target.getAttribute('data-hmpg_addr');
        const roadAddr = e.target.getAttribute('data-roadaddr');
        const lat = e.target.getAttribute('data-lat');
        const lon = e.target.getAttribute('data-lon');

        // 데이터가 잘 들어오는지 확인
        console.log("홈페이지 주소:", hmpgAddr);
        console.log("도로명 주소:", roadAddr);
        console.log("위도:", lat);
        console.log("경도:", lon);

        // 홈페이지 주소가 null, undefined 또는 빈 문자열일 경우 N/A로 표시
        const hmpgLink = hmpgAddr && hmpgAddr !== 'null' && hmpgAddr !== 'undefined' ? `<a href="${hmpgAddr}" target="_blank">${hmpgAddr}</a>` : '존재하지 않습니다';
        // 도로명 주소가 없을 경우 N/A로 표시
        const address = roadAddr && roadAddr !== 'null' && roadAddr !== 'undefined' ? roadAddr : '존재하지 않습니다';

        // 팝업에 정보를 표시
        const popContent = `
            <h3>상세 정보</h3>
            <p><strong>홈페이지 주소:</strong> ${hmpgLink}</p>
            <p><strong>주소:</strong> ${address}</p>
            <p><strong>위도:</strong> ${lat}</p>
            <p><strong>경도:</strong> ${lon}</p>
            <div id="map" style="width: 100%; height: 300px;"></div> <!-- 지도용 div 추가 -->
        `;
        document.querySelector('.popup-body').innerHTML = popContent;

        // 팝업을 보여줌
        document.querySelector('.popup').style.display = 'flex';

        // 지도 로드 후 위치 설정 (구체적인 지도 API로 변경 가능)
        // loadMap(lat, lon);
    }
});

// 팝업 닫기 기능
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
        document.querySelector('.popup').style.display = 'none';
    }
});

// // 지도 로딩 함수 (추후 지도 API 연동 가능)
// const loadMap = (lat, lon) => {
//     // 예시로 Leaflet을 사용한 간단한 지도 로드
//     const map = L.map('map').setView([lat, lon], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     L.marker([lat, lon]).addTo(map)
//         .bindPopup('여기에 시장의 위치를 표시합니다.')
//         .openPopup();
// };

//페이지 로드 시 데이터를 가져와서 화면에 표시
// window.onload = showData;