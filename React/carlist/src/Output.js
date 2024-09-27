import CarItem from "./CarItem";

const Output = ({carList, showDetail}) => {

    const makeRow = ()=>{
        return (
                carList.map((car)=>{
                    return <CarItem key={car.no} car={car} showDetail={showDetail} modifyCarData={modifyCarData} removeCarData={removeCarData}/>
                })
        );
    }

    return (
        <div className="container">
                <h4>거래 가능 중고 자동차 목록</h4>
                <p>관심있는 상품을 선택하세요</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>price</th>
                    {/* <th>company</th> */}
                    <th>year</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {makeRow()}
            </tbody>
        </table>
        </div>
    );
}

export default Output;