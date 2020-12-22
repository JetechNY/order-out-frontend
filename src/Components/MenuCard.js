import React from "react";
import formatCurrency from "./util";
import Modal from 'react-modal';

class MenuCard extends React.Component {

    handleAdd = (itemId) => {
        this.props.addToCart(itemId)
        console.log("add to cart pressed and sent", this.props.menuObj)
    }

    render() {
        return (
            <div className="mcard" >
                <ul className='menu-items'>
                    <a>
                        <img alt={this.props.menuObj.name} src={this.props.menuObj.img} />
                        <p> {this.props.menuObj.name}</p>
                        <p> {this.props.menuObj.description}</p>
                    </a>
                    <div className="product-price">
                        <div> Price: {formatCurrency(this.props.menuObj.price)} </div>
                        <div className="button">
                            <button
                            onClick={()=> this.handleAdd(this.props.menuObj)} className="button primary" > Add to cart
                            </button>

                        </div>
                    </div>

                </ul>
            </div>
        );
    };

}

export default MenuCard;
