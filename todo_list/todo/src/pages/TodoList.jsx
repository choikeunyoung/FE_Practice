import React from "react";
import CreateList from "../components/CreateList";
import ShowList from "../components/ShowList";
import { useState } from "react";

const TodoList = () => {
    const [lis_todos, setListTodos] = useState([]);
    const [nextId,setNextId] = useState(1)

    const todo_func = (num_list) => {
        const setting_list = [...lis_todos];
        setting_list.push(num_list);
        setListTodos(setting_list);
        setNextId(nextId + 1);
    }

    return(
        <article>
            <section style={{border: "1px solid black",}}>
                <h1>Todo List</h1>
                <hr />
                <ShowList showlist={lis_todos} />
                <CreateList getData={todo_func} nextId={nextId}/>
            </section>  
        </article>
    );
}

export default TodoList;