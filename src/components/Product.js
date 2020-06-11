import React from "react";

export default (props) => {

    return (
      <li
        onClick={() => props.productClick(props.product)}
        className="block bg-gray-100 p-3 m-1 rounded-lg flex flex-col items-center justify-center text-center text-gray-900 hover:bg-red-700 hover:text-red-100 w-64"
      >
        <img src={props.product.image} alt={props.product.name} />
        <h4>{props.product.name}</h4>
      </li>
    );
}