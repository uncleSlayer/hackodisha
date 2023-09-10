import React, { useState } from "react"
import { MouseEvent } from "react"
import Select from "react-select"
import './upload_style.css'

const UploadProduct = () => {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('Other')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState<number>(0)
    const [quantity, setQuantity] = useState<number>(1)
    // const [imgg, setImgg] = useState<File>()

    const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleProdUploadBtn = async (e: MouseEvent) => {

        // console.log(imgg)

        let postData = {
            productData: {
                "name": productName,
                "category": category,
                "price": price,
                "description": desc,
                "quantity": quantity
            }
        }

        let productdataJSON = JSON.stringify(postData);
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

        // const respDec: { message: string, url: string } = await resp.json()
        // const url = respDec.url

        // const uploadResp = await fetch(
        //     url,
        //     {
        //         method: 'put',
        //         headers: {
        //             'Content-type': `${imgg?.type}`
        //         },
        //         body: imgg
        //     }
        // )
    }


    return (
        <div className='div1'>
            <div className='div2'>
                <div className='user'>
                    <div className='formBox'>
            <form className='frm' action="">
                <h2>Upload Your Product</h2>
            <p></p>
                <input type="text" placeholder="Product Name" className="border" value={productName} onChange={(e) => setProductName(e.target.value)} />

                <p></p>
                <select className="select"  value={category} onChange={handleCategory}>
                    <option value="Other">--Select a Category--</option>
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

                {/* <span>Price</span> */}
                <input type="number" placeholder="Price" className="border" value={price} onChange={(e) => setPrice(+e.target.value)} />

                <input type="text" placeholder="Desciption" className="border" value={desc} onChange={(e) => setDesc(e.target.value)} />

                <input type="number" placeholder="Quantity" className="border" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />

                {/* <p>Image</p>
                <input type="file" onChange={(e: React.FormEvent) => {
                    const file = (e.target as HTMLInputElement).files

                    if (file && file.length > 0) {
                        setImgg(file[0])
                    }

                }} /> */}

                <br />
                <br />

                <button className="Btn bttn" style={{top:'500px'}} onClick={handleProdUploadBtn}>Click to Upload</button>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default UploadProduct