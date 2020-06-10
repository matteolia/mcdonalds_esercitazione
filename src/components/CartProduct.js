import React, {Component} from 'react';
import Stepper from './Stepper';

class CartProduct extends Component {
  constructor(props) {
    super(props);

    this.state = { quantity: this.props.quantity };

    this.sub = this.sub.bind(this);
    this.add = this.add.bind(this);
  }

  sub() {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1 });
    }
  }

  add() {
    this.setState({quantity: this.state.quantity + 1 });
  }

  render() {
    return (
      <li className="block bg-white p-3 m-1 shadow-sm rounded flex flex-col items-center justify-center text-center text-gray-900">
        <img src={this.props.image} alt={this.props.name} />
        <h4 className="text-lg font-bold">{this.props.name}</h4>
        <div className="text-gray-600 font-bold">{this.props.price}</div>
        <Stepper
          value={this.state.quantity}
          subClick={this.sub}
          addClick={this.add}
        />
      </li>
    );
  }
}

export default CartProduct;