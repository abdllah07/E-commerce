import React from 'react'
import Image from 'next/image'
function ProductBanner({ProductDetails}) {
    return (
        <div className = "w-[400px]">
        {
            ProductDetails?.id ?  
            <Image 
            src = {ProductDetails?.attributes?.banner?.data?.attributes?.url}
            alt='product details'
            width={400}
            height={400}
            className='rounded-lg'
        />
            :   <div className= 'w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
        }
    </div>
    )
}

export default ProductBanner