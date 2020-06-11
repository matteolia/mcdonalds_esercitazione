import React, { Component } from 'react';
import Flag from '../assets/img/fr.png';

class CartTitle extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <img src={Flag} alt="flag" className="w-12 mb-24 self-end" />
        <h3 className="mb-6 text-3xl text-gray-900 leading-none font-bold">
          <span className="block">My</span> Order
        </h3>
        <div className="text-gray-600 font-bold text-sm">Take out</div>
      </div>
    );
  }
}

export default CartTitle;