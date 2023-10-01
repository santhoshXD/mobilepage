import React, { useState } from 'react'
import Product from './ProductItem';
import ProductDescription from './ProductDescription';


const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const handleProductClick = (product) =>{
        setSelectedProduct(product);
    }
  return (
    <div>
      {products.map((product) => (
        <Product
          product={product}
          onClick={() => handleProductClick(product)}
        />
      ))}
      <div className='img-description'>
      {selectedProduct && (
        <ProductDescription product={selectedProduct} />
      )}
      </div>
    </div>
  )
}

export default ProductList
