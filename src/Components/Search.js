import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Search</div>
          <div className="card-body">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter search term..."
              />
              <button className="btn btn-primary">Go</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
