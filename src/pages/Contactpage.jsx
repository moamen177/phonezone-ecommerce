import React from 'react'

export default function Contactpage() {
  return (
    <div className='w-full'>
      {/* Header Section */}
      <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold mb-4'>Contact Us</h1>
          <p className='text-xl'>We'd love to hear from you</p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4 max-w-6xl'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            
            {/* Contact Info */}
            <div>
              <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
              
              {/* Email */}
              <div className='mb-8'>
                <div className='flex items-start mb-4'>
                  <div className='text-3xl mr-4'>📧</div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Email</h3>
                    <p className='text-gray-600'>momenmustafa30@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className='mb-8'>
                <div className='flex items-start mb-4'>
                  <div className='text-3xl mr-4'>📱</div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Phone</h3>
                    <p className='text-gray-600'>+20 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className='mb-8'>
                <div className='flex items-start mb-4'>
                  <div className='text-3xl mr-4'>📍</div>
                  <div>
                    <h3 className='text-xl font-bold mb-2'>Location</h3>
                    <p className='text-gray-600'>Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
                <div className='flex gap-4'>
                  <a 
                    href='https://github.com/moamen177' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700 transition text-xl'
                  >
                    🐙
                  </a>
                  <a 
                    href='https://www.linkedin.com/in/mo-men-mustafa-3161a5253' 
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition text-xl'
                  >
                    💼
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-50 p-8 rounded-lg'>
              <h2 className='text-2xl font-bold mb-6'>Send us a Message</h2>
              
              <form className='space-y-4'>
                {/* Name */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Name
                  </label>
                  <input 
                    type='text'
                    placeholder='Your name'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
                </div>

                {/* Email */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Email
                  </label>
                  <input 
                    type='email'
                    placeholder='your.email@example.com'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  />
                </div>

                {/* Message */}
                <div>
                  <label className='block text-gray-700 font-semibold mb-2'>
                    Message
                  </label>
                  <textarea 
                    rows='5'
                    placeholder='Your message...'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}