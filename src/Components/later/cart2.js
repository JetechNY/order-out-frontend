import React from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { Button } from "semantic-ui-react";
import { useState } from "react";

import Fade from "react-reveal/Fade";

export default function Cart(props) {

  const [cartItems, setCartItems] = useState([]);
  // const [state, setState] = useState({ cartItems: [], count: 0})
  // const handleChange = (event) => {
  //     const {name, value } = event.target
  //     setState((prevState) => ({...prevState, [name]: value}))
  // }

  const handleAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const handleRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const checkout = (e) => {
    e.preventDefault();
    props.handleCheckout(e);
  };

  const renderCart = () => {
    const { menuItems } = props;

    return menuItems.map((item) => (
      <div className="cartcard">
        <ul className="cart-items">
          <Fade left cascade>
            <div key={item.id}>
              <div>
                <img src={item.img} alt={item.name}></img>
              </div>
              <div>
                <Button.Group>
                  <Button onClick={handleRemove(item)} className="remove">
                    -
                  </Button>
                  <Button>{count}</Button>
                  <Button onClick={handleAdd(item)} className="add">
                    +
                  </Button>
                </Button.Group>
              </div>
              <div>
                <div>{item.name}</div>
                <div className="price">
                  {formatCurrency(item.price)}
                  {/* x {item.count}{" "} */}
                  <button
                    //this just shows the item iteself times how many (how many currently not showing)
                    className="button primary"
                    onClick={() => props.removeFromCart(item)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        </ul>
      </div>
    ));
  };

  const { menuItems } = props;
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
          <ul className="cart-items">{renderCart()}</ul>
        </div>
        {menuItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  <strong>
                    Total:{" "}
                    {formatCurrency(
                      menuItems.reduce((a, b) => a + parseFloat(b.price), 0)
                      //this is the total cost at the bottom of cart.
                    )}
                  </strong>
                </div>
                <div className="note">
                  <div>
                    <form >
                      <input
                        type="text"
                        name="note"
                        placeholder="Add Order Note"
                        // value={""}
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
                  <form onSubmit={checkout}>
                    {/* <Link to={`/checkout`}> */}
                    <button className="button primary" type="submit">
                      Checkout
                    </button>
                    {/* </Link> */}
                  </form>
                </div>
              </div>
            </div>
            <div className="paypal-button">{/* <PayPalButton/> */}</div>
          </div>
        )}
      </div>
    </div>
  );
}
