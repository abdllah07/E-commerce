'use client'
import React, { useContext } from 'react'
import {AlertOctagon, BadgeCheck, ShoppingCart} from 'lucide-react'
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '../../../_utils/CartApis';
import { CartContext } from '../../../_context/CartContext';
function ProductInfo({ProductDetails}) {
    const {user } = useUser();
    const router = useRouter();
    const {cart , setCart } = useContext(CartContext);
    const handleAddToCart = () => {
        if(!user) {
            router.push('/sign-in')
        }else {
            const  data = {
                data : {
                    username : user.fullName,
                    email : user.primaryEmailAddress.emailAddress,
                    products : [ProductDetails?.id]
                }
            }
            CartApis.addToCart(data).then(res => {
                console.log(res.data.data)
                setCart(oldCart => [
                    ...oldCart, 
                    {
                        id : res?.data?.data?.id,
                        ProductDetails
                    }
                ])
            }).catch(err => {
                console.log("err" ,err)
            })
        }
    }
    return (
        <>
        {
            ProductDetails?.id? 
            <div className = "w-[600px]">
        <h2 className='text-[20px]'>{ProductDetails?.attributes?.title}</h2>
        <h2 className='text-[16px] text-gray-400'>{ProductDetails?.attributes?.category}</h2>
        <h2 className='mt-5 text-[11px]'>{ProductDetails?.attributes?.description[0]?.children[0]?.text}</h2>
            {
                ProductDetails?.attributes?.instantDelivery ? 
                <h2 className='text-[11px] text-gray-500  flex gap-2 mt-2 items-center'>
                    <BadgeCheck className='text-green-500 h-5 w-5'/>Eligible For Instant Delivery  </h2>

                                
            : <AlertOctagon />
            }

        <h2 className='mt-3 text-[32px] text-primary'>$ {ProductDetails?.attributes?.price}</h2>
            <button onClick={() => handleAddToCart()} className='flex gap-2 bg-primary hover:bg-teal-600 p-3 rounded-lg text-white'>
            <ShoppingCart />
                Add To Cart
            </button>  
        </div>
        :         
        <SkeletonProductInfo/>

        }
        </>
    )
}

export default ProductInfo