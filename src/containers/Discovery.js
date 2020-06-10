import React from 'react'; 
import Welcome from '../components/Welcome';
import Catalogue from '../containers/Catalogue';

export default ({products}) => {
  return (
    <div className="w-3/4">
      <Welcome />
      <Catalogue products={products} />
    </div>
  );
};
