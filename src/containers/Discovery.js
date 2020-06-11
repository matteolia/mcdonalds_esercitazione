import React from 'react'; 
import Welcome from '../components/Welcome';
import Catalogue from '../containers/Catalogue';

export default ({ products, productClick }) => {
  return (
    <div className="w-3/4 p-6">
      <Welcome />
      <Catalogue products={products} productClick={productClick} />
    </div>
  );
};
