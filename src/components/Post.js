import React, { Component } from "react";
import "../App.css";

import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";

import { thumbsUp } from "react-icons-kit/typicons/thumbsUp";

import { thumbsDown } from "react-icons-kit/typicons/thumbsDown";

class post extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <img
          src="https://i.imgur.com/RGeQ2He.png"
          style={{ height: "240px", width: "240px" }}
        />
        <div className="container-footer">
          <Icon
            icon={thumbsUp}
            style={{ padding: "0px 20px", outline: "none" }}
          />
          <Icon
            icon={thumbsDown}
            style={{ padding: "0px 20px", outline: "none" }}
          />

          <Icon
            icon={eye}
            style={{
              padding: "0px 20px",
              outline: "none"
              // marginLeft: "120px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default post;
