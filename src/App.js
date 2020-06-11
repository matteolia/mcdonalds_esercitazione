import React, { useState } from "react";
import Discovery from "./containers/Discovery";
import Cart from "./containers/Cart";
import { products, cartProducts as defaultCartProduct } from "./defaultState";

function App() {
  const [cartProducts, setCartProducts] = useState(defaultCartProduct);

  const addProductToCart = (product) => {
    const prodottoConQuantita = { ...product, quantity: 1 };
    if (
      cartProducts.filter((elemento) => elemento.id === product.id).length == 0
    ) {
      setCartProducts([...cartProducts, prodottoConQuantita]);
    } else {
      const nuovoStato = cartProducts.map((prodottoNelCarrello) => {
        if (prodottoNelCarrello.id === product.id) {
          return {
            ...prodottoNelCarrello,
            quantity: prodottoNelCarrello.quantity + 1,
          };
        } else {
          return { ...prodottoNelCarrello };
        }
      });

      setCartProducts(nuovoStato);
    }
  };


  const incrementCartProductQuantity = (productId) => { 

      const nuovoStato = cartProducts.map(
        (product) => {
          if (productId === product.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return { ...product };
          }
        }
      );

      setCartProducts(nuovoStato);

  };

  const decrementCartProductQuantity = (productId) => { 
    const nuovoStato = cartProducts.map((product) => {
      if (productId === product.id && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1 };

      } else {
        return { ...product };
      }
    }).filter( product => product.quantity > 0);

    setCartProducts(nuovoStato);
  };

  return (
    <div className="App flex w-screen">
      <Discovery products={products} productClick={addProductToCart} />
      <Cart
        products={cartProducts}
        incrementCartProductQuantity={incrementCartProductQuantity}
        decrementCartProductQuantity={decrementCartProductQuantity}
      />
    </div>
  );
}

export default App;
