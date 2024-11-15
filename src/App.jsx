import React, { useState } from 'react';
import './App.css'
import './ProductList/jsx'
import './AddProductForm.jsx'

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Basketball', price: 60, description: `An icon with unmatched feel, no matter how many imitators come along. Walk into any gym and odds are you'll find people playing with a Wilson Evolution.` },
    { id: 2, name: 'Jersey', price: 130, description: `Take a step back in time to the 90's with the Cade Cunningham Swingman Jersey from Nike.` },
    { id: 3, name: 'Shoes', price: 120, description: `A unique rubber outsole is designed to generate traction where you need it most, so every hard-charging cut and head fake has total support.` },
    { id: 4, name: 'Compression Shorts', price: 30, description: `While preparing for the season, basketball compression shorts have your back. They're stretchy, comfy, and full of Sport Style.` },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, {...newProduct}]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;