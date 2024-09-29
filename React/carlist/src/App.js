import { useState } from 'react';
import './App.css';
import Input from "./Input";
import Output from "./Output";
import Topbanner from "./Topbanner";
import CarDetailModal from "./CarDetailModal";
import CarModifyModal from './CarModifyModal';



const App = () => {
    const carArrr = [
        { no: 1, name: "페라리", price: 2500, company: "현대", year: 2024 },
        { no: 2, name: "롤스로이스", price: 2500, company: "현대", year: 2024 },
        { no: 3, name: "아우디", price: 2500, company: "현대", year: 2024 },
        { no: 4, name: "씽씽카", price: 2500, company: "현대", year: 2024 },
    ];
    const [seqNo, setSeqNo] = useState(5);
    const [carList, setCarList] = useState(carArrr);
    const [modalData, setModalData] =useState({_id:-1, name:"#!*", price:-1, company:"#!*", year:-1});

    const appendCarData = (newCarData) => {
        newCarData.no = seqNo;
        setSeqNo(seqNo + 1);
        setCarList([...carList, newCarData]);
    }

    const showDetail = (car)=>{
        // alert(`${no}, ${name}, ${price}, ${year}`);
        setModalData(car);
    }
    const modifyCarData = (car)=>{
        setModalData(car);
    }
    const removeCarData = (car)=>{
        console.log("removeCarData called:", car);
        
        const idx = carList.findIndex((item)=>item.no === car.no);
        if(idx != -1) {
            const newList = [...carList];
            newList.splice(idx, 1);
            setCarList(newList);
        }
    }

    const modifyOk = (modifyCarData)=>{
        console.log(">>> modifyOk:", modifyCarData);
        const idx = carList.findIndex((car)=>{
            return car.no == modifyCarData.no;
        });
        if(idx != -1) {
            const newList = [...carList];
            newList[idx] = modifyCarData
            setCarList(newList);
        }
    }

    return (
        <div className="App">
            <Topbanner />
            <Input appendCarData={appendCarData} />
            <hr />
            <Output carList={carList} showDetail={showDetail} 
                    modifyCarData={modifyCarData} removeCarData={removeCarData}/>
            <CarDetailModal modalData={modalData}/>
            <CarModifyModal modalData={modalData} modifyOk={modifyOk}/>

        </div>
    )
};

export default App;