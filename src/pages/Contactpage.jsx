import React from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

export default function Contactpage() {
  return (
    <div className='w-full bg-base-100'>

      {/* Hero */}
      <section className='bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-5xl font-extrabold mb-4'>Contact Us</h1>
          <p className='text-lg opacity-90'>
            We’d love to hear from you anytime
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='py-20'>
        <div className='container mx-auto px-4 max-w-6xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>

            {/* Info */}
            <div>
              <h2 className='text-4xl font-bold mb-10'>Get in Touch</h2>

              <div className='space-y-8'>
                <div className='flex items-start gap-5'>
                  <FaEnvelope className='text-3xl text-primary' />
                  <div>
                    <h3 className='text-xl font-semibold'>Email</h3>
                    <p className='text-gray-500'>
                      momenmustafa30@gmail.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-5'>
                  <FaPhoneAlt className='text-3xl text-success' />
                  <div>
                    <h3 className='text-xl font-semibold'>Phone</h3>
                    <p className='text-gray-500'>+20 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className='flex items-start gap-5'>
                  <FaMapMarkerAlt className='text-3xl text-secondary' />
                  <div>
                    <h3 className='text-xl font-semibold'>Location</h3>
                    <p className='text-gray-500'>Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className='mt-12'>
                <h3 className='text-2xl font-bold mb-6'>Follow Me</h3>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com/moamen177'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-circle btn-outline'
                  >
                    <FaGithub className='text-xl' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/mo-men-mustafa-3161a5253'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-circle btn-primary'
                  >
                    <FaLinkedin className='text-xl' />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className='card bg-base-200 shadow-xl'>
              <div className='card-body'>
                <h2 className='text-3xl font-bold mb-6'>Send a Message</h2>

                <form className='space-y-5'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='input input-bordered w-full'
                  />

                  <input
                    type='email'
                    placeholder='Your Email'
                    className='input input-bordered w-full'
                  />

                  <textarea
                    className='textarea textarea-bordered w-full'
                    rows='5'
                    placeholder='Your Message'
                  ></textarea>

                  <button className='btn btn-primary w-full text-lg'>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
