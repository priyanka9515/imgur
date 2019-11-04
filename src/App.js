import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from './components/imageCard';
import Navbarr from './components/navbarr'

function App() {  
  return (
    <div className="App">
    <Navbarr/>
    <div className="block">
      <tr>
      <ImageCard title="YOOOO"  src="https://i.imgur.com/RGeQ2He.png" upvotes="2" comments="3" views ="6"/>
      <td>
      <ImageCard title="YOweweweO"  src="https://picsum.photos/200" upvotes="3" comments="2" views ="10"   />
      </td>
      <td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/jOf68sh.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/1pjaomv.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/pyU6DOI.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/NLwC0Zo.jpg" upvotes="3" comments="2" views ="10"   />
      </td>
      </tr>
      <tr>
      <td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/mQTddgd.jpg" upvotes="3" comments="2" views ="10"   />
      </td>
      <td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/t7DGyHB.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://picsum.photos/200" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/Dcbrkhx.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/zNZEamu.jpg" upvotes="3" comments="2" views ="10"   />
      </td><td>
      <ImageCard title="YOweweweO"  src="https://i.imgur.com/kSXA1q4.jpg" upvotes="3" comments="2" views ="10"   />
      </td>
      </tr>
      </div>
      </div>
  );
}

export default App;
