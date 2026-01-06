import React, { useState, useEffect } from 'react'
import Product from '../componants/Product'

export default function Productspage({ addToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className='container mx-auto p-8 text-center'>
        <h1 className='text-4xl font-bold'>Loading...</h1>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Our Products 📱</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((product) => (
          <Product 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}