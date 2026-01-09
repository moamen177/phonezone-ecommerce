import React from 'react'

export default function Aboutpage() {
  return (
    <div className='w-full'>
    
      <section className='bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold mb-4'>About PhoneZone</h1>
          <p className='text-xl'>Your trusted smartphone destination</p>
        </div>
      </section>

    
      <section className='py-16'>
        <div className='container mx-auto px-4 max-w-4xl'>
          
         
          <div className='mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Story</h2>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
              PhoneZone was founded with a simple mission: to make the latest smartphones 
              accessible to everyone. We believe that technology should be affordable and 
              available to all.
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Today, we're proud to offer a wide selection of smartphones from the world's 
              leading brands, backed by our commitment to quality and customer satisfaction.
            </p>
          </div>

         
          <div className='mb-12'>
            <h2 className='text-3xl font-bold mb-6'>Our Values</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
             
              <div className='bg-gray-50 p-6 rounded-lg'>
                <div className='text-3xl mb-3'>✨</div>
                <h3 className='text-xl font-bold mb-2'>Quality First</h3>
                <p className='text-gray-600'>
                  We only offer authentic products from trusted manufacturers
                </p>
              </div>

          
              <div className='bg-gray-50 p-6 rounded-lg'>
                <div className='text-3xl mb-3'>🤝</div>
                <h3 className='text-xl font-bold mb-2'>Customer Trust</h3>
                <p className='text-gray-600'>
                  Your satisfaction is our top priority
                </p>
              </div>

             
              <div className='bg-gray-50 p-6 rounded-lg'>
                <div className='text-3xl mb-3'>🚀</div>
                <h3 className='text-xl font-bold mb-2'>Innovation</h3>
                <p className='text-gray-600'>
                  Always bringing you the latest technology
                </p>
              </div>

            
              <div className='bg-gray-50 p-6 rounded-lg'>
                <div className='text-3xl mb-3'>💚</div>
                <h3 className='text-xl font-bold mb-2'>Sustainability</h3>
                <p className='text-gray-600'>
                  Committed to environmentally responsible practices
                </p>
              </div>

            </div>
          </div>

          
          <div className='bg-blue-50 p-8 rounded-lg text-center'>
            <h2 className='text-2xl font-bold mb-4'>Want to know more?</h2>
            <p className='text-gray-600 mb-6'>
              Get in touch with us for any questions or inquiries
            </p>
            <a 
              href='/contact' 
              className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block'
            >
              Contact Us
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}