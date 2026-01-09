
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className=' bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-bold mb-4'>
            Welcome to PhoneZone 📱
          </h1>
          <p className='text-xl mb-8'>
            Discover the latest smartphones at the best prices
          </p>
          <Link 
            to='/products' 
            className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block'
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Why Choose PhoneZone?
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl mb-4'>🚚</div>
              <h3 className='text-xl font-bold mb-2'>Fast Delivery</h3>
              <p className='text-gray-600'>
                Get your phone delivered within 24 hours
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl mb-4'>💯</div>
              <h3 className='text-xl font-bold mb-2'>Quality Products</h3>
              <p className='text-gray-600'>
                100% authentic smartphones from trusted brands
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-white p-6 rounded-lg shadow-md text-center'>
              <div className='text-4xl mb-4'>💰</div>
              <h3 className='text-xl font-bold mb-2'>Best Prices</h3>
              <p className='text-gray-600'>
                Competitive prices with amazing deals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to find your perfect phone?
          </h2>
          <p className='text-gray-600 mb-8'>
            Browse our collection of the latest smartphones
          </p>
          <Link 
            to='/products' 
            className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block'
          >
            View All Products
          </Link>
        </div>
      </section>
    </div>
  )
}