import React from "react";
import Navbar from "../../../layout/user/navbar/Navbar";
import List_product from "../listproduct/List_product";
import Footer from "../../../layout/user/footer/Footer";
import Cart from "../cart/Cart";

export default function Index() {
  return (
    <div>
      <Navbar />
      <List_product />
      <Cart />
      <Footer />
    </div>
  );
}
