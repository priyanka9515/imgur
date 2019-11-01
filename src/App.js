import React from 'react';
import './App.css';
import Body from "./components/Body";
// import logo from './logo.svg';

import Navbarr from "./components/Navbarr.js";
import Foo from "./components/Foo";
  

function App(){
    return (
        <div className = 'App'>
            <Navbarr />
             <Body />
            <Foo /> 
        </div>
    )
}


export default App;


       