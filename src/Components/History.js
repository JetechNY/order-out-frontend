import React, { Component } from "react";
import formatCurrency from "./util";

export default class History extends Component {
  renderItems = (menu_items) => {
    // console.log("menuitems", menu_items)
    return menu_items.map((item, i) => {
      // console.log("item",item)
      return (
        <div className="hmcard" key={i}>
          <ul className="menu-items">
            <a>
              <img alt={item.name} src={item.img} />
              <p> {item.name}</p>
            </a>
            <div className="product-price">
              <div> Price: {formatCurrency(item.price)}</div>
            </div>
          </ul>
        </div>
      );
    });
  };

  renderOldCart = () => {
    // console.log("history",this.props.pastOrders)
    // console.log("cartsitems", carts.menu_items)
    return this.props.pastOrders.map((carts) => {
      return (
        <div>
          <p> Cart #: {carts.id} </p>
          <div>
            Total:{" "}
            {formatCurrency(
              carts.menu_items.reduce((a, b) => a + parseFloat(b.price), 0)
              //this is the total cost at the bottom of cart.
            )}
          </div>
          {this.renderItems(carts.menu_items)}
          <hr></hr>
        </div>
      );
    });
  };

  render() {
    // console.log("old cart", this.props.pastOrders)
    return (
      <div className="history">
        <p>Your Order History</p>
        <div className="menuindex">{this.renderOldCart()}</div>
      </div>
    );
  }
}
