import React from "react";
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import formatCurrency from "./util";
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';

class RestaurantCard extends React.Component {

    render() {
        return (
            <div>
                    <Fade bottom cascade>
                    <Link to={`/restaurants/${this.props.restObj.id}`}>
                        <div class="ui-link-cards">
                            <div class="card">
                                <div class="image">
                                    <img alt={this.props.restObj.name} src={this.props.restObj.image_url}/>
                                </div>
                                <div class="card-content">
                                    <div class="header">
                                        <strong >{this.props.restObj.name}</strong>
                                    </div>
                                    <div class="price">
                                        Price: {formatCurrency(this.props.restObj.price)}
                                    </div>
                                </div>
                                <div class="extra-content">
                                        <div class="cuisine">
                                        Cuisine: {this.props.restObj.categories}
                                        </div>
                                        <div class="rating">
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


