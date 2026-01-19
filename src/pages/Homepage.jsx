import { Link } from 'react-router-dom'
import { FaShippingFast, FaCheckCircle, FaTags } from 'react-icons/fa'

export default function Homepage() {
  return (
    <div className='w-full bg-base-100'>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl md:text-6xl font-extrabold mb-6'>
            PhoneZone
          </h1>
          <p className='text-lg md:text-xl mb-10 opacity-90'>
            The smartest way to buy your next smartphone
          </p>
          <Link
            to='/products'
            className='btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black transition'
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-base-200'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-14'>
            Why PhoneZone?
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

            {/* Feature 1 */}
            <div className='card bg-base-100 shadow-xl hover:scale-105 transition'>
              <div className='card-body text-center'>
                <FaShippingFast className='text-5xl mx-auto text-primary mb-4' />
                <h3 className='card-title justify-center'>Fast Delivery</h3>
                <p className='text-gray-500'>
                  Get your phone delivered in record time
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className='card bg-base-100 shadow-xl hover:scale-105 transition'>
              <div className='card-body text-center'>
                <FaCheckCircle className='text-5xl mx-auto text-success mb-4' />
                <h3 className='card-title justify-center'>Original Products</h3>
                <p className='text-gray-500'>
                  Guaranteed authentic devices from top brands
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className='card bg-base-100 shadow-xl hover:scale-105 transition'>
              <div className='card-body text-center'>
                <FaTags className='text-5xl mx-auto text-secondary mb-4' />
                <h3 className='card-title justify-center'>Best Deals</h3>
                <p className='text-gray-500'>
                  Exclusive prices you won’t find elsewhere
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-base-100 to-base-200'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Find Your Next Phone Today
          </h2>
          <p className='text-gray-500 mb-10'>
            Explore our collection of premium smartphones
          </p>
          <Link
            to='/products'
            className='btn btn-primary btn-lg'
          >
            View Products
          </Link>
        </div>
      </section>

    </div>
  )
}
