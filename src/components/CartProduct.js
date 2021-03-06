import React, {Component} from 'react';
import Stepper from './Stepper';

class CartProduct extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <li className="block bg-white p-3 m-1 shadow-sm rounded flex flex-col items-center justify-center text-center text-gray-900">
        <img src={this.props.image} alt={this.props.name} />
        <h4 className="text-lg font-bold">{this.props.name}</h4>
        <div className="text-gray-600 font-bold">{this.props.price}</div>
        <Stepper
          value={this.props.quantity}
          subClick={() => this.props.decrementCartProductQuantity(this.props.id)}
          addClick={() => this.props.incrementCartProductQuantity(this.props.id)}
        />
      </li>
    );
  }
}

export default CartProduct;