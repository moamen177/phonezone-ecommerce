import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <header className={`w-full text-white mx-auto px-4 py-4 bg-gray-800 flex justify-between fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <h1 className='text-2xl font-bold'>📱 PhoneZone</h1>
      
      <nav className='flex justify-between gap-6 font-semibold items-center text-[20px]'>
        <Link to='/' className='hover:text-blue-400 transition'>home</Link>
        <Link to='/about' className='hover:text-blue-400 transition'>about</Link>
        <Link to='/products' className='hover:text-blue-400 transition'>products</Link>
        <Link to='/contact' className='hover:text-blue-400 transition'>contact</Link>
      </nav>
      
      <div className='text-xl'>
        🛒 Cart ({cartCount}) 
      </div>
    </header>
  )
}