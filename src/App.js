import React from 'react';
import Discovery from './containers/Discovery';
import Cart from './containers/Cart';

function App() {

   const products = [
     {
       id: 1,
       name: "280™ Original",
       image: "https://www.mcdonalds.fr/image/layout_icon?img_id=319258",
       price: 12.22,
     },
     {
       id: 2,
       name: "LE McMUFFIN™ EGG & CHEESE",
       image: "https://www.mcdonalds.fr/image/layout_icon?img_id=572391",
       price: 8.12,
     },
     {
       id: 3,
       name: "LE McWRAP™ NEW YORK & POULET BACON",
       image: "https://www.mcdonalds.fr/image/layout_icon?img_id=305553",
       price: 4.33,
     },
   ];

  const cartProducts = [
    {
      id: 1,
      name: "big mac",
      image:
        "https://www.mcdonalds.fr/image/layout_icon?img_id=319258",
      price: 10.5,
      quantity: 2,
    },
    {
      id: 2,
      name: "coke",
      image:
        "https://www.mcdonalds.fr/image/layout_icon?img_id=572391",
      price: 4,
      quantity: 1,
    },
  ];


  return (
    <div className="App flex w-screen">
      <Discovery products={products} />
      <Cart products={cartProducts} />
    </div>
  );
}

export default App;
