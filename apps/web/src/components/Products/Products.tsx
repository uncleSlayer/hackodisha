import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { SERVER_IP } from 'configs'
import Product from './Product';




const Products: React.FC = () => {

    const [lastItem,setLastItem] = useState(7)
    const [hasMore, setHasMore] = useState(true)

    const [productArray, setProductArray] = useState<{
        id: number,
        name: string,
        category: string,
        price: number,
        description: string,
        quantity: number,
        imageUrl: string,
        userId: number,
    }[]>([])
    const fetchData = () => {
        fetch(SERVER_IP + "products/all/DUMMY",
            {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify({
                    lastItem:lastItem
                })
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            }).then((data) => {
                if (data.products.length < 10) {
                    console.log(data.products)
                    setHasMore(false)
                }
                setProductArray([...productArray,...data.products]);
            })
           

    }
    useEffect(fetchData, [lastItem])
   // console.log(productArray)

    return (

        <div>


            {productArray.map((product) => {
                if (!product) {
                    return
                } else {
                    return (
                        <InfiniteScroll key={product.id}
                            dataLength={productArray.length}
                            next={()=>{
                    
                                setLastItem(productArray[productArray.length-1].id)
                            }}
                            hasMore={hasMore}
                            // loader={<h4>Loading...</h4>}
                            // endMessage={
                            //     <p style={{ textAlign: 'center' }}>
                            //         <b>Yay! You have seen it all</b>
                            //     </p>}
                             >

                            <div >
                                <Product id={product.id} name={product.name}
                                    category={product.category}
                                    price={product.price}
                                    desc={product.description}
                                    quantity={product.quantity}
                                    imageUrl={product.imageUrl}
                                />
                                <br>
                                </br>
                            </div>
                        </InfiniteScroll>

                    )
                }
            })}

        </div>
    )
}

export default Products