import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import StarRating from "./StarRating";
import { Button } from "semantic-ui-react";


class RestaurantCard extends React.Component {

  state = {
    isStarred: false
}

handleStarCard = () => {

  fetch(`http://localhost:3000/api/v1/favorites`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({...this.props.card, is_starred: !this.state.isStarred})
      })
      .then(resp => resp.json())
      .then(card => {this.setState({isStarred: card.is_starred})})
      .catch(err => console.log(err))

}

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

              {/* <Button onClick={this.handleStarCard}>{this.state.isStarred ? <i className="star icon" />: <i className="star outline icon" />}</Button> */}

                </div>
                <div className="card-content">
                  <div className="header">
                    <strong style={{ fontSize: 20 }}>
                      {" "}
                      {this.props.restObj.name}
                    </strong>
                  </div>
                  <div className="price">Price range: {this.props.restObj.price}</div>
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
