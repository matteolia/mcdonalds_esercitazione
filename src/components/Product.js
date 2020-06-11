import React from "react";

export default (props) => {

    return (
      <li
        onClick={() => props.onClick(props.name)}
        className="block bg-gray-100 p-3 m-1 rounded-lg flex flex-col items-center justify-center text-center text-gray-900 hover:bg-red-700 hover:text-red-100 w-64"
      >
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
      </li>
    );
}