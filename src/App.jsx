import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; 
import Navbar from "./componants/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Productspage from "./pages/Productspage";
import Cartpage from './pages/Cartpage'


export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart = (index) => {
  setCart(cart.filter((_, i) => i !== index))
}

  return (
    <div className="w-full flex-col pt-20">
      <BrowserRouter>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
                  <Route path='/cart' element={<Cartpage cart={cart} removeFromCart={removeFromCart} />}/>

          <Route
            path="/products"
            element={<Productspage addToCart={addToCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
