import { useState } from "react";
import LiComponent from "./LiComponent";

const Container = () => {
    const [newTodo, setNewTodo] = useState(""); //새로운 할 일의 텍스트

    let listArray = [
        {_id:"1", title:"춥다고", done:false},
        {_id:"2", title:"열라면 땡겨", done:false},
        {_id:"3", title:"프로젝트 완성", done:false},
        {_id:"4", title:"파이널", done:false}
    ];

    const [todoList, setTodoList] = useState(listArray); //할 일 목록
    // let todo_id = 5;
    const [todoId, setTodoId] = useState(5); //할 일의 고유한 _id

    const buttonHandler = (e) => {
        //버튼 핸들러에서 state 사용
        console.log(newTodo);
        // todoList.push(<li>{newTodo}</li>); 이 코드는 li내용이 바뀌어도 렌더에 반영이 안된다

        //todoList 내용 복제 (생성자, 반복문, spread)
        //복제된 todoList에 새 요소 추가
        //복제된 todoList를 setTodoList 한다. 이건 렌더에 반영된다. 
            // let newTodoList = [...todoList];
            // newTodoList.push(<li>{newTodo}</li>);
            // setTodoList(newTodo);

            // let newTodoList = [...todoList, <li>{newTodo}</li>]
            // setTodoList(newTodoList);

            setTodoList([...todoList, {_id:"0"+todoId, title:newTodo, done:false}]); //let todo_id = 5; 위에서 이렇게 만들어서 id가 변하지 않고 렌더가 됏다
            setTodoId(todoId+1);

            //배열에 추가 후 state 초기화
            setNewTodo("");
    }
    
    // const deleteHandler = (e)=>{
    //     //내용 복제
    //     //복제된 todoList에 요소 삭제
    //     //복제된 todoList를 setTodoList한다.
    //     // let newToDoList = [...todoList];
    //     // newToDoList.filter(e => e !== newToDoList._id);

    //     //나름 수정한거
    //     // const newToDoList = todoList.filter(todo => todo._id !== id);
    //     // setTodoList(newToDoList);

    //     // setTodoId(); //배열 id 알아서 업데이트 (이 과정이 꼭 필요할까? 순서가 보이지 않느데)
    //     setNewTodo("");
    // };

    // function makeElements(){
    //     // let todoElements = [];
    //     // todoList.forEach(()=>{
    //     //     todoElements.push(<li>{todoList[i]}</li>)
    //     // })
    //     return todoList.map( (todo) =>{
    //         return (<li key={todo._id}>
    //                     <span>{todo.title}</span>   
    //                     <button onClick={(e)=>{
    //                         console.log(todo._id);
                            
    //                         //1. splice로 삭제하기
    //                             // const newTodoList = [...todoList];//새todoList 복제
    //                             // const idx = newTodoList.findIndex((item)=>{
    //                             //     return todo._id === item._id;
    //                             // });
    //                             // if(idx !== -1){
    //                             //     newTodoList.splice(idx,1);
    //                             //     setTodoList(newTodoList);
    //                             // }

    //                         //2. filter로 삭제하기
    //                         const newList = todoList.filter((item)=>{
    //                             return item._id !== todo._id;
    //                         });
    //                         setTodoList(newList);

                            
    //                     }}>삭제</button> 
    //                 </li>);});

    // }

    function toggleTodo(_id){
        const idx = todoList.findIndex((todo)=>{
            return todo._id === _id;
        });
        
        if(idx !== -1){
            const newList = [...todoList]
            newList[idx].done = !todoList[idx].done;
            setTodoList(newList);
        }
    }

    function makeElements(){
        return todoList.map((todo)=>{
            return ( <LiComponent key={todo._id} todo={todo} todoList={todoList} 
                                  toggleTodo = {toggleTodo}  setTodoList={setTodoList} />);
        });
    }

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <h3>할일 입력</h3>
            <p>
                <input type="text" value={newTodo} onChange={(e)=>{//state를 변경하면 변경된 내용이 input에 반영(setter를 이용해 변경)
                                                                     setNewTodo(e.target.value);}} />
                <button onClick={buttonHandler}>저장</button>
            </p>
            <hr />

            <h3>할일 목록</h3>
            <ul>{ makeElements()}</ul>
        </div>
    );
}

export default Container;