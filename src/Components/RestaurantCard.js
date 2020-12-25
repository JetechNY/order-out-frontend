import React from "react";
import {Link} from 'react-router-dom'
import formatCurrency from "./util";
import Fade from 'react-reveal/Fade'


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
                                        <strong >{this.props.restObj.name}</strong>
                                    </div>
                                    <div className="price">
                                        Price: {formatCurrency(this.props.restObj.price)}
                                    </div>
                                </div>
                                <div className="extra-content">
                                        <div className="cuisine">
                                        Cuisine: {this.props.restObj.categories}
                                        </div>
                                        <div className="rating">
                                        Rating: {this.props.restObj.rating}/100
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


