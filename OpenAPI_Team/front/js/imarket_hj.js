


const showData = async () => {
    try {
        // API로부터 데이터 가져오기
        const response = await axios.get('http://localhost:7778/markets');// const response = await fetch(apiUrl);
        // const data = await response.json();
        const data = response.data; //서버에서 html 형태로 응답을 줌 (서버에서 이미 처리함)

        console.log(data);

        // HTML 구조를 삽입할 요소 선택
        const marketListDiv = document.querySelector('.content'); // 데이터를 삽입할 div 요소 선택
        // 서버에서 받은 HTML을 그대로 삽입
        marketListDiv.innerHTML = data; // 서버에서 받은 HTML을 그대로 삽입
        

        // const markets = data.features; // 시장 정보 목록
        // renderData(markets);
    } catch (error) {
        console.log(error);
    }
}

//페이지 로드 시 데이터를 가져와서 화면에 표시
window.onload = showData;