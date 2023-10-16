import React, { useState } from "react";
import styles from "../styles/show.module.css"
import edit from "../assets/edit.png"
import Delete from "../assets/delete.png"


const ShowList = (probs) => {
    const changeStyle = (event) => {
        if (event.target.classList.contains(styles[`show-list__active`])) {
            event.target.classList.remove(styles[`show-list__active`]);
        }
        else {
            event.target.classList.add(styles[`show-list__active`]);
        }
    }

    const changeList = (list_num, nums, settingList) => {
        const updatedList = list_num.filter(item => item.id !== nums);
        settingList(updatedList);
    }

    const list_num = probs.showlist;
    const listitems = list_num.map((item) => 
        <div className={styles[`show-list`]} key={item.id}>
            <li className={styles[`show-list__items`]} onClick={changeStyle}>{item.todo}</li>
            <div className={styles[`show-list__imagebox`]}>
                <img src={Delete} alt="" onClick={() => changeList(list_num,item.id, probs.setlist)}/>
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