//이건 모듈화 하는 거이기에 export를 각각 붙여줘야 한다
export interface ISquare{
    size:number;
}
export interface IRectangle{
    tag:'rectanggle';
    width:number;
    height:number;
}
export interface ICircle{
    radius:number;
}

export type IShape = ISquare | IRectangle | ICircle;
//getArea()함수에 객체들을 인수로 전달하면 면적을 구해서 반환
const getArea = (args: IShape): number => {
    return 0;
  };