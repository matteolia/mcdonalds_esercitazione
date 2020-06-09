import React from 'react'; 
import Welcome from '../components/Welcome';
import Catalog from '../containers/Catalogue';
import Catalogue from '../containers/Catalogue';

export default () => {
  return (
    <div className="w-3/4">
      <Welcome />
      <Catalogue />
    </div>
  );
};
