import React, {Component} from 'react';
import CartProduct from '../components/CartProduct'

import {connect} from 'react-redux';
import {incrementAmount, decrementAmount} from '../redux/actions/cartActions';

class CartProducts extends Component {
    
  constructor(props) {
      super(props);
  }

  render () {
      return (
        <ul>
          {this.props.cartProducts.map((product) => (
            <CartProduct
              {...product}
              key={product.id}
              incrementCartProductQuantity={
                this.props.incrementCartProductQuantity
              }
              decrementCartProductQuantity={
                this.props.decrementCartProductQuantity
              }
            />
          ))}
        </ul>
      );
  }
}

let mapStateToProps = (state) => {
  return {
    cartProducts: state.cart
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCartProductQuantity: (product) => dispatch(incrementAmount(product)),
    decrementCartProductQuantity: (product) => dispatch(decrementAmount(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts);