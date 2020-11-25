import axios from "axios";
import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      axios
        .get("http://jsonplaceholder.typicode.com/posts/" + this.props.id)
        .then((response) => {
          this.setState({ loadedPost: response.data });
        });
    }
  }

  render() {
    let post = <div>Please choose a post to read!</div>;
    if (this.props.id) {
      post = <div>Loading...</div>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>Content</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
