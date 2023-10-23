import React from 'react'
import { Route, Routes } from "react-router-dom"

import List_product from './pages/user/listproduct/List_product'
import Index from './pages/user/Home/Index'
import Description from './pages/user/description/Description'
import Register from './pages/user/register/Register'
import Blog from './pages/user/blog/Blog'
import Login from './pages/user/login/Login'
import Cart from './pages/user/cart/Cart'

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/login" element={<Login />}/>
    //   <Route path="/wishlist" element={<Wishlist/>}/>
    //   <Route path="/products" element={<ProductDetail/>}/>
    //   <Route path="/cart" element={<Cart />}/>
    //   <Route path="/payment" element={<Payment/>}/>
    // </Routes>
    <Routes>
      {/* Router dc phep truy cap */}
      <Route
        path="/"
        element={<Index />}
      />
      <Route
        path="/list-product"
        element={
          <List_product />
        }
      />
      <Route
        path="product/:id"
        element={
          <Description />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cart"
        element={<Cart />}
      />
      <Route
        path="/blog"
        element={<Blog />}
      />


    </Routes>
  )
}

export default App