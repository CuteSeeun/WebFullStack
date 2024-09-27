

const CarItem = ({car,showDetail, modifyCarData, removeCarData})=>{
    const {no, name, price, company, year} = car;

    const showDetail = ()=>{
        // alert(`${no}, ${name}, ${price}, ${year}`);

    }

    return (
        <tr>
            <td>{no}</td>
            <td><button data-toggle="modal" data-target="#detailModal"
                        onClick={e=>{showDetail(car);}} 
                        type="button" class="btn">{name}</button></td>
            <td>{price}</td>
            {/* <td>{company}</td> */}
            <td>{year}</td>
            <td><button data-toggle="modal" data-target="#modifyModal"
                        onClick={e=>{modifyCarData(car);}}
                        type="button" className="btn btn-primary">수정</button></td>
            <td><button onClick={e=>{removeCarData(car);}}
                        type="button" className="btn btn-danger">삭제</button></td>
        </tr>
    );
}

export default CarItem;