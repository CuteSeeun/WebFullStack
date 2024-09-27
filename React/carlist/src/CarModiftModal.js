import { useEffect, useState } from 'react';

const CarModifyModal = ({ modalData, modifyOk }) => {

    const [carName, setName] = useState(modalData.name);
    const [price, setPrice] = useState(modalData.price);
    const [company, setCompany] = useState(modalData.company);
    const [year, setYear] = useState(modalData.year);

    // function initData() {
    //     setName(modalData.name);
    //     setPrice(modalData.price);
    // }
    // // useEffect()
    // setName(modalData.name);
    // setPrice(modalData.price);
    // console.log(carName, price, company, year);
    return (
        <>
            {/* <!-- The Modal --> */}
            <div className="modal fade" id="modifyModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">정보 수정</h4>
                            <button type="button" className="close" data-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table>
                                <tr>
                                    <th>no</th>
                                    <td>{modalData.no}</td>
                                </tr>
                                <tr>
                                    <th>name</th>
                                    <td><input type="text" value={carName==""?modalData.name:carName} 
                                               onChange={e=>{setName(e.target.value)}}/></td>
                                </tr> <tr>
                                    <th>price</th>
                                    <td><input type="text" value={price==0?modalData.price:price} 
                                               onChange={e=>{setName(e.target.value)}}/></td>
                                </tr> <tr>
                                    <th>company</th>
                                    <td><input type="text" value={company==""?modalData.company:company} 
                                               onChange={e=>{setName(e.target.value)}}/></td>
                                </tr> <tr>
                                    <th>year</th>
                                    <td><input type="text" value={year== 0?modalData.year:year} 
                                               onChange={e=>{setName(e.target.value)}}/>
                                               </td>
                                </tr>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button onClick={e=>{
                                        const
                                        modifyOk(modalData.no, carName, price, company, year)
                                    }} 
                                    type="button" className="btn btn-primary" data-dismiss="modal">수정완료</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CarModifyModal;