import React from "react";
import MenuContainer from '../Containers/MenuContainer'


class RestaurantProfile extends React.Component {

    render() {
        return (
            this.props.rest ?
                <>
            <div class="ui link cards" key={this.props.rest.id}>
                <div class="card">
                    <div class="image">
                        <img alt={this.props.rest.name} src={this.props.rest.image_url}/>
                    </div>
                    <div class="card-content">
                        <div class="header">
                            {this.props.rest.name}
                        </div>
                        <div class="description">
                            About: {this.props.rest.description}
                        </div>
                        <div class="address">
                            Address: {this.props.rest.location}
                        </div>
                        <div class="phone">
                            Phone: {this.props.rest.display_phone}
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="rating">
                        Rating: {this.props.rest.rating}/100
                        </div>
                        <div class="photos">
                        Photos: {this.props.rest.photos}
                        </div>
                    </div>
                </div>
                <div>
                    <MenuContainer itemsArray={this.props.rest.menu_items}  addToCart={this.props.addToCart}/>
                </div>
            </div>
                </>
            :
            <h2> Loading </h2>
        );
    };
}

export default RestaurantProfile;


