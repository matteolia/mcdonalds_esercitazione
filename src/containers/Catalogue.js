import React from 'react'; 
import Product from '../components/Product';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import {addProduct} from "../redux/actions/cartActions"

const Catalogue = (props) => {
  return (
    <ul className="flex flex-wrap">
      {props.products.map((product) => (
        <Product
          product={product}
          key={product.id}
          productClick={props.addProduct}
        ></Product>
      ))}
    </ul>
  );
};

Catalogue.propTypes = {
  products: PropTypes.array
}


const mapStateToProps = (state) => {
  return {
    products: state.catalogue
  }
};

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProduct: (currentProduct) => dispatch(addProduct(currentProduct)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);