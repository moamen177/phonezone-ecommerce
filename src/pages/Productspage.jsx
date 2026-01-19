import React, { useState, useEffect } from 'react'
import { FaMobileAlt } from 'react-icons/fa'
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
      <div className='flex items-center justify-center min-h-[60vh]'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    )
  }

  return (
    <div className='bg-base-100'>

      {/* Page Header */}
      <section className='bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <FaMobileAlt className='text-5xl mx-auto mb-4 opacity-90' />
          <h1 className='text-5xl font-extrabold mb-2'>Our Products</h1>
          <p className='text-lg opacity-90'>
            Discover the latest smartphones
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className='container mx-auto px-6 py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

    </div>
  )
}
