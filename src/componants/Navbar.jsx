import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaMobileAlt } from 'react-icons/fa'

export default function Navbar({ cartCount }) {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 
      ${show ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='navbar bg-base-100 shadow-lg px-6'>
        
        {/* Logo */}
        <div className='flex-1'>
          <Link to='/' className='flex items-center gap-2 text-xl font-bold'>
            <FaMobileAlt className='text-primary text-4xl' />
            <span>PhoneZone</span>
          </Link>
        </div>

        {/* Links */}
        <nav className='hidden md:flex gap-8 font-semibold text-lg'>
          <Link to='/' className='hover:text-primary transition'>Home</Link>
          <Link to='/about' className='hover:text-primary transition'>About</Link>
          <Link to='/products' className='hover:text-primary transition'>Products</Link>
          <Link to='/contact' className='hover:text-primary transition'>Contact</Link>
        </nav>

        {/* Cart */}
        <Link
          to='/cart'
          className='btn btn-ghost btn-circle indicator ml-4'
        >
          <FaShoppingCart className='text-xl' />
          {cartCount > 0 && (
            <span className='badge badge-sm badge-primary indicator-item'>
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
