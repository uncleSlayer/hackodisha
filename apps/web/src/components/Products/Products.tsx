import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { SERVER_IP } from 'configs'
import Product from './Product';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style_product.css'



const Products: React.FC = () => {
    const { category } = useParams();


    const [lastItem,setLastItem] = useState(0)

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
        fetch(SERVER_IP + "products/all/" + category,
            {
                method: 'post',
                credentials: 'include',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify({
                    lastItem: lastItem
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
                setProductArray([...productArray, ...data.products]);
            })


    }
    useEffect(fetchData, [lastItem])
    // console.log(productArray)

    return (

        <div className='container'>

       
      <Row className='row heigh' md={3}>
            {productArray.map((product) => {
                if (!product) {
                    return
                } else {
                    return (
                        <InfiniteScroll key={product.id}
                            dataLength={productArray.length}
                            next={() => {

                                setLastItem(productArray[productArray.length - 1].id)
                            }}
                            hasMore={hasMore}
                        // loader={<h4>Loading...</h4>
                        // endMessage={
                        //     <p style={{ textAlign: 'center' }}>
                        //         <b>Yay! You have seen it all</b>
                        //     </p>}
                        >
                            <Col className='item'>
                             <Product id={product.id} name={product.name}
                                        category={product.category}
                                        price={product.price}
                                        desc={product.description}
                                        quantity={product.quantity}
                                        imageUrl={product.imageUrl}
                                    />
                            </Col>
                           
                        </InfiniteScroll>

                    )
                }
            })}
      </Row>
        </div>
    )
}

export default Products