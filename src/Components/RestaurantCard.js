import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import StarRating from "./StarRating";

class RestaurantCard extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/restaurants/${this.props.restObj.id}`}>
          <div className="ui-link-cards">
            <Fade down cascade>
              <div className="card">
                <div className="image">
                  <img
                    alt={this.props.restObj.name}
                    src={this.props.restObj.image_url}
                  />
                </div>
                <div className="card-content">
                  <div className="header">
                    <strong style={{ fontSize: 20 }}>
                      {" "}
                      {this.props.restObj.name}
                    </strong>
                  </div>
                  <div className="price">Price: {this.props.restObj.price}</div>
                </div>
                <div className="extra-content">
                  <div className="cuisine">
                    Cuisine: {this.props.restObj.categories}
                  </div>
                  <div className="rating">
                    <div className="stars-outer">
                      <div className="starts-inner"></div>
                    </div>
                    <span className="number-rating">
                      Rating:{" "}
                      <StarRating
                        key={this.props.restObj.id}
                        rating={this.props.restObj.rating}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Link>
      </div>
    );
  }
}

export default RestaurantCard;
