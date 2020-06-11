import React from 'react'; 
import Product from '../components/Product';
import PropTypes from 'prop-types';

const Catalogue = ({ products, productClick }) => {
  return (
    <ul className="flex flex-wrap">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          productClick={productClick}
        ></Product>
      ))}
    </ul>
  );
};

Catalogue.propTypes = {
  products: PropTypes.array
}

export default Catalogue;