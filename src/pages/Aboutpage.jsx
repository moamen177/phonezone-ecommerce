import React from 'react'
import { FaMobileAlt } from 'react-icons/fa'
export default function Aboutpage() {
  return (
    <div className="w-full overflow-hidden">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              About <span className="text-blue-700">PhoneZone</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Your trusted destination for the latest smartphones and technology.
            </p>
          </div>

          <div className="relative">
            <div className="w-full h-64 bg-white/10 rounded-2xl backdrop-blur font-semibold flex items-center justify-center text-2xl">
              <FaMobileAlt className='text-white text-4xl' /> Mobile Showcase
            </div>
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              PhoneZone was founded with one clear goal: making modern smartphones
              accessible to everyone without compromise.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We carefully select the best devices from leading brands and deliver
              them with trust, transparency, and quality service.
            </p>
          </div>

          <div className="w-full h-64 rounded-2xl text-3xl font-semibold text- bg-gray-100 flex items-center justify-center">
            🏪 Store Image
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {[
              { icon: '✨', title: 'Quality', text: '100% authentic products' },
              { icon: '🤝', title: 'Trust', text: 'Customer-first experience' },
              { icon: '🚀', title: 'Innovation', text: 'Latest tech always' },
              { icon: '💚', title: 'Care', text: 'Responsible & reliable' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Want to know more?</h2>
        <p className="mb-8 text-lg">
          We’re always ready to help you choose the right device.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
        >
          Contact Us
        </a>
      </section>

    </div>
  )
}
