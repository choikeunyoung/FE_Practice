import React from "react";
import styles from "../styles/show.module.css"
import edit from "../assets/edit.png"
import Delete from "../assets/delete.png"


const ShowList = (probs) => {
    const list_num = probs.showlist;
    const listitems = list_num.map((nums) => 
        <div className={styles[`show-list`]}>
            <span>{ nums.id }.</span>
            <li key={nums.id} className={styles[`show-list__items`]} id=nums.id}">{nums.todo}</li>
            <div className={styles[`show-list__imagebox`]}>
                <img src={edit} value={nums.id} alt=""/>
                <img src={Delete} value={nums.id} alt=""/>
            </div>
        </div>
        )
    return (
        <>
        {listitems}
        </>
    )
}

export default ShowList