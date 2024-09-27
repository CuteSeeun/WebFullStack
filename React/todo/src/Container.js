import { useState } from "react";
import LiComponent from "./LiComponent";

const Container = () => {
    let listArray = [
        {_id:"1", title:"춥다고", done:false},
        {_id:"2", title:"열라면 땡겨", done:false},
        {_id:"3", title:"프로젝트 완성", done:false},
        {_id:"4", title:"파이널", done:false}
    ];
    const [newTodo, setNewTodo] = useState(""); //새로운 할 일의 텍스트
    const [todoList, setTodoList] = useState(listArray); //할 일 목록
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


    const [current, setCurrent] = useState(""); //리스트 항목의 title 선택 시 현재 값
    const [selectTodo, setSelectTodo] = useState({}); //어떤 항목이 선택되엇는가 알기 위해 만듦
    const editHandler = (e)=>{ //이벤트 핸들러는 이벤트 객체가 자동으로 생긴다 그래도 그게 표준은 아니니깐 이벤트를 담을 수 있는 변수 만들기
        //수정 완료 및 적용 기능
        console.log("editHandler()-Container : ", current);
        console.dir(selectTodo); //어떤 항목이 선택되엇는가 알기 위해 만듦

        //-----------------------------------
        //선생님
        //selectTodo에서 _id 참조해서 todoList의 어느 항목인지 찾기
        //todoList 복제
        //복제 후 새 title로 변경
        //todoList state를 변경(적용, 리렌더링)
        // const idx = todoList.findIndex((todo)=>selectTodo._Id === todo._id);
        // if(idx !== -1){
        //     const newList = [...todoList];
        //     newList[idx].title = current;
        //     setTodoList(newList);
        //     setCurrent("");
        // }


        //나
        const updateTitle = todoList.map((todo)=>{
            if(todo._id === selectTodo._id){
                return {...todo, title:current};
            }
            else{return todo};
        })
             //map 함수
             //todoList.map은 todoList 배열의 각 todo 객체에 대해 콜백 함수를 실행합니다.
             //각 todo는 현재 순회 중인 할 일 객체입니다.
        setTodoList(updateTitle); //항목에 새 타이틀 적용
        // setSelectTodo({}); //
        setCurrent(""); //초기화
    }

    const editTitle = (curTodo)=>{ //여기에는 todo가 올라오던가 아님 해당 요소의 id 혹은 title이 올라오든가 해야 한다
                                 //이 함수는 LiComponent에 넘겨야 한다.
        console.log("editTitle()이 호출됨 - Container가 속해있고", curTodo); //그럼 curTodo는 각 항목이다
        //todoList의 title을 선택하면 작동하는 기능
        
        setCurrent(curTodo.title);
        setSelectTodo(curTodo); //화면에 변화를 줘야 하는 일은 없기에 state로 해야 할 필요가 없다. 그러나 위에서 state로 저장하기에
                             //이 변수는 초기화가 된다. 그래서 state로 만들자
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
                                  editTitle={editTitle}
                                  toggleTodo = {toggleTodo}  setTodoList={setTodoList} />);
        });
    }

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <p>
                <h5>입력</h5>
                    <input type="text" value={newTodo} onChange={(e)=>{//state를 변경하면 변경된 내용이 input에 반영(setter를 이용해 변경)
                                                                     setNewTodo(e.target.value);}} />
                    <button onClick={buttonHandler}>저장</button>
                <hr />
            </p>
            <p>
                <h5>수정</h5>
                <input type="text" value={current} onChange={(e)=>{ setCurrent(e.target.value);}} />
                <button onClick={editHandler}>수정</button>
                
            </p>
            <hr />

            <h5>할일 목록</h5>
            <ul>{ makeElements()}</ul>
        </div>
    );
}

export default Container;