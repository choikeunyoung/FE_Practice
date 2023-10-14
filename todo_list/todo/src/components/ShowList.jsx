import React from "react";

const ShowList = (probs) => {
    const list_num = probs.showlist;
    const listitems = list_num.map((nums) => 
        <li key={nums.id}>{nums.todo}</li>
        )
    return (
        <ul>{listitems}</ul>
    )
}

export default ShowList