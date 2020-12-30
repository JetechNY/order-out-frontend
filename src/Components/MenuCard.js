import React from "react";
import formatCurrency from "./util";
import Modal from 'react-modal';
import Fade from 'react-reveal/Fade';

class MenuCard extends React.Component {

    handleAdd = (itemId) => {
        this.props.addToCart(itemId)
        console.log("add to cart pressed and sent", this.props.menuObj)
    }

    render() {
        return (
            <Fade up cascade>
                <div className="mcard" >
                    <ul className='menu-items'>
                        <a>
                            <img alt={this.props.menuObj.name} src={this.props.menuObj.img} />
                            <p> <strong style={{fontSize: 20}}> {this.props.menuObj.name} </strong> </p>
                            <p> {this.props.menuObj.description}</p>
                        </a>
                        <div className="product-price">
                            <div type="number" step="0.01"> Price: {formatCurrency(this.props.menuObj.price)} </div>
                            <div className="button">
                                <button
                                onClick={()=> this.handleAdd(this.props.menuObj)} className="button primary" > Add to cart
                                </button>

                            </div>
                        </div>

                    </ul>
                </div>
            </Fade>

        );
    };

}

export default MenuCard;
