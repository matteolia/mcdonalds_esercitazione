import React, {Component} from 'react';
import CartProduct from '../components/CartProduct'

class CartProducts extends Component {
    
  constructor(props) {
      super(props);
  }

  render () {
      return (
        <ul>
          {this.props.products.map((product) => (
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

export default CartProducts;