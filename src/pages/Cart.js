import React, { useContext } from 'react'
import { AppData } from '../context/app-context'

const Cart = () => {
  const {cartList} = AppData();
  console.log(cartList);
  return (
    <div>Cart</div>
  )
}

export default Cart