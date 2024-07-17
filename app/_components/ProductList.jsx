import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {

    if (!Array.isArray(productList)) {
        console.error("Expected productList to be an array but received", typeof productList)
        return null
    }

    return (
        <div className='flex gap-3 flex-wrap'>
            {
                productList?.map((item, index) => (
                    <div key={index}>
                        <ProductItem product = {item}/>
                    </div>
                ))
            }
        </div>
    )
}



export default ProductList
