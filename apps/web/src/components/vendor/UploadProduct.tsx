import { useState } from "react"
import { MouseEvent } from "react"
import Select from "react-select"

const UploadProduct = () => {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('Other')
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
        console.log(productdataJSON)

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
                    <option value="Other">Other</option>
                    <option value="Sambalpuri_Saree">Sambalpuri_Saree</option>
                    <option value="Banarasi_Saree">Banarasi_Saree</option>
                    <option value="Silk_Saree">Silk_Saree</option>
                    <option value="Kashmiri_Saree">Kashmiri_Saree</option>
                    <option value="Pashmina_Shawl">Pashmina_Shawl</option>
                    <option value="Khadi">Khadi</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Silk_rug">Silk_rug</option>
                    <option value="Cotton_rug">Cotton_rug</option>
                    <option value="Other_rug">Other_rug</option>
                    <option value="Porcelain_HomeDecor">Porcelain_HomeDecor</option>
                    <option value="Metal_HomeDecor">Metal_HomeDecor</option>
                    <option value="Wooden_HomeDecor">Wooden_HomeDecor</option>
                    <option value="Other_HomeDecor">Other_HomeDecor</option>
                    <option value="Porcelain_Sculptures">Porcelain_Sculptures</option>
                    <option value="Metal_Sculptures">Metal_Sculptures</option>
                    <option value="Wooden_Sculptures">Wooden_Sculptures</option>
                    <option value="Other_Sculptures">Other_Sculptures</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Utensils">Utensils</option>
                    <option value="Pottery">Pottery</option>

 
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