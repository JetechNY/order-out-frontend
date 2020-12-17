import React from "react";
import formatCurrency from "./util";


class MenuCard extends React.Component {

    state ={
        cartItems: []
    }

    // addToCart = (product) => {
    //     const cartItems = this.state.cartItems.slice();
    //     let alreadyInCart = false;
    //     cartItems.forEach((item) => {
    //         if (item.id === product.id) {
    //             item.count++;
    //             alreadyInCart = true;
    //         }
    //     });
    //     if (!alreadyInCart) {
    //         cartItems.push({ ...product, count: 1 });
    //     }
    //     this.setState({ cartItems });
    // };

    addToCart = (cartItem) => {
        this.props.addCart(cartItem)
        console.log("clicked", this.props.menuObj)
    }

    render() {
        return (
            <div className="card" key={this.props.menuObj.id} >
                <ul className='menu-items'>
                    <a href={"#" + this.props.menuObj.id}>
                        <img alt={this.props.menuObj.name} src={this.props.menuObj.img} />
                        <p> {this.props.menuObj.name}</p>
                        <p> {this.props.menuObj.description}</p>
                    </a>
                    <div className="product-price">
                        <div> Price: {formatCurrency(this.props.menuObj.price)} </div>
                        <button onClick={()=> this.addToCart(this.props.menuObj)} className="button primary" > Add to cart </button>
                    </div>

                </ul>
            </div>
        );
    };

}

export default MenuCard;
