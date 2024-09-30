const carList = [
    {id:1, name:'그랜저', price:3000, company:'HD', year:2022},
    {id:2, name:'소나타', price:2000, company:'HD', year:2021}
];
let seqId = 103;

// class ProductDao {}
// module.exports = new ProductDao(); //이렇게 객체 생성하면 
//어차피 한번만 사용하는 객체라면 객체리터럴 사용

const ProductDAO = {
    findAll: ()=>{
        return [...carList];
    },
    findById: (id)=>{
        const idx = carList.findIndex((car)=>{
            return car.id === Number(id);
        });
        console.log("id of dao:", idx);
        if(idx !== -1) {
            return carList[idx];
        }
        return {};
    },
    careate: (dto)=>{
        carList.push(dto);
        return [...carList];
    },
    update: (id, dto)=>{
        const idx = carList.findIndex((car)=>{
            // === 연산자는 타입까지 동일 해야 한다.
            return car.id === Number(id);
        });
        if(idx !== -1) {
            carList[idx] = dto;
        }
        return [...carList];
    },
    delete: (id)=>{
        const idx = carList.findIndex((car)=>{
            return car.id === Number(id);
        });
        if(idx !== -1) {
            carList.splice(idx, 1);
        }
        return [...carList];
    }
};

module.exports = ProductDAO;