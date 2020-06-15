import React, { useState } from "react";
import Discovery from "./containers/Discovery";
import Cart from "./containers/Cart";

function App() {
  return (
    <div className="App flex w-screen">
      <Discovery />
      <Cart />
    </div>
  );
}

export default App;
