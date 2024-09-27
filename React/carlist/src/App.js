import { useState } from 'react';
import './App.css';
import Input from "./Input";
import Output from "./Output";
import Topbanner from "./Topbanner";
import CarDetailModal from "./CarDetailModal";
import CarModifyModal from './CarModiftModal';



const App = () => {

    const carArrr = [
        { no: 1, name: "페라리", price: 2500, company: "현대", year: 2024 },
        { no: 2, name: "롤스로이스", price: 2500, company: "현대", year: 2024 },
        { no: 3, name: "아우디", price: 2500, company: "현대", year: 2024 },
        { no: 4, name: "씽씽카", price: 2500, company: "현대", year: 2024 },
    ];
    const [seqNo, setSeqNo] = useState(5);
    const [carList, setCarList] = useState(carArrr);
    const [modalData, setModalData] =useState({no: 0, name: "##", price: 0, company: "##", year: 0});

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
        setModalData(car);
    }

    const modifyOk = (modifyCarData)=>{
        console.log(modifyCarData);
        const idx = carList.findIndex((car)=>{
            return car.no == modifyCarData.no;
        });
        if(idx !== -1){
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
                    modifyCarData={modifyCarData} removeCarDat={removeCarData}/>
            <CarDetailModal modalData={modalData}/>
            <CarModifyModal modalData={modalData}/>

        </div>
    )
};

export default App;