import { useState } from "react"
import { MouseEvent } from "react"
import Select from "react-select"

const UploadProduct = () => {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)

    const handleCategory = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
      };

    const handleProdUploadBtn = async (e: MouseEvent) => {

        var productData = {
            "name": price,
            "category": category,
            "price": price,
            "description": desc,
            "quantity": quantity
        }
        var productdataJSON = JSON.stringify(productData);

        e.preventDefault()

        const resp = await fetch('http://localhost:8000/product/upload',

            {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: productdataJSON
            }
        )

        console.log(resp.json())
    }
  

    return (
        <div>
            <form action="">
                <p>Product Name</p>
                <input type="text" className="border" value={productName} onChange={(e) => setProductName(e.target.value)} />

                <p>Select a Category</p>
                <select value={category} onChange={handleCategory}>
                    <option value="DUMMY">DUMMY</option>
                    <option value="DUMMY2">DUMMY2</option>
                    <option value="DUMMY3">DUMMY3</option>
                </select>

                <p>Price</p>
                <input type="number" className="border" value={price} onChange={(e) => setPrice(+e.target.value)} />

                <p>Desciption</p>
                <input type="text" className="border" value={desc} onChange={(e) => setDesc(e.target.value)} />


                <p>Quantity</p>
                <input type="number" className="border" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />



                <button onClick={handleProdUploadBtn}>ok</button>
            </form>
        </div>
    )
}

export default UploadProduct