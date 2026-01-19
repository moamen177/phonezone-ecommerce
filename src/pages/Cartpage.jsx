import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaTrashAlt, FaArrowRight } from 'react-icons/fa'

export default function Cartpage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className='min-h-[70vh] flex items-center justify-center'>
        <div className='text-center'>
          <FaShoppingCart className='text-7xl text-gray-400 mx-auto mb-6' />
          <h1 className='text-4xl font-bold mb-4'>Your cart is empty</h1>
          <p className='text-gray-500 mb-8'>
            Start shopping and add your favorite products
          </p>
          <Link to='/products' className='btn btn-primary btn-lg'>
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-base-100 py-12'>
      <div className='container mx-auto px-6'>
        <h1 className='text-4xl font-extrabold mb-10'>Shopping Cart</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-6'>
            {cart.map((item, index) => (
              <div
                key={index}
                className='card card-side bg-base-200 shadow-md hover:shadow-xl transition'
              >
                <figure className='p-4'>
                  <img
                    src={item.thumbnail || item.images?.[0] || item.image}
                    alt={item.title || item.name}
                    className='w-28 h-28 object-contain'
                  />
                </figure>

                <div className='card-body'>
                  <h3 className='card-title'>
                    {item.title || item.name}
                  </h3>

                  <p className='text-primary text-xl font-bold'>
                    ${item.price}
                  </p>

                  <div className='card-actions justify-end'>
                    <button
                      onClick={() => removeFromCart(index)}
                      className='btn btn-error btn-outline gap-2'
                    >
                      <FaTrashAlt />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <div className='card bg-base-200 shadow-xl sticky top-28'>
              <div className='card-body'>
                <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>

                <div className='space-y-3 text-gray-600'>
                  <div className='flex justify-between'>
                    <span>Items ({cart.length})</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Shipping</span>
                    <span className='text-success'>Free</span>
                  </div>
                </div>

                <div className='divider'></div>

                <div className='flex justify-between text-xl font-extrabold mb-6'>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button className='btn btn-primary btn-lg w-full gap-2'>
                  Checkout
                  <FaArrowRight />
                </button>

                <Link
                  to='/products'
                  className='btn btn-outline w-full mt-3'
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
