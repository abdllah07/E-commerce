'use client' // The next serve is working on the server, so use 'use client' to work the react component
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

function ProductSection() {

    const [productList, setProductList] = useState([]) // Initialize as an empty array
    useEffect(() => {
        getLatestProduct_()
    }, [])

    const getLatestProduct_ = () => {
        ProductApis.getLatestProducts().then(res => {
            console.log(res.data.data)
            setProductList(res.data.data)
        })
    }
    return (
        <div className='px-10  md:px-10'>
            <h2 className='my-4 text-xl'>Out Latest Products</h2>
            <ProductList productList={productList} />
        </div>
    )
}

export default ProductSection
