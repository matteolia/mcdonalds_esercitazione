import React, { useState } from "react";

export default (props) => {

    const [clicks, setClicks] = useState(0);

    const aggiungiClick = () => setClicks(clicks + 1);


    return (
      <li
        onClick={aggiungiClick}
        onDoubleClick={() => setClicks(0)}
        className="block bg-gray-100 p-3 m-1 rounded-lg flex flex-col items-center justify-center text-center text-gray-900 hover:bg-red-700 hover:text-red-100 w-64"
      >
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <div>Cliccato {clicks} volte</div>
      </li>
    );
}