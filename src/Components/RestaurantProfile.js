import React from "react";
import MenuContainer from "../Containers/MenuContainer";
import StarRating from "./StarRating";

class RestaurantProfile extends React.Component {
  render() {
    console.log("rest props", this.props.rest)
    return this.props.rest ? (
      <div>
        <div className="card" key={this.props.rest.id}>
          <div className="image">
            <img alt={this.props.rest.name} src={this.props.rest.image_url} />
          </div>
          <div className="card-content">
            <div className="header">
              <strong style={{ fontSize: 20 }}>{this.props.rest.name}</strong>
            </div>
            <div className="description">
              About: {this.props.rest.description}
            </div>
            <div className="address">Address: {this.props.rest.location}</div>
            <div className="phone">Phone: {this.props.rest.display_phone}</div>
            <div className="rating">
              Rating:{" "}
              <StarRating
                key={this.props.rest.id}
                rating={this.props.rest.rating}
              />
            </div>
          </div>
        </div>
        <div>
          <MenuContainer
            itemsArray={this.props.rest.menu_items}
            addToCart={this.props.addToCart}
          />
        </div>
      </div>
    ) : (
      <h2> Loading Menus... </h2>

    );
  }
}

export default RestaurantProfile;
