import React from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { Button } from "semantic-ui-react";

import Fade from "react-reveal/Fade";
import CartCard from "../Components/CartCard";

class CartContainer extends React.Component {

  state = {
    count: 1,
  };

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleMinus = () => {
    return this.state.count === 0
      ? null
      : this.setState({ count: this.state.count - 1 });
  };

  checkout = (e) => {
    e.preventDefault();
    this.props.handleCheckout(e);
  };

  render() {
    const { menuItems } = this.props;
    // console.log("props", this.props)
    return (
      <div>
        {menuItems.length === 0 ? (
          <div className="cart cart-header">Your cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {menuItems.length} items in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              <CartCard menuItems={menuItems} handleAdd={this.handleAdd} handleMinus={this.handleMinus}  />
            </ul>
          </div>
          {menuItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      menuItems.reduce((a, b) => a + parseFloat(b.price), 0)
                      //this is the total cost at the bottom of cart.
                    )}
                  </div>
                  <div className="note">
                    <div>
                      <form onSubmit={this.submitHandler}>
                        <input
                          type="text"
                          name="note"
                          placeholder="Add Order Note"
                          value={``}
                          onChange={this.changeHandler}
                        />
                        <input
                          className="button primary"
                          type="submit"
                          value="Add Note"
                        />
                      </form>
                    </div>
                  </div>
                  <div>
                    <form onSubmit={this.checkout}>
                      {/* <Link to={`/checkout`}> */}
                      <button className="button primary" type="submit">
                        Checkout
                      </button>
                      {/* </Link> */}
                    </form>
                  </div>
                </div>
              </div>
              <div className="paypal-button"><PayPalButton/></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CartContainer;
