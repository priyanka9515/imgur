import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './components/imageCard';
import navbarr from './components/navbarr'

function App() {
  return (
    <div className="App">
    <navbarr/>
      <tr>
      <ImageCard title="YOOOO"  src="https://i.imgur.com/RGeQ2He.png" upvotes="2" comments="3" views ="6"/>
      <td>
      <ImageCard title="YOweweweO"  src="https://picsum.photos/200" upvotes="3" comments="2" views ="10"   />
      </td>
      </tr>

      </div>
  );
}

export default App;
