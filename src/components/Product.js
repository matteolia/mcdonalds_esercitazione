import React, {Component} from "react";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    return (
      <li className="block bg-gray-100 p-3 m-1 rounded-lg flex flex-col items-center justify-center text-center text-gray-900 hover:bg-red-700 hover:text-red-100 w-64">
        <img src={this.props.image} alt={this.props.name} />
        <h4>{this.props.name}</h4>
      </li>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default Product;