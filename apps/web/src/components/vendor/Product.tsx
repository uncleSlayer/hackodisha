import { useState } from "react"

const Product = () => {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    return (
        <div>
            <form action="">
                <p>Product Name</p>
                <input type="text" className="border" value={productName} onChange={(e) => setProductName(e.target.value)} />

                <p>Category</p>
                <input type="text" className="border" value={category} onChange={(e) => setCategory(e.target.value)} />

                <p>Desciption</p>
                <input type="text" className="border" value={desc} onChange={(e) => setDesc(e.target.value)} />

                <p>Price</p>
                <input type="text" className="border" value={price} onChange={(e) => setPrice(e.target.value)} />

                <p>Quantity</p>
                <input type="text" className="border" value={quantity} onChange={(e) => setQuantity(e.target.value)} />



                {/* <button onClick={handleProdUploadBtn}>ok</button> */}
            </form>
        </div>
    )
}

export default Product