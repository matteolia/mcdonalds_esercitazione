import React from "react";

export default function Stepper(props) {
    return (
      <div>
        <button
          onClick={props.subClick}
          className="font-bold border border-gray-600 text-gray-600 leading-none px-4 py-1 rounded-lg hover:border-yellow-500 hover:bg-yellow-500 hover:text-yellow-900"
        > - </button>
        <span className="px-6 font-bold"> {props.value} </span>
        <button
          onClick={props.addClick}
          className="font-bold border border-gray-600 text-gray-600 leading-none px-4 py-1 rounded-lg hover:border-yellow-500 hover:bg-yellow-500 hover:text-yellow-900"
        > + </button>
      </div>
    );
} 