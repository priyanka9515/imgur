import React, { Component } from "react";
import "../App.css";
import Post from "./Post";
// import logo from "logo.svg";
// import imageCard from "./components/imageCard";
// import ImageCard from "./imageCard";
let images = ["wood", "lake", "sun", "moon", "sea", "sand", "site", "abc"];
class body extends Component {
  render() {
    return (
      <div className="container">
        {images.map((img, i) => {
          return <Post title={img} key={i} />;
        })}
      </div>
    );
  }
}

export default body;
