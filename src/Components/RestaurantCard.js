import React from "react";
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import formatCurrency from "./util";


class RestaurantCard extends React.Component {

    render() {
        return (
            <div>
                <Link to={`/restaurants/${this.props.restObj.id}`}>
                    <div class="ui-link-cards">
                        <div class="card">
                            <div class="image">
                                <img alt={this.props.restObj.name} src={this.props.restObj.image_url}/>
                            </div>
                            <div class="content">
                                <div class="header">
                                    {this.props.restObj.name}
                                </div>
                                <div class="price">
                                    Price: {formatCurrency(this.props.restObj.price)}
                                </div>
                            </div>
                            <div class="extra-content">
                                <span class="right-floated">
                                    Cuisine: {this.props.restObj.categories}
                                    <br></br>
                                    Rating: {this.props.restObj.rating} /100
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    };
}

export default RestaurantCard;


