import Image from 'next/image'
import React from 'react'
import {List} from 'lucide-react'
import Link from 'next/link'
function ProductItem({product}) {
    console.log(product)
    return (
            <Link href = {`/product-details/${product?.id}`} className="hover:border p-1 hover:shadow-md rounded-lg border-teal-400 hover:cursor-pointer">
                <Image src={product?.attributes?.banner?.data?.attributes?.url} alt='banner-card' width={430} height={350} 
                className='h-[170px] object-cover'
                />
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-b-lg ">

                <div className='p-3 '>
                    <h2 className='text-[12px] font-medium line'>{product?.attributes?.title}</h2>
                    <h2 className='text-[10px] font-medium text-gray-400 flex gap-1 items-center ' >
                        <List className='h-4 w-4'/>
                        {product?.attributes?.category}
                    </h2>

                </div>
            
                <h2 className=''>{product?.attributes?.price}</h2>


                </div>
            </Link>
    )
}

export default ProductItem