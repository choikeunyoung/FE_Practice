import React, { useState } from "react";
import styles from "../assets/css/shoppingcartitem.module.css"
import Plus from "../assets/image/Plus.png"
import Minus from "../assets/image/Minus.png"

/* <a href="https://www.flaticon.com/kr/free-icons/-" title="...을 더한 아이콘">...을 더한 아이콘  제작자: Freepik - Flaticon</a> */
/* <a href="https://www.flaticon.com/kr/free-icons/" title="마이너스 아이콘">마이너스 아이콘  제작자: Freepik - Flaticon</a> */
function ShoppingCartItem(probs) {
    const [count, setCount] = useState(1);
    const addHandler = () => {
        setCount(count+1)
    }

    const minusHander = () => {
        setCount(count-1)
        if (count < 1) {
                console.log("hi")
            }
        }
    return (
        <li className={styles.cartitem} key={probs.id}>
            <img className={styles.cartitem__image} src={probs.img} alt="" />
            <div className={styles.cartitem__infos}>
                <p>{probs.name}</p>
                <h2>{probs.price}</h2>
                <div className={styles.cartitem__infos__count}>
                    <img src={Minus} onClick={minusHander} />
                    <p>{count}</p>
                    <img src={Plus} onClick={addHandler} />
                </div>
            </div>
        </li>
    )
}


export default ShoppingCartItem