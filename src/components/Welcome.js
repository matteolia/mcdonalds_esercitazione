import React from 'react';
import Logo from "../assets/img/logo.png";
import DataOra from './DataOra';

export default () => {
    return (
      <div>
        <img src={Logo} alt="Logo di McDonalds" className="w-24 mb-16" />

        <h3 className="mb-6 text-5xl text-gray-900 leading-none">
          <span className="block font-bold">Hey,</span> what's up?
        </h3>
        <DataOra />
      </div>
    );
}
