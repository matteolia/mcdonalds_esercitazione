import React from 'react'; 
import Product from '../components/Product';
import PropTypes from 'prop-types';

const Catalogue = ({products}) => {
  return (
    <ul className="flex flex-wrap">
      {products.map(({ name, image, id }) => (
        <Product
          name={name}
          image={image}
          key={id}
          onClick={(product) => console.log(product)}
        ></Product>
      ))}
    </ul>
  );
};

Catalogue.propTypes = {
  products: PropTypes.array
}

export default Catalogue;