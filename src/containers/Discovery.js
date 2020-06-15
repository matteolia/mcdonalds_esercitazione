import React from 'react'; 
import Welcome from '../components/Welcome';
import Catalogue from '../containers/Catalogue';

export default () => {
  return (
    <div className="w-3/4 p-6">
      <Welcome />
      <Catalogue/>
    </div>
  );
};
