import React from "react";
import formatCurrency from "./util";
import { connect } from "react-redux";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { Button, Form } from "semantic-ui-react";

import Fade from "react-reveal/Fade";

class Cart extends React.Component {
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

  successPayment = () => {};

  checkout = (e) => {
    e.preventDefault();

    this.props.handleCheckout(e);
  };

  renderCart = () => {
    const { menuItems } = this.props;

    return menuItems.map((item) => (
      <div className="cartcard">
        <ul className="cart-items">
          <Fade left cascade>
            <div key={item.id}>
              <div>
                <img src={item.img} alt={item.name}></img>
              </div>
              {/* <div>
                <Button.Group>
                  <Button onClick={this.handleMinus}>-</Button>
                  <Button>{this.state.count}</Button>
                  <Button onClick={this.handleAdd}>+</Button>
                </Button.Group>
              </div> */}
              <div>
                <div>{item.name}</div>
                <div className="price">
                  {formatCurrency(item.price)}
                  {/* x {item.count}{" "} */}
                  <Button onClick={() => this.props.removeFromCart(item)}>
                    Remove Item
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </ul>
      </div>
    ));
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
          {menuItems.length !== 0 && (
            <div>
              <div className="cart">
                <ul className="cart-items">{this.renderCart()}</ul>
              </div>
              <div className="cart-total">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      menuItems
                        .reduce((a, b) => a + parseFloat(b.price), 0)
                        .toFixed(2)
                      //this is the total cost at the bottom of cart.
                    )}
                  </div>
                  {/* <div className="note">
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
                  </div> */}
                  <div>
                    <Form onSubmit={this.checkout}>
                      <Button type="submit">Checkout</Button>
                    </Form>
                  </div>
                </div>
              </div>
              {/* <div className="paypal-button"><PayPalButton onSuccess={this.successPayment}/></div> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
