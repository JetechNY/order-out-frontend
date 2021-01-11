import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="welcome">
        <h1>Welcome to Trypto Fan!</h1>
        <Image
          as={Link}
          to="/restaurants"
          src={`https://www.seriouseats.com/images/2015/06/20150625-Fast-Food-Takeout-Favorites.jpg`}
        />
        <h3>Please find a restaurant and pick your items! </h3>
      </div>
    );
  }
}

export default Home;
