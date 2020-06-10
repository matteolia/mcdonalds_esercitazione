import React from 'react';
import CartTitle from "../components/CartTitle";
import CartProducts from './CartProducts'

export default ({products}) => {
    return (
      <div className="w-1/4 bg-gray-100 h-screen p-6">
        <CartTitle />
        <CartProducts products={products} />
      </div>
    );
}