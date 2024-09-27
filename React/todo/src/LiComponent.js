

const LiComponent = ({todo, todoList, setTodoList, toggleTodo, editTitle})=>{ //구조분해할당해서 받는다
                                                                //주는 위치랑  받는 위치가 같을 필요가 업다
    return (
        <li>
            <input type="checkbox" onChange={(e)=>{toggleTodo(todo._id);}} checked={todo.done && "checked"}/>
            <span onClick={(e)=>{editTitle(todo)}} style={{textDecoration:todo.done && "line-through"}}> {todo.title}</span>   
            <button onClick={(e)=>{
                const newList = todoList.filter((item)=>{
                    return item._id !== todo._id;
                });
                setTodoList(newList);
            }}>삭제</button> 
        </li>);
};

export default LiComponent;