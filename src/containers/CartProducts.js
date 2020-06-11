import React, {Component} from 'react';
import CartProduct from '../components/CartProduct'

class CartProducts extends Component {
    render () {
        return (
          <ul>
            {this.props.products.map((product) => <CartProduct {...product} key={product.id} />)}
          </ul>
        );
    }
}

export default CartProducts;