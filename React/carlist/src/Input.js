import { useState } from "react";
import "./Input.css"

const Input = ({appendCarData}) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [company, setCompany] = useState("");
    const [year, setYear] = useState(0);


    return (
        <div className="container">
            <div>
                <h5>중고차 등록</h5>
            </div>
            <div className="input-group mb-0 input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">이름</span>
                </div>
                <input type="text" className="form-control" value={name} onChange={e=>{setName(e.target.value);}}/>
            </div>

            <div className="input-group mb-0 input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">가격</span>
                </div>
                <input type="number" className="form-control" value={price} onChange={e=>{setPrice(e.target.value);}}/>
            </div>
            <div className="input-group mb-0 input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">회사</span>
                </div>
                <input type="text" className="form-control" value={company} onChange={e=>{setCompany(e.target.value);}}/>
            </div>
            <div className="input-group mb-0 input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">연도</span>
                </div>
                <input type="text" className="form-control" value={year} onChange={e=>setYear(e.target.value)} />
            </div>
            <div className="input-group mb-0 input-group-lg">
                <button onClick={e=>{ const newCarData = {name, price, company, year}; appendCarData(newCarData);}} 
                        type="button" 
                        className="btn btn-info btn-block">등록</button>
            </div>
        </div>
    );
}

export default Input;