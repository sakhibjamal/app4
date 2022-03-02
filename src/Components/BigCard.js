import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class BigCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card mb-3">
        <img src={this.props.img} alt="picture" />
        <div className="card-body">
          <p className="text-secondary">{this.props.date}</p>
          <h2>{this.props.title}</h2>
          <h6 className="my-3">{this.props.text}</h6>
          <button className="btn btn-primary">
            Read more <span className="ms-2">&#10141;</span>
          </button>
        </div>
      </div>
    );
  }
}
