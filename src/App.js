import React, {useState} from 'react';
import Discovery from './containers/Discovery';
import Cart from './containers/Cart';
import { products, cartProducts as defaultCartProduct } from "./defaultState";

function App() {

  const [cartProducts, setCartProducts] = useState(defaultCartProduct)

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  }

  return (
    <div className="App flex w-screen">
      <Discovery products={products} />
      <Cart products={cartProducts} />
    </div>
  );
}

export default App;

