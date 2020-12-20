import React from 'react'
import formatCurrency from "./util";
import { connect } from 'react-redux';
import {Link, Route, Switch, Redirect} from 'react-router-dom'


class Cart extends React.Component {

    handleCheckout = (e) => {
    e.preventDefault();

    this.props.handleCheckout(e);
};

render() {
    const { menuItems } = this.props;
    console.log("props", this.props)
    return (

    <div>
        {menuItems.length === 0 ? (
        <div className="cart cart-header">Your cart is empty</div>
        ) : (
        <div className="cart cart-header">
            You have {menuItems.length} in the cart{" "}
        </div>
        )}
        <div>
            <div className="cart">
                <ul className="cart-items">
                {menuItems.map((item) => (
                    <li key={item.id}>
                    <div>
                        <img src={item.img} alt={item.name}></img>
                    </div>
                    <div>
                        <div>{item.name}</div>
                        <div className="right">
                        {formatCurrency(item.price)}
                        {/* x {item.count}{" "} */}
                        <button
                        //this just shows the item iteself times how many (how many currently not showing)
                            className="button primary"
                            onClick={() => this.props.removeFromCart(item)}
                        >
                            Remove Item
                        </button>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        {menuItems.length !== 0 && (
            <div>
            <div className="cart">
                <div className="total">
                <div>
                    Total:{" "}
                    {formatCurrency(
                    menuItems.reduce((agg, c) => agg + c.price, 0)
                    //this is the total cost at the bottom of cart.
                    )}
                </div>
                <div className="note">
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <input type="text" name="note" placeholder="Add Order Note"
                            // value={""}
                            onChange={this.changeHandler}/>
                            <input className="button primary" type="submit" value="Add Note"/>
                        </form>
                    </div>
                </div>
                    <div>
                        <form onSubmit={this.handleCheckout}>
                            {/* <Link to={`/checkout`}> */}
                            <button className="button primary" type="submit">
                                Checkout
                            </button>
                            {/* </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )}
        </div>
    </div>
    );
}
}

export default Cart;
