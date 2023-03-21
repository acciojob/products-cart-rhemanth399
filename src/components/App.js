

import './styles.css';
import React, { useState } from 'react';

const App = () => {
        

const products = [
  { id: 1, name: 'Samsung Galaxy Fold 4' },
  { id: 2, name: 'Iphone 14Pro'},
  { id: 3, name: 'Pixel5' },
  { id: 4, name: 'Mi note 6'},
  { id: 5, name: 'FireStick'},
  {id :6, name:'OnePlus Nord'}
];

  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  
  return (
    <div>
      <h2>Products</h2>
      <div className="container ">
        {products.map((product) => (
          <div key={product.id} className="item">
            <h3 >{product.name}</h3>
            
            <button className="displaybtn" onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      
      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="item">
              <h3 className="p-2">{item.name}</h3>
              
              <button  onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


   

export default App
