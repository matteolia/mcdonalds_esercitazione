import React from 'react'; 
import Product from '../components/Product';

export default () => {
  return (
    <ul>
      <Product
        name="Big Mac"
        image="https://www.mcdonalds.fr/image/layout_icon?img_id=319258"
      ></Product>
    </ul>
  );
};