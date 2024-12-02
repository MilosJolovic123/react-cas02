import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import NavBar from './components/NavBar';
import Products from './components/Products';
import React, { useState } from 'react';
function App() {
  const [cartNum,setCartNum] = useState(0);
  //let cartNum=0;
  function onAdd(title){
   // cartNum++;
   setCartNum(cartNum+1); 
   console.log("Dodat proizvod iz App komponente:" +title);
  }

  function deleteProduct(title){
    if(cartNum==0)
      return;
    else{
      setCartNum(cartNum-1);
      console.log("Skinut je proizvod: "+title);
    }
  }
  const products = [
      {
        id:1,
        title:"Chocolate",
        description:"Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy!",
        amount:0
      },
      {
        id:2,
        title:"Lollypop",
        description:"Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
        amount:0,
      },
      {
        id:3,
        title:"Ice Cream",
        description:"Ice cream is a swwtened frozen food typically eaten as a snack or dessert."
      }
    ]

  return (
    <div className="App">
      
      <NavBar cartNum={cartNum}></NavBar>
      <Products products={products} onAdd={onAdd} onDelete={deleteProduct}></Products>
    </div>
  );
}

export default App;
