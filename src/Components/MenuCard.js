import React from "react";
import formatCurrency from "./util";


class MenuCard extends React.Component {

    handleAdd = (itemId) => {
        this.props.addToCart(itemId)
        console.log("add to cart pressed and sent", this.props.menuObj)
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
                        <button onClick={()=> this.handleAdd(this.props.menuObj.id)} className="button primary" > Add to cart </button>
                    </div>

                </ul>
            </div>
        );
    };

}

export default MenuCard;
