import ShoppingCartItem from "./ShoppingCartItem";
import styles from "../assets/css/shoppingcart.module.css"

function ShoppingCart() {
    const productList = [
        {
            "title" : "Nike Air Zoom Pegasus 36",
            "price" : "$108.97",
            "img" : "data:image/jpeg;base64,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",
            "active" : true
        },
        {
            "title" : "Nike Air Zoom Pegasus 36 Shield",
            "price" : "$89.97",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqDVHcQs-hK2UbbSvV9RDSoTyeT9YxAMavQ&usqp=CAU",
            "active" : true
        },
        {
            "title" : "Nike CruzrOne",
            "price" : "$100.97",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_-4DfZ9_yafJ11ZN21DjhTazrnBqakEbBA&usqp=CAU",
            "active" : true
        },
        {
            "title" : "Nike Epic React Flyknit 2",
            "price" : "$89.97",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhD-BF-8c5yKCDso6vVZf7Ia0LgwNcU67og&usqp=CAU",
            "active" : true
        }
    ]
    const products = productList.map((product, index) => (
        <ShoppingCartItem name={product.title} price={product.price} id={index} img={product.img} />
    ))
    return (
        <section className={styles.basePage}>
            <article className={styles.basePage__card}>
                <p className={styles.basePage__card__title}>My Cart</p>
                <div className={styles.basePage__card__block}></div>
                <ul className={styles.shoppingcart}>
                    {products}
                </ul>
            </article>
        </section>
    )
}


export default ShoppingCart