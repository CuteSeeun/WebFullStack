

const LiComponent = ({todo, todoList, setTodoList, toggleTodo})=>{ //구조분해할당해서 받는다
    return (<li>
                <input type="checkbox" onChange={(e)=>{toggleTodo(todo._id);}} checked={todo.done && "checked"}/>
                <span style={{textDecoration:todo.done && "line-through"}}> {todo.title}</span>   
                <button onClick={(e)=>{
                    const newList = todoList.filter((item)=>{
                        return item._id !== todo._id;
                    });
                    setTodoList(newList);
                }}>삭제</button> 
            </li>);
};

export default LiComponent;