import React from "react";
import styles from "../styles/show.module.css"
import edit from "../assets/edit.png"
import Delete from "../assets/delete.png"

const changeStyle = (event) => {
    if (event.target.classList.contains(styles[`show-list__active`])) {
        event.target.classList.remove(styles[`show-list__active`]);
    }
    else {
        event.target.classList.add(styles[`show-list__active`]);
    }
}


const ShowList = (probs) => {
    const list_num = probs.showlist;
    const listitems = list_num.map((nums) => 
        <div className={styles[`show-list`]}>
            <li key={nums.id} className={styles[`show-list__items`]} onClick={changeStyle}>{nums.todo}</li>
            <div className={styles[`show-list__imagebox`]}>
                <img src={edit} value={nums.id} alt=""/>
                <img src={Delete} value={nums.id} alt="" onClick={probs.removelist}/>
            </div>
        </div>
        )
    return (
        <ul>
            {listitems}
        </ul>
    )
}

export default ShowList