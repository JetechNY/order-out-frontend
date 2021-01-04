import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1>Welcome to Order Out</h1>
        <a href="/restaurants">
          <img
            src={`https://www.seriouseats.com/images/2015/06/20150625-Fast-Food-Takeout-Favorites.jpg`}
          />
        </a>
        <p>Please find a restaurant and pick your items! </p>
      </div>
    );
  }
}

export default Home;
