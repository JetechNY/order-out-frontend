import React from "react";
import formatCurrency from "./util";
import { Button, Form } from "semantic-ui-react";
import Fade from "react-reveal/Fade";

class Cart extends React.Component {
  checkout = (e) => {
    e.preventDefault();
    this.props.handleCheckout(e);
  };

  renderCartItems = () => {
    const { menuItems } = this.props;

    return menuItems.map((item) => (
      <div className="cartcard">
        <ul className="cart-items">
          <Fade left cascade>
            <div key={item.id}>
              <div>
                <img src={item.img} alt={item.name}></img>
              </div>
              <div>
                <div>{item.name}</div>
                <div className="price">
                  {formatCurrency(item.price)}
                  {/* x {item.count}{" "} */}
                  <Button
                    floated="right"
                    style={{ backgroundColor: "#f0c040" }}
                    onClick={() => this.props.removeFromCart(item)}
                  >
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
                <ul className="cart-items">{this.renderCartItems()}</ul>
              </div>
              <div className="cart-total">
                <div className="total">
                  <h4>
                    Total:{" "}
                    {formatCurrency(
                      menuItems
                        .reduce((a, b) => a + parseFloat(b.price), 0)
                        .toFixed(2)
                    )}
                  </h4>
                  <div>
                    <Form>
                      <Button
                        style={{ backgroundColor: "#f0c040" }}
                        type="submit"
                        href="/checkout-page"
                      >
                        Proceed to Checkout Page
                      </Button>
                    </Form>
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
