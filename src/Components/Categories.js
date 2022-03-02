import React, { Component } from "react";

export default class Categories extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Categories</div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML</a>
                  </li>
                  <li>
                    <a href="#">Freebies</a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <a href="#">JavaScript</a>
                  </li>
                  <li>
                    <a href="#">CSS</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
