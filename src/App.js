import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';


const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var url = 'https://fakestoreapi.com/products?limit=3';

    fetch(url)
      .then((data) => {
          return data.json();
      })
      .then((response) => {
       setProducts(response)
     })

  }, []);

  return (
    <div>
      <header className="App-header">
      <p className='Titulo'>FakeStore</p>
      </header>
      <ul>
        {products.map((product) => (
          <li className='Productos' key={product.id}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price} Dolares</p>
            <div><img src={product.image} alt={product.title} style={{ maxWidth: '50px' }} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
