import React from "react";
import { useState } from "react";
import styles from "../styles/create.module.css"

const CreateList = (probs) => {
    const [todos, setTodos] = useState([{}])
    const [text, setText] = useState("")
    return(
        <article className={styles[`create-box`]}>
            <form href="/todo" onSubmit={(event) => {
                event.preventDefault()
                if (todos !== "") {
                    const detail_info = {
                        id: probs.nextId,
                        todo: todos
                    };
                    probs.getData(detail_info);
                    setText("")
                    setTodos("")
                }
            }} className={styles[`create-box__forms`]}>
                <input type="text" name="todos" placeholder="할 일" value={text} onChange={(event) => {
                    setTodos(event.target.value);
                    setText(event.target.value)
                }}/>
                <button type="submit">작성</button>
            </form>
        </article>
    );
}

export default CreateList