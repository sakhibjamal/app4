import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BigCard from "./Components/BigCard";
import Search from "./Components/Search";
import Categories from "./Components/Categories";
import SideWidgets from "./Components/SideWidgets";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row pt-4">
            <div className="col-8">
              <BigCard
                img="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                date="January 1, 2021"
                title="Featured Post Title"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!"
              />
              <div className="row">
                <div className="col-6">
                  <BigCard
                    img="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    date="February,26 2022"
                    title="Post Title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla."
                  />
                </div>
                <div className="col-6">
                  <BigCard
                    img="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    date="February,26 2022"
                    title="Post Title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla."
                  />
                </div>
                <div className="col-6">
                  <BigCard
                    img="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    date="February,26 2022"
                    title="Post Title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla."
                  />
                </div>
                <div className="col-6">
                  <BigCard
                    img="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                    date="February,26 2022"
                    title="Post Title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla."
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <Search />
              <Categories />
              <SideWidgets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
