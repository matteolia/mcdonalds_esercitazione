import React, {Component} from 'react';
import CartProduct from '../components/CartProduct'

class CartProducts extends Component {
    render () {
        return (
          <ul>
            {this.props.products.map((product) => <CartProduct {...product} />)}
          </ul>
        );
    }
}

export default CartProducts;