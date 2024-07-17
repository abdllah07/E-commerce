'use client'
import BreadCrumb from '../../_components/BreadCrumb';

import React, { useEffect, useState } from 'react';
import ProductBanner from './_component/ProductBanner';
import ProductInfo from './_component/ProductInfo';
import { usePathname } from 'next/navigation';
import { SkeletonProductInfoCategory } from './_component/SkeletonProductInfo';
import ProductList from '../../_components/ProductList';
import ProductApis from '../../_utils/ProductApis';

function ProductDetails({ params }) {
  const [productDetails, setProductDetails] = useState([]);
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then(res => {
      console.log("product Item", res.data.data);
      setProductDetails(res.data.data); 
      getProductListByCategory(res.data.data)
    });
  };

  const getProductListByCategory = (product ) => {
    ProductApis.getProductsByCategory(product?.attributes?.category).then(res => {
      console.log("Product List By Category", res?.data?.data);
      setProductList(res?.data?.data)
    });
  }

  return (
    <div className='md:px-48 pt-10 pl-20'>
      <BreadCrumb />
      <div className='flex gap-5 flex-wrap mt-5'>
        <ProductBanner ProductDetails={productDetails} /> 
        <ProductInfo ProductDetails={productDetails}/>
      </div>
      <div>
        <h2 className = "mt-24 text-xl mb-4">Similar Product </h2>
        {
          productList.length !== 0 ?   <ProductList productList={productList}/> : <SkeletonProductInfoCategory/>
        }
      </div>
    </div>
  );
}

export default ProductDetails;
