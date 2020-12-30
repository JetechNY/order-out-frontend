import React from "react";
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import StarRating from './StarRating'


class RestaurantCard extends React.Component {

    render() {
        return (
            <div>
                    <Fade bottom cascade>
                    <Link to={`/restaurants/${this.props.restObj.id}`}>
                        <div className="ui-link-cards">
                            <div className="card">
                                <div className="image">
                                    <img alt={this.props.restObj.name} src={this.props.restObj.image_url}/>
                                </div>
                                <div className="card-content">
                                    <div className="header">
                                        <strong style={{fontSize: 20}}> {this.props.restObj.name}</strong>
                                    </div>
                                    <div className="price">
                                        Price: {this.props.restObj.price}
                                    </div>
                                </div>
                                <div className="extra-content">
                                        <div className="cuisine">
                                        Cuisine: {this.props.restObj.categories}
                                        </div>
                                        <div className="rating">
                                            <div className = "stars-outer">
                                                <div className = "starts-inner"></div>
                                            </div>
                                            Rating: {this.props.restObj.rating}/100

                                            <span className = "number-rating">
                                            <StarRating key={this.props.restObj.id} rating={this.props.restObj.rating}/>
                                            </span>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </Fade>
                </div>
        );
    };
}

export default RestaurantCard;


