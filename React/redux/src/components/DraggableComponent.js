import "./Drag.css";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../redux/store_dnd";
import {useDrag} from "react-dnd";
import React from "react";


const DraggableComponent = ()=>{
    const position = useSelector(state => state.position);
    const dispatch = useDispatch();

    const positionData = {
        type: 'box',
        item: {id: 'draggable-box'}, 
        collect: (monitor) => ({isDragging: monitor.isDragging()}),
        end: (item, monitor)=>{
            const delta = monitor.getDifferenceFromInitialOffset();
            if(delta){
                
                const newX = Math.round(position.x + delta.x);
                const newY = Math.round(position.y + delta.y);
                dispatch(setPosition({x:newX, y:newY}));
            }
        }
    };

    const [{isDragging}, dragRef ] = useDrag(()=> positionData);


    return (<>
        <h3>컴포넌트를 마우스로 드래그 하기</h3> 
        <div ref={dragRef} className="box" style={{
            left: `${position.x}px`, top: `${position.y}px`, opacity: isDragging ? 0.5 : 1}}>Drag Me</div>
    </>);
}

export default DraggableComponent;