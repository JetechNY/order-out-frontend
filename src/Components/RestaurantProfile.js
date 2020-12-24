import React from "react";
import MenuContainer from '../Containers/MenuContainer'


class RestaurantProfile extends React.Component {

    render() {
        return (
            this.props.rest ?
                <>
            <div className="ui link cards" key={this.props.rest.id}>
                <div className="card">
                    <div className="image">
                        <img alt={this.props.rest.name} src={this.props.rest.image_url}/>
                    </div>
                    <div className="card-content">
                        <div className="header">
                            {this.props.rest.name}
                        </div>
                        <div className="description">
                            About: {this.props.rest.description}
                        </div>
                        <div className="address">
                            Address: {this.props.rest.location}
                        </div>
                        <div className="phone">
                            Phone: {this.props.rest.display_phone}
                        </div>
                    </div>
                    <div className="extra content">
                        <div className="rating">
                        Rating: {this.props.rest.rating}/100
                        </div>
                        <div className="photos">
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


